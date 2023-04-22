import { makeStyles } from 'Theme'
import { unstable_styleFunctionSx } from '@mui/system'
import { type CSSObject } from 'tss-react'

export const styleFunctionSx = unstable_styleFunctionSx as (params: object) => CSSObject

export const useStyles = makeStyles()(
  (theme) => ({
    Form: {
      display: 'flex',
      flexDirection: 'column',
      margin: '32px auto',
      borderRadius: '25px',
      width: '80%'
    },
    FormContainer: {
      boxShadow: theme.boxShadow,
      marginTop: 32,
      marginBottom: 32,
      borderRadius: '25px'
    },
    TextField: {
      marginBottom: 24
    },
    FeedbackButton: {
      backgroundColor: theme.pink,
      color: 'white',
      '&:hover': {
        backgroundColor: theme.lightpink
      }
    },
    FeedbackInput: styleFunctionSx({
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
          }
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
    })
  })
)
