import React, { useEffect } from 'react'
import {useState} from 'react';

function EcommerceTimer() {
    const endTime = new Date('march 24,2023 11:30:00').getTime();
    const [currentTime,setTime] = useState(new Date().getTime());
    const gap = endTime - currentTime;
    const SECOND = 1000;
    const MINUTE = 60 * SECOND;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;

    const days = Math.floor(gap/DAY);
    const hours = Math.floor((gap % DAY) / HOUR);
    const minutes = Math.floor((gap % HOUR ) / MINUTE);
    const seconds = Math.floor((gap % MINUTE) / SECOND);
    useEffect(()=>{
        let timerId;
        console.log(gap);
         if(gap > 0 ){
            timerId = setTimeout(()=>{
                setTime(new Date().getTime());
            },1000)
         }
         else{
            clearTimeout(timerId);
            alert("Offer Ends");
         }
        return ()=>{
             clearTimeout(timerId);
        }
    })
  return (
    <div>{`${days} : ${hours} : ${minutes} : ${seconds}`}</div>
  )
}

export default EcommerceTimer