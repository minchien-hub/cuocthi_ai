import React, { createContext, useState, useCallback, useMemo } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = useCallback((message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  }, []);

  const addToCart = useCallback((product, selectedSize = 'M', selectedColor = null, quantity = 1) => {
    setCartItems(prev => {
      const color = selectedColor || (product.colors && product.colors[0]) || { name: 'Default', hex: '#000' };
      const existingIndex = prev.findIndex(
        item => item.id === product.id && item.size === selectedSize && item.color.name === color.name
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = { ...updated[existingIndex], quantity: updated[existingIndex].quantity + quantity };
        return updated;
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.images[0],
        size: selectedSize,
        color: color,
        quantity: quantity,
        category: product.category
      }];
    });
    showToast(`Đã thêm "${product.name}" vào giỏ hàng!`, 'success');
  }, [showToast]);

  const removeFromCart = useCallback((id, size, colorName) => {
    setCartItems(prev => prev.filter(
      item => !(item.id === id && item.size === size && item.color.name === colorName)
    ));
    showToast('Đã xóa sản phẩm khỏi giỏ hàng', 'info');
  }, [showToast]);

  const updateQuantity = useCallback((id, size, colorName, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.size === size && item.color.name === colorName
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
    showToast('Đã xóa tất cả sản phẩm trong giỏ hàng', 'info');
  }, [showToast]);

  const addToWishlist = useCallback((product) => {
    setWishlistItems(prev => {
      if (prev.find(item => item.id === product.id)) {
        return prev;
      }
      showToast(`Đã thêm "${product.name}" vào yêu thích!`, 'success');
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.images[0],
        images: product.images,
        category: product.category,
        sizes: product.sizes,
        colors: product.colors,
        rating: product.rating
      }];
    });
  }, [showToast]);

  const removeFromWishlist = useCallback((productId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
    showToast('Đã xóa khỏi danh sách yêu thích', 'info');
  }, [showToast]);

  const isInWishlist = useCallback((productId) => {
    return wishlistItems.some(item => item.id === productId);
  }, [wishlistItems]);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const cartCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  const value = useMemo(() => ({
    cartItems,
    wishlistItems,
    toast,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    cartTotal,
    cartCount,
    showToast
  }), [cartItems, wishlistItems, toast, addToCart, removeFromCart, updateQuantity, clearCart, addToWishlist, removeFromWishlist, isInWishlist, cartTotal, cartCount, showToast]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

