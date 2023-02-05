import React from 'react'

interface CloseIconProps {
  className?: string
}

export const CloseIcon: React.FC<CloseIconProps> = ({ className }) => {
  return (
    <svg className={className} width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M18 6L6 18" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M6 6L18 18" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"></path>
      </g>
    </svg>
  )
}

export default CloseIcon
