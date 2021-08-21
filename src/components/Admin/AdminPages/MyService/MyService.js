import React, { useState, useEffect } from "react";
import "./MyService.css";
import ServiceUpdate from "./ServiceUpdate";
function MyService() {
  const [getService, setGetService] = useState([]);
  const [editValue, setEditValue] = useState({});
  const [service, setService] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    fetch("https://fast-reef-04000.herokuapp.com/getService")
      .then((res) => res.json())
      .then((data) => {
        setGetService(data);
      });
  }, [getService]);
  const deleteCourse = (id) => {
    fetch(`https://fast-reef-04000.herokuapp.com/deleteCourse/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <section>
      <div className="container py-5">
        <div className="service-title py-4">
          <h2 className="common-color">My All Services</h2>
          <hr />
        </div>
        <div className="serviceForm-area">
          <table className="table table-secondary text-center table shadow">
            <thead className="table-dark">
              <tr>
                <th scope="col">SL.No</th>
                <th scope="col">ServiceImg</th>
                <th scope="col">ServiceName</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {getService.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img src={item.imgUrl} alt="" width="70px" height="30px" />
                  </td>
                  <td>{item.serviceName}</td>
                  <td>${item.price}</td>
                  <td>
                      <button className="btn btn-warning" onClick={() => {
                        openModal();
                        setEditValue(item);
                      }}>Update</button>
                    <button
                      onClick={() => deleteCourse(item._id)}
                      className="btn btn-danger ms-4"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ServiceUpdate
        editValue={editValue}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
    </section>
  );
}

export default MyService;
