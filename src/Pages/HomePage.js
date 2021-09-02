import React from 'react';
import PropTypes from 'prop-types';
import FilmImages from 'constant/FilmImages';
import Images from 'constant/Images';

const films = [
  {
    name: 'Người Lái Đò: Truyền Thuyết Nam Dương',
    category: 'Phim hành động',
    score: 8.1,
    star: 4,
    image: FilmImages.IMAGE_1,
  },
  {
    name: 'Người Lái Đò: Truyền Thuyết Nam Dương',
    category: 'Phim hành động',
    score: 8.1,
    star: 4,
    image: FilmImages.IMAGE_1,
  },
  {
    name: 'Người Lái Đò: Truyền Thuyết Nam Dương',
    category: 'Phim hành động',
    score: 8.1,
    star: 4,
    image: FilmImages.IMAGE_1,
  },
  {
    name: 'Người Lái Đò: Truyền Thuyết Nam Dương',
    category: 'Phim hành động',
    score: 8.1,
    star: 4,
    image: FilmImages.IMAGE_1,
  },
  {
    name: 'Người Lái Đò: Truyền Thuyết Nam Dương',
    category: 'Phim hành động',
    score: 8.1,
    star: 4,
    image: FilmImages.IMAGE_1,
  },
  {
    name: 'Người Lái Đò: Truyền Thuyết Nam Dương',
    category: 'Phim hành động',
    score: 8.1,
    star: 4,
    image: FilmImages.IMAGE_1,
  },
  {
    name: 'Người Lái Đò: Truyền Thuyết Nam Dương',
    category: 'Phim hành động',
    score: 8.1,
    star: 4,
    image: FilmImages.IMAGE_1,
  },
  {
    name: 'Người Lái Đò: Truyền Thuyết Nam Dương',
    category: 'Phim hành động',
    score: 8.1,
    star: 4,
    image: FilmImages.IMAGE_1,
  },
  {
    name: 'Người Lái Đò: Truyền Thuyết Nam Dương',
    category: 'Phim hành động',
    score: 8.1,
    star: 4,
    image: FilmImages.IMAGE_1,
  },
  {
    name: 'Người Lái Đò: Truyền Thuyết Nam Dương',
    category: 'Phim hành động',
    score: 8.1,
    star: 4,
    image: FilmImages.IMAGE_1,
  },
  {
    name: 'Người Lái Đò: Truyền Thuyết Nam Dương',
    category: 'Phim hành động',
    score: 8.1,
    star: 4,
    image: FilmImages.IMAGE_1,
  },
  {
    name: 'Người Lái Đò: Truyền Thuyết Nam Dương',
    category: 'Phim hành động',
    score: 8.1,
    star: 4,
    image: FilmImages.IMAGE_1,
  },
  {
    name: 'Người Lái Đò: Truyền Thuyết Nam Dương',
    category: 'Phim hành động',
    score: 8.1,
    star: 4,
    image: FilmImages.IMAGE_1,
  },
  {
    name: 'Người Lái Đò: Truyền Thuyết Nam Dương',
    category: 'Phim hành động',
    score: 8.1,
    star: 4,
    image: FilmImages.IMAGE_1,
  },
  {
    name: 'Người Lái Đò: Truyền Thuyết Nam Dương',
    category: 'Phim hành động',
    score: 8.1,
    star: 4,
    image: FilmImages.IMAGE_1,
  },
  {
    name: 'Người Lái Đò: Truyền Thuyết Nam Dương',
    category: 'Phim hành động',
    score: 8.1,
    star: 4,
    image: FilmImages.IMAGE_1,
  },
];

const buttons = [
  { name: 'Tất cả phim', isActive: true },
  { name: 'Sắp chiếu', isActive: false },
  { name: 'Phim mới', isActive: false },
];

function TypePage(props) {
  return (
    <div className={`bg-body-bg`}>
      <main className={`container mx-auto flex gap-x-2`}>
        <div className={`flex flex-col w-full lg:w-9/12`}>
          {[1, 2].map((i) => (
            <div className={` pb-10 `}>
              <div className={`Header`}>
                <div
                  className={`flex items-center, justify-between mb-6 flex-col lg:flex-row`}
                >
                  <h2 className={`text-4xl text-common-yellowf1 text-center`}>
                    Phim bộ mới
                  </h2>
                  <div
                    className={`GroupButton mx-auto mt-6 mb-8 lg:mt-0 lg:mb-0 lg:mx-0`}
                  >
                    {buttons.map((button) => (
                      <button
                        className={`px-4 py-3  rounded-full ml-3 mb-3 ${
                          button.isActive
                            ? 'bg-common-whiteff text-common-gray0c'
                            : 'bg-common-gray0c text-common-gray3b hover:text-common-whiteff duration-300'
                        }`}
                      >
                        {button.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 text-common-whiteff mt-4 mx-3.5`}
                >
                  {films.map((film) => (
                    <a href="#" className={`group duration-300 mx-auto`}>
                      <div className={`relative mb-6`}>
                        <span
                          className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-common-yellowf1 px-3 py-2 rounded-full text-sm`}
                        >
                          {film.score}
                        </span>
                        <img
                          className={`rounded-lg w-1/2 mx-auto sm:w-full`}
                          src={film.image}
                          alt={film.name}
                        />
                      </div>
                      <div>
                        <img
                          className={`h-5 mb-4 mx-auto sm:mx-0`}
                          src={Images[`STAR_${film.star}`]}
                          alt={`${film.star}`}
                        />
                        <h2
                          className={`font-bold text-xl group-hover:underline duration-300 mb-2 text-center sm:text-left`}
                        >
                          {film.name}
                        </h2>
                        <span
                          className={`text-sm text-common-gray89 underline block text-center sm:text-left`}
                        >
                          <img
                            src={Images.TAG}
                            className={`inline-block h-4 mr-2`}
                          />
                          {film.category}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`flex flex-col lg:w-3/12 hidden lg:block`}>
          {[1, 2, 3].map((i) => (
            <div className={`pb-10`}>
              <div className={`SideBarBlock text-common-whiteff mb-7`}>
                <h3
                  className={`text-common-yellowf1 font-semibold text-2xl uppercase mb-3`}
                >
                  PHIM BỘ HOT
                </h3>
                <div
                  className={`h-sidebar flex flex-col overflow-y-auto overflow-hidden`}
                >
                  {films.map((film) => (
                    <div className={`SmallCardItem`}>
                      <a
                        href="#"
                        className={`flex items-center justify-between gap-4 mt-8 mx-2 group duration-300`}
                      >
                        <div className={`relative`}>
                          <div
                            className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 py-1 rounded-full bg-common-yellowf1 text-sm`}
                          >
                            {film.score}
                          </div>
                          <img
                            className={`rounded-md flex-auto w-36 shadow-xl `}
                            src={film.image}
                            alt="img"
                          />
                        </div>
                        <div className="mr-12 lg:mr-1">
                          <h4 className={`group-hover:underline duration-300`}>
                            {film.name}
                          </h4>
                          <div>
                            <img
                              className={`h-4`}
                              src={Images[`STAR_${film.star}`]}
                              alt={`${film.star}`}
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

TypePage.propTypes = {};

export default TypePage;
