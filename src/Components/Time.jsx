import React, { useEffect, useState } from 'react'

const Time = () => {
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
        let interval = setInterval(() => {
            setTime(new Date());
        }, 1000)
        return () => clearInterval(interval)
    }, []);
    const hours = time.getHours();
    const [hh, mm] = time.toLocaleTimeString().split(":");
    const wish = `Good ${(hours < 6 && "night") ||
        (hours < 12 && "morning") ||
        (hours < 17 && "afternoon") ||
        (hours < 22 && "evening") ||
        "night"
        }`;
   
    
    return (
        <div className='flex justify-center items-center flex-col text-2xl font-bold'>
            <div className='flex justify-between'>
                <h1 className='mr-2'>{wish} </h1>
                

            </div>
            <p>{hh} : {mm}</p>
        </div>
    )
}

export { Time }