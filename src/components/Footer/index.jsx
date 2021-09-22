import React from 'react';

const footerCol1 = ['Liên hệ', 'Giới thiệu', 'Bản quyền'];
const footerCol2 = ['Phim bộ', 'Phim lẻ', 'Phim chiếu rạp'];
const footerCol3 = [
  { name: 'Facebook', icon: 'fab fa-facebook-square' },
  { name: 'Twitter', icon: 'fab fa-twitter-square' },
  { name: 'Instagram', icon: 'fab fa-instagram-square' },
];

function Footer(props) {
  return (
    <div className={`bg-footer-texture bg-cover bg-center pt-24`}>
      <div className={`container mx-auto`}>
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 pb-10 border-b border-common-gray37 w-11/12 mx-auto`}
        >
          <div className={`pt-5`}>
            {footerCol1.map((name, index) => (
              <a
                key={index}
                href="#"
                className={`block text-center lg:text-left text-common-gray74 py-2 hover:text-common-yellowf1 duration-200`}
              >
                {name}
              </a>
            ))}
          </div>
          <div className={`pt-5`}>
            {footerCol2.map((name, index) => (
              <a
                key={index}
                href="#"
                className={`block text-center lg:text-left text-common-gray74 py-2 hover:text-common-yellowf1 duration-200`}
              >
                {name}
              </a>
            ))}
          </div>
          <div className={`pt-5`}>
            {footerCol3.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`block text-center lg:text-left text-common-gray74 py-2 duration-200 hover:text-common-whiteff`}
              >
                <i className={`${item.icon} mr-2 text-common-yellowf1`}></i>
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <p
          href="#"
          className={`block text-center text-common-yellowf1 py-2 py-7 text-sm`}
        >
          Copyright © 2021 Fullphim.net. All Rights reserved.
        </p>
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
