import React, { useEffect, useState } from 'react'
import { useStyles } from './BlogList.styles'
import { Box, IconButton, Typography } from '@mui/material'
import VerticalCarousel from 'Components/VerticalCarousel/VerticalCarousel'
import { BlogItems } from '../BlogItem'
import Loader from '../Loader'
import RefreshIcon from '@mui/icons-material/Refresh'

function BlogList () {
  const { classes } = useStyles()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchItems = () => {
    setLoading(true)
    fetch('https://example.com/items')
      .then(async response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return await response.json()
      })
      .then(data => {
        setItems(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching items:', error)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    loading
      ? <Loader/>
      : <>
      <IconButton onClick={fetchItems} className={classes.RefreshIconButton} title='Refresh blog list'>
        <RefreshIcon fontSize='large' className={classes.RefreshIcon} />
      </IconButton>
      <VerticalCarousel items={BlogItems} />
    </>
  )
}
export default BlogList
