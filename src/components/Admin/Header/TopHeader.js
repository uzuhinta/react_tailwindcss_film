import React from 'react';
import PropTypes from 'prop-types';
import HeaderMenuItem from './HeaderMenuItem';
import HeaderMenuWithSub from './HeaderMenuWithSub';

const Mega = [
  {
    to: '',
    title: 'Mega menu',
    icon: 'fas fa-rocket',
    img: '',
    hasArrow: true,
    hasBullet: false,
    isActive: false,
    menuPlacement: 'top-0 left-full', //'top-125'
  },
];
const AvatarMega = {
  to: '',
  title: '',
  icon: '',
  img: 'fasd',
  hasArrow: false,
  hasBullet: false,
  isActive: true,
  menuPlacement: 'top-100 right-0  -translate-x-full', //'top-125'
};
const Mega1 = [
  {
    to: '',
    title: 'Mega menu',
    icon: 'fas fa-rocket',
    hasArrow: true,
    hasBullet: false,
    isActive: true,
    menuPlacement: 'top-125', //'top-125'
  },
];

const MegaSub = [
  {
    to: '',
    title: 'Dashboard',
    icon: '',
    hasArrow: true,
    hasBullet: false,
    isActive: true,
  },
];

const HeaderItem1 = [
  {
    to: '',
    title: 'Dashboard',
    icon: '',
    hasArrow: false,
    hasBullet: false,
    isActive: true,
  },
  {
    to: '',
    title: 'Layout Builder',
    icon: '',
    hasArrow: false,
    hasBullet: false,
    isActive: false,
  },
  {
    to: '',
    title: 'Crafted',
    icon: '',
    hasArrow: true,
    hasBullet: false,
    isActive: false,
  },
  {
    to: '',
    title: 'Apps',
    icon: '',
    hasArrow: true,
    hasBullet: false,
    isActive: false,
  },
  {
    to: '',
    title: 'Mega menu',
    icon: 'fas fa-rocket',
    hasArrow: true,
    hasBullet: false,
    isActive: false,
  },
];

const HeaderItem2 = [
  {
    to: '',
    title: '',
    icon: 'fas fa-rocket',
    hasArrow: false,
    hasBullet: false,
    isActive: true,
  },
  {
    to: '',
    title: '',
    icon: 'fas fa-calendar-check',
    hasArrow: false,
    hasBullet: false,
    isActive: true,
  },
  {
    to: '',
    title: '',
    icon: 'fas fa-chart-bar',
    hasArrow: false,
    hasBullet: false,
    isActive: true,
  },
  {
    to: '',
    title: '',
    icon: 'fab fa-facebook-messenger',
    hasArrow: false,
    hasBullet: false,
    isActive: true,
  },
];

function TopHeader(props) {
  const { isFull } = props;
  return (
    <div
      className={`Header fixed top-0 right-0 w-full z-40 duration-300 ${
        isFull ? 'pl-72' : 'pl-20'
      }`}
    >
      <div
        className={`TOP-HEADER h-16 border-b border-admin-bs-secondary bg-admin-bs-white flex items-center justify-between px-6`}
      >
        {/* Left header */}
        <div className={`flex items-center gap-1`}>
          {HeaderItem1.map((item) => (
            <HeaderMenuItem {...item} />
          ))}

          {Mega.map((item) => (
            <HeaderMenuWithSub {...item}>
              {HeaderItem1.map((item) => (
                <HeaderMenuItem {...item} />
              ))}
            </HeaderMenuWithSub>
          ))}
        </div>
        {/* Left header */}
        {/* Right header */}
        <div className={`flex items-center gap-1`}>
          {HeaderItem2.map((item) => (
            <HeaderMenuItem {...item} />
          ))}
          {/* Avatar */}
          <HeaderMenuWithSub {...AvatarMega}>
            {HeaderItem1.map((item) => (
              <HeaderMenuItem {...item} />
            ))}
          </HeaderMenuWithSub>
          {/* Avatar */}
        </div>
        {/* Right header */}
      </div>
      <div className={`h-14 shadow-lg bg-admin-bs-white`}>fsdfads</div>
    </div>
  );
}

TopHeader.propTypes = {
  isFull: PropTypes.bool,
};

TopHeader.defaultProps = {
  isFull: true,
};

export default TopHeader;
