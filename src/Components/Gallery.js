import "./styles.css";
import {useState,useEffect} from 'react';

export default function App() {
  const [images,setImages]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      setImages(data);
      console.log(data);
    })
    .catch()
  },[])
  return (
    <div className="App">
    {/* {images.map((item)=>{return(
      <>
        <img src={item} alt="" />
      </>
    )})} */}
    </div>
  );
}
