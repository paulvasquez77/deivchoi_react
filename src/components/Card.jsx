import React from 'react'
import './Card.css'

export const Card = ({ title, description }) => {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
