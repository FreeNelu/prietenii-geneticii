import React from 'react'
import { useStyles } from './TopDrawer.styles'
import { Box, IconButton, Typography } from '@mui/material'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Link } from 'react-router-dom'
import CloseIcon from 'Components/Icons/CloseIcon'
import DonateButton from 'Components/DonateButton/DonateButton'
import ReversedWave from 'Components/Icons/ReversedWave'

interface TopDrawerProps {
  open: boolean
  onClose: () => void
  drawerData: Array<{ title: string, link: string }>
  isMobile: boolean
}

function TopDrawer (props: TopDrawerProps) {
  const { open, onClose, drawerData, isMobile } = props
  const { classes } = useStyles({ open })
  const root = document.querySelector('#root')
  ;(root != null) && (open && isMobile ? disableBodyScroll(root) : enableBodyScroll(root))

  return (
  <div className={classes.Drawer}>
    <div className={classes.WaveContainer}>
      <Box className={classes.Box} sx={{
        transition: 'height 1.5s',
        height: open ? '50%' : '0px'
      }}/>
      <ReversedWave className={classes.ReversedWave} />
    </div>
    <IconButton onClick={onClose} className={classes.CloseButton}>
      <CloseIcon className={classes.CloseIcon}/>
    </IconButton>
    <div onClick={onClose} className={classes.Links}>
      <div className={classes.DefaultLinks}>
        {drawerData.map(({ title, link }, index) => (
          <Link key={index} to={link} className={classes.Link}>
            <Typography variant='h4'>{title}</Typography>
          </Link>
        ))}
      </div>
      <Link to="/donate" className={classes.DonateLink}>
        <DonateButton className={classes.DonateButton} onClick={onClose} invertColors/>
      </Link>
    </div>
  </div>
  )
};

export default TopDrawer
