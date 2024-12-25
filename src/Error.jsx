import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  // Using the useRouteError hook to capture the error
  const error = useRouteError();

  // Log the error to see what kind of data is returned
  console.log(error);

  return (
    <div>
      <h2>Oops!! Something went wrong.</h2>
      {/* Display the error message */}
      {<h2>{error.data+ "  " + error.status}</h2>}
      {/* {<h2>{status}</h2>} */}
      <p>{error?.message || 'An unexpected error occurred'}</p>
    </div>
  );
};

export default Error;
