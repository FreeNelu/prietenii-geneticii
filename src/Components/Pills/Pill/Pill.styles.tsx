import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Pill: {
      borderRadius: 75,
      backgroundColor: theme.textPrimary,
      position: 'relative',
      overflow: 'hidden'
    },
    Liquid: {
      backgroundColor: theme.textPrimary,
      width: '100%',
      transition: 'height 1s ease-in-out',
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0
    }
  })
)
