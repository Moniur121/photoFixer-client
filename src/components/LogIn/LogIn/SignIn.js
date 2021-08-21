import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../../App";
function SignIn() {
  const [error, setError] = useState("");
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  const onSubmit = (data, e) => {
    console.log("he");
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        setLoggedInUser(user);
        history.replace(from);
        //   history.push("/LogIn")
        //   console.log(user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        setError(errorMessage);
      });
  };

  return (
    <section className="logIn-area">
      <div className="container py-5">
        <div className="signUp-form">
          <h3
            className="common-color text-center py-5"
            style={{ marginTop: "-110px" }}
          >
            SignIn
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="common-titleColor">Enter Your Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Enter UserName"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3">
              <label className="common-titleColor">Enter Your Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Enter Password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <button type="submit" className="common-btn ">
              SignIn
            </button>
          </form>
          <p className="text-danger">{error}</p>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
