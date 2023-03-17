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
      transform: 'translate(0, -1px)'
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
