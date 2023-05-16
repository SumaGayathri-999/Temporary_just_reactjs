import React from 'react'
import {useState,useEffect} from 'react';

function Fetching() {
  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{return res.json()})
    .then((data)=>{
      setUsers(data);
      setLoading(false);
      // setError(true);
      console.log(data);
    })
    .catch((err)=>{
      console.log(err);
      setError(true);
      setLoading(false);
    })
  },[])
  return (
    <div className="App">
      {loading ?  <p>Loading...</p> : error ? <p>Error : Not Found</p> :users.map((item)=>{
        return(
          <>
            <p>{`${item.id})${item.name}`}</p>
          </>
        )
      }) }
    </div>
  );
}

export default Fetching