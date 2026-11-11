import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiHeart, FiShoppingBag, FiTruck, FiRefreshCw, FiMinus, FiPlus, FiCheck } from 'react-icons/fi';
import { FaHeart, FaStar, FaMagic } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import products, { getProductById } from '../data/products';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useContext(CartContext);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('desc');

  // Reset when product changes
  useEffect(() => {
    if (product) {
      setSelectedImage(0);
      setSelectedSize(product.sizes ? product.sizes[0] : 'M');
      setSelectedColor(product.colors ? product.colors[0] : null);
      setQuantity(1);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="product-detail__not-found container">
        <h2>Không tìm thấy sản phẩm</h2>
        <Link to="/shop" className="btn btn-primary">Quay lại cửa hàng</Link>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const formatPrice = (price) => price.toLocaleString('vi-VN') + 'đ';
  const discountPercent = product.originalPrice > product.price
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // When user selects a color swatch
  const handleColorSelect = (color, index) => {
    setSelectedColor(color);
    const targetIdx = color.imageIndex !== undefined ? color.imageIndex : index;
    if (product.images && product.images[targetIdx]) {
      setSelectedImage(targetIdx);
    }
  };

  // When user clicks a thumbnail
  const handleThumbnailSelect = (index) => {
    setSelectedImage(index);
    if (product.colors && product.colors.length > 0) {
      const matchedColor = product.colors.find(c => c.imageIndex === index) || product.colors[index];
      if (matchedColor) {
        setSelectedColor(matchedColor);
      }
    }
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  const handleToggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="product-detail">
      <div className="container">
        {/* Breadcrumb */}
        <div className="product-detail__breadcrumb">
          <Link to="/">Trang chủ</Link> <span>/</span>
          <Link to="/shop">Cửa hàng</Link> <span>/</span>
          <Link to={`/shop?category=${encodeURIComponent(product.category)}`}>{product.category}</Link> <span>/</span>
          <span className="product-detail__breadcrumb-current">{product.name}</span>
        </div>

        {/* Product Main */}
        <div className="product-detail__main">
          {/* Gallery */}
          <div className="product-detail__gallery">
            <div className="product-detail__main-img">
              <img
                key={selectedImage}
                src={product.images[selectedImage] || product.images[0]}
                alt={`${product.name} - ${selectedColor ? selectedColor.name : ''}`}
                className="product-detail__main-img-element"
              />
              {product.badge && (
                <span className="product-detail__badge">{product.badge}</span>
              )}
            </div>

            {/* Thumbnail Gallery with color hints */}
            <div className="product-detail__thumbnails">
              {product.images.map((img, i) => {
                const matchingColor = product.colors
                  ? (product.colors.find(c => c.imageIndex === i) || product.colors[i])
                  : null;
                const isActive = selectedImage === i;

                return (
                  <button
                    key={i}
                    type="button"
                    className={`product-detail__thumb ${isActive ? 'product-detail__thumb--active' : ''}`}
                    onClick={() => handleThumbnailSelect(i)}
                    title={matchingColor ? `Màu ${matchingColor.name}` : `Ảnh ${i + 1}`}
                  >
                    <img src={img} alt={`${product.name} - ${matchingColor ? matchingColor.name : i + 1}`} />
                    {matchingColor && (
                      <span className="product-detail__thumb-label">{matchingColor.name}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Info */}
          <div className="product-detail__info">
            <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="product-detail__category">
              {product.category}
            </Link>
            <h1 className="product-detail__title">{product.name}</h1>

            <div className="product-detail__rating">
              <div className="product-detail__stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.floor(product.rating) ? 'star--filled' : 'star--empty'} />
                ))}
              </div>
              <span className="product-detail__rating-text">{product.rating}</span>
              <span className="product-detail__reviews-count">({product.reviews} đánh giá)</span>
            </div>

            <div className="product-detail__price">
              <span className="product-detail__price-current">{formatPrice(product.price)}</span>
              {discountPercent > 0 && (
                <>
                  <span className="product-detail__price-original">{formatPrice(product.originalPrice)}</span>
                  <span className="product-detail__discount">Tiết kiệm {discountPercent}%</span>
                </>
              )}
            </div>

            <p className="product-detail__short-desc">{product.description}</p>

            {/* Color Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="product-detail__option">
                <label className="product-detail__option-label">
                  Màu sắc: <strong className="product-detail__selected-val">{selectedColor ? selectedColor.name : ''}</strong>
                </label>
                <div className="product-detail__colors">
                  {product.colors.map((color, idx) => {
                    const isSelected = selectedColor && selectedColor.name === color.name;
                    return (
                      <button
                        key={color.name}
                        type="button"
                        className={`product-detail__color-btn ${isSelected ? 'active' : ''}`}
                        style={{ backgroundColor: color.hex }}
                        onClick={() => handleColorSelect(color, idx)}
                        title={`Chọn màu ${color.name}`}
                        aria-label={`Màu ${color.name}`}
                      >
                        {isSelected && (
                          <span className="product-detail__color-indicator">
                            <FiCheck />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="product-detail__option">
                <div className="product-detail__option-header">
                  <label className="product-detail__option-label">
                    Kích cỡ: <strong className="product-detail__selected-val">{selectedSize}</strong>
                  </label>
                </div>
                <div className="product-detail__sizes">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      type="button"
                      className={`product-detail__size-btn ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="product-detail__option">
              <label className="product-detail__option-label">Số lượng:</label>
              <div className="product-detail__quantity">
                <button
                  type="button"
                  className="product-detail__qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Giảm số lượng"
                ><FiMinus /></button>
                <span className="product-detail__qty-num">{quantity}</span>
                <button
                  type="button"
                  className="product-detail__qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Tăng số lượng"
                ><FiPlus /></button>
              </div>
            </div>

            {/* Actions */}
            <div className="product-detail__actions">
              <button type="button" className="btn btn-primary product-detail__add-cart" onClick={handleAddToCart}>
                <FiShoppingBag /> Thêm vào giỏ hàng
              </button>
              <button
                type="button"
                className={`product-detail__wishlist-btn ${inWishlist ? 'active' : ''}`}
                onClick={handleToggleWishlist}
                title={inWishlist ? "Bỏ khỏi yêu thích" : "Thêm vào yêu thích"}
              >
                {inWishlist ? <FaHeart /> : <FiHeart />}
              </button>
            </div>

            {/* AI Try-on Quick Feature */}
            <div className="product-detail__vton-box">
              <Link
                to={`/try-on?garment=${encodeURIComponent(product.images[selectedImage])}&name=${encodeURIComponent(product.name)}`}
                className="btn product-detail__vton-link"
              >
                <FaMagic className="vton-icon" />
                <span>Thử đồ ảo AI với trang phục này (Virtual Try-On)</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="product-detail__trust">
              <div className="product-detail__trust-item">
                <FiTruck />
                <span>Giao hàng miễn phí toàn quốc cho đơn trên 1.000.000đ</span>
              </div>
              <div className="product-detail__trust-item">
                <FiRefreshCw />
                <span>Đổi trả miễn phí trong 30 ngày trên toàn hệ thống</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="product-detail__tabs">
          <div className="product-detail__tab-headers">
            <button
              type="button"
              className={`product-detail__tab-btn ${activeTab === 'desc' ? 'active' : ''}`}
              onClick={() => setActiveTab('desc')}
            >Mô tả chi tiết</button>
            <button
              type="button"
              className={`product-detail__tab-btn ${activeTab === 'info' ? 'active' : ''}`}
              onClick={() => setActiveTab('info')}
            >Thông số sản phẩm</button>
            <button
              type="button"
              className={`product-detail__tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >Đánh giá ({product.reviews})</button>
          </div>
          <div className="product-detail__tab-content">
            {activeTab === 'desc' && (
              <div className="product-detail__tab-pane">
                <p>{product.description}</p>
                <p>Sản phẩm được thiết kế và sản xuất theo tiêu chuẩn cao cấp của AUREUS FASHION, chú trọng từng đường kim mũi chỉ để mang đến trải nghiệm tuyệt vời nhất cho người mặc.</p>
                <ul>
                  <li>Chất liệu được tuyển chọn kỹ lưỡng, bền màu theo thời gian</li>
                  <li>Phom dáng chuẩn, tôn dáng người mặc</li>
                  <li>Dễ dàng phối đồ cho nhiều phong cách từ công sở đến dạ tiệc</li>
                </ul>
              </div>
            )}
            {activeTab === 'info' && (
              <div className="product-detail__tab-pane">
                <table className="product-detail__specs-table">
                  <tbody>
                    <tr><td>Chất liệu</td><td>Vải cao cấp nhập khẩu</td></tr>
                    <tr><td>Xuất xứ</td><td>Thiết kế & sản xuất tại Việt Nam</td></tr>
                    <tr><td>Phong cách</td><td>Hiện đại, Thanh lịch, Luxury</td></tr>
                    <tr><td>Bảo quản</td><td>Giặt tay hoặc giặt máy chế độ nhẹ, ủi ở nhiệt độ trung bình</td></tr>
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="product-detail__tab-pane">
                <div className="product-detail__reviews-list">
                  <div className="product-detail__review-item">
                    <div className="product-detail__review-header">
                      <strong>Nguyễn Thị Mai</strong>
                      <div className="product-detail__stars">
                        {[...Array(5)].map((_, i) => <FaStar key={i} className="star--filled" />)}
                      </div>
                    </div>
                    <p>Sản phẩm đẹp y hình, chất vải dày dặn mà mềm mại. Rất hài lòng!</p>
                  </div>
                  <div className="product-detail__review-item">
                    <div className="product-detail__review-header">
                      <strong>Trần Bảo Ngọc</strong>
                      <div className="product-detail__stars">
                        {[...Array(5)].map((_, i) => <FaStar key={i} className={i < 4 ? 'star--filled' : 'star--empty'} />)}
                      </div>
                    </div>
                    <p>Form dáng đẹp, màu sắc chuẩn, giao hàng nhanh chóng. Sẽ tiếp tục ủng hộ AUREUS FASHION!</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="product-detail__related">
            <div className="section-title">
              <h2>Sản Phẩm Tương Tự</h2>
              <div className="line" />
            </div>
            <div className="product-detail__related-grid">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
