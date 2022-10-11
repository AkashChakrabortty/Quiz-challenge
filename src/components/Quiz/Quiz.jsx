import React, { useContext } from "react";
import Cart from "../Cart/Cart";
import { Items } from "../Router/Router";
const Quiz = () => {
  const items = useContext(Items);
  return (
    <div>
      <div className="container flex mt-6 mx-auto">
        {items.map((item) => (
          <Cart key={item.id} item={item}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
