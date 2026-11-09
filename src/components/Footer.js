import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="footer__newsletter">
        <div className="container">
          <div className="footer__newsletter-content">
            <div className="footer__newsletter-text">
              <h3>Đăng ký nhận tin</h3>
              <p>Nhận thông tin ưu đãi và bộ sưu tập mới nhất từ LUXE</p>
            </div>
            <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
              <div className="footer__newsletter-input-wrapper">
                <input
                  type="email"
                  placeholder="Nhập email của bạn..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="footer__newsletter-input"
                  required
                />
                <button type="submit" className="footer__newsletter-btn">
                  <FiSend />
                  <span>Đăng ký</span>
                </button>
              </div>
              {subscribed && (
                <p className="footer__newsletter-success">✓ Đăng ký thành công!</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__col">
              <div className="footer__brand">
                <span className="footer__brand-name">LUXE</span>
                <span className="footer__brand-sub">FASHION</span>
              </div>
              <p className="footer__description">
                Thương hiệu thời trang cao cấp dành cho phụ nữ hiện đại. Chúng tôi mang đến phong cách sống đẳng cấp qua từng sản phẩm.
              </p>
              <div className="footer__socials">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="Twitter"><FaTwitter /></a>
                <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="Pinterest"><FaPinterestP /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h4 className="footer__col-title">Liên Kết Nhanh</h4>
              <ul className="footer__links">
                <li><Link to="/">Trang chủ</Link></li>
                <li><Link to="/shop">Cửa hàng</Link></li>
                <li><Link to="/about">Về chúng tôi</Link></li>
                <li><Link to="/contact">Liên hệ</Link></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="footer__col">
              <h4 className="footer__col-title">Chăm Sóc Khách Hàng</h4>
              <ul className="footer__links">
                <li><Link to="/contact">Chính sách đổi trả</Link></li>
                <li><Link to="/contact">Hướng dẫn kích cỡ</Link></li>
                <li><Link to="/contact">Câu hỏi thường gặp</Link></li>
                <li><Link to="/contact">Liên hệ hỗ trợ</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer__col">
              <h4 className="footer__col-title">Liên Hệ</h4>
              <div className="footer__contact-list">
                <div className="footer__contact-item">
                  <FiMapPin className="footer__contact-icon" />
                  <span>123 Nguyễn Huệ, Q.1, TP.HCM</span>
                </div>
                <div className="footer__contact-item">
                  <FiPhone className="footer__contact-icon" />
                  <span>1900 1234</span>
                </div>
                <div className="footer__contact-item">
                  <FiMail className="footer__contact-icon" />
                  <span>info@luxefashion.vn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-content">
            <p>&copy; 2024 LUXE Fashion. All rights reserved.</p>
            <div className="footer__payment">
              <span className="footer__payment-label">Thanh toán:</span>
              <div className="footer__payment-icons">
                <span className="footer__payment-icon">VISA</span>
                <span className="footer__payment-icon">MC</span>
                <span className="footer__payment-icon">JCB</span>
                <span className="footer__payment-icon">COD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

