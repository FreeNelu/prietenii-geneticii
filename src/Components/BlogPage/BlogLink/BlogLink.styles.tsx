import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Container: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      border: '4px solid' + theme.textPrimary,
      borderRadius: 24,
      background: 'transparent',
      height: 200,
      marginBottom: 12
    },
    ImageBox: {
      height: '100%',
      borderTopRighRadius: 20,
      borderBottomRightRadius: 20,
      borderLeft: '4px solid' + theme.textPrimary
    },
    ImageBoxMobile: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      objectFit: 'cover',
      borderRadius: 20,
      filter: 'blur(2px)'
    },
    Content: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      alignContent: 'center',
      height: '100%',
      width: '100%',
      padding: 0
    },
    TextBox: {
      position: 'relative',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      alignContent: 'center',
      textAlign: 'left',
      padding: 24
    },
    TextBoxMobile: {
      position: 'absolute',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      alignContent: 'center',
      textAlign: 'left',
      top: 18,
      left: 18,
      color: 'white'
    },
    ReadMoreButton: {
      position: 'absolute',
      right: 12,
      bottom: 12,
      backgroundColor: theme.textPrimary,
      color: 'white',
      borderRadius: '24px 18px',
      '&:hover': {
        backgroundColor: 'black'
      }
    },
    ReadMoreButtonMobile: {
      position: 'absolute',
      right: 12,
      bottom: 32,
      backgroundColor: theme.textPrimary,
      color: 'white',
      borderRadius: '24px 18px',
      '&:hover': {
        backgroundColor: 'black'
      }
    },
    MobileContent: {
      backgroundColor: theme.blue
    }
  })
)
