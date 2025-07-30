import { useState } from 'react';
import Employee from './Employee';

function Employees(){
    const updateEmployee = (id, newName, newRole) => {
        const update = Emp.map((emp) => {
            if(emp.id === id){
                return {...emp, name: newName, role: newRole};
            }
            return emp;
        })
        setEmp(update);
    }

    const [Emp,setEmp] = useState([
        {
            id: 1,
            name: "Raja",
            img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
            role: "Bank Manager"
        },
        {
            id: 2,
            name: "Priya",
            img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
            role: "Bank Financier"
        },
        {
            id: 3,
            name: "Kumar",
            img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
            role: "Auto Mobiles"
        }
    ])

    return (
        <div className='d-flex flex-row flex-wrap justify-content-center'>
        {Emp.map((emp) => {
            return <Employee key={emp.id} id={emp.id} name={emp.name} img={emp.img} role={emp.role} updateEmps={updateEmployee}/>
        })}
        </div>
    );
}

export default Employees;