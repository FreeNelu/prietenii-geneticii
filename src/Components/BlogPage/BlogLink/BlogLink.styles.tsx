import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    Container: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      border: '4px solid' + theme.textPrimary,
      borderRadius: 24,
      boxShadow: '-8px 0px 0px' + theme.blue,
      background: 'transparent',
      height: '188px'
    },
    ImageBox: {
      height: '100%',
      borderTopRighRadius: 20,
      borderBottomRightRadius: 20,
      borderLeft: '4px solid' + theme.textPrimary
    },
    Content: {
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      alignContent: 'center',
      height: '100%',
      width: '100%',
      padding: 0
    },
    TextBox: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      alignContent: 'center',
      textAlign: 'left',
      padding: 24
    },
    ReadMoreButton: {
      alignSelf: 'end',
      backgroundColor: theme.textPrimary,
      color: 'white',
      borderRadius: '24px 18px',
      '&:hover': {
        backgroundColor: 'black'
      }
    }
  })
)
