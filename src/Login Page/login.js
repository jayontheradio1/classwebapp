import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { TextField, Button, Paper, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0055a4', // University color theme
    },
    secondary: {
      main: '#ffd100', // Accent color
    },
  },
});

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      console.log('Login successful');
      localStorage.setItem('token', response.data.token);
      navigate("/home");
    } catch (error) {
      console.error('Login error', error.response.data);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Paper elevation={6} style={{ marginTop: '100px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5" style={{ marginBottom: '20px' }}>
            Student Portal Login
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" fullWidth variant="contained" color="primary" style={{ margin: '30px 0' }}>
              Sign In
            </Button>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
