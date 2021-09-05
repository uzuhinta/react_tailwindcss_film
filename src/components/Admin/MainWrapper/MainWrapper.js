import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function MainWrapper(props) {
  const isFull = useSelector((state) => state.aside.isFull);

  return (
    <div className={`Main pt-32 duration-300 ${isFull ? 'pl-72' : 'pl-20'}`}>
      <div className={`mx-7 bg-admin-bs-white shadow-md rounded-xl`}>
        {props.children}
      </div>
    </div>
  );
}

export default MainWrapper;
