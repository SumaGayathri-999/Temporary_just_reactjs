import React,{useState} from 'react'

 
function Employee() {
    const employees = [
        {
         id:1,
         first_name : "Trivia",
         last_name : "chelea",
         status:true,
        },
        {
        id:2,
        first_name : "Krishvan",
        last_name : "Sariya",
        status:true,
        },
        {
        id:3,
        first_name : "Sreeja",
        last_name : "Navyam",
        status:true,
        },
        {
        id:4,
        first_name : "Ranveer",
        last_name : "Singh",
        status:true,
        }
    ];
    const [emp,setEmp] = useState(employees);
    console.log(emp);
    const handleDelete = (id)=>{
       let remaining = emp.filter((item)=>{return !(item.id === id)});
       setEmp(remaining);
       console.log(remaining);
       console.log(id);
    }
    const handleStatus = (id)=>{
      let index = emp.findIndex((item)=>{return item.id === id});
      console.log(emp[index].status);
      setEmp({...emp,[emp[index].status]:false});
    }
  return (
    <>
         {
      emp.map((item)=>{
        return (
            <>
            <p>{item.first_name}</p><button onClick={()=>{handleDelete(item.id)}}>delete</button>
            <p>{item.status ? "online" : "offline"}</p><button onClick={()=>{handleStatus(item.id)}}>Change Status</button>
            </>
        )
      })
      }
    </>
  )
}

export default Employee