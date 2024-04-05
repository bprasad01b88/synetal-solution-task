import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const AddModal = (props) => {
  const { receipeData, handlechange, handlesubmit } = props;
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Receipe Management
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handlesubmit}>
            <div className="form-group">
              <label htmlFor="name">Receipe Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={receipeData?.name}
                onChange={handlechange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={receipeData?.description}
                onChange={handlechange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="ingredient">Ingredients</label>
              <input
                type="text"
                className="form-control"
                name="ingredient"
                value={receipeData?.ingredient}
                onChange={handlechange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="instruction">Instructions</label>
              <input
                type="text"
                className="form-control"
                name="instruction"
                value={receipeData?.instruction}
                onChange={handlechange}
              />
            </div>

            <Modal.Footer>
              <Button type="submit" className="btn btn-danger">
                Add Receipe
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddModal;
