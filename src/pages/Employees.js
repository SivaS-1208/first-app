import { useState } from 'react';
import Employee from '../components/Employee';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';

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

    const addEmployee = (newName, role, img) => {
        if (!newName || !role || !img) {
            alert("Please fill in all fields.");
            return;
        }
        const newEmployee = {
            id: Emp.length + 1,
            name: newName,
            role: role,
            img: img
        }
        setEmp([...Emp, newEmployee]);
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
        },
        {
            id: 4,
            name: "Abinaya",
            img: 'https://images.pexels.com/photos/3436831/pexels-photo-3436831.jpeg',
            role: "Reporter"
        }
    ])

    return (
        <>
        <div className='d-flex flex-row flex-wrap justify-content-center'>
        {Emp.map((emp) => {
            const editEmployee = (
            <EditEmployee id={emp.id} 
                          name={emp.name} 
                          role={emp.role} 
                          updateEmp={updateEmployee}/>
                        );

            return (<Employee key={emp.id}
                             id={emp.id} 
                             name={emp.name} 
                             img={emp.img} 
                             role={emp.role} 
                             updateEmps={editEmployee}/>);
        })}
        </div>
        <AddEmployee newEmp={addEmployee}/>
        </>
    );
}

export default Employees;