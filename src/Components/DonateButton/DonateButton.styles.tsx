import { makeStyles } from 'Theme'

export const useStyles = makeStyles<{ invertColors: boolean | undefined }>()(
  (theme, { invertColors }) => ({
    DonateButton: {
      color: 'white',
      backgroundColor: theme.pink,
      padding: '10px 20px',
      fontWeight: 700,
      borderRadius: '12px 24px',
      transition: 'background-color 0.5s',
      width: 156,
      height: 64,
      ':hover': {
        backgroundColor: (invertColors ?? false) ? theme.background : 'transparent',
        border: (invertColors ?? false) ? 'none' : '8px solid',
        borderColor: theme.pink,
        color: theme.textPrimary,
        '& > svg': {
          color: theme.pink,
          width: 24
        }
      },
      '&.selected': {
        backgroundColor: 'transparent',
        border: '8px solid',
        borderColor: theme.pink,
        color: theme.pink,
        pointerEvents: 'none'
      }
    },
    HeartIcon: {
      transition: 'width 0.5s, color 0.5s',
      marginRight: 8,
      width: 18
    }
  })
)
