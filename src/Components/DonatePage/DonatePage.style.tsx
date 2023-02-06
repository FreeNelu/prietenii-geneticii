import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Container: {
      display: 'flex',
      marginTop: 64,
      flexDirection: 'row-reverse'
    },
    PageDescription: {
      minWidth: 284,
      minHeight: 250,
      padding: '5%',
      paddingRight: '10%',
      color: theme.textPrimary,
      flex: 1,
      textAlign: 'center'
    },
    DonateBox: {
      minWidth: 300,
      width: '100%',
      alignSelf: 'center',
      marginRight: '0px auto',
      flex: 1,
      paddingLeft: '10%'
    }
  })
)
