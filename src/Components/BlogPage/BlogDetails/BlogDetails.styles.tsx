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
      borderRadius: '25px'
    },
    Title: {
      marginTop: 82,
      textAlign: 'center'
    },
    Media: {
      margin: 'auto',
      borderRadius: '25px',
      marginTop: 32,
      marginBottom: 32
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
