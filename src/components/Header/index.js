import Images from 'constant/Images';
import React, { useLayoutEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const listNav = [
  { name: 'Phim mới', isActive: true, slug: 'phim-moi' },
  { name: 'Phim lẻ', isActive: false, slug: 'phim-le' },
  { name: 'Phim bộ', isActive: false, slug: 'phim-bo' },
  {
    name: 'Phim hoạt hình',
    isActive: false,
    slug: 'phim-hoat-hinh',
  },
  {
    name: 'Phim chiếu rạp',
    isActive: false,
    slug: 'phim-chieu-rap',
  },
];

function Header(props) {
  const [isShow, setIsShow] = useState(false);

  const handleNav = (stateShow) => {
    setIsShow(stateShow);
  };

  useLayoutEffect(() => {
    function updateNav() {
      if (window.innerWidth > 1024) {
        setIsShow(false);
      }
    }
    window.addEventListener('resize', updateNav);
    updateNav();
    return () => window.removeEventListener('resize', updateNav);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="z-50 h-20 bg-header-bg flex items-center fixed w-full">
      <div className="container h-full mx-auto flex justify-between items-center">
        <Link to="/" className="h-full flex items-center">
          <img src={Images.IMG_LOGO} alt="logo" />
        </Link>
        <nav className="h-full items-center hidden lg:flex">
          {listNav.map((item, index) => (
            <NavLink
              key={index}
              exact
              to={`${item.slug === 'phim-moi' ? '/' : `/type/${item.slug}`}`}
              className={`h-full flex items-center ml-11 text-lg font-semibold text-common-gray89 cursor-pointer hover:text-common-whiteff duration-300`}
              activeClassName={`text-common-whiteff border-b-4 border-common-yellowf1`}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div
          className={`lg:hidden h-full flex items-center cursor-pointer`}
          onClick={() => handleNav(true)}
        >
          <img className={`h-1/2`} src={Images.MENU} alt="hamburger" />
        </div>
      </div>

      <div
        onClick={() => handleNav(false)}
        className={`absolute top-0 right-0 w-screen h-screen bg-common-gray3b opacity-50 duration-300 transform ${
          isShow ? '' : 'translate-x-full'
        }`}
      ></div>

      <div
        className={`absolute z-10 right-0 top-0 transform h-screen w-80 py-9 bg-body-bg duration-300 ${
          isShow ? '' : 'translate-x-full'
        } `}
      >
        {listNav.map((item, index) => (
          <NavLink
            key={index}
            exact
            to={`${item.slug === 'phim-moi' ? '/' : `/type/${item.slug}`}`}
            onClick={() => handleNav(false)}
            className={`flex items-center mx-11 py-4 text-lg font-semibold text-common-gray89 cursor-pointer hover:text-common-whiteff duration-300`}
            activeClassName={`text-common-whiteff border-b-4 border-common-yellowf1`}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
