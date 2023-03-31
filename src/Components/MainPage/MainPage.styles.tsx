import { makeStyles } from 'Theme'

export const useStyles = makeStyles()(
  (theme) => ({
    MainPageContainer: {
      display: 'flex',
      marginTop: 64,
      transition: 'height 0.5s'
    },
    PageDescription: {
      float: 'left',
      minWidth: 284,
      minHeight: 250,
      paddingRight: '5%',
      color: theme.textPrimary,
      flex: 1
    },
    ImageBox: {
      maxWidth: 400,
      width: '100%',
      alignSelf: 'center',
      margin: '0px auto',
      flex: 1
    }
  })
)
