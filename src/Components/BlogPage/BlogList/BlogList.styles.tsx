import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    RefreshIcon: {
      color: theme.textPrimary
    },
    RefreshIconButton: {
      alignSelf: 'center',
      transition: 'background-color 0.5s',
      '&:hover': {
        backgroundColor: theme.blue
      }
    }
  })
)
