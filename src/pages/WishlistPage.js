import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiTrash2, FiShoppingBag, FiArrowRight } from 'react-icons/fi';
import { CartContext } from '../context/CartContext';
import './WishlistPage.css';

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist, addToCart } = useContext(CartContext);

  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN') + 'đ';
  };

  const handleAddToCart = (product) => {
    const size = product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'M';
    const color = product.colors && product.colors.length > 0 ? product.colors[0] : { name: 'Mặc định', hex: '#000' };
    addToCart(product, size, color, 1);
  };

  if (!wishlistItems || wishlistItems.length === 0) {
    return (
      <div className="wishlist-page wishlist-page--empty container">
        <div className="wishlist-page__empty-card">
          <div className="wishlist-page__empty-icon-wrap">
            <FiHeart className="wishlist-page__empty-icon" />
          </div>
          <h2>Danh Sách Yêu Thích Trống</h2>
          <p>Bạn chưa lưu sản phẩm nào vào danh sách yêu thích. Hãy tiếp tục khám phá các bộ sưu tập thời trang cao cấp của LUXE nhé!</p>
          <Link to="/shop" className="btn btn-primary">
            Khám phá cửa hàng <FiArrowRight />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="wishlist-page__header">
        <div className="container">
          <div className="wishlist-page__breadcrumb">
            <Link to="/">Trang chủ</Link> <span>/</span> <span>Danh sách yêu thích</span>
          </div>
          <h1 className="wishlist-page__title">Sản Phẩm Yêu Thích ({wishlistItems.length})</h1>
        </div>
      </div>

      <div className="container">
        <div className="wishlist-page__grid">
          {wishlistItems.map((product) => {
            const discountPercent = product.originalPrice > product.price
              ? Math.round((1 - product.price / product.originalPrice) * 100)
              : 0;

            return (
              <div key={product.id} className="wishlist-card">
                <div className="wishlist-card__image-box">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image || (product.images && product.images[0])} alt={product.name} />
                  </Link>
                  <button
                    className="wishlist-card__remove-btn"
                    onClick={() => removeFromWishlist(product.id)}
                    title="Xóa khỏi yêu thích"
                  >
                    <FiTrash2 />
                  </button>
                  {discountPercent > 0 && (
                    <span className="wishlist-card__badge">-{discountPercent}%</span>
                  )}
                </div>

                <div className="wishlist-card__info">
                  <span className="wishlist-card__category">{product.category}</span>
                  <Link to={`/product/${product.id}`} className="wishlist-card__name">
                    {product.name}
                  </Link>
                  <div className="wishlist-card__price">
                    <span className="wishlist-card__price-current">{formatPrice(product.price)}</span>
                    {discountPercent > 0 && (
                      <span className="wishlist-card__price-original">{formatPrice(product.originalPrice)}</span>
                    )}
                  </div>
                  <button
                    className="btn btn-primary wishlist-card__add-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FiShoppingBag /> Thêm vào giỏ
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;

