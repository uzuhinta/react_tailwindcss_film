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

function HomePage(props) {
  return (
    <div className={`bg-body-bg`}>
      <main className={`container mx-auto`}>
        <div className={`flex flex-col w-full`}>
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

        <button
          className={`mx-auto px-10 py-3  rounded-full block hover:underline transition delay-150 duration-300 ease-in-out bg-common-whiteff text-common-gray0c}`}
        >
          Next
        </button>
      </main>
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
