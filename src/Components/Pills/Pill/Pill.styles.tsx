import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Pill: {
      borderRadius: 64,
      border: '8px solid ' + theme.background,
      backgroundColor: theme.textPrimary,
      width: '15%',
      minWidth: 75,
      maxWidth: 90,
      position: 'relative',
      overflow: 'hidden',
      marginRight: -1
    },
    Liquid: {
      width: '100%',
      transition: 'height 1s ease-in-out',
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 0
    }
  })
)
