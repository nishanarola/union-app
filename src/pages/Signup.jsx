import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AuthLayout from './AuthLayout';
import { tokens } from '../theme';
import {
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  getPasswordStrength
} from '../utils/validation';

const STRENGTH_LABELS = ['Too weak', 'Weak', 'Okay', 'Good', 'Strong'];
const STRENGTH_COLORS = [tokens.pen, tokens.pen, tokens.highlighter, '#7EA8BE', tokens.success];

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [touched, setTouched] = useState({ name: false, email: false, password: false, confirmPassword: false });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'error' });

  const strength = getPasswordStrength(form.password);

  const runValidation = (field, value, currentForm) => {
    switch (field) {
      case 'name':
        return validateName(value);
      case 'email':
        return validateEmail(value);
      case 'password':
        return validatePassword(value);
      case 'confirmPassword':
        return validateConfirmPassword(currentForm.password, value);
      default:
        return '';
    }
  };

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    const nextForm = { ...form, [field]: value };
    setForm(nextForm);
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: runValidation(field, value, nextForm) }));
    }
    // Keep confirm-password in sync if password changes after it was touched
    if (field === 'password' && touched.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: validateConfirmPassword(value, nextForm.confirmPassword)
      }));
    }
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: runValidation(field, form[field], form) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      password: validatePassword(form.password),
      confirmPassword: validateConfirmPassword(form.password, form.confirmPassword)
    };
    setErrors(nextErrors);
    setTouched({ name: true, email: true, password: true, confirmPassword: true });

    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) {
      setSnackbar({ open: true, message: 'Please fix the highlighted fields.', severity: 'error' });
      return;
    }

    // Day 2 owns the "real" mock-database wiring into localStorage.
    // Storing here too so Login already has something to authenticate against.
    localStorage.setItem(
      'union_user',
      JSON.stringify({ name: form.name, email: form.email, password: form.password })
    );

    setSnackbar({ open: true, message: 'Account created — welcome to Union!', severity: 'success' });
    navigate('/login');
  };

  return (
    <AuthLayout
      eyebrow="Get started"
      title="Create your Union account"
      subtitle="One account for mock interviews, exam prep, and resume feedback."
    >
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={2.5}>
          <TextField
            label="Full name"
            fullWidth
            value={form.name}
            onChange={handleChange('name')}
            onBlur={handleBlur('name')}
            error={Boolean(touched.name && errors.name)}
            helperText={touched.name && errors.name ? errors.name : ' '}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={form.email}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email ? errors.email : ' '}
          />
          <Box>
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={form.password}
              onChange={handleChange('password')}
              onBlur={handleBlur('password')}
              error={Boolean(touched.password && errors.password)}
              helperText={
                touched.password && errors.password
                  ? errors.password
                  : 'At least 8 characters, including a number.'
              }
            />
            {form.password && (
              <Box sx={{ mt: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={(strength / 4) * 100}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    bgcolor: '#E9E2CF',
                    '& .MuiLinearProgress-bar': { bgcolor: STRENGTH_COLORS[strength] }
                  }}
                />
                <Typography variant="caption" sx={{ color: tokens.graphite }}>
                  {STRENGTH_LABELS[strength]}
                </Typography>
              </Box>
            )}
          </Box>
          <TextField
            label="Confirm password"
            type="password"
            fullWidth
            value={form.confirmPassword}
            onChange={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            error={Boolean(touched.confirmPassword && errors.confirmPassword)}
            helperText={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : ' '}
          />
          <Button type="submit" variant="contained" color="secondary" size="large">
            Create account
          </Button>
          <Box sx={{ textAlign: 'center' }}>
            <Link component={RouterLink} to="/login" underline="hover">
              Already have an account? Log in
            </Link>
          </Box>
        </Stack>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3500}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snackbar.severity} variant="filled" sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </AuthLayout>
  );
}
