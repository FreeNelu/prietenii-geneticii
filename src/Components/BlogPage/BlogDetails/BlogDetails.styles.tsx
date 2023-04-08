import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Container: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    },
    Root: {
      margin: 'auto',
      color: theme.textPrimary,
      borderRadius: '25px',
      boxShadow: theme.boxShadow
    },
    Title: {
      marginTop: 72,
      textAlign: 'center'
    },
    Media: {
      margin: 'auto',
      borderRadius: '25px',
      marginTop: 32,
      marginBottom: 32,
      boxShadow: theme.boxShadow
    },
    Date: {
      position: 'absolute',
      top: 24,
      right: 32,
      fontWeight: 700
    },
    Description: {
      marginTop: 24
    },
    Content: {
      padding: 32,
      position: 'relative',
      backgroundColor: theme.background
    },
    TitleShadow: {
      textShadow: '-5px -2px' + theme.pink
    }
  })
)
