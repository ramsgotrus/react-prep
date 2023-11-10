import { useEffect, useState, useCallback } from "react";


const useInterval = (isStopped, intervalValue) => {
    const [bgColor, setBgColor] = useState()
    console.log('IStopped', isStopped, intervalValue)

   

    useEffect(() => {


        const interval = () => setInterval(() => {
            console.log('started')
            fetch('https://www.colr.org/json/color/ffba13')
                .then((response) => console.log('RamHere', response.json()))
        }, intervalValue)
    
        if(intervalValue){
            interval()
        }

        else if (intervalValue === null || isStopped) {
            console.log('Clear', intervalValue)

            clearInterval(interval)
        }
        return (() => clearInterval(interval))
    }, [isStopped, intervalValue])
    return { bgColor }
}


export default useInterval