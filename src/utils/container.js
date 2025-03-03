import React from 'react'

const Container = ({children,className }) => {
  return (
    <div className={`bg-white shadow-md p-6 rounded-large ${className}`}>
        {children}
    </div>
  )
}

export default Container