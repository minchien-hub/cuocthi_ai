import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiHeart, FiAward, FiUsers, FiArrowRight } from 'react-icons/fi';
import './AboutPage.css';

const AboutPage = () => {
  const values = [
    {
      icon: <FiAward />,
      title: 'Chất Lượng Thượng Hạng',
      desc: 'Mỗi sản phẩm đều được chọn lọc từ các chất liệu cao cấp nhất, may đo tinh tế qua bàn tay những người thợ lành nghề.'
    },
    {
      icon: <FiHeart />,
      title: 'Tôn Vinh Bản Sắc',
      desc: 'Chúng tôi tin rằng thời trang là tuyên ngôn của sự tự tin. LUXE giúp phụ nữ thể hiện nét quyến rũ riêng biệt.'
    },
    {
      icon: <FiUsers />,
      title: 'Đồng Hành Cùng Bạn',
      desc: 'Từ khâu tư vấn, trải nghiệm thử đồ đến dịch vụ hậu mãi, sự hài lòng của khách hàng là kim chỉ nam của chúng tôi.'
    }
  ];

  const stats = [
    { number: '15,000+', label: 'Khách hàng thân thiết' },
    { number: '500+', label: 'Thiết kế độc quyền' },
    { number: '5', label: 'Showroom cao cấp' },
    { number: '99%', label: 'Đánh giá hài lòng' }
  ];

  const team = [
    {
      name: 'Victoria Tran',
      role: 'Creative Director & Co-Founder',
      image: '/images/about/team-1.jpg'
    },
    {
      name: 'Elena Nguyen',
      role: 'Lead Fashion Stylist',
      image: '/images/about/team-2.jpg'
    },
    {
      name: 'Marc Le',
      role: 'Head of Quality & Fabrics',
      image: '/images/about/team-3.jpg'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section
        className="about-hero"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 15, 26, 0.85), rgba(15, 15, 26, 0.9)), url('/images/about/about-hero.jpg')"
        }}
      >
        <div className="container">
          <div className="about-hero__breadcrumb">
            <Link to="/">Trang chủ</Link> <span>/</span> <span>Về chúng tôi</span>
          </div>
          <span className="about-hero__sub">LUXE FASHION HOUSE</span>
          <h1 className="about-hero__title">Nâng Tầm Phong Cách Sống<br />Dành Cho Phái Đẹp</h1>
        </div>
      </section>

      {/* Story */}
      <section className="about-story section">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__image-wrap">
              <img
                src="/images/about/about-craft.jpg"
                alt="Story"
                className="about-story__img"
              />
              <div className="about-story__experience">
                <span className="about-story__exp-number">06+</span>
                <span className="about-story__exp-text">Năm Kiến Tạo Đẳng Cấp Thời Trang</span>
              </div>
            </div>

            <div className="about-story__content">
              <span className="about-section-subtitle">CÂU CHUYỆN THƯƠNG HIỆU</span>
              <h2 className="about-story__title">Nơi Vẻ Đẹp Sang Trọng Gặp Gỡ Tinh Hoa May Mặc</h2>
              <p className="about-story__p">
                Khởi nguồn từ niềm đam mê thời trang thượng lưu năm 2018, LUXE ra đời với sứ mệnh mang đến những bộ trang phục không chỉ hoàn hảo về phom dáng mà còn toát lên khí chất quý phái của người phụ nữ hiện đại.
              </p>
              <p className="about-story__p">
                Chúng tôi không chạy theo các trào lưu ngắn hạn. Mỗi thiết kế của LUXE là bản giao hưởng hài hòa giữa sự thanh lịch cổ điển của thời trang Paris và hơi thở thời thượng của phụ nữ Á Đông.
              </p>

              <div className="about-story__highlights">
                <div className="about-story__highlight-item">
                  <FiCheckCircle className="about-story__icon" />
                  <span>Vải nhập khẩu độc quyền từ Ý, Pháp, Nhật Bản</span>
                </div>
                <div className="about-story__highlight-item">
                  <FiCheckCircle className="about-story__icon" />
                  <span>Kỹ thuật may đo thủ công tinh xảo, từng chi tiết sắc nét</span>
                </div>
                <div className="about-story__highlight-item">
                  <FiCheckCircle className="about-story__icon" />
                  <span>Chính sách chăm sóc khách hàng và bảo hành trọn đời</span>
                </div>
              </div>

              <Link to="/shop" className="btn btn-primary about-story__btn">
                Khám phá bộ sưu tập <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values section">
        <div className="container">
          <div className="section-title">
            <h2>Giá Trị Cốt Lõi</h2>
            <div className="line" />
            <p>Những nguyên tắc vàng tạo nên thương hiệu LUXE vững bền</p>
          </div>

          <div className="about-values__grid">
            {values.map((v, i) => (
              <div key={i} className="about-value-card">
                <div className="about-value-card__icon">{v.icon}</div>
                <h3 className="about-value-card__title">{v.title}</h3>
                <p className="about-value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="container">
          <div className="about-stats__grid">
            {stats.map((s, i) => (
              <div key={i} className="about-stat-item">
                <span className="about-stat-item__num">{s.number}</span>
                <span className="about-stat-item__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team section">
        <div className="container">
          <div className="section-title">
            <h2>Đội Ngũ Thiết Kế</h2>
            <div className="line" />
            <p>Những khối óc nghệ thuật đứng sau các bộ sưu tập kinh điển</p>
          </div>

          <div className="about-team__grid">
            {team.map((member, i) => (
              <div key={i} className="about-team-card">
                <div className="about-team-card__img-box">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="about-team-card__meta">
                  <h4 className="about-team-card__name">{member.name}</h4>
                  <span className="about-team-card__role">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

