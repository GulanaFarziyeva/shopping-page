import { Routes, Route } from "react-router-dom";

import Shop from "./features/shop/Shop";
import Cart from "./features/shop/Cart.js";
import "./assets/style/index.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default App;
