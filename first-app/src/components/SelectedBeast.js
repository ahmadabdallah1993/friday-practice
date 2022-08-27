import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



class SelectedBeast extends React.Component{

    
    render(){
        return(
    <>
     

      <Modal show={this.props.sh} onHide={this.props.cl}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.q.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.q.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.cl}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>





        )
    }
}
export default SelectedBeast;