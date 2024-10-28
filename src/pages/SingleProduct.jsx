import { useParams } from "react-router-dom";
import { RiShoppingBasketLine } from "react-icons/ri";
import { CgHeart } from "react-icons/cg";
import { useState } from "react";
import { useGetSigleProductQuery } from "../app/api/dummyDataApi";

const SingleProduct = () => {
  const { id } = useParams();
  const [miqdor, setMiqdor] = useState(1);
  const { data, isError, isLoading } = useGetSigleProductQuery(id);
  const [mainFoto, setMainFoto] = useState(null);
  const donaNarhi = data?.price;

  const handleBasket = () => {
    dispatch(addToBasket(item));
  };

  const price = donaNarhi * miqdor;

  const handlePrice = (znak) => {
    if (znak === "+") {
      setMiqdor(miqdor + 1);
    } else if (znak === "-" && miqdor > 1) {
      setMiqdor(miqdor - 1);
    }
  };

  if (isError) {
    return <div>404</div>;
  }

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  return (
    <div className="container">
      <span>Stock: {data.stock}</span>
      <div>
        <div className="single_box">
          <div className="single_box_cardl">
            {data.images.map((item) => (
              <img
                className="single_box_cardl_img"
                src={item}
                alt=""
                key={item}
                onClick={() => setMainFoto(item)}
              />
            ))}
          </div>
          <div className="single_box_mr">
            <div className="single_box_cardm">
              <img
                className="single_box_cardm_img"
                src={mainFoto ? mainFoto : data.thumbnail}
                alt=""
              />

              <p className="single_box_cardm_price">
                1X:<span>$</span>
                {data.price}
              </p>
              <button
                className="single_box_cardm_serd"
                aria-label="Add to favorites"
              >
                <CgHeart />
              </button>
            </div>

            <div className="single_box_cardr">
              <div className="single_box_cardr_tx">
                <h2 className="single_box_cardr_title">{data.title}</h2>
                <p className="single_box_cardr_text">{data.description}</p>
              </div>

              <div className="single_box_cardr_btnbox">
                <p className="single_box_cardr_btnbox_price">
                  General Price:<span>$</span>
                  {price}
                </p>
                <div className="single_box_cardr_btnbox_inc">
                  <button
                    className="single_box_cardr_btnbox_inc_right"
                    onClick={() => handlePrice("-")}
                  >
                    -
                  </button>

                  <p className="single_box_cardr_btnbox_inc_midl">{miqdor}X</p>
                  <button
                    className="single_box_cardr_btnbox_inc_left"
                    onClick={() => handlePrice("+")}
                  >
                    +
                  </button>
                </div>

                <button
                  className="single_box_cardr_btnbox_btn"
                  aria-label="Add to cart"
                >
                  <RiShoppingBasketLine />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
