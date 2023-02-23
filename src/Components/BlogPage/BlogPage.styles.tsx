import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Container: {
      paddingTop: 72,
      textAlign: 'center'
    },
    BlueShadow: {
      textShadow: '-5px -2px' + theme.blue
    },
    BlogLink: {},
    Wrap: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: '0',
      left: '0',
      zIndex: 1000
    },
    Inner: {
      padding: '124px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }

  })
)