import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import LocalStorage from 'constant/Local';
import { useRouteMatch } from 'react-router-dom';

function AllActor(props) {
  const isFull = useSelector((state) => state.aside.isFull);
  const match = useRouteMatch();
  return (
    <div>
      AllActor
      <button
        onClick={() =>
          console.log({
            match,
          })
        }
      >
        show
      </button>
    </div>
  );
}

AllActor.propTypes = {};

export default AllActor;
