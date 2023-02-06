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
  const [isMonthlyDonation, setIsMonthlyDonation] = React.useState(true)

  const handleChangeCurrency = (event: SelectChangeEvent) => {
    setCurrency(event.target.value)
  }

  return (
        <Box className={cx(classes.Box, props.className)}>
          <Box className={classes.TypeContainer}>
              <Button
                fullWidth
                className={!isMonthlyDonation ? classes.SelectedType : classes.RegularButton}
                sx={{
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 0,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 0
                }}
                onClick={() => { setIsMonthlyDonation(false) }}
              >
                Donație unică
              </Button>
              <Button
                fullWidth
                className={isMonthlyDonation ? classes.SelectedType : classes.RegularButton}
                sx={{
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 8,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 16
                }}
                onClick={() => { setIsMonthlyDonation(true) }}
              >
                Donație lunară
              </Button>
          </Box>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Monedă</InputLabel>
            <Select
              labelId="curency-select-small"
              id="curency-select-small"
              value={currency}
              label="Currency"
              onChange={handleChangeCurrency}
            >
              <MenuItem value={'RON'}>RON</MenuItem>
              <MenuItem value={'EUR'}>EUR</MenuItem>
              <MenuItem value={'USD'}>USD</MenuItem>
            </Select>
          </FormControl>
        </Box>
  )
}

export default DonateForm
