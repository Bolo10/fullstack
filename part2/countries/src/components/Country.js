
import axios from 'axios'
import React, { useState, useEffect } from 'react'
const Country = ({oneCountry}) => {
    console.log(process.env)
    const [ weather, setWeather ] = useState()
    

    let country = oneCountry[0]
    const urlWeather = 'http://api.weatherstack.com/current?access_key=' +process.env.REACT_APP_API_KEY+'&query='+country.capital[0]
    console.log(urlWeather)
    axios
        .get(urlWeather)
        .then(response =>{
            console.log(response)
            setWeather(response.data.current)
        })

    console.log(country)
    /** I cant add this change because the api of weather ended my requests
     * <div>temperature {weather.temperature}</div>
            <div>wind: {weather.wind_speed} mph direction {weather.wind_dir}</div>
     */
    return(
        <div>
            <h2> {country.name.common}</h2>
            <div>capital {country.capital[0]}</div>
            <div>population {country.population}</div>
            <h3>languajes</h3>
            <ul>{Object.values(country.languages).map(element=> <li key={element}>{element}</li>)}</ul>
            <img src={country.coatOfArms.png} width="100" height="100" alt=""/>
            <h2> Weather in {country.capital[0]}</h2>
            
            
            
        </div>
    )
}
export default Country