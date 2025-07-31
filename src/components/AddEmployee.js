import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props){
    const [fullName,setFullName] = useState('');
    const [role,setRole] = useState('');
    const [img,setImg] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
      handleClose();
      event.preventDefault();
      props.newEmp(fullName, role, img);
      setFullName('');
      setRole('');
      setImg('');
    }
  return (
    <>
      <button className="btn btn-outline-primary d-block mx-auto" onClick={handleShow}>+ Add Employee</button>
    
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit} id='EditForm' className='d-flex flex-column gap-3'>
          <div className="row">
          <div className="col-sm-2">
            <label className="form-label">Name</label> 
          </div>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="eg. Stan lee"
            defaultValue={fullName} onChange={(e) => setFullName(e.target.value)}/>
          </div>
          </div>
          <div className="row">
          <div className="col-sm-2">
            <label className="form-label">Role</label> 
          </div>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="eg. Bank Manager"
            defaultValue={role} onChange={(e) => setRole(e.target.value)}/>
          </div>
          </div>
          <div className="row">
          <div className="col-sm-2">
            <label className="form-label">Image (Link)</label> 
          </div>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder="eg. https://example.com/image.jpg"
            defaultValue={img} onChange={(e) => setImg(e.target.value)}/>
          </div>
          </div>
      </form>

        </Modal.Body>
        <Modal.Footer>
          <button type='submit' form='EditForm' className='btn btn-primary'>Add</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;