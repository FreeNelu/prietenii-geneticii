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
    if (newIndex < 0) {
      newIndex = reviews.length - 1
    }
    setCurrentIndex(newIndex)
  }

  const handleNextClick = () => {
    let newIndex = currentIndex + 1
    if (newIndex > reviews.length - 1) {
      newIndex = 0
    }
    setCurrentIndex(newIndex)
  }

  const reviews = [
    <CustomCard
      imageUrl={review1}
      key={'review1'}
      name="Dr. Ing. Antonius N. STANCIU"
      description={`Am decis să mă implic în Asociația „Prietenii Geneticii” și în proiectele acestea pentru că, deși nu sunt medic (ci doar specialist IT), am văzut o mare asemănare sistemică între codurile care animă un sistem digital de calcul și codul genetic care guvernează viața. Desigur, vorbim despre sisteme de complexitate foarte diferită (cele create de om fiind mult mai accesibile), dar principiile sunt cam aceleași.
      Ca cercetător am intuit faptul că suntem chiar la începutul cunoașterii (în ciuda cunoștințelor acumulate în ultimele trei decenii), având în față un teren cvasi-virgin de investigat. Prin eforturile doamnei Prof.univ.Dr.med. Maria PUIU avem la dispoziție, chiar aici în urbea noastră, aparatură de milioane de euro care ne permite să cercetăm, nu doar să visăm, în domeniu. Această aparatură generează, pentru un singur genom, cantități uriașe de date (de peste 100 GB) a căror prelucrare manuală ar fi extrem de dificilă și supusă erorilor umane (pe lângă durata nefezabilă de timp), motiv pentru care am înțeles că în acest domeniu medicii și [bio]inginerii trebuie să lucreze cot la cot. Exact din acest motiv am fost solicitat să evaluez partea inginerească a două teze de doctorat de la University College of London, teze care aveau ca obiect prelucrarea automată a datelor genetice.
      Prin urmare, consider că este un domeniu de mare viitor, strâns legat de patologia bolilor rare, domeniu care urmărește să identifice cauzele afecțiunilor și să creeze cadrul necesar descoperirii tratamentelor care vor elimina bolile, nu doar simptomele acestora. În opinia mea, acesta este cel mai nobil scop și mă bucur că mi s-a oferit șansa de a pune umărul la dezvoltarea acestui domeniu.`}
    />,
    <CustomCard
      imageUrl={''}
      key={'review2'}
      name="Violeta Olivia Stan"
      description={`Ca fondatoare a organizatiei Salvati copiii Timis, acum 30 de ani am initiat impreuna cu elevii și studentii nostri un grup de “Prieteni de suflet “, in care activam împreuna cu dr. Maria Puiu, (alaturi de proprii nostri copii), pentru a impărtătași clipe de durere si /saubucurie cu copiii din institutii sau din familii cu dizabilitati, prinși în capcanele marginalizarii și izolarii sociale.
      Percepția generală, dar si cea a profesioniștilor, asupra nevoilor socio-afective ale acestor grupe vulnerabile s-a dovedit redutabila. Au fost necesare abordări multiple din diverse domenii, pe diferite căi educaționale, pentru a consilia, a face loby si advocacy (termeni aproape necunoscuti la acea vreme in tara noastra), cu scopul de  a preveni neglijarea și abuzurile  și a genera politici necesare. Organizațiile parinților și pacienților, ale studentilor si elevilor dar si ale profesionistilor s-au înființat în timp, stabilindu-se scopuri si obiective concrete legate de implementarea in Romania a standardelor din Conventia drepturilor copilului și a persoanelor cu dizabilități. Acestea au atras (de cele mai multe ori, prin organizatiile internationale la inceput), fonduri diverse pentru proiectele lor. Astfel s-a realizat infiintarea unor centre de consiliere, prevenție și îngrijiri, dar și o cunoastere mai profunda a complexității interventiilor din acest domeniu.
      Toată această perioadă a însemnat o dinamică deosebită în căutarea de noi resurse umane și materiale pentru a permite continuitatea unor activități la standardele  dorite  (Acestea au devenit cunoscute prin intermediul congreselor si conferintelor organizate în țara și în afara granițelor acesteia, dar și a unor publicații online). Toate au condus spre constientizarea necesitatii corelarii la diverse nivele de cercetare -actiune – actiune).
      Intervenția la diferite vârste, în diferite etape de viață, dar și contexte locale si generale în schimbare, presupun etică și tehnici de interventie specifice.
      GENETICA si tehnicile de depistare a bolilor au cunoscut o dezvoltare fără precedent în istorie iar pandemia a condus la scară planetară, experimentarea sentimentelor de izolare și nevoia de comunicare facilitata de de internet.
      Aceste aspecte, în continua schimbare, au dus si la constientizarea unor nevoi de expertiză specifică, de consultanță de specialitate, în domeniul bolilor rare dar și de elaborare a unor strategii corelate la nivel local dar si sincronizarea cu cele de nivel European sau global, care să orienteze în prezent actiunile și  politicile necesare.
      Aspectele legate de analiza si sinteza problematicilor generate de această dinamică presupun si nevoi educationale specifice la toate nivelurile, conexiuni specifice pentru a facilita cooperarea în domeniile cercetarii si colaborarii la nivel academic, cat si interventii punctuale, uneori de urgență.
      Prin aceasta asociatie incercăm, din poziția de prieteni apropiati de domeniul geneticii, să ne situăm la interfata acestor probleme și să folosim experiența acumulată în domeniu ca resursă de informare și promovare a eticii interventiilor în beneficiul  familiilor, a pacientilor dar si a profesionistilor, pentru a putea participa activ  în conturarea unor obiective  comune de viitor.
      `}
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
