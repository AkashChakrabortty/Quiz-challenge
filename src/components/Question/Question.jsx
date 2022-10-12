import { faCircle, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = (props) => {
  const { options } = props.question;
  let [index, setIndex] = useState(undefined);
  const notify = (text) => toast(text);
  return (
    <div className="border-orange-400 border-2 m-5">
      <div className="header flex justify-between">
        <div className="question md:text-2xl">
          <h2>
            <span className="text-green-500">Question:</span>
            {props.question.question}
          </h2>
        </div>
        <div
          className="eye cursor-pointer"
          onClick={() => notify(props.question.correctAnswer)}
        >
          {<FontAwesomeIcon icon={faEye} className="text-2xl" />}
        </div>
      </div>
      {options.map((element) => {
        return (
          <div className="flex md:text-2xl">
            <div
              className={`circle ${
                options[index] === element ? "text-lime-400	" : "text-zinc-900"
              }`}
            >
              <FontAwesomeIcon icon={faCircle} />
            </div>
            <div
              className="option cursor-pointer"
              onClick={(e) => {
                const i = options.indexOf(e.target.textContent);

                setIndex(i);
                const ans =
                  e.target.textContent === props.question.correctAnswer;
                ans
                  ? notify("Your Answer is Right")
                  : notify('"Your Answer is Wrong"');
              }}
            >
              <h3>{element}</h3>
              <ToastContainer />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Question;
