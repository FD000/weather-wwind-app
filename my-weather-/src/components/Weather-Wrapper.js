import React, { useState, useEffect } from 'react'


const WeatherWrapper = () => {
    const [api, setApi] = useState([])


    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Bro,Sweden&units=metric&APPID=b75d2c8e0b553d63367f547b94b6b40c")
            .then(res => res.json())
            .then(data => setApi(data))
    }, [])

    console.log(api)
    console.log(api.wind)


    return (
        <>
            <div>
                {
                    api && api.wind &&
                    <div>
                        {api.wind.speed}
                        {api.wind.speed}
                        {api.wind.speed}
                        {api.wind.speed}
                        {api.wind.speed}
                        {api.wind.speed}
                    </div>
                }
            </div>
        </>
    )
}

export default WeatherWrapper