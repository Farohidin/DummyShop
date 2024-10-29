import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { useGetCategoryListQuery } from "../app/api/dummyDataApi";
import { useDispatch, useSelector } from "react-redux";
import { selectedBannerCategoryImg } from "../app/features/BannerSlice";
import { IoArrowBackCircleSharp } from "react-icons/io5";
const Saidbar = ({ setCategory }) => {
  const { data, isError, isLoading } = useGetCategoryListQuery();

  const categoryBanner = useSelector(selectedBannerCategoryImg);

  console.log(categoryBanner);

  const handleCategory = (i) => {
    setCategory(i);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching categories</div>;

  return (
    <div className="sidebar">
      <div className="container">
        <h2 className="sidebar_title">Category</h2>
        <div className="sidebar_box">
          <div className="sidebar_box_tul">
            <ul className="sidebar_box_ul">
              <span className="sidebar_box_ul_bk" 
              onClick={() => handleCategory("")}> 
                  <IoArrowBackCircleSharp />
                  All Products
              </span>
              {isLoading ? (
                <>Loading...</>
              ) : (
                data.map((i) => (
                  <li
                    className="sidebar_box_ul_link"
                    onClick={() => handleCategory(i)}
                    key={i}
                  >
                    <span>{i}</span>
                  </li>
                ))
              )}
            </ul>
          </div>
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, EffectFade, Pagination]}
            className="mySwiper"
          >
            {categoryBanner?.map((item) => (
              <SwiperSlide key={item} className="swiperSlide">
                <img src={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Saidbar;
