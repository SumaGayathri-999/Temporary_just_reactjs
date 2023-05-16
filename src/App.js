import './App.css';
import { useState } from 'react';
import OtpTimer from './Timer/OtpTimer'
import EcommerceTimer from './Timer/EcommerceTimer';
import GmailLogin from './Components/GmailLogin';
import EmployeeToggle from './Components/EmployeeToggle';
import Test from './Components/Test'
import Employee from './Components/Employee';

function App() {
  const [users,setusers] =useState([
    {
    "id":1,
    "username":"suma"
  },
  {
    "id":2,
    "username":"Gayathri"
  },
  {
    "id":3,
    "username":"kavya"
  }
  ]);
  function handleDelete(id){
    const remaining = users.filter((item)=>{return id !== item.id});
    setusers(remaining);
    
    console.log(id);
  }
  return (
    <div className="App">
    {/* {users.map((item)=>{return(
      <>
        <div key = {item.id}>
           {item.id}  {item.username} 
           <button onClick ={()=>{handleDelete(item.id)}}>delete</button>
        </div>
      </>
    )})} */}


    {/* <OtpTimer /> */}

    <EcommerceTimer />

    {/* <GmailLogin /> */}

    {/* <EmployeeToggle /> */}

    {/* <Test /> */}
    {/* <Employee /> */}
    </div>
  );
}

export default App;
