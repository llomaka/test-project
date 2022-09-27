import { Typography, Box } from "@mui/material";
import bgImageMobile from './login-background.webp';

export default function Login() {
    return (
        <Box sx={{ background: `center / contain no-repeat url(${bgImageMobile})`, height: 648 }}>
            <Box sx={{background: 'rgba(9, 30, 63, 0.8)', height: 648}}>
                <Typography>Книги – кораблі думки, які плавають хвилями часу і несуть свій дорогоцінний вантаж від покоління до покоління.</Typography>
                <Typography>Френсіс Бекон</Typography>
            </Box>
        </Box>
    );
}