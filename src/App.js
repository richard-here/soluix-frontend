import './styles/style.css';
import { Routes, Route } from 'react-router-dom';
import { React, useState } from 'react';
import {
  ThemeProvider, IconButton, AppBar,
  Toolbar, Typography, Drawer, List, ListItem,
  ListItemButton, ListItemIcon, ListItemText, Box, Stack, CssBaseline,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import MenuIcon from '@mui/icons-material/Menu';
import HomePage from './pages/HomePage';
import theme from './themes/Theme';
import NotFoundPage from './pages/NotFoundPage';

const drawerWidth = 240;

const drawer = (
  <div>
    <Toolbar />
    <Box sx={{ overflow: 'auto' }}>
      <List>
        {['Home', 'Product Master'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <HomeIcon /> : <CategoryIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  </div>
);

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', height: '100vh' }} className="app-container">
        <CssBaseline />
        <AppBar elevation={0} sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)', zIndex: (appTheme) => appTheme.zIndex.drawer + 1 }}>
          <Toolbar sx={{ backgroundColor: 'white', color: 'black' }}>
            <IconButton
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: {
                  sm: 'block', md: 'none', lg: 'none', xl: 'none',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Stack sx={{ flexGrow: 1 }} direction="row" alignItems="center">
              <Box
                sx={{ flexGrow: 1, maxWidth: 50 }}
                component="img"
                alt="Inovasi Digitel Ritel"
                src="https://media.licdn.com/dms/image/C4D0BAQH2PNhTahgnnA/company-logo_200_200/0/1618384814248?e=2147483647&v=beta&t=-PF4di0aDTArdJNlO8YDiaoL8pVJgXC_nvLGNZNT7QI"
              />
              <Typography variant="h1" sx={{ fontSize: '1.5em', fontWeight: 'bold', color: '#ca373c' }}>Inovasi Digital Ritel</Typography>
            </Stack>
            <Stack>
              <Typography sx={{ fontWeight: 'bold' }} variant="body1">Hi, Budi</Typography>
              <Typography variant="caption">Administrator</Typography>
            </Stack>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: {
              sm: 'block', md: 'none', lg: 'none', xl: 'none',
            },
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: {
              xss: 'none', xs: 'none', sm: 'none', md: 'block',
            },
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          {drawer}
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, overflow: 'auto', display: 'flex' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
