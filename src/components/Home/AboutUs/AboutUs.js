import React from "react";
import "./AboutUs.css";
import camera from "../../images/icon/camera.png";
import schedule from "../../images/icon/schedule.png";
import earnMoney from "../../images/icon/earnMoney.png";
import aboutUsImg from "../../images/aboutImg.jpg";
function AboutUs() {
  return (
    <section id="about">
      <div className="container py-5">
        <div className="about-title ">
          <h3 className="common-color">Fastest PhotoShot</h3>
          <h1 className=" " style={{ marginTop: "-12px", color: "#297F87" }}>
            Why choose us
          </h1>
        </div>
        {/* <div className="common-border"></div> */}
        <div className="main-section py-5">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100 text-center p-4">
                <img src={camera} alt="" className="about-cardImg" />
                <h4 className="common-color">Quick PhotoGraphy</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Soluta cupiditate excepturi labore quisquam veritatis dolor
                  asperiores.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 text-center p-4">
                <img src={earnMoney} alt="" className="about-cardImg" />
                <h4 className="common-color">No PhotoGraphy No Fee</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Soluta cupiditate excepturi labore quisquam veritatis dolor
                  asperiores.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 text-center p-4">
                <img src={schedule} alt="" className="about-cardImg" />
                <h4 className="common-color">15 Days First Delivery</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Soluta cupiditate excepturi labore quisquam veritatis dolor
                  asperiores.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-aboutUs py-3">
          <div className="row row-cols-1 row-cols-md-2 g-4  ">
            <div className="col">
              <h1 className="common-color">Who We Are</h1>
              <p className="text-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Possimus quo sequi ratione totam quos itaque inventore modi. Quo
                assumenda eius esse minima laborum culpa ea hic? Impedit id
                dolore doloremque, fuga modi quis voluptates, est aut molestias
                nobis animi veniam illum deleniti optio expedita, at neque
                consequuntur! Porro, vero enim.
              </p>
              <button className="common-btn">View Services</button>
            </div>
            <div className="col ">
              <img
                src={aboutUsImg}
                alt=""
                style={{ width: "550px", height: "400px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
