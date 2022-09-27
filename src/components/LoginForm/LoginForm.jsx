import { useState } from 'react';
import { Box, Button, TextField, Typography } from "@mui/material";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = event => {
        const { name, value } = event.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            default:
                setPassword(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmail('');
        setPassword('');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '400px', mx: 'auto' }}>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    type='text'
                    label='email'
                    name='email'
                    autoFocus
                    value={email}
                    onChange={handleChange}
                />
                <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='password'
                    type='password'
                    label='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                />
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}
                >
                    Увійти
                </Button>
            </Box>
        </Box>
    );
}