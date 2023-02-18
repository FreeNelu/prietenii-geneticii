import { makeStyles } from 'Theme'

export const useStyles = makeStyles<{ isMobile: boolean | undefined }>()(
  (theme, { isMobile }) => ({
    Container: {
      display: 'flex',
      marginTop: 64,
      flexDirection: 'row-reverse',
      justifyContent: 'center'
    },
    PageDescription: {
      color: theme.textPrimary,
      textAlign: 'center',
      padding: (isMobile ?? false) ? '5% 10%' : '5% 5% 5% 48px'
    },
    DonateBox: {
      minWidth: 300,
      maxWidth: 470,
      alignSelf: 'center',
      marginRight: '0px auto',
      padding: (isMobile ?? false) ? '5% 10%' : '3% 0px 0px 5%'
    }
  })
)
