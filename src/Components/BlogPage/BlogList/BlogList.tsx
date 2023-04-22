import React, { useEffect, useState } from 'react'
import { useStyles } from './BlogList.styles'
import { IconButton } from '@mui/material'
import VerticalCarousel from 'Components/VerticalCarousel/VerticalCarousel'
import { type BlogItem } from '../BlogItem'
import Loader from '../Loader'
import RefreshIcon from '@mui/icons-material/Refresh'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase-config'

function BlogList () {
  const { classes } = useStyles()
  const [blogs, setBlogs] = useState<BlogItem[]>([])
  const blogsCollectionRef = collection(db, 'blogs')
  const [loading, setLoading] = useState(true)

  const fetchBlogs = async () => {
    setLoading(true)
    await getDocs(blogsCollectionRef).then((data) => {
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setLoading(false)
    })
  }

  useEffect(() => {
    void fetchBlogs()
  }, [])

  return (
    loading
      ? <Loader/>
      : <>
      <IconButton onClick={() => { void fetchBlogs() }} className={classes.RefreshIconButton} title='Refresh blog list'>
        <RefreshIcon fontSize='large' className={classes.RefreshIcon} />
      </IconButton>
      <VerticalCarousel blogs={blogs} />
    </>
  )
}
export default BlogList
