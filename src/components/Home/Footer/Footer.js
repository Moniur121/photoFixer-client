import React from "react";
import "./Footer.css";
import { FaBookReader, FaCartPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Map from "../Map/Map";
function Footer() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.target.reset();
  };
  return (
    <section className="footer-area" id="contact">
      <div className="container py-4">
        <div className="footer-title d-flex justify-content-between">
          <div className="d-flex ">
            <div>
              <span className="fs-2" style={{fontWeight: "bold" }}>
                <span className="common-color">Photo</span>
                <span
                  className="common-titleColor"
                  style={{ marginLeft: "-1px" }}
                >
                  Fixer
                </span>
              </span>
              <br />
            </div>
          </div>
          <div>
            <button className="common-btn">JOIN NOW</button>
          </div>
        </div>
        <div className="common-border"></div>
        <div className="footer-main py-5">
          <div className="row">
            <div className="col-md-6">
              <h5 className="common-color text-bold">
                Sign Up For A Newsletter
              </h5>
              <hr style={{ color: "#f5f5f5", width: "150px" }} />
              <p className="common-titleColor">
                Weekly Breaking News Analysis And Cutting Edge
                <br /> Advices On Job Searching.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 ">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <input className="common-btn" type="submit" />
              </form>
            </div>
             <div className="col-md-6">
               <Map/>
             </div>
          </div>
        </div>
        <hr style={{ color: "#f5f5f5" }} />
        <div className="created-by common-color fs-3 text-center">
          <p>Created by & Moniur Rahman Shimul</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
