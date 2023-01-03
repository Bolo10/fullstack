import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ oneCountry, setOneCountry ] = useState()
  const [manyCountries, setManyCountries]= useState(false)
  const handleCountryChange = (event) => {
    console.log(event.target.value)
    if(!event.target.value){
      setManyCountries(false)
    }
    axios
      .get('https://restcountries.com/v3.1/name/'+event.target.value)
      .then(response => {
        
        if(response.data.length === 1){
          console.log(response.data)
          setOneCountry(response.data)
          setManyCountries(false)
          setCountries([])
        }
        if(response.data.length > 1 && response.data.length <= 10){
          console.log(response.data)
          setCountries(response.data)
          setManyCountries(false)
          setOneCountry()
        }
        if(response.data.length > 10 ){
          console.log(response.data)
          setManyCountries(true)
          setOneCountry()
          setCountries([])
        }
      })
    
  }
  const handleOneCountry = ( country, e  ) => {
    console.log( country)
    setOneCountry([country])
    setManyCountries(false)
    setCountries([])
  }

  return (
    <div >
     <div>
          Find Countries: <input onChange={handleCountryChange}/>
      </div> 
  
      {manyCountries? <div> Too manyCountries</div> : ""}
      {oneCountry? <Country oneCountry={oneCountry}/>:""}
      {countries? countries.map(element=><div key={element.name.common}>  <button onClick={(e) => handleOneCountry(element, e)} >show</button><div>{element.name.common}</div> </div>):""}
    </div>
  );
}

export default App;
