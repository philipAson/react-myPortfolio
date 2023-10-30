import React from 'react'
import GithubMark from "../../assets/github-mark-white.svg"
import RubberBand from '../utils/RubberBand'

const Links = () => {
  return (
    
    <div className='link-container'>
        <RubberBand>
        <div className='link'>
        <img className='link-img' src={GithubMark} alt="asd" />
        </div>
        </RubberBand>
        
        
        
    </div>
  )
}

export default Links