import React from "react";
import "./PaymentProcess.css";
import { Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SplitForm from "./SplitForm";
const stripePromise = loadStripe(
  "pk_test_51Ie1L6DJGTm3SWx8UWYDTla8YgPzFgHuac3K24xEMPD5GeFvfZA45spUYTLBlvOTp6gRPl1DJn82pF0UDB3VEC1t00ioTVIRss"
);

function PaymentProcess({ serviceData }) {
  let totalPrice = 0;
  for (let i = 0; i < serviceData.length; i++) {
    totalPrice += +serviceData[i].price;
  }
  return (
    <section>
      <div className="payment-process">
        <Elements stripe={stripePromise}>
          <SplitForm serviceData={serviceData} totalPrice={totalPrice} />
        </Elements>
      </div>
    </section>
  );
}

export default PaymentProcess;
