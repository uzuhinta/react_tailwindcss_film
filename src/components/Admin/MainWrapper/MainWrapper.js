import React from 'react';
import { useSelector } from 'react-redux';

function MainWrapper({children}) {
  const isFull = useSelector((state) => state.aside.isFull);

  return (
    <div className={`Main pt-32 pb-3 duration-300 ${isFull ? 'pl-72' : 'pl-20'}`}>
      <div className={`mx-5 bg-admin-bs-white shadow-md rounded-xl p-4 min-h-content`}>
        {children}
      </div>
    </div>
  );
}

export default MainWrapper;
