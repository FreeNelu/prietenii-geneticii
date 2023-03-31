import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Root: {
      margin: 'auto',
      marginTop: 12,
      color: theme.textPrimary
    },
    Title: {
      marginTop: 82,
      textAlign: 'center'
    },
    Media: {
      width: '100%',
      height: 'auto',
      // Keep aspect ratio
      paddingTop: '56.25%'
    },
    Date: {
      position: 'absolute',
      top: 8,
      right: 12
    },
    Description: {
      marginTop: 12
    },
    Content: {
      padding: 32,
      position: 'relative',
      backgroundColor: theme.background
    }
  })
)
