import React, { useEffect } from 'react'


const useSpaceOutside = (
  ref: React.MutableRefObject<HTMLDivElement | null>, 
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = () => {
      if (ref.current) {
        callback()
      }
    }
    // Bind the event listener
    document.addEventListener('mouseout', handleClickOutside)
    // Unbind the event listener on clean up
    return () => {
      document.removeEventListener('mouseout', handleClickOutside)
    }
  }, [ref])
}

export default useSpaceOutside