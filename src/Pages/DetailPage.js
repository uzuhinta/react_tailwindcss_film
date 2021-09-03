import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import FilmImages from 'constant/FilmImages';
import Images from 'constant/Images';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

const film = {
  image: FilmImages.IMAGE_1,
  title: 'Người Lái Đò: Truyền Thuyết Nam Dương',
  star: 4,
  national: 'Trung Quốc',
  category: 'Phim hành động',
  release: '2/9/2021',
  time_per_chap: 45,
  duration: 36,
  director: 'Tạ Mẫn Dương, Quách Thế Miên',
  actor: 'Vương Quan Dật, Thích Ngọc Vũ, Trịnh Bân Huy',
  summary:
    '<b>Người Lái Đò: Truyền Thuyết Nam Dương</b> (The Ferryman: Legends of Nanyang 2021) bộ phim truyền hình Trung Quốc thuộc thể loại viễn tưởng, hành động, hài hước do đạo diễn Quách Thế Miên và Tạ Mẫn Dương chỉ đạo sản xuất. Phim kể về câu chuyện của hai người lái đò giúp đỡ các linh hồn còn vương vấn trần gian vì nhiều lý do khác nhau, cả hai gặp nhiều rắc rối bởi vì sự bí ẩn đôi mắt âm dương của mình.',
  content:
    'Người Lái Đò Truyền Thuyết Nam Dương có nội dung khá mới lạ với khán giả khi mà loạt webdrama, cổ trang hay tình cảm hiện đại đang bao trùm lấy truyền hình giai đoạn năm 2020 và 2021. Phim xoay quanh câu chuyện về Triệu Lệ và Hạ Đông Thành những người lái đò với nhiệm vụ là giúp đỡ các linh hồn còn mắc kẹt lại trần gian vì nhiều lý do khác nhau nào là chết oan ức, chưa báo hiếu cha mẹ, còn tình cảm với người yêu,..<br /><br /> Mọi chuyện vẫn suôn sẻ cho tới khi Hạ Đông Thanh, người dường như không có cảm giác tồn tại, có một bí mật chưa được biết đến đó chính là đôi mắt âm dương vô cùng đặc biệt. Anh có thể nhìn thấy linh hồn và trò chuyện với họ, nhưng cùng vì thế bí mật này đã khiến anh gặp vô số rắc rối, anh ta sẽ phải giải quyết nó như thế nào? Liệu có bỏ đi sứ mệnh Người Lái Đò Truyền Thuyết Nam Dương bỏ mặc các linh hồn còn lạc giữa trần gian không?',
  reviewActors: [
    {
      name: 'Vương Quan Dật',
      content:
        'Vương Quan Dật sinh ngày 5 tháng 8 năm 1988 là diễn viên, ca sĩ, người dẫn chương trình, người mẫu Singapore. Là diễn viên ở các thể loại: phim truyền hình, phim điện ảnh, kịch sân khấu. Quê quán Quảng Châu, Quảng Đông, Trung Quốc. Trước khi có sự nghiệp diễn xuất như ngày hôm nay trong tác phẩm Người Lái Đò Truyền Thuyết Nam Dương nam diễn viên đã có quá khứ nỗ lực và cố gắng rất nhiều. <br />Anh bắt đầu thử sức với vai diễn trong bộ phim Lời hẹn ước hoa hướng dương vào năm 2009 và tên tuổi được nhiều người biết đến hơn sau khi tham gia nhiều tác phẩm như Bất đáo trường thành phi hảo hán, Wiedersehen in Malaysia,.. Sau đó là chuỗi tháng ngày êm đềm của Vương Quan Dật dù anh nỗ lực rất nhiều nhưng chưa có một kịch bản nào đánh bóng tên tuổi của anh. Cho đến năm 2018, Vương Quan Dật góp mặt trong bộ phim đình đám Diên Hi Công Lược, với gương góc cạnh nam tính, chiều cao 1m78 nam diễn viên đã tạo ra sức hút mạnh mẽ dù chỉ đóng vai phụ.',
    },
    {
      name: 'Thích Ngọc Vũ',
      content:
        'Thích Ngọc Vũ sinh năm 1976, nam diễn viên người Quảng Châu, Trung Quốc. Anh hiện là cái tên nổi tiếng tại Singapore với loạt tác phẩm truyền hình ăn khách như Lục Tiểu Phụng - Quyết chiến tiền hậu, Hồ sơ pháp y 2, Chuyện tình cô bé lọ lem, Hoạ bì (bản truyền hình), Cảnh sát đặc nhiệm,.. Nét diễn đậm chất nam tính, điềm tĩnh của Thích Ngọc Vũ được khán giả đặc biệt yêu thích, vậy nên khi được nhắc đến trong tác phẩm mới Người Lái Đò Truyền Thuyết Nam Dương anh được khán giả ủng hộ rất nhiệt tình dù phim chưa lên sóng. <br />Nói thêm về chuyện đời tư, Thích Ngọc Vũ hiện đã có tổ ấm đáng ngưỡng mộ bên hoa hậu Bạch Vi Tú. Cả hai quen biết nhau trong một số dự án phim và dần nảy sinh tình cảm, cũng có thể nói là phim giả tình thật.',
    },
  ],
};

function DetailPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`bg-body-bg`}>
      <div className={`container mx-auto`}>
        <div className={` flex flex-col md:flex-row`}>
          <div
            className={`w-full pb-8 md:w-1/2 lg:w-4/12 flex items-center justify-center `}
          >
            <img
              className={`w-1/2 rounded-lg shadow-detail-img md:w-10/12`}
              src={film.image}
              alt={film.title}
            />
          </div>
          <div
            className={`text-common-whiteff w-7/12 mx-auto  md:w-1/2 lg:w-8/12`}
          >
            <h1
              className={`font-bold text-3xl text-center mb-5 md:text-6xl md:text-left`}
            >
              {film.title}
            </h1>
            <div className={`flex items-center flex-wrap`}>
              <img
                className={`inline-block h-5 mr-3 mb-3`}
                src={Images[`STAR_${film.star}`]}
                alt={`${film.star}`}
              />
              <Link
                to={'/'}
                className={`whitespace-nowrap  mr-3 mb-3 text-sm text-common-gray89 underline text-center sm:text-left flex items-center`}
              >
                <img
                  src={Images.TAG}
                  className={`inline-block h-4 mr-2`}
                  alt=""
                />
                {film.category}
              </Link>
              <span
                className={`whitespace-nowrap mr-3 mb-3 text-sm text-common-whiteff text-center sm:text-left  flex items-center`}
              >
                <img
                  src={Images.CLOCK}
                  className={`inline-block h-4 mr-2`}
                  alt=""
                />
                {film.release}
              </span>
            </div>
            <div className={`mb-6 flex justify-center lg:justify-start`}>
              <button
                className={`px-4 py-2 bg-blue-500 rounded-md mr-2.5 hover:opacity-80 duration-300`}
              >
                Trailer
              </button>
              <button
                className={`px-4 py-2 bg-red-500 rounded-md hover:opacity-80 duration-300`}
              >
                Xem phim
              </button>
            </div>
            <div className={`mb-8`}>
              <p className={`mb-1.5`}>
                Thời lượng: {film.time_per_chap} phút / tập
              </p>
              <p className={`mb-1.5`}>Số tập: {film.duration} tập</p>
              <p className={`mb-1.5`}>Quốc gia: {film.national}</p>
              <p className={`mb-1.5`}>Đạo diễn: {film.director}</p>
              <p className={`mb-1.5`}>Diễn viên: {film.actor}</p>
            </div>
          </div>
        </div>
        <div className={`w-11/12 mx-auto md:w-10/12 lg:8/12 `}>
          <div className={`mb-4 text-common-gray9c text-justify text-lg`}>
            {ReactHtmlParser(film.summary)}
          </div>
          <div className={`text-common-yellowf1 text-2xl mb-4`}>
            Review phim : {film.title}
          </div>
          <div className={`text-common-whiteff text-3xl font-semibold pb-4`}>
            Nội dung phim
          </div>
          <div className={`pb-4 text-common-gray9c text-justify text-lg`}>
            {ReactHtmlParser(film.content)}
          </div>

          <div className={`text-common-whiteff text-3xl font-semibold pb-4`}>
            Diễn viên chính trong phim {film.title}
          </div>
          {film.reviewActors.map((review) => (
            <div className={`pb-4 text-common-gray9c`}>
              <b className={`text-xl`}>{review.name}</b>
              <div className={`pb-4 text-common-gray9c text-justify text-lg`}>
                {ReactHtmlParser(review.content)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

DetailPage.propTypes = {};

export default DetailPage;
