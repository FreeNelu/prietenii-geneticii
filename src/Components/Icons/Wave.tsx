import React from 'react'

interface WaveProps {
  className?: string
}

export const WaveSvg: React.FC<WaveProps> = ({ className }) => {
  return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={className}>
          <path
            fillOpacity="1"
            d="M0,224L60,234.7C120,245,240,267,360,277.3C480,288,600,288,720,256C840,224,960,160,1080,117.3C1200,75,1320,53,1380,42.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
          </path>
        </svg>
  )
}

export default WaveSvg
