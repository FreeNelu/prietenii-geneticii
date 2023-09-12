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

  const withContext = (question: string) => {
    const context =
      "I am a chatbot in the webstite for 'Prietenii Geneticii', a charity non-profit organization for patients suffering from rare genetic diseases. This is my answer to the question '"
    return context + question + "':"
  }

  const hf = new HfInferenceEndpoint(
    'https://zy3lugrb02mdwblp.us-east-1.aws.endpoints.huggingface.cloud',
    'QgqIRNCfOzDBcaEeMUPfAzaJVvdCCdyuaVFdLYenZnJDuehHIEZmGIARfZpLtfcNzEjTGTETGhWRgXXxmdRPkHSWCKOZJHRZCfjOLVZYWeFhsbFPVDDdhQaDBesCwEOc'
  )

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const gen_kwargs = {
    max_new_tokens: 150,
    top_k: 30,
    top_p: 0.9,
    temperature: 0.1,
    repetition_penalty: 1.1,
    stop_sequences: ['</s>']
  }

  const truncateUnwantedContent = (response: string) => {
    const patterns = [
      /I am a chatbot/i,
      /I'm a chatbot/i
    ]

    for (const pattern of patterns) {
      const firstMatchIndex = response.search(pattern)

      if (firstMatchIndex !== -1) {
        const remainingText = response.substring(firstMatchIndex + 1) // +1 to skip past the first character of the first match
        const secondMatchIndex = remainingText.search(pattern)

        if (secondMatchIndex !== -1) { // If there's a second occurrence
          return response.substring(0, firstMatchIndex + 1 + secondMatchIndex).trim()
        } else if (firstMatchIndex !== 0) { // If the first occurrence is not at the start
          return response.substring(0, firstMatchIndex).trim()
        }
      }
    }

    return response
  }

  const handleGenerateText = async () => {
    const prompt = withContext(userInput)
    setIsLoading(true)
    setResponse('')
    setUserInput('')

    let fullResponse = ''
    const stream = hf.textGenerationStream({
      inputs: prompt,
      parameters: gen_kwargs
    })

    // Collect all tokens
    for await (const r of stream) {
      if (!r.token.special) {
        fullResponse += r.token.text
      }
    }

    // Post-process the response
    if (!fullResponse.endsWith('.')) {
      const lastPeriodIndex = fullResponse.lastIndexOf('.')
      if (lastPeriodIndex !== -1) {
        fullResponse = fullResponse.substring(0, lastPeriodIndex + 1)
      } else {
        fullResponse += '.' // If no period is found, append one
      }
    }

    // Ensure the response starts with a letter from any alphabet
    const validStartRegex = /^[^\p{L}]*/u
    fullResponse = fullResponse.replace(validStartRegex, '')
    fullResponse = truncateUnwantedContent(fullResponse)
    setIsLoading(false)

    // Display the full response character-by-character
    for (const char of fullResponse) {
      setResponse((prevText) => prevText + char)
      await new Promise((resolve) => setTimeout(resolve, 10)) // Adjust delay as needed
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
        <Typography fontWeight={700} variant="h3" className={classes.Text}>
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
            marginTop: '8px',
            flexDirection: { xs: 'column', md: 'row' },
            marginBottom: '8px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              marginBottom: '8px'
            }}
          >
            <Typography>Sugestii: </Typography>
            <Box
              sx={{
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center'
              }}
            >
              <Button
                className={classes.QueryButton}
                onClick={() => {
                  setUserInput('Who is affected by rare genetic diseases?')
                }}
              >
                Genetic diseases
              </Button>
              <Button
                className={classes.QueryButton}
                onClick={() => {
                  setUserInput("What is Down's syndrome?")
                }}
              >
                {"Down's syndrome"}
              </Button>
              <Button
                className={classes.QueryButton}
                onClick={() => {
                  setUserInput(
                    "What does the 'Prietenii Geneticii' organization do?"
                  )
                }}
              >
                Prietenii Geneticii
              </Button>
            </Box>
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
