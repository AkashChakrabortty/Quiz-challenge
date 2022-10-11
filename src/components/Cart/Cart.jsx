import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ClickBtn } from "../Router/Router";

const Cart = ({ item }) => {
  const { id, name, logo, total } = item;

  const eventHandler = useContext(ClickBtn);
  const quizId = `/quiz/${id}`;
  return (
    <div>
      <div className="item text-center bg-green-200 text-orange-400 text-lg">
        <img src={logo} alt={name} className="w-1/2 mx-auto " />
        <p>{name}</p>
        <p>Total:{total}</p>
        <Link to={quizId}>
          <button
            onClick={() => eventHandler(id)}
            className="border-2 rounded p-2 border-lime-500"
          >
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
