import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import "./ServiceDetails.css";
import ViewMoreDetails from "./ViewMoreDetails/ViewMoreDetails";
function ServiceDetails({ serviceData }) {
  const { serviceName, price, description, imgUrl } = serviceData;
  const [modalIsOpen, setIsOpen] = useState(false);
  let history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleSubmit = (data, e) => {
    if (loggedInUser.email) {
      delete data._id;
      data.status = "Pending";
      fetch("https://fast-reef-04000.herokuapp.com/buyService", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            alert("!Thank you for your buy Service");
          }
        });
    } else {
      history.push("/logIn");
    }
  };
  return (
    <section>
      <div className="container">
        <div class="col">
          <div class="card service-card ">
            <div className="img-area">
              <img src={imgUrl} className="card-img-top card-img" alt="..." />
              <div className="pricing-area">
                <h4>${price}</h4>
              </div>
            </div>

            <div class="card-body">
              <h5
                class="card-title common-titleColor"
                style={{ fontWeight: "bold" }}
              >
                {serviceName}
              </h5>
              <p class="card-text text-muted">
                {description.slice(0, 80)} .....
              </p>
            </div>
            <div
              className="btn-group d-flex justify-content-between p-1"
              style={{ marginBottom: "15px" }}
            >
              <button onClick={openModal} className="viewBtn">
                View
              </button>
              <button
                onClick={() => handleSubmit(serviceData)}
                className="buynowBtn"
              >
                Buy Now
              </button>
            </div>
            <ViewMoreDetails
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
              image={imgUrl}
              serviceName={serviceName}
              price={price}
              description={description}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;
