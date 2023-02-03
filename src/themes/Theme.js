import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2966c4',
      contrastText: '#fff',
    },
  },
  breakpoints: {
    values: {
      xss: 0,
      xs: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontSize: 14,
  },
});

theme.typography.h1 = {
  fontSize: '1.5em',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2em',
  },
};

theme.typography.h2 = {
  fontSize: '1.5em',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2em',
  },
};

theme.typography.caption = {
  fontSize: '0.8em',
  color: 'grey',
};

export default theme;
