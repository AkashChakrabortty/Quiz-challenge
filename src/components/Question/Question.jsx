import { faCircle, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Question = ({ question }) => {
  const { options } = question;

  return (
    <div className="border-orange-400 border-2 m-5">
      <div className="header flex justify-between">
        <div className="question">
          <h2> {question.question}</h2>
        </div>
        <div className="eye">
          {<FontAwesomeIcon icon={faEye} className="text-2xl" />}
        </div>
      </div>
      {options.map((element) => {
        return (
          <div className="flex">
            <div className="circle">
              <FontAwesomeIcon icon={faCircle} />
            </div>
            <div className="option">
              <h3>{element}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Question;
