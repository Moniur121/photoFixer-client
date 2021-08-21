import React from "react";
import { useForm } from "react-hook-form";

function MakeAdmin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    const makingAdmin = {
        name: data.name,
        email: data.email,
    }
    fetch(' https://fast-reef-04000.herokuapp.com/makeAdmin', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(makingAdmin)
    })
        .then(res => res.json())
        .then(data => {
            if (data) {
                e.target.reset();
                alert('Make Admin Successfully!')
            }

        })
}
  return (
    <section className="admin-pageBg">
      <div className="container">
        <div className="make-admin  py-5">
          <h2 className="common-color">Make a Admin</h2>
          <hr />
        </div>
        <div className="admin-formArea addService-area">
          <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-4">
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="form-control"
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                name="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="form-control"
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div className="form-group text-right">
              <button type="submit" className="common-btn">
                Make Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default MakeAdmin;
