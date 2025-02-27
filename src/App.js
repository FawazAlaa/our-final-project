import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Favorites from './Favorites';
import Log_in from './Log_in';
import ProductDetails from "./Products";
import Products from "./Products";
import Cart from "./Cart";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Log_in />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart cart={[]}/>}/>
      </Routes>
    </Router>
  );
}
export default App;
