import React from 'react'

export const  Person = ({person}) => {
    console.log(person)
  return (
    <div>
        {person.name} {person.exercises}
    </div>
  )
}
