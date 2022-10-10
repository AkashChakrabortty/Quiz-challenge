import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="container w-3/4 mx-auto mt-8">
        <div className="q1">
          <h2 className="font-bold">What is the purpose of react router?</h2>
          <p>
            ReactJS Router is mainly used for developing Single Page Web
            Applications. React Router is used to define multiple routes in the
            application. When a user types a specific URL into the browser, and
            if this URL path matches any 'route' inside the router file, the
            user will be redirected to that particular route.
          </p>
        </div>

        <div className="q2">
          <h2 className="font-bold">How context api works?</h2>
          <p>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on.
          </p>
        </div>

        <div className="q3">
          <h2 className="font-bold">useRef Hook</h2>
          <p>
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly. The
            useRef Hook can also be used to keep track of previous state
            values.This is because we are able to persist useRef values between
            renders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
