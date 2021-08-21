import React from "react";
import { Link } from "react-router-dom";

function PaymentSuccess() {
  return (
    <section>
      <div className="container py-5">
        <div className="payment-successArea align-items-center">
          <h1 style={{ marginTop: "-20px" }}>!Thank You For Your Shopping</h1>
          <Link to="/home"><button className="btn btn-success">Back to Home</button></Link>
        </div>
      </div>
    </section>
  );
}

export default PaymentSuccess;
