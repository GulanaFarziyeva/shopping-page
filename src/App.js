import { Routes, Route} from "react-router-dom";

import Shop from "./features/shop/Shop";
import Login from "./features/login/Login";
import Cart from "./features/shop/Cart.js";
import "./assets/style/index.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};

export default App;
