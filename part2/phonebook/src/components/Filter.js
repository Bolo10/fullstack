import React from 'react'

export const  Filter = ({handleFilterChange, filtered}) => {
   const {name, number} = filtered[0]? filtered[0]: []
  return (
    <div>
    <div>
          filter shown with: <input onChange={handleFilterChange} />
      </div> 
      <div>
        {name}: {number}
        </div> 
    </div>
  )
}
