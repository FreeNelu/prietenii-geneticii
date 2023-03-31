import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Container: {
      paddingTop: 72,
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    Text: {
      marginBottom: 12
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
      padding: '64px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
)
