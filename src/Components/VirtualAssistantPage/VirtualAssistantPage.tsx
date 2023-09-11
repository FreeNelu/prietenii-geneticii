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
import { HfInferenceEndpoint } from '@huggingface/inference'

interface Token {
  special: boolean
  text: string
}

interface Response {
  token: Token
}

const VirtualAssistantPage = () => {
  const [userInput, setUserInput] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { classes } = useStyles()

  const hf = new HfInferenceEndpoint('https://qgury1g624ssnc7a.eu-west-1.aws.endpoints.huggingface.cloud', 'QgqIRNCfOzDBcaEeMUPfAzaJVvdCCdyuaVFdLYenZnJDuehHIEZmGIARfZpLtfcNzEjTGTETGhWRgXXxmdRPkHSWCKOZJHRZCfjOLVZYWeFhsbFPVDDdhQaDBesCwEOc')

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const gen_kwargs = {
    max_new_tokens: 150,
    top_k: 30,
    top_p: 0.9,
    temperature: 0.1,
    repetition_penalty: 1.1,
    stop_sequences: ['.', '</s>']
  }

  const handleGenerateText = async () => {
    const prompt = userInput
    setIsLoading(true)
    setResponse('')
    setUserInput('')
    const stream = hf.textGenerationStream({ inputs: prompt, parameters: gen_kwargs })

    for await (const r of stream) {
      setIsLoading(false)
      if (r.token.special) {
        continue
      }
      if (gen_kwargs.stop_sequences.includes(r.token.text)) {
        setResponse(prevText => prevText + '.')
        break
      }
      setResponse(prevText => prevText + r.token.text)
    }
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
            borderRadius: '4px',
            marginBottom: '8px'
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
                  'Ce sunt bolile genetice rare?'
                )
              }}
            >
              Bolile genetice rare
            </Button>

            <Button
              className={classes.QueryButton}
              onClick={() => {
                setUserInput(
                  "Ce este organizația 'Prietenii Geneticii'?"
                )
              }}
            >
              Organizația Prietenii Geneticii
            </Button>
          </Box>
          <Button
            variant="contained"
            color="primary"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={handleGenerateText}
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
