import { makeStyles } from 'Theme'

export const useStyles = makeStyles<{ isMobile: boolean | undefined }>()(
  (theme, { isMobile }) => ({
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
      padding: (isMobile ?? false) ? '5% 10%' : '5% 0% 5% 10%'
    }
  })
)
