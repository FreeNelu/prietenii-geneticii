import React from 'react'
import { useStyles } from './Header.styles'
import { AppBar, Box, Toolbar, IconButton, Typography, Container, Button, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LogoIcon from '../Icons/LogoIcon'
import TopDrawer from 'Components/Drawer/TopDrawer'
import DonateButton from 'Components/DonateButton/DonateButton'
import { Link } from 'react-router-dom'

interface HeaderProps {
  className?: string
}

function Header (props: HeaderProps) {
  const { className } = props
  const [navMenuOpen, setNavMenuOpen] = React.useState(false)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const { classes, cx } = useStyles()

  const drawerData = [{ title: 'ABOUT', link: 'about' }, { title: 'BLOG', link: 'blog' }, { title: 'HOME', link: '/' }]

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNavMenuOpen(true)
  }

  const handleCloseNavMenu = () => {
    setNavMenuOpen(false)
  }

  const LogoWithText = (
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
          <span className={classes.LogoText2}>GENETICII</span>
      </Typography>
    </div>
  )

  return (
        <AppBar position="static" color='transparent' className={cx(classes.AppBar, className)}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {LogoWithText}

                    <Box className={classes.RightBox} sx={{
                      display: {
                        xs: 'none', md: 'flex'
                      }
                    }}>
                      <Link to={'/about'} className={classes.Link}>
                          <Button
                            onClick={handleCloseNavMenu}
                            className={classes.PageButton}
                          >
                            <Typography variant='h6'>About</Typography>
                          </Button>
                        </Link>
                        <Link to={'/blog'} className={classes.Link}>
                          <Button
                            onClick={handleCloseNavMenu}
                            className={classes.PageButton}
                          >
                            <Typography variant='h6'>Blog</Typography>
                          </Button>
                        </Link>
                        <Link to={'/donate'} className={classes.Link}>
                          <DonateButton onClick={handleCloseNavMenu}/>
                        </Link>
                    </Box>

                    <Box className={isMobile ? classes.RightBox : ''} sx={{
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
                          title="Menu"
                      >
                        <MenuIcon className={classes.MenuIcon} />
                      </IconButton>
                      <TopDrawer open={navMenuOpen} onClose={handleCloseNavMenu} drawerData={drawerData} isMobile={isMobile}/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
  )
}

export default Header
