import React, { useEffect, useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { useForm } from "react-hook-form";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const SplitForm = ({ totalPrice, serviceData }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [payDisable, setPayDisable] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const onSubmit = async (data, event) => {
    event.preventDefault();
      closeModal()
    const paymentOrder = {
      userName: data.userName,
      email: data.email,
      phone: data.phone,
      totalPrice,
      status: "Pending",
    };
    fetch("https://fast-reef-04000.herokuapp.com/paymentOrder", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(paymentOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Payment Successfully")
      });
      console.log(data);

    if (!stripe || !elements) {
      return;
    }
    let payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    console.log("[PaymentMethod]", payload);
    setErrorMessage(payload);
  };
  const paymentSuccess = (id) => {
    fetch(`https://fast-reef-04000.herokuapp.com/paymentSuccess/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => data);
    // closeModal()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p style={{ color: "white", fontSize: "17px", fontWeight: "bold" }}>
        Please Pay
      </p>
      <label className="input-field  mb-3">
        Name
        <input
          onChange={(e) => setInputVal(e.target.value)}
          type="text"
          name="userName"
          placeholder="Enter your Name"
          className="form-control text-input"
          id=""
          {...register("userName", { required: true })}
        />
      </label>
      <br />
      <label className="input-field  mb-3">
        Email
        <input
          onChange={(e) => setInputVal(e.target.value)}
          type="email"
          placeholder="Enter Your Email"
          name="email"
          className="form-control text-input"
          id=""
          {...register("email", { required: true })}
        />
      </label>
      <br />
      <label className="input-field  mb-3">
        Phone
        <input
          onChange={(e) => setInputVal(e.target.value)}
          type="number"
          placeholder="Enter Your Phone"
          name="phone"
          className="form-control text-input"
          id=""
          {...register("phone", { required: true })}
        />
      </label>
      <br />
      <label className="input-field mb-3">
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            // console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            // console.log('hello event',event.complete)
            setPayDisable(event.complete);
            // console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            // console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            // console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <label className="input-field mb-3">
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            // console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            setPayDisable(event.complete);
            // console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            // console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            // console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <label className="input-field mb-3">
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            // console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            setPayDisable(event.complete);
            // console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            // console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            // console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br />
      <button
        onClick={() => {
          
          paymentSuccess();
        }}
        disabled={!payDisable}
        className="pay-btn"
        type="submit"
      >
        ${totalPrice} Pay
      </button>
    </form>
  );
};
export default SplitForm;
