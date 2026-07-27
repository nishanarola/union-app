import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AuthLayout from './AuthLayout';
import { validateEmail, validatePassword } from '../utils/validation';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'error' });

  const runValidation = (field, value) => {
    if (field === 'email') return validateEmail(value);
    if (field === 'password') return validatePassword(value);
    return '';
  };

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: runValidation(field, value) }));
    }
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: runValidation(field, form[field]) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailError = validateEmail(form.email);
    const passwordError = validatePassword(form.password);
    setErrors({ email: emailError, password: passwordError });
    setTouched({ email: true, password: true });

    if (emailError || passwordError) {
      setSnackbar({ open: true, message: 'Please fix the highlighted fields.', severity: 'error' });
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem('union_user') || 'null');
    if (!storedUser || storedUser.email !== form.email) {
      setSnackbar({ open: true, message: 'No account found for that email yet — try signing up.', severity: 'error' });
      return;
    }
    if (storedUser.password !== form.password) {
      setSnackbar({ open: true, message: 'Incorrect password.', severity: 'error' });
      return;
    }

    setSnackbar({ open: true, message: 'Welcome back!', severity: 'success' });
    navigate('/dashboard');
  };

  return (
    <AuthLayout
      eyebrow="Welcome back"
      title="Log in to Union"
      subtitle="Pick up your mock interviews, study sets, and resume drafts right where you left them."
    >
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={2.5}>
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
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={form.password}
            onChange={handleChange('password')}
            onBlur={handleBlur('password')}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password ? errors.password : ' '}
          />
          <Button type="submit" variant="contained" color="secondary" size="large">
            Log in
          </Button>
          <Box sx={{ textAlign: 'center' }}>
            <Link component={RouterLink} to="/signup" underline="hover">
              New to Union? Create an account
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
