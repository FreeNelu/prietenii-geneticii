import React, { useEffect, useRef, useState } from 'react'
import { useStyles } from './Pill.styles'
import { Box } from '@mui/material'

interface PillProps {
  percentage: number
  className?: string
  liquidClassName: string
}

const LiquidPill = (props: PillProps) => {
  const { classes, cx } = useStyles()
  const pillRef = useRef<HTMLDivElement>(null)
  const [currentPercentage, setCurrentPercentage] = useState<number>(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentPercentage(props.percentage)
          } else {
            setCurrentPercentage(0)
          }
        })
      },
      { threshold: 0.5 } // trigger at 50% visibility
    )

    const pill = pillRef?.current
    if (pill) {
      observer.observe(pill)
    }

    return () => { observer.disconnect() }
  }, [])

  return (
      <Box className={cx(classes.Pill, props.className)} ref={pillRef} >
        <Box className={cx(classes.Liquid, props.liquidClassName)} style={{ height: `${currentPercentage}%` }} />
      </Box>
  )
}

export default LiquidPill
