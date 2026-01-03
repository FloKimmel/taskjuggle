import { Alert, Button, Paper, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import { useAuthContext } from '../contexts/auth';
import { useNavigate } from 'react-router';
import { routes } from '../router';
import { FirebaseError } from 'firebase/app';
import { useState } from 'react';

type LoginFormValues = { email: string; password: string };
type SignInError = { message: string; severity: 'error' | 'info' };

const userErrorCodes = ['auth/wrong-password', 'auth/invalid-credential', 'auth/user-not-found'];

export function Login() {
  const navigate = useNavigate();
  const { signIn } = useAuthContext();
  const [signInError, setSignInError] = useState<SignInError | null>(null);

  return (
    <Paper elevation={2} sx={{ padding: 4, maxWidth: 400, margin: '0 auto' }}>
      <Typography variant='h4' gutterBottom>
        Login
      </Typography>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values: LoginFormValues) => {
          const errors: Partial<LoginFormValues> = {};
          if (!values.email) {
            errors.email = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          return errors;
        }}
        onSubmit={async (values: LoginFormValues) => {
          setSignInError(null);
          try {
            await signIn(values.email, values.password);
            navigate(routes.home);
          } catch (error) {
            if (error instanceof FirebaseError && userErrorCodes.includes(error.code)) {
              setSignInError({ message: 'Incorrect username or password.', severity: 'info' });
              return;
            }
            setSignInError({ message: 'An unexpected error occurred. Please try again later.', severity: 'error' });
          }
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, touched, errors, isSubmitting }) => (
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField
              id='username'
              label='Username'
              variant='outlined'
              fullWidth
              margin='normal'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              id='password'
              label='Password'
              type='password'
              variant='outlined'
              fullWidth
              margin='normal'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            {signInError && (
              <Alert severity={signInError.severity} sx={{ mb: 2, mt: 1 }}>
                {signInError.message}
              </Alert>
            )}
            <Button type='submit' variant='contained' color='primary' fullWidth loading={isSubmitting}>
              Login
            </Button>
          </form>
        )}
      </Formik>
    </Paper>
  );
}
