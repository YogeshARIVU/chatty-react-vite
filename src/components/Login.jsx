

import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper, Link } from '@mui/material';
import { login } from '../services/api';
import { saveToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const token = await login({ username, password });
            saveToken(token);
            nav('/chat');
        } catch (e) {
            alert('Login failed');
        }
    };

    return (
        <Box display="flex" height="100vh" alignItems="center" justifyContent="center" bgcolor="#000">
            <Paper sx={{ p: 4, bgcolor: '#222', color: '#fff' }}>
                <Typography variant="h5" mb={2}>ChatApp Login</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Username"
                        margin="normal"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        InputProps={{ style: { color: 'white' } }}
                        InputLabelProps={{ style: { color: '#aaa' } }}
                    />
                    <TextField
                        fullWidth
                        type="password"
                        label="Password"
                        margin="normal"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        InputProps={{ style: { color: 'white' } }}
                        InputLabelProps={{ style: { color: '#aaa' } }}
                    />
                    <Button type="submit" variant="contained" sx={{ mt: 2 }} fullWidth>
                        Log In
                    </Button>
                </form>
                <Typography variant="body2" mt={2} textAlign="center">
                    Don't have an account?{' '}
                    <Link href="/register" underline="hover" color="primary">
                        Register
                    </Link>
                </Typography>
            </Paper>
        </Box>
    );
}
