import React, { useContext } from "react";
import Cart from "../Cart/Cart";
import { Items } from "../Router/Router";

const Home = () => {
  const items = useContext(Items);

  return (
    <div className="">
      <div className="header h-1/4 flex">
        <div className="img-quiz w-1/2">
          <img
            src="https://img.freepik.com/free-vector/quiz-show-concept-illustration_114360-9771.jpg?w=740&t=st=1665429050~exp=1665429650~hmac=16b1e3e59b9ba7761179d0721387ac14eed1325cc1191f010b26450dec20b9ee"
            alt="img"
          />
        </div>

        <div className="text-quiz w-1/2 flex justify-center items-center">
          <h2 className="text-2xl">
            Quizzes can help your students practise existing knowledge while
            stimulating interest in learning about new subject matter.
          </h2>
        </div>
      </div>
      <div className="container flex mt-6 mx-auto">
        {items.map((item) => (
          <Cart key={item.id} item={item}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Home;
