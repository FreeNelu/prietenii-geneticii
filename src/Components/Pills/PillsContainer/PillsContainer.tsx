import React from 'react'
import Pill from '../Pill/Pill'
import { useStyles } from './PillsContainer.styles'
import backgroundDiseases from 'Assets/backgroundDiseases.png'
import { Box, Typography } from '@mui/material'

const PillsContainer = () => {
  const { classes } = useStyles()
  const percentages = [60, 50, 20, 85]

  const PillBox = (percentage: number, liquidClassName: string, reversed?: boolean) => {
    const PillText = () => (
    <Box className={classes.PillText} sx={{ padding: { xs: '0px 32px', md: '0px 64px' } }}>
      <Typography>TEEEEEEEEEEEEEEEST</Typography>
    </Box>
    )

    return (
    <Box className={classes.PillBox}>
      {reversed && <PillText/>}
      <Pill percentage={percentage} liquidClassName={liquidClassName} />
      {!reversed && <PillText/>}
    </Box>)
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
      component="img"
      alt="Collage of images portraying genetic disorders"
      src={backgroundDiseases}
      className={classes.ImageBox}
      />
      <Box className={classes.Container}
      >
        {PillBox(percentages[0], classes.Liquid1, true)}
        {PillBox(percentages[1], classes.Liquid2)}
        {PillBox(percentages[2], classes.Liquid3, true)}
        {PillBox(percentages[3], classes.Liquid4)}
      </Box>
    </Box>
  )
}

export default PillsContainer
