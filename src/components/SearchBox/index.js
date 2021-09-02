import React from 'react';
import PropTypes from 'prop-types';

function SearchBox(props) {
  return (
    <div className={`pt-20 bg-body-bg`}>
      <div className={`container mx-auto mt-12 pb-12`}>
        <form className={`flex w-10/12 mx-auto`}>
          <input
            className={`flex-1 py-2 pl-2 rounded-l-md focus:ring-2 focus:ring-blue-400 focus:outline-none box-content`}
            placeholder="Bạn muốn tìm phim gì?"
          />
          <button className={`py-2 px-4 rounded-r-md bg-blue-400 text-white`}>
            Tìm kiếm
          </button>
        </form>
      </div>
    </div>
  );
}

SearchBox.propTypes = {};

export default SearchBox;
