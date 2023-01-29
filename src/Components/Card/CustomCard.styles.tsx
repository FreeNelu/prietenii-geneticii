import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Card: {
      borderRadius: 32,
      minHeight: 200
    },
    Quotes: {
      width: 32,
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
      border: '8px solid',
      borderColor: theme.pink
    }
  })
)
