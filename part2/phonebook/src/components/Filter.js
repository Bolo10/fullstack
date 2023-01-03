import React from 'react'

export const  Filter = ({handleFilterChange, filtered}) => {
   
  return (
    <div>
    <div>
          filter shown with: <input onChange={handleFilterChange} />
      </div> 
      <div>
        {filtered}
        </div> 
    </div>
  )
}
