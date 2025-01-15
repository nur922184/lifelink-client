import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckoutPage = () => {
  const biodata = useLoaderData();

  // const handlePayment = async (e) => {
  //   e.preventDefault();

  //   // Submit payment data
  //   const paymentData = {
  //     biodataId: biodata.id,
  //     email: localStorage.getItem('email'),
  //     status: 'pending',
  //   };

  //   try {
  //     await fetch('http://localhost:5000/contact-requests', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(paymentData),
  //     });
  //     alert('Contact request submitted successfully!');
  //   } catch (error) {
  //     console.error('Error submitting contact request:', error);
  //   }
  // };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Request Contact Information</h1>
      <form onSubmit={''} className="border p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block font-medium mb-2">Biodata ID</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={biodata.id}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Your Email</label>
          <input
            type="email"
            className="border p-2 w-full"
            value={localStorage.getItem('email')}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Stripe Card Number</label>
          <input
            type="text"
            className="border p-2 w-full"
            placeholder="4242 4242 4242 4242"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit ($5)
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
