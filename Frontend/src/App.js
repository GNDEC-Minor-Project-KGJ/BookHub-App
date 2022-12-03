import './App.css';
import { useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Navbar,
  Toast,
  Home,
  Shop,
  ProductPage,
  Login,
  Signup,
  Wishlist,
  Cart,
  Orders,
  useUserLogin,
  useWishlist,
  useCart,
} from './index';

import BookEditor from './Pages/BookEditor/BookEditor';
import Profile from './Pages/Profile/Profile'

function App() {
  const { userLoggedIn } = useUserLogin();
  const { dispatchUserWishlist } = useWishlist();
  const { dispatchUserCart } = useCart();

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/editor" exact element={<BookEditor />} />
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/shop/:id" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Toast position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;
