import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiShoppingBag, FiArrowRight, FiMinus, FiPlus, FiCheck } from 'react-icons/fi';
import { CartContext } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useContext(CartContext);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const formatPrice = (price) => price.toLocaleString('vi-VN') + 'đ';
  const shippingFee = cartTotal >= 1000000 || cartTotal === 0 ? 0 : 30000;
  const finalTotal = Math.max(0, cartTotal - discount + shippingFee);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.toLowerCase() === 'luxe10') {
      setDiscount(cartTotal * 0.1);
      setCouponApplied(true);
    } else {
      alert('Mã giảm giá không hợp lệ. Hãy thử: LUXE10');
    }
  };

  const handleCheckout = () => {
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="cart-page cart-page--success container">
        <div className="cart-page__success-card">
          <div className="cart-page__success-icon"><FiCheck /></div>
          <h2>Đặt Hàng Thành Công!</h2>
          <p>Cảm ơn bạn đã mua sắm tại LUXE Fashion. Chúng tôi sẽ liên hệ để xác nhận đơn hàng trong thời gian sớm nhất.</p>
          <Link to="/shop" className="btn btn-primary" onClick={() => setOrderPlaced(false)}>
            Tiếp tục mua sắm <FiArrowRight />
          </Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-page cart-page--empty container">
        <div className="cart-page__empty-card">
          <FiShoppingBag className="cart-page__empty-icon" />
          <h2>Giỏ Hàng Của Bạn Đang Trống</h2>
          <p>Hãy khám phá những sản phẩm mới nhất của chúng tôi</p>
          <Link to="/shop" className="btn btn-primary">
            Khám phá cửa hàng <FiArrowRight />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-page__header">
        <div className="container">
          <div className="cart-page__breadcrumb">
            <Link to="/">Trang chủ</Link> <span>/</span> <span>Giỏ hàng</span>
          </div>
          <h1 className="cart-page__title">Giỏ Hàng ({cartItems.length})</h1>
        </div>
      </div>

      <div className="container">
        <div className="cart-page__content">
          {/* Items List */}
          <div className="cart-page__items">
            <div className="cart-page__table-header">
              <span>Sản phẩm</span>
              <span>Đơn giá</span>
              <span>Số lượng</span>
              <span>Tạm tính</span>
              <span></span>
            </div>

            {cartItems.map(item => (
              <div key={`${item.id}-${item.size}-${item.color.name}`} className="cart-page__item">
                <div className="cart-page__item-product">
                  <img src={item.image} alt={item.name} className="cart-page__item-img" />
                  <div>
                    <Link to={`/product/${item.id}`} className="cart-page__item-name">{item.name}</Link>
                    <div className="cart-page__item-meta">
                      <span>Size: {item.size}</span>
                      <span>Màu: {item.color.name}</span>
                    </div>
                  </div>
                </div>

                <div className="cart-page__item-price">
                  {formatPrice(item.price)}
                </div>

                <div className="cart-page__item-qty">
                  <div className="cart-page__qty-control">
                    <button onClick={() => updateQuantity(item.id, item.size, item.color.name, item.quantity - 1)}>
                      <FiMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.size, item.color.name, item.quantity + 1)}>
                      <FiPlus />
                    </button>
                  </div>
                </div>

                <div className="cart-page__item-subtotal">
                  {formatPrice(item.price * item.quantity)}
                </div>

                <button
                  className="cart-page__item-remove"
                  onClick={() => removeFromCart(item.id, item.size, item.color.name)}
                  aria-label="Remove item"
                >
                  <FiTrash2 />
                </button>
              </div>
            ))}

            <div className="cart-page__actions">
              <Link to="/shop" className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--border)' }}>
                ← Tiếp tục mua sắm
              </Link>
              <button className="cart-page__clear-btn" onClick={clearCart}>
                Xóa tất cả
              </button>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="cart-page__summary">
            <h3 className="cart-page__summary-title">Tóm Tắt Đơn Hàng</h3>

            <div className="cart-page__summary-row">
              <span>Tạm tính</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>

            {discount > 0 && (
              <div className="cart-page__summary-row cart-page__summary-row--discount">
                <span>Giảm giá (10%)</span>
                <span>-{formatPrice(discount)}</span>
              </div>
            )}

            <div className="cart-page__summary-row">
              <span>Phí vận chuyển</span>
              <span>{shippingFee === 0 ? <strong style={{ color: 'var(--success)' }}>Miễn phí</strong> : formatPrice(shippingFee)}</span>
            </div>

            {shippingFee > 0 && (
              <p className="cart-page__free-shipping-note">
                Mua thêm {formatPrice(1000000 - cartTotal)} để được <strong>FREESHIP</strong>
              </p>
            )}

            <div className="cart-page__summary-divider" />

            <div className="cart-page__summary-row cart-page__summary-row--total">
              <span>Tổng cộng</span>
              <span className="cart-page__total-price">{formatPrice(finalTotal)}</span>
            </div>

            {/* Coupon */}
            <form className="cart-page__coupon-form" onSubmit={handleApplyCoupon}>
              <input
                type="text"
                placeholder="Mã giảm giá (thử LUXE10)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                disabled={couponApplied}
              />
              <button type="submit" disabled={couponApplied}>
                {couponApplied ? 'Đã áp dụng' : 'Áp dụng'}
              </button>
            </form>

            <button className="btn btn-primary cart-page__checkout-btn" onClick={handleCheckout}>
              Tiến hành thanh toán
            </button>

            <div className="cart-page__payment-info">
              <span>Phương thức thanh toán được chấp nhận:</span>
              <div className="cart-page__payment-badges">
                <span>COD</span>
                <span>ATM</span>
                <span>Visa</span>
                <span>MoMo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

