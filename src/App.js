import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ProductDetails from './ProductDetails';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import ForgotPassword from './ForgotPassword';
import AboutUsPage from './AboutUsPage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import FaqPage from './FaqPage';
import TermsPage from './TermsPage';
import Layout from './Layout';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Load cart from localStorage on initial render
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      return [];
    }
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cart]);

  const addToCart = (product) => {
    console.log("Adding to cart:", product); // Debugging
    
    // Ensure product has the right format
    const formattedProduct = {
      ...product,
      price: typeof product.price === 'string' 
        ? parseFloat(product.price.replace('$', '')) 
        : product.price,
      id: product.id || Math.random().toString(36).substr(2, 9) // Ensure ID exists
    };
    
    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex(item => item.id === formattedProduct.id);
    
    if (existingItemIndex !== -1) {
      // If exists, update quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + 1
      };
      setCart(updatedCart);
    } else {
      // If new, add with quantity 1
      setCart(prevCart => [...prevCart, { ...formattedProduct, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    
    const newCart = [...cart];
    newCart[index].quantity = newQuantity;
    setCart(newCart);
  };

  // Add clearCart function to fix the error
  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Protected routes within Layout */}
        <Route path="/" element={<Layout cart={cart} />}>
          <Route 
            path="/home" 
            element={<HomePage addToCart={addToCart} cart={cart} />} 
          />
          <Route 
            path="/product/:id" 
            element={<ProductDetails addToCart={addToCart} />} 
          />
          <Route 
            path="/cart" 
            element={
              <CartPage 
                cart={cart} 
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity} 
              />
            } 
          />
          <Route 
            path="/checkout" 
            element={<CheckoutPage cart={cart} clearCart={clearCart} />} 
          />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;