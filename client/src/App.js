import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Prod from './Components/ProductCard'
import CartPage from "./Components/cartPage";
import Faq from './Components/Faq';
import AddProductPage from './Components/Admin/AddProductPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element ={<Login />} />
        <Route exact path='/register' element ={<Register />} />
        <Route exact path="/prod" element={<Prod />} />
        <Route exact path="/Cart" element={<CartPage />} />
        <Route exact path = "/addproduct" element={<AddProductPage/>} />
        <Route exact path = "/faq" element={<Faq/>} />
      </Routes>
    </Router>
  );
}

export default App;
