import { useState } from 'react'

const Loader = () => {


    const [isLoading, setIsLoading] = useState(true)
    const [hidden, setHidden] = useState('')
    setTimeout(()=>{
        setIsLoading(false)
        setHidden('hidden')
    },1500)
  return (
    <>
    {isLoading ?  
        <div className={`loader-container ${hidden}`}>
        <div className="spinner"></div>
        </div>
    : 
        <></>
    }
    
    </>
    
  )
}

export default Loader