import React from 'react';
import './Header.scss';
import '../../Theme/colors.scss';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoIcon from '../CustomIcons/LogoIcon'

const pages = ['About us', 'News'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" color='transparent' sx={{ boxShadow: "none" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <div className="Logo">
                        <LogoIcon height={96} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: '#E03D8C',
                                textDecoration: 'none',
                                lineHeight: 1,
                                pointerEvents: 'none'
                            }}
                        >
                            Prietenii
                            <br />
                            Geneticii
                        </Typography>
                    </div>

                    <Box sx={{
                        flexGrow: 1, display: {
                            xs: 'none', md: 'flex', justifyContent: "flex-end"
                        }
                    }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "#01B5E3", fontSize: 16, marginRight: 2, borderRadius: 6 }}
                            >
                                {page}
                            </Button>
                        ))
                        }
                        <Button
                            key={"Donate"}
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2, color: "white", fontSize: 16, backgroundColor: "#69C441", padding: "8px 12px", borderRadius: 6,
                                ':hover': {
                                    bgcolor: '#60b43b',
                                },
                            }}
                        >
                            {"Donate"}
                        </Button>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: "flex-end" } }}>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ fontSize: "2rem" }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                            <MenuItem key={"Donate"} onClick={handleCloseNavMenu}>
                                <Typography sx={{ color: "#69C441" }} textAlign="center">{"Donate"}</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}

export default Header;

