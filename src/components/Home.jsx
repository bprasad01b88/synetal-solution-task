import React, { useState } from "react";
import ReceipeList from "./ReceipeList";
import AddModal from "./AddModal";

const Home = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [receipeData, setReceipeData] = useState({
    name: "",
    description: "",
    ingredient: "",
    instruction: "",
  });

  const [receipes, setReceipes] = useState([]);

  const handleChange = (e) => {
    const receipe = { ...receipeData, [e.target.name]: e.target.value };
    setReceipeData(receipe);
  };

  const handleSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    const fakeId = Date.now();
    const newReceipe = { ...receipeData, id: fakeId };
    const updatedReceipe = [...receipes, newReceipe];
    setReceipes(updatedReceipe);
    setReceipeData({name : "", description : "", ingredient : "", instruction : ""})
    setShowAddModal(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            Receipe List
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div>
            <button
              className="btn btn-danger"
              onClick={() => setShowAddModal(true)}
            >
              Add Receipe
            </button>
          </div>
        </div>
      </nav>
      <ReceipeList
        receipes={receipes}
        receipeData={receipeData}
        setReceipeData={setReceipeData}
        setReceipes={setReceipes}
        setShowAddModal={setShowAddModal}
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
      />
      <AddModal
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
        receipeData={receipeData}
        handlechange={handleChange}
        handlesubmit={handleSubmit}
      />
    </>
  );
};

export default Home;
