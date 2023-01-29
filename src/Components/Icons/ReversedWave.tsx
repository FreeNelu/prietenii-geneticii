import React from 'react'

interface ReversedWaveProps {
  className?: string
}

export const ReversedWaveSvg: React.FC<ReversedWaveProps> = ({ className }) => {
  return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={className}>
          <path
            fillOpacity="1"
            d="M0,0L48,0C96,0,192,0,288,26.7C384,53,480,107,576,133.3C672,160,768,160,864,133.3C960,107,1056,53,1152,26.7C1248,0,1344,0,1392,0L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
          </path>
        </svg>
  )
}

export default ReversedWaveSvg
