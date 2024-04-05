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
  const [editData, setEditData] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);

  const handleClose = () => setShowEditModal(false);

  const handleEdit = (data) => {
    setEditData(data);
    setShowEditModal(true);
  };

  const handleUpdate = () => {
    const updatedReceipes = receipes.map((receipe) =>
      receipe.id === editData.id ? editData : receipe
    );
    setReceipes(updatedReceipes);
    setShowEditModal(false);
  };

  const handleDelete = (id) => {
    const updatedReceipes = receipes.filter((receipe) => receipe.id !== id);
    setReceipes(updatedReceipes);
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
            receipes.map((receipe) => (
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
            ))}
        </tbody>
      </table>

      {showEditModal && (
        <Modal show={showEditModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Recipe Management
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate();
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Recipe Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={editData.name}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      name: e.target.value,
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
                  value={editData.description}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      description: e.target.value,
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
                  value={editData.ingredient}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      ingredient: e.target.value,
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
                  value={editData.instruction}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      instruction: e.target.value,
                    })
                  }
                />
              </div>

              <Modal.Footer>
                <Button type="submit" className="btn btn-danger">
                  Edit Recipe
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
