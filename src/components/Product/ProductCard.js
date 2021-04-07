import React from "react";
import { useData } from "../../context/dataContext";

const ProductCard = ({ product }) => {
  const {
    state: { cart, wishList },
    dispatch
  } = useData();
  const { productName, image, price, ratings, id } = product;

  const isWishListed = (prodId) => {
    return wishList.reduce((acc, curr) => {
      if (curr.id === prodId) {
        return "wishlisted";
      }
      return acc;
    }, "");
  };

  const addToCartHandler = (prod) => {
    dispatch({ type: "ADD_TO_CART", payload: prod });
  };
  const addToWishListHandler = (prodId) => {
    if (wishList.some((curr) => curr.id === prodId) === true) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
    } else {
      dispatch({ type: "ADD_TO_WISHLIST", payload: product });
    }
  };
  const isInCart = (prodId) => {
    return cart.some((each) => each.id === prodId) ? true : false;
  };
  //console.log(wishList)
  return (
    <div class="card">
      <div class="card-badge cb-horizontal"> Sale</div>
      <div class="card-body">
        <img src={image} alt="" />
        <div class="card-title">
          <h2> {productName}</h2>
        </div>
        {/* <p>Women Black & Green Printed Straight Kurta</p> */}
        <span class="price">Rs. 688</span>
        <small className="rating">{ratings}</small>
        <button
          class="btn btn-floating"
          onClick={() => addToWishListHandler(id)}
        >
          <i className={`heart fas fa-heart ${isWishListed(id)}`}></i>
        </button>

        {isInCart(id) ? (
          <button className="btn btn-secondary">Go To Cart</button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => addToCartHandler(product)}
          >
            {" "}
            Add To Cart{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
