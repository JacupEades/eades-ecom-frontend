import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckout from "../components/StripeCheckout";
import "../stripe.css";

// load stripe outside of components render to avoid re creating stripe object on every render
const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => {
	return (
		<>
			<div className="row bg-danger w-100 text-center m-0">
				<h4 className="text-light ps-3 pe-3 m-1">
					Orders can be made but there will be no charges. This is only a
					demonstration project.
				</h4>
			</div>
			<div className="container-fluid p-5 text-center">
				<h4>Complete your purchase</h4>
				<Elements stripe={promise}>
					<div className="col-md-8 offset-md-2">
						<StripeCheckout />
					</div>
				</Elements>
			</div>
		</>
	);
};

export default Payment;
