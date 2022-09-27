import { Suspense } from 'react';
import { Container, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

export default function SharedLayout() {
    return (
        <>
            <header>
                <Container maxWidth='lg'>
                    <Header />
                </Container>
            </header>
            <main>
                <Container maxWidth='lg'>
                    <Suspense fallback={<Typography variant='h2' align='center'>Loading Interface...</Typography>}>
                        <Outlet />
                    </Suspense>
                </Container>
            </main>
        </>
    );
}
