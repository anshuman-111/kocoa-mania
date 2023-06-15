import { useState } from 'react'

const Loader = () => {


    const [isLoading, setIsLoading] = useState(true)
    setTimeout(()=>{
        setIsLoading(false)
    },2000)
  return (
    <>
    {isLoading ? 
        <div className="loader-container">
        <div className="spinner"></div>
        </div>
    : 
        <></>
    }
    
    </>
    
  )
}

export default Loader