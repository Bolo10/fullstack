import React from 'react'

export const  Part = ({parts}) => {
    console.log(parts)
  return (
    <div>
        {parts.name} {parts.exercises}
    </div>
  )
}
