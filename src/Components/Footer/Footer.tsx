import React from 'react'
import { useStyles } from './Footer.styles'
import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import Wave from 'Components/Icons/Wave'
import { Link, useLocation } from 'react-router-dom'
import PlaceIcon from '@mui/icons-material/Place'
import CallIcon from '@mui/icons-material/Call'
import EmailIcon from '@mui/icons-material/Email'
import LogoIcon from 'Components/Icons/LogoIcon'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const LOGO_SIZE = { REGULAR: 94, LARGE: 128 }
const LOGO_FONT_SIZE = { REGULAR: '1.5rem', LARGE: '2rem' }

function Footer () {
  const { classes } = useStyles()
  const location = useLocation()

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const email = 'prieteniigeneticii2020@gmail.com'

  const LogoWithText = (
    <Box sx={{ display: 'flex' }}>
      <LogoIcon
        height={!isMobile ? LOGO_SIZE.LARGE : LOGO_SIZE.REGULAR}
        className={classes.LogoIcon}
      />
      <div
        className={classes.LogoText}
        style={{
          fontSize: !isMobile ? LOGO_FONT_SIZE.LARGE : LOGO_FONT_SIZE.REGULAR
        }}
      >
        <span>PRIETENII</span>
        <br />
        <span className={classes.LogoText}>GENETICII</span>
      </div>
    </Box>
  )

  const handleMapClick = () => {
    const locationName = encodeURIComponent('Str. Martir Ovidiu Munteanu, 9, Timisoara')
    window.open(`https://www.google.com/maps/search/?api=1&query=${locationName}`, '_blank')
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}?`
  }

  return (
    <>
      <Wave className={classes.Wave} />
      <Box className={classes.FooterContainer}>
        <Box
          className={classes.LinksContainer}
          sx={{ flexDirection: { xs: 'column', md: 'row' } }}
        >
          <Link to={'/'} className={classes.Link}>
            <Button
              className={classes.PageButton}
              disabled={location.pathname === '/'}
            >
              <Typography variant="h5">ACASĂ</Typography>
            </Button>
          </Link>
          <Link to={'/about'} className={classes.Link}>
            <Button
              className={classes.PageButton}
              disabled={location.pathname === '/about'}
            >
              <Typography variant="h5">ASOCIAȚIA</Typography>
            </Button>
          </Link>
          <Link to={'/blog'} className={classes.Link}>
            <Button
              className={classes.PageButton}
              disabled={location.pathname === '/blog'}
            >
              <Typography variant="h5">BLOG</Typography>
            </Button>
          </Link>
          <Link to={'/donate'} className={classes.Link}>
            <Button
              className={classes.PageButton}
              disabled={location.pathname === '/donate'}
            >
              <Typography variant="h5">DONATE</Typography>
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-evenly',
            width: '70%',
            gap: 6
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <IconButton className={classes.IconButton} onClick={handleMapClick}>
              <PlaceIcon fontSize="large" />
            </IconButton>
            <Typography variant="body1">
              Str. Martir Ovidiu Munteanu, 9, Timisoara
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <IconButton className={classes.Icon} disableRipple>
              <CallIcon fontSize="large" />
            </IconButton>
            <Typography variant="body1">+40 745 138 917 </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <IconButton className={classes.IconButton} onClick={handleEmailClick}>
              <EmailIcon fontSize="large" />
            </IconButton>
            <Typography variant="body1">
              {email}
            </Typography>
          </Box>
        </Box>
        {LogoWithText}
        <Typography
          variant="body2"
          sx={{ margin: '0px 10%', textAlign: 'center' }}
        >
          Copyright © {new Date().getFullYear().toString()} | Prietenii
          Geneticii SRL | All rights reserved | Images by{' '}
          <a href="https://www.rawpixel.com" className={classes.Ref}>
            Rawpixel
          </a>
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '48px',
            justifyContent: 'space-evenly',
            width: '50%'
          }}
        >
          <IconButton className={classes.SocialLink}>
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton className={classes.SocialLink}>
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton className={classes.SocialLink}>
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </>
  )
}
export default Footer
