import React from "react";
import "./ClientReview.css";
import clientImg from "../../images/client.png";
import { BsFillStarFill } from "react-icons/bs";
function ClientReview() {
  return (
    <section>
      <div className="container">
        <div className="client-title ">
          <h3 className="common-color">What our Client Says</h3>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
          <div class="col">
            <div class="card h-100 p-4">
              <div className="d-flex align-items-center">
                <img src={clientImg} alt="" width="70" height="70" />
                <div>
                  <span className="fs-5 common-color text-bold">
                    Moniur Rahman
                  </span>
                  <br />
                  <span className="common-titleColor text-bold">
                    CEO, Google
                  </span>
                </div>
              </div>
              <div className="description-area mb-2">
                <p className="text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nostrum magni quis esse obcaecati rerum repellendus
                  praesentium dolorum recusandae, delectus ut.
                </p>
              </div>
              <div className="d-flex ">
                <span className="common-color">Ratings</span>
                <span className="text-warning">
                  <BsFillStarFill />
                </span>
                <span className="text-warning">
                  <BsFillStarFill />
                </span>
                <span className="text-warning">
                  <BsFillStarFill />
                </span>
                <span >
                  <BsFillStarFill />
                </span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 p-4">
              <div className="d-flex align-items-center">
                <img src={clientImg} alt="" width="70" height="70" />
                <div>
                  <span className="fs-5 common-color text-bold">
                    Ashraful Alom
                  </span>
                  <br />
                  <span className="common-titleColor text-bold">
                    CEO, Amazon
                  </span>
                </div>
              </div>
              <div className="description-area mb-2">
                <p className="text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nostrum magni quis esse obcaecati rerum repellendus
                  praesentium dolorum recusandae, delectus ut.
                </p>
              </div>
              <div className="d-flex ">
                <span className="common-color">Ratings</span>
                <span className="text-warning">
                  <BsFillStarFill />
                </span>
                <span className="text-warning">
                  <BsFillStarFill />
                </span>
                <span className="text-warning">
                  <BsFillStarFill />
                </span>
                <span className="text-warning">
                  <BsFillStarFill />
                </span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 p-4">
              <div className="d-flex align-items-center">
                <img src={clientImg} alt="" width="70" height="70" />
                <div>
                  <span className="fs-5 common-color text-bold">
                    Yeasin Arafat
                  </span>
                  <br />
                  <span className="common-titleColor text-bold">
                    CEO, Microsoft
                  </span>
                </div>
              </div>
              <div className="description-area mb-2">
                <p className="text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nostrum magni quis esse obcaecati rerum repellendus
                  praesentium dolorum recusandae, delectus ut.
                </p>
              </div>
              <div className="d-flex ">
                <span className="common-color">Ratings</span>
                <span className="text-warning">
                  <BsFillStarFill />
                </span>
                <span className="text-warning">
                  <BsFillStarFill />
                </span>
                <span className="text-warning">
                  <BsFillStarFill />
                </span>
                <span className="text-warning">
                  <BsFillStarFill />
                </span>
                <span className="text-warning">
                  <BsFillStarFill />
                </span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 p-4">
              <div className="d-flex align-items-center">
                <img src={clientImg} alt="" width="70" height="70" />
                <div>
                  <span className="fs-5 common-color text-bold">
                    Ziaur Rahman
                  </span>
                  <br />
                  <span className="common-titleColor text-bold">
                    CEO, Future-it
                  </span>
                </div>
              </div>
              <div className="description-area mb-2">
                <p className="text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nostrum magni quis esse obcaecati rerum repellendus
                  praesentium dolorum recusandae, delectus ut.
                </p>
              </div>
              <div className="d-flex ">
                <span className="common-color">Ratings</span>
                <span className="text-warning">
                  <BsFillStarFill />
                </span>
                <span className="text-warning">
                  <BsFillStarFill />
                </span>
                <span className="text-warning">
                  <BsFillStarFill />
                </span>
                <span >
                  <BsFillStarFill />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientReview;
