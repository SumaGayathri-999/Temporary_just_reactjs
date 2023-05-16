import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Test() {
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    const [users,setUsers] = useState();
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        getData();
    },[])
  async function getData(){
    try{
        let {data} = await axios.get(URL);
        console.log(data);
        setUsers(data);
        setLoading(false);
    }
    catch(err){
       console.log(err);
    }
  }
  return (
    <>
       {loading ? <h1>Loading</h1> : users?.map((item)=>{
         return <div>{item.title}</div>
         })}
    </>
  )
}

export default Test