import React, { useState, useEffect } from "react";
import "./AdminHome.css";
import { FaPen } from "react-icons/fa";
function AdminHome() {
  const [userPayment, setUserPayment] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [updateData, setUpdateData] = useState([]);
  useEffect(() => {
    fetch("https://fast-reef-04000.herokuapp.com/getPaymentOrder")
      .then((res) => res.json())
      .then((data) => {
        setUserPayment(data);
      });
  }, [userPayment]);
  //update order..
  useEffect(() => {
    fetch(`https://fast-reef-04000.herokuapp.com/updateOrder`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdated(data);
      });
  }, [updateData]);
  return (
    <section section className="admin-pageBg">
      <div className="container py-5">
        <div className="user-schedule">
          <div className="user-title">
            <h1 className="common-color">All user Payment order Schedule</h1>
          </div>
          <table className="table table-secondary text-center table shadow">
            <thead className="table-dark">
              <tr>
                <th scope="col">SL.No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {userPayment.map((item, index) => (
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{item.userName}</td>
                  <td>{item.email}</td>
                  <td>${item.totalPrice}</td>
                  <td>
                  <td className="d-flex">
                      <button
                        class={`btn ${
                          item.status === "Pending" ? "btn-info" : ""
                        } ${
                          item.status === "InProgress" ? "btn-secondary" : ""
                        } ${
                          item.status === "Done" ? "btn-success" : ""
                        } me-2`}
                      >
                        {item.status}
                      </button>
                      <div class="dropdown">
                        <button
                          class="btn btn-warning dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <FaPen className="text-light"></FaPen>
                        </button>
                        <ul
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <span
                              onClick={() =>
                                setUpdateData({
                                  status: "Pending",
                                  id: item._id,
                                })
                              }
                              class="dropdown-item text-info btn"
                            >
                              Pending
                            </span>
                          </li>
                          <li>
                            <span
                              onClick={() =>
                                setUpdateData({
                                  status: "InProgress",
                                  id: item._id,
                                })
                              }
                              class="dropdown-item text-secondary btn"
                            >
                              InProgress
                            </span>
                          </li>
                          <li>
                            <span
                              onClick={() =>
                                setUpdateData({
                                  status: "Done",
                                  id: item._id,
                                })
                              }
                              class="dropdown-item text-success btn"
                            >
                              Done
                            </span>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default AdminHome;
