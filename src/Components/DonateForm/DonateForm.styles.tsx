import { makeStyles } from 'Theme'
import { unstable_styleFunctionSx } from '@mui/system'
import { type CSSObject } from 'tss-react'

export const styleFunctionSx = unstable_styleFunctionSx as (params: object) => CSSObject

export const useStyles = makeStyles()(
  (theme) => ({
    Box: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    Container: {
      display: 'flex',
      width: '100%',
      color: theme.textPrimary,
      justifyContent: 'center'
    },
    MainContainer: {
      marginTop: 24,
      backgroundColor: 'white',
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 16,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 16,
      boxShadow: theme.boxShadow,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    SelectedButton: {
      backgroundColor: theme.pink,
      width: '50%',
      color: 'white',
      pointerEvents: 'none',
      border: 'none',
      padding: '12px 12px',
      boxShadow: theme.boxShadow
    },
    RegularButton: {
      color: theme.textPrimary,
      backgroundColor: 'white',
      width: '50%',
      border: 'none',
      cursor: 'pointer',
      padding: '12px 12px',
      boxShadow: theme.boxShadow,
      '&:hover': {
        backgroundColor: theme.backgroundSecondary
      }
    },
    CurrencyDropdown: styleFunctionSx({
      theme,
      sx: {
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.pink
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.pink
        }
      }
    }),
    CurrencyLabel: styleFunctionSx({
      theme,
      sx: {
        '&.Mui-focused': {
          color: theme.pink
        }
      }
    }),
    FormHeader: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: theme.backgroundSecondary,
      width: '100%',
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      borderBottom: '1px solid lightgrey',
      padding: '8px 0px',
      textAlign: 'center'
    },
    FormBody: {
      boxSizing: 'border-box',
      minHeight: 300,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      padding: 24
    },
    BaseSuggestion: {
      display: 'flex',
      width: 124,
      height: 48,
      backgroundColor: theme.backgroundSecondary,
      color: theme.textPrimary,
      border: '1px solid lightgrey',
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      padding: '0px 8px',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: theme.background
      }
    },
    SelectedSuggestion: {
      backgroundColor: theme.pink,
      color: 'white',
      pointerEvents: 'none'
    }
  })
)
