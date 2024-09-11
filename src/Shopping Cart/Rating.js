import React from 'react'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

const Rating = ({rating,onClick,style}) => {
  return (
    <>
      {[...Array(5)].map((_, i)=>{
            return(
                <span key={i} onClick={()=>onClick(i)} style={style}>
                {rating > i ? (
                    <AiFillStar fontSize="1.2rem"/>
                    ):(
                    <AiOutlineStar fontSize="1.2rem"/>
                )}
            </span>
        )
    })}
    </>
  )
}

export default Rating
