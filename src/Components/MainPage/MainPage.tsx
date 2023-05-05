import React from 'react'
import { useStyles } from './MainPage.styles'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import girlImage from 'Assets/girlImage.png'
import Typography from '@mui/material/Typography'

function MainPage () {
  const theme = useTheme()
  const { classes } = useStyles()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      className={classes.MainPageContainer}
      sx={{
        flexWrap: {
          xs: 'wrap',
          md: 'nowrap'
        }
      }}
    >
      <Box
        className={classes.PageDescription}
        sx={{
          marginLeft: isMobile ? '5%' : '15%',
          textAlign: { xs: 'center', md: 'left', sm: 'left' }
        }}
      >
        <Typography gutterBottom fontWeight={700} variant="h3">
          Împreună
          <br />
          vindecăm genetica.
        </Typography>
        <Typography variant="subtitle1">
          Alatura-te misiunii noastre și ajuta-ne să cercetăm, să prevenim și să
          vindecăm boli genetice prin donația ta.
        </Typography>
        <Typography variant="caption">
          “No one has ever become poor from giving.” – Anne Frank
        </Typography>
      </Box>
      <Box
        component="img"
        sx={{
          paddingRight: isMobile ? 0 : '15%',
          minWidth: isMobile ? 284 : 300
        }}
        className={classes.ImageBox}
        alt="Girl climbing stairs made out of DNA"
        src={girlImage}
      />
    </Box>
  )
}
export default MainPage
