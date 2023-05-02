import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { useStyles } from './AboutPage.styles'
import universityImage from 'Assets/universityImage.jpg'
import asociatia1 from 'Assets/asociatia1.jpg'
import asociatia2 from 'Assets/asociatia2.jpg'
import asociatia3 from 'Assets/asociatia3.jpg'
import asociatia4 from 'Assets/asociatia4.jpg'
import asociatia5 from 'Assets/asociatia5.jpg'

function AboutPage () {
  const { classes } = useStyles()

  const ImageAndText = (
    imageSrc: string,
    title: string,
    description: string,
    imageSrc2?: string,
    description2?: string
  ) => (
    <>
      <Box
        className={classes.ImageTextContainer}
        sx={{
          width: { xs: '90%', md: '80%', lg: '60%' }
        }}
      >
        <Box className={classes.HorizontalLine}>
          {' '}
          <Typography
            fontWeight={700}
            variant="h5"
            gutterBottom
            className={classes.LineText}
          >
            {title}
          </Typography>
        </Box>
        <Typography variant="body1">{description}</Typography>
        <Box
          component="img"
          className={classes.ImageBox}
          alt={title}
          src={imageSrc}
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
          }}
        />
        {description2 && (
          <Typography variant="body1">{description2}</Typography>
        )}
        {imageSrc2 && (
          <Box
            component="img"
            className={classes.ImageBox}
            alt={title}
            src={imageSrc2}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
        )}
      </Box>
    </>
  )

  return (
    <Box className={classes.Container}>
      <Box className={classes.Description}>
        <Typography gutterBottom fontWeight={700} variant="h3">
          <span className={classes.GreenShadow}>D</span>espre noi
        </Typography>
        <Typography
          variant="body1"
          sx={{
            width: { xs: '90%', md: '80%', lg: '60%' }
          }}
        >
          Suntem o organizație non-profit dedicată ajutării copiilor cu boli
          genetice rare. De la început, ne-am concentrat pe dezvoltarea de
          programe inovatoare care oferă sprijin educațional și psihologic
          copiilor cu astfel de afecțiuni, astfel încât să poată avea parte de o
          experiență școlară cât mai normală. De asemenea, suntem foarte mândri
          să organizăm evenimente care să sporească gradul de conștientizare în
          ceea ce privește bolile rare și să promovăm Ziua Internațională a
          Bolilor Rare în întreg orașul. Am reușit să atragem un număr mare de
          participanți voluntari și să inspirăm comunitatea noastră să se
          implice activ în susținerea copiilor cu astfel de afecțiuni și a
          familiilor acestora.
        </Typography>
      </Box>
      {ImageAndText(
        universityImage,
        'Colaborare',
        'Organizația Prietenii Geneticii, condusă de Dr. Maria Puiu, colaborează strâns cu Universitatea de Medicină și Farmacie Victor Babeș Timișoara pentru a îmbunătăți viețile copiilor cu boli genetice rare. Împreună,  organizăm evenimente pentru a crește gradul de conștientizare cu privire la bolile rare și pentru a promova educația în acest domeniu important.',
        asociatia5,
        'De asemenea, organizația colaborează cu ANBRaRo (Alianța Națională pentru Boli Rare România), care are ca misiune dezvoltarea și promovarea de activități de lobby și advocacy pentru îmbunătățirea calității vieții pacienților cu boli rare din România. Obiectivul general este de a crește responsabilitatea comunității față de pacienții cu boli rare prin implicarea pacienților, familiilor, specialiștilor și a autorităților cu scopul final de a îmbunătăți calitatea vieții acestor persoane.'
      )}
      {ImageAndText(
        asociatia1,
        'Educare',
        'Lucrăm neobosit pentru a educa și sprijini copiii afectați de aceste boli prin diferite programe speciailizate pe care le răspândim în școli. Ne concentram pe a oferi informații utile, educație și suport emoțional pentru familiile care se confruntă cu aceste afecțiuni.'
      )}
      {ImageAndText(
        asociatia2,
        'Sprijin',
        'Donațiile sunt esențiale pentru susținerea activităților Organizației Prietenii Geneticii și pentru ajutarea copiilor afectați de boli genetice rare. Prin donațiile dumneavoastră, putem oferi sprijin emoțional, educațional și financiar celor care au nevoie.  În plus, donațiile noastre contribuie la organizarea de evenimente și programe educaționale, care sunt esențiale pentru creșterea gradului de conștientizare cu privire la bolile rare. Dacă doriți să contribuiți la misiunea noastră, puteți face acum o donție prin site-ul nostru.'
      )}
      {ImageAndText(
        asociatia3,
        'Informare',
        'În cadrul organizației, suntem dedicați îmbunătățirii vieților copiilor cu boli genetice rare. În acest sens, oferim programe de informare a profesioniștilor din domeniul medical. Scopul nostru este de a promova o mai bună înțelegere a bolilor genetice rare, astfel încât copiii afectați să beneficieze de îngrijirea și tratamentul de care au nevoie.'
      )}
      {ImageAndText(
        asociatia4,
        'Voluntariat',
        'În fiecare an, pe data de 28 februarie, Organizația Prietenii Geneticii celebrează Ziua Internațională a Bolilor Rare, prin organizarea de evenimente și activități de conștientizare în Timișoara. Ne dorim să extindem aceste activități și în alte orașe din țară, astfel încât să putem ajunge la cât mai multe persoane și să creștem gradul de conștientizare cu privire la bolile rare. Încurajăm comunitatea să se implice și să ne ofere sprijinul lor în aceste evenimente, deoarece voluntarii noștri sunt cheia succesului. Contactați-ne pentru a afla mai multe despre cum puteți fi voluntar.'
      )}
    </Box>
  )
}

export default AboutPage
