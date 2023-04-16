import React, { useState } from 'react'

import { useStyles } from './FeedbackForm.styles'
import { Typography, TextField, Button, Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

const FeedbackForm = () => {
  const { classes, cx } = useStyles()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [feedbackSuccess, setFeedbackSuccess] = useState(false)

  const recipientEmail = ''

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Submit feedback and set feedbackSuccess based on whether it was successful or not
    setFeedbackSuccess(true)
    setDialogOpen(true)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  return (
    <Box className={classes.FormContainer} sx={{
      width: { xs: '90%', md: '80%', lg: '60%' }
    }}>
      <form className={classes.Form} onSubmit={handleSubmit}>
        <TextField
          className={cx(classes.TextField, classes.FeedbackInput)}
          label="Nume"
          value={name}
          onChange={(e) => { setName(e.target.value) }}
          variant="outlined"
          required
        />

        <TextField
          className={cx(classes.TextField, classes.FeedbackInput)}
          label="Email"
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
          variant="outlined"
          required
        />

        <TextField
          className={cx(classes.TextField, classes.FeedbackInput)}
          label="Mesaj"
          multiline
          rows={4}
          value={message}
          onChange={(e) => { setMessage(e.target.value) }}
          variant="outlined"
          required
        />

        <Button type="submit" variant="contained" className={classes.FeedbackButton}>
          Trimite feedback
        </Button>
      </form>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>{feedbackSuccess ? 'Mulțumim pentru feedback-ul dvs.!' : 'Eroare la trimiterea feedback-ului'}</DialogTitle>
        <DialogContent>{feedbackSuccess ? 'Feedback-ul dvs. a fost trimis cu succes.' : 'Ne pare rău, feedback-ul dvs. nu a putut fi trimis.'}</DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default FeedbackForm
