import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Card: { borderRadius: 24, maxWidth: 400 },
    Quotes: {
      width: 32,
      marginTop: 24,
      marginLeft: 24
    }
  })
)
