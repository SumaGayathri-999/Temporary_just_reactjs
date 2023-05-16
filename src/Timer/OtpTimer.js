import React from 'react';
import { useState,useEffect } from 'react';

function OtpTimer() {
    const [time,setTime] = useState(6*1000);
    const [isExpired, setExpired] = useState(false);
    const SECOND = 1000;
    const MINUTE = 60*SECOND;
    const HOUR = 60*MINUTE;
    const DAY = 24*HOUR;
    
    const getformatted = (time)=>{
      const days = Math.floor(time/DAY);
      const hours = Math.floor((time % DAY) / HOUR);
      const minutes = Math.floor((time % HOUR ) / MINUTE);
      const seconds = Math.floor((time % MINUTE) / SECOND);
      return `${days} : ${hours} : ${minutes} : ${seconds}`
    }
    const handleClick = (otpCall)=>{
        setExpired(false);
        setTime(6*1000);
    }
    useEffect(()=>{
        if(time > 0){
           var timerId = setTimeout(()=>{setTime(time-1000)},1000)
        }
        else{
            clearTimeout(timerId);
            setExpired(true);
        }
        return ()=>{
          clearTimeout(timerId);
     }
       
    },[time])
  return (
    <>
      {!isExpired ? getformatted(time) : <button onClick = {handleClick}>Send OTP</button>}
    </>
  )
}

export default OtpTimer;