import zIndex from '@mui/material/styles/zIndex'
import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Wave: {
      position: 'absolute',
      fill: theme.pink,
      width: '100%',
      transform: 'rotate(180deg) scaleY(-1) translate(0, -90%)'
    },
    ReversedWave: {
      fill: theme.pink,
      width: '100%',
      transform: 'translate(0, -1px)',
      backgroundColor: 'transparent',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 99
    },
    Carousel: {
      maxWidth: 600,
      minWidth: 275,
      paddingLeft: 64,
      paddingRight: 64,
      width: '100%'
    },
    CarouselContainer: {
      width: '100%',
      backgroundColor: theme.pink,
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 164,
      paddingBottom: 128
    }
  })
)
