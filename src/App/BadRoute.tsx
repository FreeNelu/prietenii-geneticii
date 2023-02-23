import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'

function BadRoute () {
  return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50%', flexDirection: 'column' }}>
        <SentimentDissatisfiedIcon style={{ width: '20%', height: '20%' }}/>
        <Typography variant='h2'>Nimic de văzut aici!</Typography>
        <p>
          <Link to="/"><Typography variant='h4'>Mergi la pagina principală</Typography></Link>
        </p>
      </div>
  )
}

export default BadRoute
