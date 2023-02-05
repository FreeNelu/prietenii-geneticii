import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Container: {
      display: 'flex',
      marginTop: 64
    },
    PageDescription: {
      float: 'left',
      minWidth: 284,
      minHeight: 250,
      padding: '5%',
      color: theme.textPrimary,
      flex: 1
    },
    DonateBox: {
      minWidth: 400,
      width: '100%',
      alignSelf: 'center',
      margin: '0px auto',
      flex: 1,
      padding: '0% 5%'
    }
  })
)
