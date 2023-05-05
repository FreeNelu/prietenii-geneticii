import { makeStyles } from 'Theme'
import { unstable_styleFunctionSx } from '@mui/system'
import { type CSSObject } from 'tss-react'

export const styleFunctionSx = unstable_styleFunctionSx as (params: object) => CSSObject

export const useStyles = makeStyles()(
  (theme) => ({
    Box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: 300,
      maxWidth: 750
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
    ValueInput: styleFunctionSx({
      theme,
      sx: {
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.pink
        },
        '& label.Mui-focused': {
          color: theme.pink
        },
        '& .MuiOutlinedInput-root': {
          '&:hover fieldset': {
            borderColor: theme.pink
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.pink
          },
          '& input[type=number]': {
            MozAppearance: 'textfield',
            WebkitAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              WebkitAppearance: 'none',
              margin: 0
            },
            '&::-webkit-inner-spin-button': {
              WebkitAppearance: 'none',
              margin: 0
            }
          }
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
    HintBox: {
      marginTop: 24,
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.backgroundSecondary,
      width: '100%',
      minHeight: 100,
      borderRadius: 8,
      boxShadow: theme.boxShadow,
      textAlign: 'center'
    },
    FormHeader: {
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.backgroundSecondary,
      width: '100%',
      minHeight: 50,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      borderBottom: '1px solid lightgrey',
      textAlign: 'center'
    },
    FormBody: {
      position: 'relative',
      boxSizing: 'border-box',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 12,
      padding: 36,
      paddingBottom: 24
    },
    BaseSuggestion: {
      display: 'flex',
      minWidth: 218,
      height: 56,
      backgroundColor: theme.backgroundSecondary,
      color: theme.textPrimary,
      border: '1px solid lightgrey',
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: theme.background
      }
    },
    SelectedSuggestion: {
      backgroundColor: theme.pink,
      color: 'white',
      pointerEvents: 'none'
    },
    DonateButton: {
      backgroundColor: theme.pink,
      padding: '12px 0px',
      width: '100%',
      color: 'white',
      '&:hover': {
        backgroundColor: theme.lightpink
      }
    },
    FormFooter: {
      boxSizing: 'border-box',
      padding: '0px 36px 18px 36px',
      width: '100%'
    },
    FormFooterCompany: {
      boxSizing: 'border-box',
      padding: '0px 36px 18px 36px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center'
    },
    DownloadButton: {
      marginLeft: 12,
      borderRadius: '100%',
      width: '64px',
      height: '64px',
      backgroundColor: theme.pink,
      color: 'white',
      '&:hover': {
        backgroundColor: theme.lightpink
      }
    }
  })
)
