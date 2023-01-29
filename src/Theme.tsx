import { createMakeAndWithStyles } from 'tss-react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function useTheme () {
  return {
    textPrimary: '#261425',
    background: '#EBEFEB',
    blue: '#01B5E3',
    pink: '#E03D8C',
    green: '#69C441',
    darkgreen: '#60b43b'
  }
}

export const {
  makeStyles,
  withStyles,
  useStyles
} = createMakeAndWithStyles({ useTheme })
