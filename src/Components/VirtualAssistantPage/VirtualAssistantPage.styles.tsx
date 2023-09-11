import { makeStyles } from 'Theme'
import { unstable_styleFunctionSx } from '@mui/system'
import { type CSSObject } from 'tss-react'

export const styleFunctionSx = unstable_styleFunctionSx as (params: object) => CSSObject

export const useStyles = makeStyles()(
  (theme) => ({
    AssistantContainer: {
      display: 'flex',
      justifyContent: 'center',
      background: theme.background,
      marginTop: 64
    },
    ChatContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    Title: {
      marginBottom: '2rem',
      color: theme.textPrimary
    },
    Loader: {
      transform: 'scale(0.75), translate(-50%, -50%)',
      padding: 0
    },
    TextArea: {
      alignSelf: 'flex-start',
      width: '90%',
      padding: '1rem',
      fontSize: '1rem',
      resize: 'none',
      borderRadius: '4px',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      pointerEvents: 'none',
      overflowY: 'auto',
      textAlign: 'left',
      maxHeight: '300px'
    },
    ImageBox: {
      alignSelf: 'bottom',
      width: 100,
      transition: 'height 0.5s, height 0.5s'
    },
    QueryButton: {
      color: theme.purple,
      '&:hover': {
        backgroundColor: theme.backgroundSecondary
      }
    },
    PromptButton: {
      backgroundColor: theme.purple,
      '&:hover': {
        backgroundColor: theme.darkPurple
      }
    },
    Text: {
      marginBottom: 12
    },
    PurpleShadow: {
      textShadow: '-5px -2px' + theme.purple
    },
    ValueInput: styleFunctionSx({
      theme,
      sx: {
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.purple
        },
        '& label.Mui-focused': {
          color: theme.purple
        },
        '& .MuiOutlinedInput-root': {
          '&:hover fieldset': {
            borderColor: theme.purple
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.purple
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
    })
  })
)
