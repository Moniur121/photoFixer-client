import React, { useState, useEffect } from "react";
import PaymentProcess from "../PaymentProcess/PaymentProcess";
import "./Dashboard.css";
function Dashboard() {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch("https://fast-reef-04000.herokuapp.com/getBuyService")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
      });
  }, [serviceData]);
  const deleleProduct = (id) => {
    fetch(`https://fast-reef-04000.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => data);
  };
  return (
    <section className="dashboard-area">
      <div className="container">
       {serviceData.length ?(
          <>
          <div className="dashboard-area py-5">
            <div className="dashboard-header">
              <h2 className="common-color">Book Your Service</h2>
            </div>
            <hr />
            <div className="row row-cols-1 g-3">
              <div className="col-md-7">
                {serviceData.map((item, index) => (
                  <div className="dashboard-card m-3 p-4">
                    <h4 style={{ color: "#297F87" }}>{item.serviceName}</h4>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src={item.imgUrl}
                        alt=""
                        width="80px"
                        height="80px"
                      />
                      <h2 className="common-color">${item.price}</h2>
                      <button
                        onClick={() => deleleProduct(item._id)}
                        className="deleteBtn"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-5">
                <PaymentProcess serviceData={serviceData} />
              </div>
            </div>
          </div>
        </>
       ):
        <div className="text-light text-center">
          <h1 className="common-color">Opps! Item not Found</h1>
          <h4 className="common-titleColor">Please Shop your item</h4>
        </div>
       }
      </div>
    </section>
  );
}

export default Dashboard;
