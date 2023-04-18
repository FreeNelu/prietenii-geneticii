import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    IconButton: {
      position: 'fixed',
      backgroundColor: theme.pink,
      color: 'white',
      '&:hover': {
        backgroundColor: theme.lightpink
      }
    }
  })
)
