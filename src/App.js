import Header from "./components/Header/Header";
import Product from "./components/Product/ProductList";
import Cart from "./components/Cart/Cart";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="./Header" element={<Header />} />
        <Route path="./ProductList" element={<Product />} />

        {/* <Route path ='/wishlist' element = {<WishList />} /> */}
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Header />
      <Product />
    </div>
  );
}

export default App;
