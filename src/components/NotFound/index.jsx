import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(props) {
  return (
    <div
      className={`bg-notfound-bg bg-cover bg-center flex items-center justify-center w-screen h-screen`}
    >
      <div>
        <h1 className={`text-9xl text-center text-common-whiteff`}>Oh no!</h1>
        <p className={`text-2xl text-center text-common-whiteff`}>Sorry. This page does not exist.</p>
        <Link to="/" className={`uppercase block max-w-max mx-auto mt-5 flex-grow-0 px-7 py-3 duration-300 bg-common-yellowf1 rounded-md text-common-whiteff font-bold hover:underline`}>Back to HomePage</Link>
      </div>
    </div>
  );
}

NotFound.propTypes = {};

export default NotFound;
