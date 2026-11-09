import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiShoppingBag, FiHeart, FiUser, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const { cartCount, wishlistItems } = useContext(CartContext);
  const wishlistCount = wishlistItems ? wishlistItems.length : 0;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Trang chủ' },
    { path: '/shop', label: 'Cửa hàng' },
    { path: '/try-on', label: '✦ Thử đồ AI' },
    { path: '/about', label: 'Về chúng tôi' },
    { path: '/contact', label: 'Liên hệ' },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        {/* Announcement Bar */}
        <div className="navbar__announcement">
          <div className="navbar__announcement-track">
            <span className="navbar__announcement-text">
              ✦ FREE SHIPPING cho đơn hàng trên 1.000.000đ &nbsp;|&nbsp; Giảm 10% cho khách hàng mới &nbsp;✦&nbsp;
              FREE SHIPPING cho đơn hàng trên 1.000.000đ &nbsp;|&nbsp; Giảm 10% cho khách hàng mới &nbsp;✦&nbsp;
              FREE SHIPPING cho đơn hàng trên 1.000.000đ &nbsp;|&nbsp; Giảm 10% cho khách hàng mới &nbsp;✦&nbsp;
            </span>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="navbar__main">
          <div className="navbar__container">
            {/* Logo */}
            <Link to="/" className="navbar__logo">
              <span className="navbar__logo-text">LUXE</span>
              <span className="navbar__logo-sub">FASHION</span>
            </Link>

            {/* Center Nav Links */}
            <ul className="navbar__links">
              {navLinks.map((link) => (
                <li key={link.path} className="navbar__link-item">
                  <Link
                    to={link.path}
                    className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                  >
                    {link.label}
                    <span className="navbar__link-underline"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right Side Icons */}
            <div className="navbar__actions">
              <button
                className="navbar__action-btn"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
              >
                <FiSearch />
              </button>

              <Link to="/wishlist" className="navbar__action-btn navbar__action-btn--badge" aria-label="Wishlist">
                <FiHeart />
                {wishlistCount > 0 && (
                  <span className="navbar__badge">{wishlistCount}</span>
                )}
              </Link>

              <Link to="/cart" className="navbar__action-btn navbar__action-btn--badge" aria-label="Cart">
                <FiShoppingBag />
                {cartCount > 0 && (
                  <span className="navbar__badge">{cartCount}</span>
                )}
              </Link>

              <Link to="/account" className="navbar__action-btn navbar__action-btn--user" aria-label="Account">
                <FiUser />
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className="navbar__hamburger"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                {mobileMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Search Bar */}
        <div className={`navbar__search-bar ${searchOpen ? 'navbar__search-bar--open' : ''}`}>
          <div className="navbar__search-container">
            <form onSubmit={handleSearchSubmit} className="navbar__search-form">
              <FiSearch className="navbar__search-icon" />
              <input
                ref={searchInputRef}
                type="text"
                className="navbar__search-input"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="button"
                className="navbar__search-close"
                onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
              >
                <FiX />
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`navbar__overlay ${mobileMenuOpen ? 'navbar__overlay--open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Slide-in Menu */}
      <div className={`navbar__mobile-menu ${mobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <div className="navbar__mobile-header">
          <Link to="/" className="navbar__logo" onClick={() => setMobileMenuOpen(false)}>
            <span className="navbar__logo-text">LUXE</span>
            <span className="navbar__logo-sub">FASHION</span>
          </Link>
          <button className="navbar__mobile-close" onClick={() => setMobileMenuOpen(false)}>
            <FiX />
          </button>
        </div>
        <ul className="navbar__mobile-links">
          {navLinks.map((link, index) => (
            <li
              key={link.path}
              className="navbar__mobile-link-item"
              style={{ animationDelay: `${index * 0.07 + 0.1}s` }}
            >
              <Link
                to={link.path}
                className={`navbar__mobile-link ${location.pathname === link.path ? 'navbar__mobile-link--active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="navbar__mobile-actions">
          <Link to="/account" className="navbar__mobile-action" onClick={() => setMobileMenuOpen(false)}>
            <FiUser /> <span>Tài khoản</span>
          </Link>
          <Link to="/wishlist" className="navbar__mobile-action" onClick={() => setMobileMenuOpen(false)}>
            <FiHeart /> <span>Yêu thích ({wishlistCount})</span>
          </Link>
          <Link to="/cart" className="navbar__mobile-action" onClick={() => setMobileMenuOpen(false)}>
            <FiShoppingBag /> <span>Giỏ hàng ({cartCount})</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
