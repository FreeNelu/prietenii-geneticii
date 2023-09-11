import React, { useState } from 'react'
import {
  Box,
  Typography,
  Button,
  TextareaAutosize,
  TextField
} from '@mui/material'
import Loader from 'Components/BlogPage/Loader'
import { useStyles } from './VirtualAssistantPage.styles'
import nurseMale from 'Assets/nurseMale.png'

interface QueryInput {
  inputs: string
}

interface QueryResponse {
  0: {
    generated_text: string
  }
}

async function query (data: QueryInput): Promise<QueryResponse> {
  const response = await fetch(
    'https://hd9byeh17dqqd22u.us-east-1.aws.endpoints.huggingface.cloud',
    {
      headers: {
        Authorization: 'Bearer xxKFwxatKWuovWZTKtNKXfAsrdOBqstnVihhNyKpXmOfLMtYgIrDaFJwCmtFdlMrRrRsgnEisENoiVeClaVHTfcRCUVQbASxCYcMprKhWwwCJNRgCYsxmoOiVJhoZzJs',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    }
  )
  const result: QueryResponse = await response.json()
  return result
}

const VirtualAssistantPage = () => {
  const [userInput, setUserInput] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { classes } = useStyles()

  const handleQuery = () => {
    void (async () => {
      setIsLoading(true)
      setResponse('')
      const data = { inputs: userInput }
      const result = await query(data)
      console.log(result)
      setIsLoading(false)
      setResponse(
        result[0].generated_text ??
        'Scuze, am întâmpinat o problema. Mai încearcă.'
      )
    })()
  }

  return (
    <Box className={classes.AssistantContainer}>
      <Box
        className={classes.ChatContainer}
        sx={{
          width: { xs: '80%', md: '70%', lg: '60%' }
        }}
      >
        <Typography fontWeight={700} variant='h3' className={classes.Text}>
          <span className={classes.PurpleShadow}>A</span>sistent Virtual
        </Typography>
        {isLoading && <Loader className={classes.Loader} />}
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            border: '0px solid transparent',
            borderBottom: '0px',
            borderRadius: '4px'
          }}
        >
          <Box
            component="img"
            alt="Assistant image"
            src={nurseMale}
            className={classes.ImageBox}
            sx={{
              height: response ? 100 : 0,
              width: response ? 100 : 0
            }}
          />
          <TextareaAutosize
            className={classes.TextArea}
            value={response}
            readOnly
          />
        </Box>
        <TextField
          className={classes.ValueInput}
          label="Introduceți întrebarea dvs."
          variant="outlined"
          fullWidth
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value)
          }}
        />

        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            marginTop: '8px'
          }}
        >
          <Box
            sx={{ display: 'flex', textAlign: 'center', alignItems: 'center' }}
          >
            <Typography>Sugestii: </Typography>
            <Button
              className={classes.QueryButton}
              onClick={() => {
                setUserInput(
                  'Poți să-mi spui mai multe despre bolile genetice rare?'
                )
              }}
            >
              Bolile genetice rare
            </Button>

            <Button
              className={classes.QueryButton}
              onClick={() => {
                setUserInput(
                  "Povestește-mi despre organizația 'Prietenii Geneticii'."
                )
              }}
            >
              Organizația Prietenii Geneticii
            </Button>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleQuery}
            className={classes.PromptButton}
            disabled={!userInput}
          >
            Trimite
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default VirtualAssistantPage
