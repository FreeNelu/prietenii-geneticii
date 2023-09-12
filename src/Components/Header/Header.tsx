import React from 'react'
import { useStyles } from './Header.styles'
import { AppBar, Box, Toolbar, IconButton, Typography, Container, Button, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LogoIcon from '../Icons/LogoIcon'
import TopDrawer from 'Components/Drawer/TopDrawer'
import DonateButton from 'Components/DonateButton/DonateButton'
import { Link, useLocation } from 'react-router-dom'

interface HeaderProps {
  className?: string
}

const LOGO_SIZE = { REGULAR: 94, LARGE: 128 }
const LOGO_FONT_SIZE = { REGULAR: '1.5rem', LARGE: '2rem' }

function Header (props: HeaderProps) {
  const { className } = props
  const [navMenuOpen, setNavMenuOpen] = React.useState(false)
  const location = useLocation()
  const isRouteDonation = location.pathname === '/donate'

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const { classes, cx } = useStyles()

  const drawerData = [{ title: 'ASOCIAȚIA', link: 'about' }, { title: 'BLOG', link: 'blog' }, { title: 'ASISTENT', link: 'assistant' }, { title: 'ACASĂ', link: '/' }]

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNavMenuOpen(true)
  }

  const handleCloseNavMenu = () => {
    setNavMenuOpen(false)
  }

  const LogoWithText = (
    <Link className={classes.Logo} to={'/'}>
      <LogoIcon height={isRouteDonation && !isMobile ? LOGO_SIZE.LARGE : LOGO_SIZE.REGULAR} className={classes.LogoIcon}/>
      <div
          className={classes.LogoText}
          style={{
            fontSize: isRouteDonation && !isMobile ? LOGO_FONT_SIZE.LARGE : LOGO_FONT_SIZE.REGULAR
          }}
      >
          <span>PRIETENII</span>
          <br />
          <span className={classes.LogoText2}>GENETICII</span>
      </div>
    </Link>
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
                      <Link to={'/'} className={classes.Link}>
                        <Button
                          onClick={handleCloseNavMenu}
                          className={cx(classes.PageButton)}
                        >
                          <Typography variant='h6'>ACASĂ</Typography>
                        </Button>
                      </Link>
                      <Link to={'/about'} className={classes.Link}>
                        <Button
                          onClick={handleCloseNavMenu}
                          className={cx(classes.PageButton, location.pathname === '/about' ? 'DisabledGreen' : '')}
                        >
                          <Typography variant='h6'>ASOCIAȚIA</Typography>
                        </Button>
                      </Link>
                      <Link to={'/blog'} className={classes.Link}>
                        <Button
                          onClick={handleCloseNavMenu}
                          className={cx(classes.PageButton, location.pathname === '/blog' ? 'DisabledBlue' : '')}
                        >
                          <Typography variant='h6'>BLOG</Typography>
                        </Button>
                      </Link>
                      <Link to={'/assistant'} className={classes.Link}>
                        <Button
                          onClick={handleCloseNavMenu}
                          className={cx(classes.PageButton, location.pathname === '/assistant' ? 'DisabledPurple' : '')}
                        >
                          <Typography variant='h6'>ASISTENT</Typography>
                        </Button>
                      </Link>
                      <Link to={'/donate'} className={classes.Link}>
                        <DonateButton onClick={handleCloseNavMenu} selected={isRouteDonation}/>
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
