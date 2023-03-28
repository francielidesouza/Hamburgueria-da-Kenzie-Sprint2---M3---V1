import React from "react";
import { StyledListCart } from "./style";
import { StyledCart } from "./style";

const Cart = ({ currentSale, removeProductToCart }) => {
  return (
    <StyledListCart>
      {currentSale.map((product) => (
        <StyledCart key={product.id}>
          <figure>
            <img src={product.img} alt={product.name} />
          </figure>
          <div className="divCartDescription">
            <h2>{product.name}</h2>
            <span>{product.category}</span>
          </div>
          <button onClick={() => removeProductToCart(product.id)}>
            Remover
          </button>
        </StyledCart>
      ))}
    </StyledListCart>
  );
};

export default Cart;
