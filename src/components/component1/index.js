import React from 'react'
import { useContext } from 'react'
import Context from '../../context/usecontext'

const ComponentOne = () => {
  const a = useContext(Context)
  return (
    <>

    <h1>
        This is component One
    </h1>
    <h2>
      Hi,{a.name} !
    </h2>
      
    </>
  )
}

export default ComponentOne
