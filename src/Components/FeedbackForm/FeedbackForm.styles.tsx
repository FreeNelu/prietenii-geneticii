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
          '-moz-appearance': 'textfield'
        },
        '& input[type=number]::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          margin: 0
        },
        '& input[type=number]::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: 0
        }
      }
    })
  })
)
