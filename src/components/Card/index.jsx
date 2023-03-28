import React from "react";
import { StyledListCard } from "./style";
import { StyledCard } from "./style";

const Card = ({ addProductToCart, products }) => {
  return (
    <StyledListCard>
      {products.map((product) => (
        <StyledCard key={product.id}>
          <figure>
            <img src={product.img} alt={product.name} />
          </figure>
          <div>
            <h2>{product.name}</h2>
            <span>{product.category}</span>
            <p>
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <button onClick={() => addProductToCart(product)}>Adicionar</button>
          </div>
        </StyledCard>
      ))}
    </StyledListCard>
  );
};

export default Card;
