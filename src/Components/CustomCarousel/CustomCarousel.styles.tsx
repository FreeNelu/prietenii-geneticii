import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Indicator: {
      color: theme.background
    },
    ActiveIndicator: {
      color: theme.textPrimary
    },
    TextBox: {
      color: theme.background
    },
    NavWrapper: {
      paddingTop: 64
    }
  })
)
