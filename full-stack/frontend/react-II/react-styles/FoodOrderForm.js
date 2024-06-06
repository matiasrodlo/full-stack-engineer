import React, { useState } from "react";

function FoodOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Order successfull\nYour order ${order}. \n Please show your confirmaion number for pickup."
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        value={name}
        type="text"
        name={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="phone">Phone:</label>
      <input
        id="phone"
        name="phone"
        type="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <label htmlFor="address">Address:</label>
      <input
        id="address"
        name="address"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <label htmlFor="order">Order:</label>
      <input
        id="order"
        name="order"
        type="text"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
      />
      <button type="submit">Submit Order</button>
    </form>
  );
}

export default FoodOrderForm;
