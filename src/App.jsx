import { useState, useEffect } from "react";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";
import TotalCart from "./components/TotalCart";
import { api } from "./services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { StyledMain } from "./style";

function App() {
  const localStorageHamburguer = localStorage.getItem("@KENZIEHAMBURGUER");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState(
    localStorageHamburguer ? JSON.parse(localStorageHamburguer) : []
  );

  const [search, setSearch] = useState("");

  const searchProductList =
    search === ""
      ? [...products]
      : products.filter((product) => {
          return (
            product.name.toLowerCase().includes(search.toLowerCase().trim()) ||
            product.category.toLowerCase().includes(search.toLowerCase().trim())
          );
        });

  useEffect(() => {
    async function loadProductsData() {
      try {
        setLoading(true);
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadProductsData();
  }, []);

  useEffect(() => {
    localStorage.setItem("@KENZIEHAMBURGUER", JSON.stringify(currentSale));
  }, [currentSale]);

  const addProductToCart = (product) => {
    if (currentSale.includes(product)) {
      toast.warn("Este produto já foi adicionado ao carrinho");
    } else {
      toast.success("Produto adicionado ao carrinho");
      setCurrentSale([...currentSale, product]);
    }
  };

  const removeProductToCart = (productId) => {
    const productRemove = currentSale.filter(
      (product) => product.id !== productId
    );
    toast.success("Produto removido do carrinho");
    setCurrentSale(productRemove);
  };

  return (
    <div className="App">
      <Header setSearch={setSearch} />
      <StyledMain>
        <section>
          {loading ? (
            <p>Carregando...</p>
          ) : (
            <>
              {search && (
                <div className="clearSearch">
                  <h1>
                    Resultados para: <span>{search}</span>
                  </h1>
                  <button onClick={() => setSearch("")}>Limpar busca</button>
                </div>
              )}
              <Card
                products={searchProductList}
                addProductToCart={addProductToCart}
              />
            </>
          )}
        </section>
        <aside>
          <div>
            <h3>Carrinho de Compras</h3>
            <>
              {currentSale.length !== 0 ? (
                <Cart
                  currentSale={currentSale}
                  removeProductToCart={removeProductToCart}
                />
              ) : (
                <>
                  <h2>Sua sacola está vazia</h2>
                  <span>Adicione itens</span>
                </>
              )}
            </>
            <>
              <TotalCart
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
              />
            </>
          </div>
        </aside>
      </StyledMain>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
