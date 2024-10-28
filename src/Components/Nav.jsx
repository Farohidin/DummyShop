import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiShoppingBasketLine } from "react-icons/ri";
import { CgHeart } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = ({ setSearchParams }) => {
  const [inputValue, setInputValue] = useState("");
  const fovarit = useSelector((state) => state.favorite.countFavorite);
  const basket = useSelector((state) => state.basket.countBasket);
  
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 1) {
      setSearchParams(value);
    } else {
      setSearchParams("");
    }
  };

  const deleteSearchParams = () => {
    setSearchParams("");
    setInputValue("");
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav_box">
          <Link to="/">
            <h1 className="nav_box_title">DummyShop</h1>
          </Link>
          <div className="nav_box_inpul">
            <div className="nav_box_btinp">
              <label></label>
              <input
                value={inputValue}
                className="nav_box_btinp_input"
                type="text"
                placeholder="Search..."
                onChange={handleSearchChange}
              />
              <button
                className="nav_box_btinp_clean"
                onClick={deleteSearchParams}
              >
                <IoMdCloseCircleOutline />
              </button>
            </div>

            <ul className="nav_box_ul">
              <li>
                <Link className="nav_box_ul_link" to="/favorite">
                  <span className="nav_box_ul_span">
                    <CgHeart />
                    <span className="nav_box_ul_span_sp">{fovarit}</span>
                  </span>
                  <span className="nav_box_ul_link_span">Favorites</span>{" "}
                </Link>
              </li>
              <li>
                <Link className="nav_box_ul_link" to="/basket">
                  <span className="nav_box_ul_span">
                    <RiShoppingBasketLine />
                    <span className="nav_box_ul_span_sp">{basket}</span>
                  </span>
                  <span className="nav_box_ul_link_span">Basket</span>{" "}
                </Link>
              </li>
              <li>
                <Link className="nav_box_ul_link" href="">
                  <span className="nav_box_ul_span">
                    <FaRegUser />
                  </span>
                  <span className="nav_box_ul_link_span">Login</span>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
