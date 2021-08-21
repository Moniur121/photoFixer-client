import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";
function AddService() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [imgUrl, setImgUrl] = useState(null);
  const onSubmit = (data, e) => {
    const addServiceData = {
      serviceName: data.serviceName,
      price: data.price,
      description: data.description,
      imgUrl: imgUrl,
    };
    fetch("https://fast-reef-04000.herokuapp.com/addServices", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(addServiceData),
    })
    .then(res => res.json())
    .then(data =>{
            e.target.reset();
            alert('Service Added Successfully!')
    })
  };
  const imgUpload = (file) => {
    console.log(file);
    const imgData = new FormData();
    imgData.set("key", "fa0671d09ed646de7785a0b91b3d0f5d");
    imgData.append("image", file[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        setImgUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <section className="admin-pageBg">
      <div className="container py-5">
        <div className="addService-area py-5">
          <div className="service-title">
            <h3 className="common-color">Add PhotoGraphy Service</h3>
          </div>
          <div className="form-area">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  name="serviceName"
                  placeholder="Enter ServiceName"
                  {...register("serviceName", { required: true })}
                />
                {errors.serviceName && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="number"
                  name="price"
                  placeholder="Enter pricingPlan"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="description"
                  placeholder="Enter Description Here"
                  rows="3"
                  {...register("description", { required: true })}
                ></textarea>
                {errors.description && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="mb-3">
                <input
                  className="form-control w-25"
                  onChange={(e) => imgUpload(e.target.files)}
                  type="file"
                  name="doctorImage"
                />
              </div>

              <input className="common-btn" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddService;
