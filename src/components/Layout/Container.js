import React from 'react'

function Container({className, children}) {
  return (
    <div className={`containerWrap ${className}`}>{children}</div>
  )
}

export default Container