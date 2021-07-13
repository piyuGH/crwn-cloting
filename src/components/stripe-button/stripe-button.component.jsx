import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicshablekey =
    "pk_test_51Ilue8SC0liqWwLB11WTY4MHOQCmgaFoFYJfBD7IGMubPObaawsvyWeKI4FS4yUH7VhxwfDIdDpilwZL4tU7261W00vulDpaJR";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicshablekey}
    />
  );
};

export default StripeCheckoutButton;