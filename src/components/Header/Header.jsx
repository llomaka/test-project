import { Toolbar, Typography } from '@mui/material';

export default function AppBar() {
    return (
        <>
            <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
                <Typography sx={{
                    fontFamily: "'Abril Fatface', cursive",
                    fontSize: 20
                }}>
                    BR
                </Typography>
            </Toolbar>
        </>
    );
}