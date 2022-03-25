import React, { useState, useEffect } from 'react'
import { myApi } from '../reusable/api'

import NavigationButtons from './Navigation'


const WeatherWrapper = () => {
    const [api, setApi] = useState([])
    const [sunsetUnixStamp, setSunsetUnix] = useState([0])
    const [feelsLike, setFeelsLike] = useState([0])
    const [wind, setWind] = useState([0])
    const [location, setLocation] = useState('N/A')
    const [pressure, setPressure] = useState(0)
   
    


    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Bro,Sweden&units=metric&APPID=b75d2c8e0b553d63367f547b94b6b40c")
            .then(res => res.json())
            .then(data => 
               { 
                    setApi(data)
                    setSunsetUnix(data.sys.sunset)
                    setFeelsLike(data.main.temp)
                    setWind(data.wind.speed)
                    setLocation(data.name)
                    setPressure(data.main.pressure)
                }                
                )
    }, [])

    /* Sunset */
const sunset = new Date(sunsetUnixStamp*1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})

/* let currentPressure = "N/A"

if (pressure > 1020) {
    return (
        currentPressure = "Högtryck"
    )
} */

    console.log(api) 
    return (
        <div>
            < NavigationButtons />
            {
            api && api.main && api.sys &&
                <div>
                    <h1>Location: {location}</h1>
                    <h1>Vind: {wind} m/s </h1>
                    <h3>
                        
                        Solnedgång: 
                       {sunset }
                    
                    
                    </h3>  
                    <p>Temperatur (Känns som) {feelsLike} °C </p>
                {/*     <h3>Tryck: {currentPressure}</h3> */}
                </div>
            }
        </div>
)
}

export default WeatherWrapper




/* 

Info om hög o lågtryck
https://www.thoughtco.com/how-to-read-a-barometer-3444043
http://martinhedberg.se/vaderskola/sa-gor-du-din-egen-prognos/

högtryck 1020 o uppåt
normal tryck 1005-1020
lågtryck under 1005 
*/
/* ## Lista på saker den ska innehålla
- Lägga upp bilder
- Skriva text på bilden(under)
- Väderinfo KLAR
- VInd KLAR
- Högtryck
- Lågtryck
- Soluppgång
- SOlnedgång
- Temperatur (känns som) KLAR
Du ska kunna lägga upp 2 bilder, en på fisket och en på draget, datum, beskrivning 
     <h3>{new Date(api.sys.sunrise).toLocaleTimeString()}</h3>  
            
            <p>Solnedgång {sunset}</p> 

  
        
        
 */