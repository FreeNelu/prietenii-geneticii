import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    MainPageContainer: {
      display: 'flex',
      marginTop: 64
    },
    Wave: {
      position: 'absolute',
      fill: theme.pink,
      width: '100%',
      transform: 'rotate(180deg) scaleY(-1) translate(0, -90%)'
    },
    ReversedWave: {
      fill: theme.pink,
      width: '100%'
    },
    PageDescription: {
      float: 'left',
      minWidth: 284,
      minHeight: 250,
      padding: '5%',
      color: theme.textPrimary,
      flex: 1
    },
    ImageBox: {
      maxWidth: 400,
      width: '100%',
      alignSelf: 'center',
      margin: '0px auto',
      flex: 1
    },
    Carousel: {
      maxWidth: 600,
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
