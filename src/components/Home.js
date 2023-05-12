import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  let contacts = []

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="d-flex flex-row-reverse">
          <Link to="/form" className="btn btn-outline-dark my-5 ml-auto ">
            Add Contact
          </Link>
        </div>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                  <th>List contacts</th>
                ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
