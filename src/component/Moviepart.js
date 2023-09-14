import React from 'react'

const moviecards = (props) => {
  return (
    <>
      <div className='movie_section'>
        <img src={props.img} alt="" />
        <p>{props.title}</p>
        <p>{props.year}</p>
      </div>
    </>

  )
}

export default moviecards
