import React from 'react'

export const  Total = ({parts}) => {
  console.log(parts)
  let temp = 0
  
  const total = parts.reduce((s, p) => {
    console.log(s,p)
    let temp2 = s.exercises?  s.exercises : 0
    return temp+= temp2 + p.exercises
   
  })
  return (
    <div>
        total of {total} exercises
    </div>
  )
}
