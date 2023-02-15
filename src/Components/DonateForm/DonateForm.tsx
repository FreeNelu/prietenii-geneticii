import React from 'react'
import { useStyles } from './DonateForm.styles'
import { Box, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent, Typography } from '@mui/material'
import Button from '@mui/material/Button/Button'

interface DonateFormProps {
  className?: string
  imageUrl?: string
}

function DonateForm (props: DonateFormProps) {
  const { classes, cx } = useStyles()
  const [currency, setCurrency] = React.useState('RON')
  const [isMonthlyDonation, setIsMonthlyDonation] = React.useState<boolean>(true)
  const [donation, setDonation] = React.useState<number>(100)
  const headerLabel = isMonthlyDonation ? 'Alege cât dorești să oferi lunar' : 'Alege cât dorești să oferi'

  const handleChangeCurrency = (event: SelectChangeEvent) => {
    setCurrency(event.target.value)
  }

  const SuggestedDonation = (props: { value: number }) => {
    return (
      <Box
        className={cx(classes.BaseSuggestion, donation === props.value ? classes.SelectedSuggestion : '')}
        onClick={() => { setDonation(props.value) }}
      >
        <Typography variant='subtitle1' sx={{ marginRight: '4px' }}>{props.value}</Typography>
        <Typography variant='caption'>{currency}</Typography>
      </Box>
    )
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
            <Box className={classes.FormHeader}>
              <Typography variant='subtitle1' sx={{ padding: '0px 8px' }}>{headerLabel}</Typography>
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
                  <MenuItem value={'RON'}>RON</MenuItem>
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
            </Box>
          </Box>
        </Box>
  )
}

export default DonateForm
