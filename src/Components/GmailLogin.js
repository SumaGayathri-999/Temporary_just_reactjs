// It's a two step Login-Form

import React,{useState} from 'react'

function GmailLogin() {
    const [track,setTrack] = useState(0);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const handleEmailSubmit = ()=>{
        if(email.trim()){
            setTrack(1);
        }
    }
    const handlePasswordSubmit = (e)=>{
        e.preventDefault();
        if(password.trim()){
            console.log(`Email : ${email}, Password : ${password}`)
        }
    }
    const handleBack = ()=>{
        setPassword("");
        setTrack(0);
    }
  return (
    <>
      {track === 0 ? 
      <div>
        <form>
            <label>Email
                <input type = "email" placeholder = "Enter Email" value = {email} onChange = {(e)=>{setEmail(e.target.value)}}/>
                <button onClick = {handleEmailSubmit}>Submit</button>
            </label>
        </form>
      </div>:
        <form>
            <label>Password
                   <input type = "password" placeholder = "Enter Password" value = {password} onChange = {(e)=>{setPassword(e.target.value)}}/>
                   <button onClick = {handleBack}>Change Email</button>
                   <button onClick = {handlePasswordSubmit} >Submit</button>
               </label>
           </form>
      }
    </>
  )
}

export default GmailLogin