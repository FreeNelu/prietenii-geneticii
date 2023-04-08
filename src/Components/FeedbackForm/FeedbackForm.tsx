import React, { useState } from 'react'

import { useStyles } from './FeedbackForm.styles'
import { Typography, TextField, Button, Box } from '@mui/material'

const FeedbackForm = () => {
  const { classes, cx } = useStyles()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const recipientEmail = ''

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  }

  return (
    <Box className={classes.FormContainer} sx={{
      width: { xs: '90%', md: '80%', lg: '60%' }
    }}>
      <form className={classes.Form} onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom sx={{ marginBottom: '24px' }}>
          Feedback Form
        </Typography>

        <TextField
          className={cx(classes.TextField, classes.FeedbackInput)}
          label="Name"
          value={name}
          onChange={(e) => { setName(e.target.value) }}
          variant="outlined"
        />

        <TextField
          className={cx(classes.TextField, classes.FeedbackInput)}
          label="Email"
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
          variant="outlined"
        />

        <TextField
          className={cx(classes.TextField, classes.FeedbackInput)}
          label="Message"
          multiline
          rows={4}
          value={message}
          onChange={(e) => { setMessage(e.target.value) }}
          variant="outlined"
        />

        <Button type="submit" variant="contained" className={classes.FeedbackButton}>
          Send Feedback
        </Button>
      </form>
    </Box>
  )
}

export default FeedbackForm
