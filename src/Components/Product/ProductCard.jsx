import { Link } from "react-router-dom";
import { RiShoppingBasketLine } from "react-icons/ri";
import { CgHeart } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../app/features/BasketSlice";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../app/features/FavoriteSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const fav = useSelector((state) => state.favorite.value);
  const [favorite, setFavorite] = useState(fav.some((el) => el.id == item.id));


  const handleBasket = () => {
    dispatch(addToBasket(item));
  };

  const handleFavorite = () => {
    const isFavorite = !favorite;
    setFavorite(isFavorite);
    if (isFavorite) {
      dispatch(addToFavorite(item));
    } else {
      dispatch(removeFromFavorite(item.id));
    }
  };

  return (
    <>
      <div className="product_box">
        <div className="product_box_card">
          <Link to={ `/${item.id}`}>
            <img className="product_box_card_img" src={item.thumbnail} alt="" />
            <p className="product_box_card_price">
              <span>$</span>
              {item.price}
            </p>
          </Link>

          <button
            className="product_box_card_serd"
            aria-label="Add to favorites"
            onClick={handleFavorite}
          >
            {favorite ? <FaHeart /> : <CgHeart />}
          </button>

          <button
            className="product_box_card_btn"
            aria-label="Add to cart"
            onClick={handleBasket}
          >
            <RiShoppingBasketLine />
          </button>
          <p className="product_box_card_rating">
            {item.rating} <img src="star.png" alt="" />{" "}
          </p>
          <h3 className="product_box_card_title">{item.title}</h3>
          <p className="product_box_card_text">{item.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
