import React, { useState, useEffect } from 'react'
import { useStyles } from './BlogDetails.styles'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import BadRoute from 'App/BadRoute'
import FeedbackForm from 'Components/FeedbackForm/FeedbackForm'
import { type BlogItem } from '../BlogItem'
import { db } from 'firebase-config'
import { doc, getDoc } from 'firebase/firestore'

import fallbackImage from 'Assets/fallbackImage.jpg'
import Loader from '../Loader'

function BlogDetails () {
  const { classes } = useStyles()
  const { id } = useParams()
  const [blog, setBlog] = useState<BlogItem>()
  const [blogImage, setBlogImage] = useState<string>()
  const [loading, setLoading] = useState<boolean>(true)

  const fetchBlogs = async () => {
    if (id) {
      try {
        const blogRef = doc(db, 'blogs', id)
        const docSnap = await getDoc(blogRef)
        if (docSnap.exists()) {
          setBlog({ ...docSnap.data(), id })
        } else {
          console.log('Blog does not exist')
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
  }

  const parseImage = (imageUrl: string) => {
    const img = new Image()
    img.onload = function () {
      // the image has loaded successfully
      setBlogImage(imageUrl)
    }
    img.onerror = function () {
      // there was an error loading the image
      setBlogImage(fallbackImage)
    }
    img.src = imageUrl
  }

  useEffect(() => {
    void fetchBlogs()
  }, [])

  useEffect(() => {
    if (blog) {
      parseImage(blog.image ?? '')
    }
  }, [blog])

  if (loading) {
    return <Loader />
  }
  if (!id || !blog) {
    return <BadRoute />
  }

  return (
    <Box className={classes.Container}>
      <Typography fontWeight={700} variant="h3" className={classes.Title}>
        <span className={classes.TitleShadow}>
          {blog.title ? blog.title[0] : 'N'}
        </span>
        {blog.title ? blog.title.slice(1) : 'ew Blog'}
      </Typography>

      <Box
        component="img"
        className={classes.Media}
        alt="Blog image"
        src={blogImage}
        sx={{
          width: { xs: '90%', md: '80%', lg: '60%' }
        }}
      />

      <Card
        className={classes.Root}
        sx={{
          width: { xs: '90%', md: '80%', lg: '60%' }
        }}
      >
        <CardContent className={classes.Content}>
          <Typography className={classes.Date} variant="subtitle1">
            {blog.date ?? ''}
          </Typography>
          <Typography className={classes.Description} variant="body1">
            {blog.text ?? ''}
          </Typography>
        </CardContent>
      </Card>

      {blog.image2 && (
        <Box
          component="img"
          className={classes.Media}
          alt="Blog image 2"
          src={blog.image2}
          sx={{
            width: { xs: '90%', md: '80%', lg: '60%' }
          }}
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
          }}
        />
      )}

      {blog.image2 !== undefined && (
        <Card
          className={classes.Root}
          sx={{
            width: { xs: '90%', md: '80%', lg: '60%' }
          }}
        >
          <CardContent className={classes.Content}>
            <Typography className={classes.Description} variant="body1">
              {blog.text2}
            </Typography>
          </CardContent>
        </Card>
      )}

      <FeedbackForm blogId={id} />
    </Box>
  )
}

export default BlogDetails
