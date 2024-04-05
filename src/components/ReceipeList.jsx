import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ReceipeList = ({
  receipes,
  setReceipes,
  setShowAddModal,
  show,
  onHide,
}) => {
  const [receipeData, setReceipeData] = useState({
    name: "",
    description: "",
    ingredient: "",
    instruction: "",
  });

  const [editData, setEditData] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);

  const handleClose = () => setShowEditModal(false);

  const handleEdit = (data) => {
    console.log(data, "called");
    setEditData(data);
    setShowEditModal(true);
  };

  const handleUpdate = (data) => {
    const updateData = data.map((item) =>
      item.id === data.id ? { ...item, ...data } : item
    );
    setReceipeData(updateData);
    setShowEditModal(false);
  };

  //   const handleEdit = (id) => {
  //     const findReceipe = receipes.find((receipe) => receipe.id === id);
  //     setReceipeData(findReceipe);

  //     const updatedReceipes = receipes.filter((receipe) => receipe.id !== id);
  //     setReceipes(updatedReceipes);
  //   };

  const handleDelete = (id) => {
    console.log("delete", id);
    const deleteReceipe = receipes.filter((receipe) => receipe.id !== id);
    setReceipes(deleteReceipe);
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Receipe Name</th>
            <th>Description</th>
            <th>Ingredients</th>
            <th>Instructions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {receipes &&
            receipes.map((receipe) => {
              return (
                <>
                  <tr key={receipe.id}>
                    <td>{receipe.name}</td>
                    <td>{receipe.description}</td>
                    <td>{receipe.ingredient}</td>
                    <td>{receipe.instruction}</td>
                    <td>
                      <FiEdit2 onClick={() => handleEdit(receipe)} />
                      <RiDeleteBinLine
                        style={{ marginLeft: "15px" }}
                        onClick={() => handleDelete(receipe.id)}
                      />
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>

      {showEditModal && (
        <Modal show={showEditModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Receipe Management
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate(editData);
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Receipe Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={receipeData?.name}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={receipeData?.description}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      [e.target.description]: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="ingredient">Ingredients</label>
                <input
                  type="text"
                  className="form-control"
                  name="ingredient"
                  value={receipeData?.ingredient}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      [e.target.ingredient]: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="instruction">Instructions</label>
                <input
                  type="text"
                  className="form-control"
                  name="instruction"
                  value={receipeData?.instruction}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      [e.target.instruction]: e.target.value,
                    })
                  }
                />
              </div>

              <Modal.Footer>
                <Button type="submit" className="btn btn-danger">
                  Edit Receipe
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default ReceipeList;
