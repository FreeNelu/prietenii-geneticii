import { makeStyles } from 'Theme'

export const useStyles = makeStyles<{ isMobile: boolean | undefined }>()(
  (theme, { isMobile }) => ({
    Container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    PageDescription: {
      color: theme.textPrimary,
      textAlign: 'center',
      padding: (isMobile ?? false) ? '2.5% 10%' : '2.5% 5%',
      paddingTop: 72
    },
    DonateForm: {
      padding: (isMobile ?? false) ? '5% 10%' : '3% 5%'
    },
    DonateBox: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    PinkShadow: {
      textShadow: '-5px -2px' + theme.pink
    }
  })
)
