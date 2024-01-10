import React, { useEffect } from 'react'
import { useContext } from 'react'
import Context from '../../context/usecontext'

const ComponentOne = () => {
  const a = useContext(Context)

  useEffect(()=>{
      a.update();
  }, [])

  
  return (
    <>
      <h1>
        This is component One
      </h1>
      <h2>
        Hi,i'm {a.state.name} ! and i am in class {a.state.class}
      </h2>

    </>
  )
}

export default ComponentOne
