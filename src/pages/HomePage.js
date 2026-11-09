import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTruck, FiRefreshCw, FiAward, FiPhoneCall } from 'react-icons/fi';
import { FaInstagram, FaStar, FaQuoteLeft } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import './HomePage.css';

const HomePage = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-in').forEach(el => observerRef.current.observe(el));
    return () => observerRef.current && observerRef.current.disconnect();
  }, []);

  const featuredProducts = products.slice(0, 8);

  const getCategoryCount = (catName) => {
    const count = products.filter(p => p.category === catName).length;
    return `${count} sản phẩm`;
  };

  const categories = [
    { name: 'Áo', count: getCategoryCount('Áo'), image: '/images/categories/cat-ao.jpg' },
    { name: 'Quần', count: getCategoryCount('Quần'), image: '/images/categories/cat-quan.jpg' },
    { name: 'Đầm', count: getCategoryCount('Đầm'), image: '/images/categories/cat-dam.jpg' },
    { name: 'Phụ kiện', count: getCategoryCount('Phụ kiện'), image: '/images/categories/cat-phukien.jpg' },
  ];

  const testimonials = [
    { name: 'Nguyễn Minh Anh', role: 'Doanh nhân', avatar: '/images/avatars/avatar-1.jpg', rating: 5, text: 'Chất lượng sản phẩm tuyệt vời! Tôi đã mua nhiều lần và luôn hài lòng. Thiết kế sang trọng, vải cao cấp.' },
    { name: 'Trần Thu Hà', role: 'Fashionista', avatar: '/images/avatars/avatar-2.jpg', rating: 5, text: 'LUXE là thương hiệu yêu thích của tôi. Phong cách thời trang cập nhật xu hướng mà vẫn giữ nét thanh lịch.' },
    { name: 'Lê Phương Thảo', role: 'KOL', avatar: '/images/avatars/avatar-3.jpg', rating: 4, text: 'Dịch vụ chăm sóc khách hàng tuyệt vời. Giao hàng nhanh, đóng gói cẩn thận. Chắc chắn sẽ quay lại!' },
  ];

  const instagramImages = [
    '/images/instagram/insta-1.jpg',
    '/images/instagram/insta-2.jpg',
    '/images/instagram/insta-3.jpg',
    '/images/instagram/insta-4.jpg',
    '/images/instagram/insta-5.jpg',
    '/images/instagram/insta-6.jpg',
  ];

  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg">
          <img src="/images/banners/hero.jpg" alt="Hero" className="hero__bg-img" />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content">
          <span className="hero__subtitle">Bộ Sưu Tập Mới 2024</span>
          <h1 className="hero__title">Phong Cách<br />Đẳng Cấp</h1>
          <p className="hero__description">
            Khám phá bộ sưu tập mới nhất với những thiết kế độc đáo,<br />
            chất liệu cao cấp dành cho phụ nữ hiện đại.
          </p>
          <div className="hero__buttons">
            <Link to="/shop" className="btn btn-primary">Khám phá ngay <FiArrowRight /></Link>
            <Link to="/shop" className="btn btn-outline">Xem BST</Link>
          </div>
        </div>
        <div className="hero__scroll-indicator">
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-wheel" />
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="categories section">
        <div className="container">
          <div className="section-title animate-in">
            <h2>Danh Mục Nổi Bật</h2>
            <div className="line" />
          </div>
          <div className="categories__grid">
            {categories.map((cat, i) => (
              <Link
                to={`/shop?category=${encodeURIComponent(cat.name)}`}
                key={i}
                className="categories__card animate-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <img src={cat.image} alt={cat.name} className="categories__card-img" />
                <div className="categories__card-overlay">
                  <h3 className="categories__card-name">{cat.name}</h3>
                  <p className="categories__card-count">{cat.count}</p>
                  <span className="categories__card-link">Xem bộ sưu tập <FiArrowRight /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="featured section">
        <div className="container">
          <div className="section-title animate-in">
            <h2>Sản Phẩm Nổi Bật</h2>
            <div className="line" />
            <p>Những sản phẩm được yêu thích nhất</p>
          </div>
          <div className="featured__grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="featured__more animate-in">
            <Link to="/shop" className="btn btn-dark">
              Xem tất cả sản phẩm <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BANNERS ===== */}
      <section className="banners section">
        <div className="container">
          <div className="banners__grid">
            <div className="banners__item animate-in">
              <img src="/images/banners/banner-winter.jpg" alt="Winter Sale" className="banners__img" />
              <div className="banners__overlay">
                <span className="banners__label">Ưu đãi đặc biệt</span>
                <h3 className="banners__title">GIẢM GIÁ<br />MÙA ĐÔNG</h3>
                <p className="banners__text">Lên đến 50%</p>
                <Link to="/shop" className="btn btn-primary btn--sm">Mua ngay</Link>
              </div>
            </div>
            <div className="banners__item animate-in">
              <img src="/images/banners/banner-new.jpg" alt="New Collection" className="banners__img" />
              <div className="banners__overlay">
                <span className="banners__label">Vừa ra mắt</span>
                <h3 className="banners__title">BST MỚI VỀ</h3>
                <p className="banners__text">Xu hướng 2024</p>
                <Link to="/shop" className="btn btn-primary btn--sm">Khám phá</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="features section">
        <div className="container">
          <div className="features__grid">
            {[
              { icon: <FiTruck />, title: 'Giao hàng miễn phí', desc: 'Cho đơn hàng trên 1.000.000đ' },
              { icon: <FiRefreshCw />, title: 'Đổi trả dễ dàng', desc: 'Trong vòng 30 ngày' },
              { icon: <FiAward />, title: 'Chất lượng cao cấp', desc: 'Cam kết hàng chính hãng' },
              { icon: <FiPhoneCall />, title: 'Hỗ trợ 24/7', desc: 'Tư vấn nhiệt tình' },
            ].map((feature, i) => (
              <div key={i} className="features__item animate-in">
                <div className="features__icon">{feature.icon}</div>
                <h4 className="features__title">{feature.title}</h4>
                <p className="features__desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials section">
        <div className="container">
          <div className="section-title animate-in">
            <h2>Khách Hàng Nói Gì</h2>
            <div className="line" />
          </div>
          <div className="testimonials__grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonials__card animate-in">
                <FaQuoteLeft className="testimonials__quote-icon" />
                <p className="testimonials__text">{t.text}</p>
                <div className="testimonials__rating">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} className={j < t.rating ? 'star--filled' : 'star--empty'} />
                  ))}
                </div>
                <div className="testimonials__author">
                  <img src={t.avatar} alt={t.name} className="testimonials__avatar" />
                  <div>
                    <h5 className="testimonials__name">{t.name}</h5>
                    <span className="testimonials__role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSTAGRAM ===== */}
      <section className="instagram section">
        <div className="container">
          <div className="section-title animate-in">
            <h2>Theo Dõi Chúng Tôi</h2>
            <div className="line" />
            <p>@luxe_fashion</p>
          </div>
          <div className="instagram__grid">
            {instagramImages.map((img, i) => (
              <a href="https://instagram.com" target="_blank" rel="noreferrer" key={i} className="instagram__item">
                <img src={img} alt={`Instagram ${i + 1}`} className="instagram__img" />
                <div className="instagram__overlay">
                  <FaInstagram className="instagram__icon" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

