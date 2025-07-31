import './Employee.css';

function Employee(props){

    return(
        <>
        <div className="eCard">
            <div className='cardBody'>
            <img src={props.img} className='cardImg' alt="images"/>
            <div className='cardText'>
                <div className='cardTextPara'>
                    <p className='boldText'>{props.name}</p>
                    <p>{props.role}</p>
                </div>
            {props.updateEmps}
            </div>
            </div>  
        </div>
        </>
    );
}

export default Employee;
