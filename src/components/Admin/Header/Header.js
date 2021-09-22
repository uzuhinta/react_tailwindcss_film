import React from 'react';
import { useSelector } from 'react-redux';
import HeaderMenuItem from './HeaderMenuItem';
import HeaderMenuWithSub from './HeaderMenuWithSub';

const HeaderItem1 = [
  {
    to: '',
    title: 'Dashboard',
    icon: '',
    img: '',
    hasArrow: false,
    hasBullet: false,
    isActive: true,
    isMega: false,
  },
  {
    to: '',
    title: 'Layout Builder',
    icon: '',
    img: '',
    hasArrow: false,
    hasBullet: false,
    isActive: false,
    isMega: false,
  },
  {
    to: '',
    title: 'Crafted',
    icon: '',
    img: '',
    hasArrow: true,
    hasBullet: false,
    isActive: false,
    menuPlacement: 'top-125',
    isMega: true,
  },
  {
    to: '',
    title: 'Apps',
    icon: '',
    img: '',
    hasArrow: true,
    hasBullet: false,
    isActive: false,
    menuPlacement: 'top-125',
    isMega: true,
  },
  {
    to: '',
    title: 'Mega menu',
    icon: 'fas fa-rocket',
    img: '',
    hasArrow: true,
    hasBullet: false,
    isActive: false,
    menuPlacement: 'top-125',
    isMega: true,
  },
];

const HeaderItem2 = [
  {
    to: '',
    title: '',
    icon: 'fas fa-rocket',
    img: '',
    hasArrow: false,
    hasBullet: false,
    isActive: false,
    isMega: false,
  },
  {
    to: '',
    title: '',
    icon: 'fas fa-calendar-check',
    img: '',
    hasArrow: false,
    hasBullet: false,
    isActive: false,
    isMega: false,
  },
  {
    to: '',
    title: '',
    icon: 'fas fa-chart-bar',
    img: '',
    hasArrow: false,
    hasBullet: false,
    isActive: false,
    isMega: false,
  },
  {
    to: '',
    title: '',
    icon: 'fab fa-facebook-messenger',
    img: '',
    hasArrow: false,
    hasBullet: false,
    isActive: false,
    isMega: false,
  },
  {
    to: '',
    title: '',
    icon: '',
    img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/2/a/3/b/2a3b04b96552562debe6140cf9ea36b5.jpg',
    hasArrow: false,
    hasBullet: false,
    isActive: true,
    menuPlacement: 'top-100 right-0  -translate-x-full', //'top-125'
    isMega: true,
  },
];

function Header(props) {
  const isFull = useSelector((state) => state.aside.isFull);
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
          <HeaderMenuItem title="Dashboard" isActive />
          <HeaderMenuItem title="Layout Builder" />
          <HeaderMenuWithSub title="Crafted" hasArrow menuPlacement="top-full">
            <HeaderMenuWithSub
              title="Pages"
              hasArrow
              menuPlacement="top-0 left-full"
            >
              <HeaderMenuItem title="Dashboard" />
              <HeaderMenuItem title="Dashboard" />
              <HeaderMenuItem title="Dashboard" />
              <HeaderMenuItem title="Dashboard" />
            </HeaderMenuWithSub>
            <HeaderMenuWithSub
              title="Pages"
              hasArrow
              isActive
              menuPlacement="top-0 left-full"
            >
              <HeaderMenuItem title="Dashboard" />
              <HeaderMenuItem title="Dashboard" />
              <HeaderMenuItem title="Dashboard" />
              <HeaderMenuItem title="Dashboard" />
            </HeaderMenuWithSub>
            <HeaderMenuWithSub
              title="Pages"
              hasArrow
              menuPlacement="top-0 left-full"
            >
              <HeaderMenuItem title="Dashboard" />
              <HeaderMenuItem title="Dashboard" />
              <HeaderMenuItem title="Dashboard" />
              <HeaderMenuItem title="Dashboard" />
            </HeaderMenuWithSub>
            <HeaderMenuItem title="Dashboard" />
            <HeaderMenuItem title="Dashboard" />
            <HeaderMenuItem title="Dashboard" />
            <HeaderMenuItem title="Dashboard" />
          </HeaderMenuWithSub>
          <HeaderMenuWithSub
            title="Pages"
            hasArrow
            menuPlacement="top-0 left-full"
          >
            <HeaderMenuItem title="Dashboard" />
            <HeaderMenuItem title="Dashboard" />
            <HeaderMenuItem title="Dashboard" />
            <HeaderMenuItem title="Dashboard" />
          </HeaderMenuWithSub>
          {/* {HeaderItem1.map((item) =>
            item.isMega ? (
              <HeaderMenuWithSub {...item} />
            ) : (
              <HeaderMenuItem {...item} />
            )
          )} */}

          {/* {Mega.map((item) => (
            <HeaderMenuWithSub {...item}>
              {HeaderItem1.map((item) => (
                <HeaderMenuItem {...item} />
              ))}
            </HeaderMenuWithSub>
          ))} */}
        </div>
        {/* Left header */}

        {/* Right header */}
        <div className={`flex items-center gap-1`}>
          <HeaderMenuItem icon="fas fa-rocket" />
          <HeaderMenuItem icon="fas fa-calendar-check" />
          <HeaderMenuItem icon="fas fa-chart-bar" />
          <HeaderMenuItem icon="fab fa-facebook-messenger" />
          <HeaderMenuWithSub
            img="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/2/a/3/b/2a3b04b96552562debe6140cf9ea36b5.jpg"
            menuPlacement="top-100 left-full -translate-x-full"
          >
            <HeaderMenuWithSub
              title="Pages"
              hasArrow
              menuPlacement="top-0 left-0 -translate-x-full"
            >
              <HeaderMenuWithSub
                title="Pages"
                hasArrow
                menuPlacement="top-0 left-0 -translate-x-full"
              >
                <HeaderMenuItem title="Dashboard" />
                <HeaderMenuItem title="Dashboard" />
                <HeaderMenuItem title="Dashboard" />
                <HeaderMenuItem title="Dashboard" />
              </HeaderMenuWithSub>
              <HeaderMenuItem title="Dashboard" />
              <HeaderMenuItem title="Dashboard" />
              <HeaderMenuItem title="Dashboard" />
              <HeaderMenuItem title="Dashboard" />
            </HeaderMenuWithSub>
            <HeaderMenuWithSub
              title="Pages"
              hasArrow
              isActive
              menuPlacement="top-0 left-0 -translate-x-full"
            >
              <HeaderMenuItem title="Dashboard" />
              <HeaderMenuItem title="Dashboard" />
              <HeaderMenuItem title="Dashboard" />
              <HeaderMenuItem title="Dashboard" />
            </HeaderMenuWithSub>
            <HeaderMenuWithSub
              title="Pages"
              hasArrow
              menuPlacement="top-0 left-0 -translate-x-full"
            >
              <HeaderMenuItem title="Dashboard" />
              <HeaderMenuItem title="Dashboard" />
              <HeaderMenuItem title="Dashboard" />
              <HeaderMenuItem title="Dashboard" />
            </HeaderMenuWithSub>
            <HeaderMenuItem title="Dashboard" />
            <HeaderMenuItem title="Dashboard" />
            <HeaderMenuItem title="Dashboard" />
            <HeaderMenuItem title="Dashboard" />
          </HeaderMenuWithSub>
          {/* {HeaderItem2.map((item) =>
            item.isMega ? (
              <HeaderMenuWithSub {...item} />
            ) : (
              <HeaderMenuItem {...item} />
            )
          )} */}
        </div>
        {/* Right header */}
      </div>
      <div className={`h-14 shadow-lg bg-admin-bs-white`}>fsdfads</div>
    </div>
  );
}

export default Header;
