import React from 'react';
import { useStyles } from './Header.styles'
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoIcon from '../Icons/LogoIcon'

const pages = ['About us', 'News'];

type HeaderProps = {
    className?: string;
};

function Header(props: HeaderProps) {
    const { className } = props;
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const { classes, cx } = useStyles();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" color='transparent' className={cx(classes.AppBar, className)}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <div className={classes.Logo}>
                        <LogoIcon height={96} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            className={classes.LogoText}
                        >
                            PRIETENII
                            <br />
                            GENETICII
                        </Typography>
                    </div>

                    <Box className={classes.RightBox} sx={{
                        display: {
                            xs: 'none', md: 'flex'
                        }
                    }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    borderRadius: 6,
                                }}
                                className={classes.PageButton}
                            >
                                {page}
                            </Button>
                        ))
                        }
                        <Button
                            key={"Donate"}
                            onClick={handleCloseNavMenu}
                            sx={{
                                my: 2,
                                borderRadius: 6,
                            }}
                            className={classes.DonateButton}
                        >
                            {"Donate"}
                        </Button>
                    </Box>
                    <Box className={classes.RightBox} sx={{
                        display: {
                            xs: 'flex', md: 'none'
                        }
                    }}>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon className={classes.MenuIcon} />
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
                                <Typography className={classes.DropdownTextHighlight} textAlign="center">{"Donate"}</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}

export default Header;

