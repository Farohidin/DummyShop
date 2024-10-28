import { useDispatch, useSelector } from "react-redux";
import { useGetTotalProductsQuery } from "../../app/api/dummyDataApi";
import ProductCard from "./ProductCard";
import Sort from "./Sort";
import { useEffect, useState } from "react";
import { changeCategoryBanner } from "../../app/features/BannerSlice";
import { useOutletContext } from "react-router-dom";
import Paginate from "../Paginate/Paginate";
import { setCurrentPage } from "../../app/features/PaginateSlice";

const Product = ({ category }) => {
  const { searchParams } = useOutletContext();
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.paginate.currentPage);
  const { data, error, isLoading, refetch } = useGetTotalProductsQuery({
    category,
    searchParams,
    page: currentPage,
  });
  const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(
      changeCategoryBanner(
        data?.products.map((item) => {
          return item.thumbnail;
        })
      )
    );
  }, [data]);

  const sortedProducts = data?.products
    ? [...data.products].sort((a, b) => {
        if (order === "title") return a.title.localeCompare(b.title);
        if (order === "price") return a.price - b.price;
        if (order === "rating") return a.rating - b.rating;
        return 0;
      })
    : [];

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error fetching products</div>;

  return (
    <>
      <div className="product">
        <div className="container">
          <Sort setOrder={setOrder} />

          <div className="product_wrapper">
            {sortedProducts.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
          <Paginate total={data.total} />
        </div>
      </div>
    </>
  );
};

export default Product;
