import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Title from "./components/ExampleComponents/TitleClassComp";
import ClickTracker from "./components/ExampleComponents/ClickTracker";
import ItemListContainer from "./components/ItemListContainer";
import Promises from "./components/ExampleComponents/Promises";
import MapExample from "./components/ExampleComponents/Map";
import Item from "./components/Item";
import PokeAPIExample from "./components/ExampleComponents/PokeAPIExample";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UnmountExample from "./components/ExampleComponents/UnmountExample";
import Intercambilidad from "./components/ExampleComponents/Intercambiabilidad";
import CartProvider from "./contexts/CartContext";
import Test from "./components/ExampleComponents/Test";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route
              path="*"
              element={
                <div style={{ backgroundColor: "red" }}>
                  {" "}
                  ERROR 404 NO ENCONTRADO
                </div>
              }
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
