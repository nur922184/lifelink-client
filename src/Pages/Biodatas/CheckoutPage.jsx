import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk); //  TODOReplace with your Stripe publishable key

const CheckoutForm = () => {
  const biodata = useLoaderData();
  const {user} = useAuth()
  const navigate = useNavigate()
  // console.log(biodata)
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const response = await fetch('https://final-project-server-tau-jade.vercel.app/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 500 }), // amount in cents
    });

    const { clientSecret } = await response.json();

    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          email: biodata.contactEmail,
        },
      },
    });

    if (error) {
      console.error(error.message);
    } else if (paymentIntent.status === 'succeeded') {
      // Send payment details to server
      const paymentDetails = {
        biodataId: biodata.id,
        mobile: biodata.mobileNumber,
        status: '',
        name: biodata.name,
        postEmail: biodata.contactEmail,
        email: user.email,
        amount: paymentIntent.amount,
        transactionId: paymentIntent.id,
        date: new Date(),
      };

      const recordResponse = await fetch('https://final-project-server-tau-jade.vercel.app/record-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentDetails),
      });

      if ((await recordResponse.json()).success) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Payment successful and recorded!',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/dashboard')
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded shadow-md ">
      <h2 className='text-center mt-9 text-2xl  dark:text-gray-300'>Total Amount Free: 500</h2>
      <div className="mb-4">
        <label className="block font-medium mb-2  dark:text-gray-300">Biodata ID</label>
        <input
          type="text"
          className="border p-2 w-full"
          defaultValue={biodata.id}
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-2 dark:text-gray-300">Your Email</label>
        <input
          type="email"
          className="border p-2 w-full"
          defaultValue={user.email}
          readOnly
        />
      </div>

      <div className="mb-4">
        <h3 className="block font-medium mb-2 dark:text-gray-300">Card Details</h3>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        ></CardElement>
      </div>

      <button
        type="submit"
        className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-600"
        disabled={!stripe}
      >
        Payment ($5)
      </button>
    </form>
  );
};

const CheckoutPage = () => (
  <Elements stripe={stripePromise}>
    <div className="container mx-auto py-24">
      <h1 className="text-2xl dark:text-white font-bold mb-4">Request Contact Information</h1>
      <CheckoutForm />
    </div>
  </Elements>
);

export default CheckoutPage;
