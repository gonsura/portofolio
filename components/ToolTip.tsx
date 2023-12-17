'use client'
import { useState } from 'react'

interface Props {
  children: string | JSX.Element
  title: string
}

const ToolTip = ({ children, title }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <p className='p-1 relative flex justify-center items-center' onMouseOver={() => setIsVisible(true)} onMouseOut={() => setIsVisible(false)}>
      <span className={`absolute text-xs whitespace-nowrap -top-10 px-3 py-2 rounded-md bg-darkNav ${isVisible ? 'block' : 'hidden'}`}>
        {title}
      </span>
      {children}
    </p>
  )
}
export default ToolTip
