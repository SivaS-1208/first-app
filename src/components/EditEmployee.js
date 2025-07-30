import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props){
    const [fullName,setFullName] = useState(props.name);
    const [role,setRole] = useState(props.role);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
      event.preventDefault();
      props.updateEmp(props.id, fullName, role);
    }
  return (
    <>
      <button className="cardBtn" onClick={handleShow}>Edit</button>
    
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
      </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button type='submit' form='EditForm' className='btn btn-primary'>Update</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;