import React, { type FormEvent } from 'react'
import { useStyles } from './DonateForm.styles'
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
  Typography,
  TextField
} from '@mui/material'
import Button from '@mui/material/Button/Button'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import PayPalButtonsWrapper from './PaypalButtonsWrapper'
import GetAppIcon from '@mui/icons-material/GetApp'
import { PDFDocument } from 'pdf-lib'

interface DonateFormProps {
  className?: string
  imageUrl?: string
}

const DEFAULT_DONATION = 25

function DonateForm (props: DonateFormProps) {
  const { classes, cx } = useStyles()
  const [submitter, setSubmitter] = React.useState('')
  const [currency, setCurrency] = React.useState('EUR')
  const [isCompany, setIsCompany] = React.useState<boolean>(false)
  const [donation, setDonation] = React.useState<number>(DEFAULT_DONATION)
  const [inputValue, setInputValue] = React.useState<string>('')
  const [showPayPalButtons, setShowPayPalButtons] =
    React.useState<boolean>(false)
  const headerLabel = isCompany
    ? 'Alege-ți suma pe care doriți să o donați'
    : 'Alege suma pe care dorești să o donezi'
  const [companyData, setCompanyData] = React.useState({
    nume: '',
    initialaTatalui: '',
    prenume: '',
    strada: '',
    numar: '',
    bloc: '',
    scara: '',
    etaj: '',
    apartament: '',
    judetSector: '',
    localitate: '',
    codPostal: '',
    cnp: '',
    email: '',
    telefon: '',
    fax: ''
  })

  const CompanyForm = () => (
    <Box className={cx(classes.Container, classes.MainContainer)}>
      <Box
        className={classes.FormHeader}
        sx={{ padding: { xs: '16px 8px 16px 16px', md: '8px 0px 8px 8px' } }}
      >
        <Typography variant="subtitle1">
          Date de identificare a contribuabilului
        </Typography>
      </Box>
      <Box className={classes.FormBody}>
        <TextField
          label="Nume"
          name="nume"
          value={companyData.nume}
          onChange={handleCompanyDataChange}
          className={classes.ValueInput}
          required
          sx={{
            flex: { xs: '1 0 calc(100% - 16px)', md: '1 0 calc(33% - 16px)' }
          }}
        />
        <TextField
          label="Iniţiala tatălui"
          name="initialaTatalui"
          inputProps={{ maxLength: 1 }}
          value={companyData.initialaTatalui}
          onChange={handleCompanyDataChange}
          className={classes.ValueInput}
          sx={{
            flex: { xs: '1 0 calc(100% - 16px)', md: '1 0 calc(33% - 16px)' }
          }}
        />
        <TextField
          label="Prenume"
          name="prenume"
          value={companyData.prenume}
          onChange={handleCompanyDataChange}
          className={classes.ValueInput}
          required
          sx={{
            flex: { xs: '1 0 calc(100% - 16px)', md: '1 0 calc(33% - 16px)' }
          }}
        />
        <TextField
          label="Stradă"
          name="strada"
          value={companyData.strada}
          onChange={handleCompanyDataChange}
          className={classes.ValueInput}
          required
          sx={{
            flex: { xs: '1 0 calc(50% - 16px)', md: '1 0 calc(50% - 16px)' }
          }}
        />
        <TextField
          label="Număr"
          name="numar"
          value={companyData.numar}
          onChange={handleCompanyDataChange}
          className={classes.ValueInput}
          type="number"
          required
          sx={{
            flex: { xs: '1 0 calc(50% - 16px)', md: '1 0 calc(50% - 16px)' }
          }}
        />
        <TextField
          label="Bloc"
          name="bloc"
          value={companyData.bloc}
          onChange={handleCompanyDataChange}
          className={classes.ValueInput}
          sx={{
            flex: { xs: '1 0 calc(50% - 16px)', md: '1 0 calc(25% - 16px)' }
          }}
        />
        <TextField
          label="Scară"
          name="scara"
          value={companyData.scara}
          onChange={handleCompanyDataChange}
          className={classes.ValueInput}
          sx={{
            flex: { xs: '1 0 calc(50% - 16px)', md: '1 0 calc(25% - 16px)' }
          }}
        />
        <TextField
          label="Etaj"
          name="etaj"
          value={companyData.etaj}
          onChange={handleCompanyDataChange}
          className={classes.ValueInput}
          type="number"
          sx={{
            flex: { xs: '1 0 calc(50% - 16px)', md: '1 0 calc(25% - 16px)' }
          }}
        />
        <TextField
          label="Apartament"
          name="apartament"
          value={companyData.apartament}
          onChange={handleCompanyDataChange}
          className={classes.ValueInput}
          sx={{
            flex: { xs: '1 0 calc(50% - 16px)', md: '1 0 calc(25% - 16px)' }
          }}
        />
        <TextField
          label="Judeţ/Sector"
          name="judetSector"
          value={companyData.judetSector}
          onChange={handleCompanyDataChange}
          className={classes.ValueInput}
          required
          sx={{
            flex: { xs: '1 0 calc(100% - 16px)', md: '1 0 calc(33% - 16px)' }
          }}
        />
        <TextField
          label="Localitate"
          name="localitate"
          value={companyData.localitate}
          onChange={handleCompanyDataChange}
          className={classes.ValueInput}
          required
          sx={{
            flex: { xs: '1 0 calc(50% - 16px)', md: '1 0 calc(33% - 16px)' }
          }}
        />
        <TextField
          label="Cod poştal"
          name="codPostal"
          value={companyData.codPostal}
          onChange={handleCompanyDataChange}
          className={classes.ValueInput}
          type="number"
          required
          sx={{
            flex: { xs: '1 0 calc(50% - 16px)', md: '1 0 calc(33% - 16px)' }
          }}
        />
        <TextField
          label="Cod numeric personal / Număr de identificare fiscală"
          name="cnp"
          value={companyData.cnp}
          onChange={handleCompanyCnpChange}
          className={classes.ValueInput}
          type="number"
          required
          sx={{
            flex: { xs: '1 0 calc(100% - 16px)', md: '1 0 calc(75% - 16px)' }
          }}
        />
        <TextField
          label="Fax"
          name="fax"
          value={companyData.fax}
          onChange={handleCompanyDataChange}
          className={classes.ValueInput}
          type="number"
          sx={{
            flex: { xs: '1 0 calc(25% - 16px)', md: '1 0 calc(25% - 16px)' }
          }}
        />
        <TextField
          label="E-mail"
          name="email"
          value={companyData.email}
          onChange={handleCompanyDataChange}
          className={classes.ValueInput}
          type="email"
          required
          sx={{ flex: '1 0 calc(75% - 16px)' }}
        />
        <TextField
          label="Telefon"
          name="telefon"
          value={companyData.telefon}
          onChange={handleCompanyDataChange}
          className={classes.ValueInput}
          type="number"
          required
          sx={{ flex: '1 0 calc(100% - 16px)' }}
        />
      </Box>
      <Box className={classes.FormFooterCompany}>
          <Typography variant="subtitle1" sx={{ flex: 9 }}>
            Descarcă în format PDF cererea privind destinația sumei reprezentând până la 3,5% din impozitul anual datorat.
          </Typography>
        <Button
          type="submit"
          id="downloadButton"
          variant="contained"
          disableRipple
          disableFocusRipple
          disableTouchRipple
          className={classes.DownloadButton}
          onClick={handleSubmitButtonClick}
        >
      <GetAppIcon />
        </Button>
      </Box>
    </Box>
  )

  const SuggestedDonation = (props: { value: number }) => {
    return (
      <Box
        className={cx(
          classes.BaseSuggestion,
          donation === props.value ? classes.SelectedSuggestion : ''
        )}
        onClick={() => {
          setDonation(props.value)
          setInputValue('')
        }}
      >
        <Typography variant="subtitle1" sx={{ marginRight: '4px' }}>
          {props.value}
        </Typography>
        <Typography variant="caption">{currency}</Typography>
      </Box>
    )
  }

  const handleDonationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const regex = /^[0-9\b]+$/
    const newDonation = Number.parseFloat(e.target.value)
    if (regex.test(e.target.value)) {
      setDonation(newDonation)
      setInputValue(e.target.value)
    } else {
      setDonation(DEFAULT_DONATION)
      setInputValue('')
    }
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (submitter === 'downloadButton') {
      void generatePDF()
      return
    }
    // Start paypal flow
    setShowPayPalButtons(true)
  }

  const handleSubmitButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSubmitter(event.currentTarget.id)
  }

  const handleChangeCurrency = (event: SelectChangeEvent) => {
    setCurrency(event.target.value)
  }

  const handleCompanyDataChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCompanyData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  const handleCompanyCnpChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 13)
    setCompanyData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  const generatePDF = async () => {
    const formPdfBytes = await fetch(`${process.env.PUBLIC_URL}/CompanyPDF.pdf`).then(async res => await res.arrayBuffer())

    const pdfDoc = await PDFDocument.load(formPdfBytes)
    const form = pdfDoc.getForm()

    form.getTextField('Textfield').setText(new Date().getFullYear().toString())
    form.getTextField('Textfield0').setText(companyData.nume)
    if (companyData.initialaTatalui) {
      form.getTextField('Textfield1').setText(companyData.initialaTatalui)
    }
    form.getTextField('Textfield2').setText(companyData.cnp)
    form.getTextField('Textfield3').setText(companyData.prenume)
    form.getTextField('Textfield4').setText(companyData.email)
    form.getTextField('Textfield5').setText(companyData.strada)
    form.getTextField('Textfield6').setText(companyData.numar)
    form.getTextField('Textfield7').setText(companyData.telefon)
    if (companyData.bloc) { form.getTextField('Textfield8').setText(companyData.bloc) }
    if (companyData.scara) { form.getTextField('Textfield9').setText(companyData.scara) }
    if (companyData.etaj) { form.getTextField('Textfield10').setText(companyData.etaj) }
    if (companyData.apartament) { form.getTextField('Textfield11').setText(companyData.apartament) }
    form.getTextField('Textfield12').setText(companyData.judetSector)
    form.getTextField('Textfield13').setText(companyData.localitate)
    form.getTextField('Textfield14').setText(companyData.codPostal)
    if (companyData.apartament) { form.getTextField('Textfield15').setText(companyData.fax) }

    const pdfBytes = await pdfDoc.save()
    // Create a blob from the PDF bytes
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' })
    // Open the PDF in a new tab
    const pdfUrl = URL.createObjectURL(pdfBlob)
    window.open(pdfUrl, '_blank')
  }

  return (
    <Box className={cx(classes.Box, props.className)}>
      <form onSubmit={onSubmit}>
        <Box className={classes.Container}>
          <button
            className={
              !isCompany ? classes.SelectedButton : classes.RegularButton
            }
            style={{
              borderTopLeftRadius: 16,
              borderBottomLeftRadius: 8
            }}
            onClick={(e) => {
              setIsCompany(false)
              e.preventDefault()
            }}
          >
            <Typography variant="button">Persoană fizică</Typography>
          </button>
          <button
            className={
              isCompany ? classes.SelectedButton : classes.RegularButton
            }
            style={{
              borderTopRightRadius: 16,
              borderBottomRightRadius: 8
            }}
            onClick={(e) => {
              setShowPayPalButtons(false)
              setIsCompany(true)
              e.preventDefault()
            }}
          >
            <Typography variant="button">Persoană juridică</Typography>
          </button>
        </Box>

        {isCompany && <CompanyForm />}

        <Box className={cx(classes.Container, classes.MainContainer)}>
          <Box
            className={classes.FormHeader}
            sx={{
              padding: { xs: '16px 8px 16px 16px', md: '8px 0px 8px 8px' }
            }}
          >
            <Typography variant="subtitle1" style={{ paddingRight: 12 }}>
              {headerLabel}
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel
                className={classes.CurrencyLabel}
                id="demo-select-small"
              >
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
            <SuggestedDonation value={25} />
            <SuggestedDonation value={50} />
            <SuggestedDonation value={100} />
            <SuggestedDonation value={500} />
            <TextField
              sx={{ flex: 2, minWidth: 200 }}
              className={classes.ValueInput}
              label="Altă sumă"
              variant="outlined"
              type="text"
              onChange={(e) => {
                handleDonationChange(e)
              }}
              value={inputValue}
            />
            <Typography
              sx={{
                position: 'absolute',
                bottom: 40,
                right: 50,
                color: 'grey'
              }}
            >
              {currency}
            </Typography>
          </Box>
          <Box className={classes.FormFooter}>
            {!showPayPalButtons && (
              <Button
                type="submit"
                id="donateButton"
                variant="contained"
                disableRipple
                disableFocusRipple
                disableTouchRipple
                className={classes.DonateButton}
                onClick={handleSubmitButtonClick}
              >
                <Typography variant="h6">
                  {'DONEAZĂ ' + donation.toString() + ' ' + currency}
                </Typography>
              </Button>
            )}
            <Box display={showPayPalButtons ? 'block' : 'none'}>
              <PayPalScriptProvider
                options={{
                  'client-id':
                    'AdWCnO4PQa5N7dgLSPUB3U2itbC9HlNMytAoTV87Lx2CRXTwEMZQ85ywy3H41MFH1XlQfAwqBd_jKLev',
                  components: 'buttons',
                  currency
                }}
              >
                <PayPalButtonsWrapper
                  currency={currency}
                  amount={donation.toString()}
                />
              </PayPalScriptProvider>
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default DonateForm
