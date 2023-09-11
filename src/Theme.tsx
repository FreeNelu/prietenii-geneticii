import { createMakeAndWithStyles } from 'tss-react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function useTheme () {
  return {
    textPrimary: '#261425',
    background: '#EBEFEB',
    backgroundSecondary: '#D9DED9',
    blue: '#01B5E3',
    pink: '#E03D8C',
    green: '#69C441',
    darkgreen: '#50A02D',
    darkpink: '#C23C7D',
    lightpink: '#FC4EA3',
    purple: '#642578',
    darkPurple: '#4B0082',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
  }
}

export const {
  makeStyles,
  withStyles,
  useStyles
} = createMakeAndWithStyles({ useTheme })
