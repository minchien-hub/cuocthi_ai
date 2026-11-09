import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingBag, FiEye } from 'react-icons/fi';
import { FaHeart, FaStar } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useContext(CartContext);
  const inWishlist = isInWishlist(product.id);

  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN') + 'đ';
  };

  const discountPercent = product.originalPrice > product.price
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[0], product.colors[0]);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <Link to={`/product/${product.id}`} className="product-card__image-link">
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-card__image"
            loading="lazy"
          />
        </Link>

        {/* Badge */}
        {product.badge && (
          <span className={`product-card__badge ${
            product.badge.includes('Sale') ? 'product-card__badge--sale' :
            product.badge === 'New' ? 'product-card__badge--new' :
            'product-card__badge--hot'
          }`}>
            {product.badge}
          </span>
        )}

        {/* Wishlist Button */}
        <button
          className={`product-card__wishlist ${inWishlist ? 'product-card__wishlist--active' : ''}`}
          onClick={handleToggleWishlist}
          aria-label="Toggle wishlist"
        >
          {inWishlist ? <FaHeart /> : <FiHeart />}
        </button>

        {/* Quick Actions Overlay */}
        <div className="product-card__overlay">
          <button className="product-card__action-btn" onClick={handleAddToCart}>
            <FiShoppingBag />
            <span>Thêm vào giỏ</span>
          </button>
          <Link to={`/product/${product.id}`} className="product-card__action-btn product-card__action-btn--view">
            <FiEye />
          </Link>
        </div>
      </div>

      <div className="product-card__info">
        <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="product-card__category">
          {product.category}
        </Link>
        <Link to={`/product/${product.id}`} className="product-card__name">
          {product.name}
        </Link>
        <div className="product-card__rating">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < Math.floor(product.rating) ? 'star--filled' : 'star--empty'}
            />
          ))}
          <span className="product-card__reviews">({product.reviews})</span>
        </div>
        <div className="product-card__price">
          <span className="product-card__price-current">{formatPrice(product.price)}</span>
          {discountPercent > 0 && (
            <>
              <span className="product-card__price-original">{formatPrice(product.originalPrice)}</span>
              <span className="product-card__discount">-{discountPercent}%</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

