import React from 'react'
import { useStyles } from './Header.styles'
import { AppBar, Box, Toolbar, IconButton, Typography, Container, Button, List, ListItem, Popover, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LogoIcon from '../Icons/LogoIcon'

interface HeaderProps {
  className?: string
}

function Header (props: HeaderProps) {
  const { className } = props
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const { classes, cx } = useStyles()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const MenuList = () => (
        <List
            className={classes.Menu}
            role="presentation"
            onClick={handleCloseNavMenu}
            onKeyDown={handleCloseNavMenu}>
            <ListItem className={cx(classes.MenuItem, classes.MenuItemPink)}
                sx={{ borderTopLeftRadius: '36px', borderTopRightRadius: '36px' }}>
                <Typography>About us</Typography>
            </ListItem>
            <ListItem className={cx(classes.MenuItem, classes.MenuItemBlue)}>
                <Typography>Publications</Typography>
            </ListItem>
            <ListItem className={cx(classes.MenuItem, classes.MenuItemGreen)}
                sx={{ borderBottomLeftRadius: '32px', borderBottomRightRadius: '32px' }}>
                <Typography>Donate now</Typography>
            </ListItem>
        </List >
  )

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
                        <Button
                          key={'About'}
                          onClick={handleCloseNavMenu}
                          sx={{
                            my: 2,
                            borderRadius: 6
                          }}
                          className={classes.PageButton}
                        >
                          About
                        </Button>
                        <Button
                          key={'Publications'}
                          onClick={handleCloseNavMenu}
                          sx={{
                            my: 2,
                            borderRadius: 6
                          }}
                          className={classes.PageButton}
                        >
                          Publications
                        </Button>
                        <Button
                          key={'Donate'}
                          onClick={handleCloseNavMenu}
                          sx={{
                            my: 2,
                            borderRadius: 6
                          }}
                          className={classes.DonateButton}
                        >
                          Donate now
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
                        <Popover
                            open={Boolean(anchorElNav) && isMobile}
                            anchorEl={anchorElNav}
                            onClose={handleCloseNavMenu}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'center'
                            }}
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'center'
                            }}
                            PaperProps={{
                              sx: {
                                borderRadius: '42px'
                              }
                            }}
                        >
                            <MenuList />
                        </Popover>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
  )
}

export default Header
