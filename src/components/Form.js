import React from "react";

const Form = () => {
  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Add Contact</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form>
            <div className="form-group mb-2">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                onChange={() => {}}
              />
            </div>
            <div className="form-group mb-2">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                onChange={() => {}}
              />
            </div>
            <div className="form-group mb-2">
              <input
                className="form-control"
                type="number"
                placeholder="Phone"
                onChange={() => {}}
              />
            </div>
            <div className="form-group mb-2">
              <button
                className="btn btn-block btn-dark"
                type="submit"
              >Add New Contact</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
