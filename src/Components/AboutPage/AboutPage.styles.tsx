import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: 128
    },
    Description: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '64px 16px 0px 16px',
      backgroundColor: theme.background,
      color: theme.textPrimary
    },
    ImageBox: {
      margin: 'auto',
      borderRadius: '25px',
      marginTop: 32,
      marginBottom: 32,
      boxShadow: theme.boxShadow,
      width: '100%'
    },
    ImageTextContainer: {
      margin: 'auto',
      color: theme.textPrimary,
      position: 'relative',
      textAlign: 'center'
    },
    LineText: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '8px 12px',
      border: `4px solid ${theme.green}`,
      color: theme.textPrimary,
      letterSpacing: '.32em',
      textAlign: 'center',
      textTransform: 'uppercase',
      backgroundColor: theme.background,
      '&::first-letter': {
        marginLeft: '.32em'
      }
    },
    HorizontalLine: {
      position: 'relative',
      borderTop: `4px solid ${theme.green}`,
      width: ' 100%',
      marginTop: 64,
      marginBottom: 64
    },
    GreenShadow: {
      textShadow: '-5px -2px' + theme.green
    }
  }))
