import React from "react";

const Cart = ({ item }) => {
  const { name, logo, total } = item;

  return (
    <div>
      <div className="item text-center bg-green-200 text-orange-400 text-lg">
        <img src={logo} alt={name} className="w-1/2 mx-auto " />
        <p>{name}</p>
        <p>Total:{total}</p>
        <button className="border-2 rounded p-2 border-lime-500">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Cart;
