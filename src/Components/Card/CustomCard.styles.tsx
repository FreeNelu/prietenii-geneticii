import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Card: {
      borderRadius: '64px 32px',
      minHeight: 250,
      backgroundColor: theme.background,
      boxShadow: theme.boxShadow
    },
    Quotes: {
      width: 48,
      marginTop: 24,
      marginLeft: 24,
      fill: theme.textPrimary
    },
    Avatar: {
      position: 'absolute',
      top: -32,
      right: -32,
      width: 124,
      height: 124,
      border: '8px ridge',
      borderColor: theme.pink
    },
    Content: {
      padding: '12px 32px'
    }
  })
)
