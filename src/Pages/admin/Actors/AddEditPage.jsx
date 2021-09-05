import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useLocation } from 'react-router';

function AddEditPage(props) {
  const match = useRouteMatch();
  const aa = useLocation();
  return (
    <div>
      AddEditPage
      <button onClick={() => console.log(match)}>show</button>
    </div>
  );
}

AddEditPage.propTypes = {};

export default AddEditPage;
