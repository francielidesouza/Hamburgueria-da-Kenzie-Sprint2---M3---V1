import React from "react";
import { SltyledTotalContainer } from "./style";

const TotalCart = ({ currentSale, setCurrentSale }) => {
  const total = currentSale.reduce((valueProduct, totalProducts) => {
    return valueProduct + totalProducts.price;
  }, 0);

  return (
    <SltyledTotalContainer>
      <div className="containerDescription">
        <p>Total:</p>
        <span>
          {total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <button onClick={() => setCurrentSale([])}>Remover todos</button>
    </SltyledTotalContainer>
  );
};

export default TotalCart;
