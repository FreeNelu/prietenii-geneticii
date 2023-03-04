import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Container: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'column',
      gap: '24px',
      flex: 1
    }
  })
)
