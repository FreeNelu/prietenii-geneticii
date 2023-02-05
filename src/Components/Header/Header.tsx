import React from 'react'
import { useStyles } from './Header.styles'
import { AppBar, Box, Toolbar, IconButton, Typography, Container, Button, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LogoIcon from '../Icons/LogoIcon'
import TopDrawer from 'Components/Drawer/TopDrawer'
import DonateButton from 'Components/DonateButton/DonateButton'

interface HeaderProps {
  className?: string
}

function Header (props: HeaderProps) {
  const { className } = props
  const [navMenuOpen, setNavMenuOpen] = React.useState(false)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const { classes, cx } = useStyles()

  const drawerData = [{ title: 'About', link: 'about' }, { title: 'Blog', link: 'blog' }, { title: 'Home', link: '/' }]

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
                        <Button
                          key={'About'}
                          onClick={handleCloseNavMenu}
                          className={classes.PageButton}
                        >
                          About
                        </Button>
                        <Button
                          key={'Publications'}
                          onClick={handleCloseNavMenu}
                          className={classes.PageButton}
                        >
                          Publications
                        </Button>
                        <DonateButton onClick={handleCloseNavMenu}/>
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
