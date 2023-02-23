import React from 'react'
import { useStyles } from './DonateForm.styles'
import { Box, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent, Typography, TextField } from '@mui/material'
import Button from '@mui/material/Button/Button'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import PayPalButtonsWrapper from './PaypalButtonsWrapper'

interface DonateFormProps {
  className?: string
  imageUrl?: string
}

const DEFAULT_DONATION = 100

function DonateForm (props: DonateFormProps) {
  const { classes, cx } = useStyles()
  const [currency, setCurrency] = React.useState('EUR')
  const [isMonthlyDonation, setIsMonthlyDonation] = React.useState<boolean>(true)
  const [donation, setDonation] = React.useState<number>(DEFAULT_DONATION)
  const [inputValue, setInputValue] = React.useState<string>('')
  const [showPayPalButtons, setShowPayPalButtons] = React.useState<boolean>(false)
  const headerLabel = isMonthlyDonation ? 'Alege cât dorești să oferi lunar' : 'Alege cât dorești să oferi'

  const handleChangeCurrency = (event: SelectChangeEvent) => {
    setCurrency(event.target.value)
  }

  const SuggestedDonation = (props: { value: number }) => {
    return (
      <Box
        className={cx(classes.BaseSuggestion, donation === props.value ? classes.SelectedSuggestion : '')}
        onClick={() => { setDonation(props.value); setInputValue(''); setShowPayPalButtons(false) }}
      >
        <Typography variant='subtitle1' sx={{ marginRight: '4px' }}>{props.value}</Typography>
        <Typography variant='caption'>{currency}</Typography>
      </Box>
    )
  }

  const handleDonationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const regex = /^[0-9\b]+$/
    const newDonation = Number.parseFloat(e.target.value)
    if (regex.test(e.target.value)) {
      setDonation(newDonation)
      setInputValue(e.target.value)
    } else {
      setDonation(DEFAULT_DONATION)
      setInputValue('')
    }
    setShowPayPalButtons(false)
  }

  const onDonate = () => {
    // Start paypal flow
    setShowPayPalButtons(true)
  }

  return (
        <Box className={cx(classes.Box, props.className)}>
          <Box className={classes.Container}>
              <button
                className={!isMonthlyDonation ? classes.SelectedButton : classes.RegularButton}
                style={{
                  borderTopLeftRadius: 16,
                  borderBottomLeftRadius: 8
                }}
                onClick={() => { setIsMonthlyDonation(false) }}
              >
                <Typography variant='button'>Donație unică</Typography>
              </button>
              <button
                className={isMonthlyDonation ? classes.SelectedButton : classes.RegularButton}
                style={{
                  borderTopRightRadius: 16,
                  borderBottomRightRadius: 8
                }}
                onClick={() => { setIsMonthlyDonation(true) }}
              >
                <Typography variant='button'>Donație lunară</Typography>
              </button>
          </Box>

          <Box className={cx(classes.Container, classes.MainContainer)}>
            <Box className={classes.FormHeader} sx={{ padding: { xs: '16px 8px 16px 16px', md: '8px 0px 8px 8px' } }}>
              <Typography variant='subtitle1'>{headerLabel}</Typography>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel
                  className={classes.CurrencyLabel}
                  id="demo-select-small">
                    Monedă
                </InputLabel>
                <Select
                  labelId="curency-select-small"
                  id="curency-select-small"
                  value={currency}
                  label="Currency"
                  onChange={handleChangeCurrency}
                  className={classes.CurrencyDropdown}
                >
                  <MenuItem value={'EUR'}>EUR</MenuItem>
                  <MenuItem value={'USD'}>USD</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box className={classes.FormBody}>
              <SuggestedDonation value={50}/>
              <SuggestedDonation value={100}/>
              <SuggestedDonation value={150}/>
              <SuggestedDonation value={200}/>
              <TextField
                sx={{ flex: 2, minWidth: 200 }}
                className={classes.ValueInput}
                label="Altă sumă"
                variant="outlined"
                type="text"
                onChange={(e) => { handleDonationChange(e) }}
                value={inputValue}
              />
              <Typography sx={{ position: 'absolute', bottom: 40, right: 50, color: 'grey' }}>{currency}</Typography>
            </Box>
            <Box className = {classes.FormFooter}>
              {!showPayPalButtons &&
              <Button
                onClick={onDonate}
                disableRipple
                disableFocusRipple
                disableTouchRipple
                className={classes.DonateButton}
              >
               <Typography variant='h6'>{'DONEAZĂ ' + donation.toString() + ' ' + currency}</Typography>
              </Button>
              }
              <Box display={showPayPalButtons ? 'block' : 'none'}>
                <PayPalScriptProvider
                  options={{
                    'client-id': 'AdWCnO4PQa5N7dgLSPUB3U2itbC9HlNMytAoTV87Lx2CRXTwEMZQ85ywy3H41MFH1XlQfAwqBd_jKLev',
                    components: 'buttons',
                    currency
                  }}
                >
                  <PayPalButtonsWrapper currency={currency} amount={donation.toString()}/>
                </PayPalScriptProvider>
              </Box>
            </Box>
          </Box>
        </Box>
  )
}

export default DonateForm
