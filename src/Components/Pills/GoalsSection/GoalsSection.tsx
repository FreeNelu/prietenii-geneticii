import React from 'react'
import Pill from '../Pill/Pill'
import { useStyles } from './GoalsSection.styles'
import { Box, Typography } from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import PeopleIcon from '@mui/icons-material/People'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'

const GoalsSection = () => {
  const { classes, cx } = useStyles()

  const PillBox = ({
    percentage,
    liquidClassName,
    icon,
    text,
    reversed
  }: {
    percentage: number
    liquidClassName: string
    icon: React.ReactElement
    text: React.ReactElement
    reversed?: boolean
  }) => {
    return (
      <Box
        className={classes.PillBox}
        sx={{
          marginLeft: { xs: '0%', sm: '10%', md: '15%', lg: '20%' },
          marginRight: { xs: '0%', sm: '10%', md: '15%', lg: '20%' },
          flexDirection: reversed ? 'row-reverse' : 'row',
          width: { xs: '90%', sm: '80%', md: '60%', lg: '50%' }
        }}
      >
        {icon}
        {text}
        <Pill percentage={percentage} liquidClassName={liquidClassName} />
      </Box>
    )
  }

  const TextComponent = (title: string, subtitle: string, text: string, className?: string) => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        padding: '32px'
      }}
      className={className}
    >
      <Typography gutterBottom variant="h4">
        {title}
      </Typography>
      <Typography gutterBottom variant="body1">
        {subtitle}
      </Typography>
      <Typography variant="body2">{text}</Typography>
    </Box>
  )

  return (
    <Box
      className={classes.Container}
      sx={{ marginTop: { xs: '128px', sm: '164px', md: '264px', lg: '328px' } }}
    >
      <PillBox
        percentage={76}
        liquidClassName={classes.Liquid1}
        icon={
          <AttachMoneyIcon
            sx={{ height: { xs: 50, md: 75 }, width: { xs: 50, md: 75 }, marginRight: '-12px' }}
            className={cx(classes.Liquid1, classes.Icon)}
          />
        }
        text={TextComponent(
          'Donații',
          'Suma donată: 38.000/50.000 RON (76%)',
          'Ajută-ne să strângem 50.000 RON pentru a sprijini mai multe persoane aflate în nevoie.',
          classes.NoPaddingRight
        )}
        reversed
      />
      <PillBox
        percentage={19.2}
        liquidClassName={classes.Liquid2}
        icon={
          <VolunteerActivismIcon
            sx={{ height: { xs: 50, md: 75 }, width: { xs: 50, md: 75 }, marginLeft: '-12px' }}
            className={cx(classes.Liquid2, classes.Icon)}
          />
        }
        text={TextComponent(
          'Voluntariat',
          'Ore de voluntariat înregistrate: 96/500 ore (19.2%)',
          'Contribuie la atingerea obiectivului nostru de 500 de ore de voluntariat.',
          classes.NoPadingLeft
        )}
      />
      <PillBox
        percentage={45}
        liquidClassName={classes.Liquid3}
        icon={
          <PeopleIcon
            sx={{ height: { xs: 50, md: 75 }, width: { xs: 50, md: 75 }, marginRight: '-12px' }}
            className={cx(classes.Liquid3, classes.Icon)}
          />
        }
        text={TextComponent(
          'Oameni ajutați',
          'Persoane ajutate până acum: 45/100 (45%)',
          'Lucrăm să ajutăm mai multe persoane vulnerabile din comunitatea noastră și suntem la 80% din obiectivul nostru de a ajuta 100 de persoane.',
          classes.NoPaddingRight
        )}
        reversed
      />
      <PillBox
        percentage={40}
        liquidClassName={classes.Liquid4}
        icon={
          <AssignmentTurnedInIcon
            sx={{ height: { xs: 50, md: 75 }, width: { xs: 50, md: 75 }, marginLeft: '-12px' }}
            className={cx(classes.Liquid4, classes.Icon)}
          />
        }
        text={TextComponent(
          'Proiecte finalizate',
          'Proiecte organizate cu scopul de a vindeca bolile genetice: 2/5 (40%)',
          'Organizăm și participăm la finalizarea a mai multor proiecte importante pentru a sprijini mai multe persoane din comunitatea noastră.',
          classes.NoPadingLeft
        )}
      />
    </Box>
  )
}

export default GoalsSection
