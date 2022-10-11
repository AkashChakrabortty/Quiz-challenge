import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const StartQuiz = () => {
  const loaderData = useLoaderData();
  const { name, questions } = loaderData.data;

  return (
    <div>
      <h2 className="text-center text-2xl">Quiz of {name}</h2>
      <div className="question w-2/3 mx-auto">
        {questions.map((question) => (
          <Question key={question.id} question={question}></Question>
        ))}
      </div>
    </div>
  );
};

export default StartQuiz;
