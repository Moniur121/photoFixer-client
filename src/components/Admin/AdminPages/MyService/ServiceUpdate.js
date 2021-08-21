import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function ServiceUpdate({ modalIsOpen, closeModal, editValue }) {
  const [editCourse, setEditCourse] = useState([]);
  const [imgUrl, setImgUrl] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const imgUpload = (file) => {
    console.log(file)
    const imgData = new FormData();
    imgData.set('key', 'fa0671d09ed646de7785a0b91b3d0f5d')
    imgData.append('image', file[0])
    axios.post('https://api.imgbb.com/1/upload', imgData)
        .then(function (response) {
            setImgUrl(response.data.data.display_url);
        })
        .catch(function (error) {
            
        })
}
  const onSubmit = (data,e) => {
      const serviceData ={
        id: editValue._id,
        serviceName: data.serviceName,
        price: data.price,
        description: data.description,
        imgUrl: imgUrl,
      }
    fetch(`https://fast-reef-04000.herokuapp.com/serviceUpdate`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceData),
    })
      .then((res) => res.json())
      .then((data) => {
        closeModal();
      });
  };
  return (
    <section>
      <div className="container">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="serviceName"
                defaultValue={editValue.serviceName}
                {...register("serviceName", { required: true })}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="number"
                name="price"
                defaultValue={editValue.price}
                {...register("price", { required: true })}
              />
            </div>
            
            <div class="mb-3">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                {...register("description", { required: true })}
                name="description"
                defaultValue={editValue.description}
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3">
              <input
                className="form-control w-25"
                {...register("imgUrl")}
                type="file"
                name="imgUrl"
                onChange={(e) => imgUpload(e.target.files)}
              />
            </div>
            <input className="btn btn-dark" type="submit" />
          </form>
        </Modal>
      </div>
    </section>
  );
}

export default ServiceUpdate;
