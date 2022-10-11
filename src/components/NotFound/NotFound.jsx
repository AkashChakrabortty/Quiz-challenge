import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  const { status, statusText } = error;
  return (
    <div className="h-screen flex justify-center items-center bg-orange-900">
      <div className="text-3xl text-center text-sky-600">
        <h1>{status}</h1>
        <h2>{statusText}</h2>
      </div>
    </div>
  );
};

export default NotFound;
