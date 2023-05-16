import {useState,useEffect} from 'react';

function useFetchApi(url){
  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  useEffect(()=>{
    fetch(url)
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
  return {users,loading,error};
}
export default useFetchApi;