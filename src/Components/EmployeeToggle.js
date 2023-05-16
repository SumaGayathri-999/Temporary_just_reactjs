import React,{useState} from 'react'

function EmployeeToggle() {
const employees = [
    {
     first_name : "Trivia",
     last_name : "chelea"
    },
    {
    first_name : "Krishvan",
    last_name : "Sariya"
    },
    {
    first_name : "Sreeja",
    last_name : "Navyam"
    },
    {
    first_name : "Ranveer",
    last_name : "Singh"
    }
];
// const initialStatus = employees.map((emp)=>{
//     const emp_name = emp.first_name + emp.last_name;
//     return (
//     {
//         [emp_name] : true
//     }
// )});
const initialStatus = employees.reduce((a,b)=>{
    const name = b.first_name + b.last_name;
    a[name] = false;
    return a;
},{});
console.log(initialStatus);
const handleStatus = (name)=>{
    console.log(empolyersStatus[name]);
    setEmployersStatus({...empolyersStatus,[name] : !empolyersStatus[name] })
}
const [empolyersStatus,setEmployersStatus] = useState(initialStatus);
console.log(empolyersStatus);

  return (
    <>
   {
        employees.map((employee)=>{
            return(
                <>
                <p>{employee.first_name + employee.last_name}</p>
                <p onClick = {()=>{handleStatus(employee.first_name + employee.last_name)}}>{empolyersStatus[employee.first_name + employee.last_name] ? "online" : "offline"}</p>
                </>
            )
        })
    }
    </>
  )
}

export default EmployeeToggle