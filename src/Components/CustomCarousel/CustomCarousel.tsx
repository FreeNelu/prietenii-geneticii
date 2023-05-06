import React, { useState } from 'react'
import { useStyles } from './CustomCarousel.styles'
import CustomCard from 'Components/Card/CustomCard'
import { IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import review1 from 'Assets/review1.jpg'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

interface CustomCarouselProps {
  className?: string
  containerClassName?: string
}

function CustomCarousel (props: CustomCarouselProps) {
  const { className, containerClassName } = props
  const { classes } = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const handleBackClick = () => {
    let newIndex = currentIndex - 1
    if (newIndex < 0) { newIndex = reviews.length - 1 }
    setCurrentIndex(newIndex)
  }

  const handleNextClick = () => {
    let newIndex = currentIndex + 1
    if (newIndex > reviews.length - 1) { newIndex = 0 }
    setCurrentIndex(newIndex)
  }

  const reviews = [
    <CustomCard
      imageUrl={review1}
      key={'review1'}
      name="Dr. Ing. Antonius N. STANCIU"
      description="Am decis să mă implic în Asociația „Prietenii Geneticii” și în proiectele acestea pentru că, deși nu sunt medic (ci doar specialist IT), am văzut o mare asemănare sistemică între codurile care animă un sistem digital de calcul și codul genetic care guvernează viața. Desigur, vorbim despre sisteme de complexitate foarte diferită (cele create de om fiind mult mai accesibile), dar principiile sunt cam aceleași.\nCa cercetător am intuit faptul că suntem chiar la începutul cunoașterii (în ciuda cunoștințelor acumulate în ultimele trei decenii), având în față un teren cvasi-virgin de investigat. Prin eforturile doamnei Prof.univ.Dr.med. Maria PUIU avem la dispoziție, chiar aici în urbea noastră, aparatură de milioane de euro care ne permite să cercetăm, nu doar să visăm, în domeniu. Această aparatură generează, pentru un singur genom, cantități uriașe de date (de peste 100 GB) a căror prelucrare manuală ar fi extrem de dificilă și supusă erorilor umane (pe lângă durata nefezabilă de timp), motiv pentru care am înțeles că în acest domeniu medicii și [bio]inginerii trebuie să lucreze cot la cot. Exact din acest motiv am fost solicitat să evaluez partea inginerească a două teze de doctorat de la University College of London, teze care aveau ca obiect prelucrarea automată a datelor genetice.\nPrin urmare, consider că este un domeniu de mare viitor, strâns legat de patologia bolilor rare, domeniu care urmărește să identifice cauzele afecțiunilor și să creeze cadrul necesar descoperirii tratamentelor care vor elimina bolile, nu doar simptomele acestora. În opinia mea, acesta este cel mai nobil scop și mă bucur că mi s-a oferit șansa de a pune umărul la dezvoltarea acestui domeniu."
    />,
    <CustomCard
      imageUrl={''}
      key={'review2'}
      name="Review 2 Name"
      description="Am decis să mă implic în Asociația „Prietenii Geneticii” și în proiectele acestea pentru că, deși nu sunt medic (ci doar specialist IT), am văzut o mare asemănare sistemică între codurile care animă un sistem digital de calcul și codul genetic care guvernează viața. Desigur, vorbim despre sisteme de complexitate foarte diferită (cele create de om fiind mult mai accesibile), dar principiile sunt cam aceleași.\nCa cercetător am intuit faptul că suntem chiar la începutul cunoașterii (în ciuda cunoștințelor acumulate în ultimele trei decenii), având în față un teren cvasi-virgin de investigat. Prin eforturile doamnei Prof.univ.Dr.med. Maria PUIU avem la dispoziție, chiar aici în urbea noastră, aparatură de milioane de euro care ne permite să cercetăm, nu doar să visăm, în domeniu. Această aparatură generează, pentru un singur genom, cantități uriașe de date (de peste 100 GB) a căror prelucrare manuală ar fi extrem de dificilă și supusă erorilor umane (pe lângă durata nefezabilă de timp), motiv pentru care am înțeles că în acest domeniu medicii și [bio]inginerii trebuie să lucreze cot la cot. Exact din acest motiv am fost solicitat să evaluez partea inginerească a două teze de doctorat de la University College of London, teze care aveau ca obiect prelucrarea automată a datelor genetice.\nPrin urmare, consider că este un domeniu de mare viitor, strâns legat de patologia bolilor rare, domeniu care urmărește să identifice cauzele afecțiunilor și să creeze cadrul necesar descoperirii tratamentelor care vor elimina bolile, nu doar simptomele acestora. În opinia mea, acesta este cel mai nobil scop și mă bucur că mi s-a oferit șansa de a pune umărul la dezvoltarea acestui domeniu."
    />
  ]

  return (
    <Box
      className={containerClassName}
      sx={{
        flexWrap: {
          xs: 'wrap',
          md: 'nowrap'
        }
      }}
    >
      <Box
        className={classes.TextBox}
        sx={{
          paddingLeft: {
            md: '128px',
            xs: '32px'
          },
          paddingRight: {
            xs: '32px'
          },
          textAlign: {
            xs: 'center',
            md: 'left'
          }
        }}
      >
        <Typography
          variant={isMobile ? 'h3' : 'h2'}
          gutterBottom
          fontWeight={700}
        >
          Împreună
          <br />
          schimbăm vieți.
        </Typography>
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          className={classes.Caption}
        >
          Află cum sprijinul tău face o diferență reală pentru persoanele
          afectate de boli genetice.
        </Typography>
      </Box>

      <Box
        className={className}
        sx={{
          marginTop: {
            xs: '64px',
            md: '192px'
          },
          marginRight: {
            md: '128px'
          },
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <IconButton className={classes.IconButton} onClick={handleBackClick}>
          <KeyboardArrowLeftIcon fontSize="large" />
        </IconButton>
        {reviews[currentIndex]}
        <IconButton className={classes.IconButton} onClick={handleNextClick}>
          <KeyboardArrowRightIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  )
}

export default CustomCarousel
