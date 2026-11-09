import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck, FiChevronDown } from 'react-icons/fi';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Hỏi về sản phẩm',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'Chính sách đổi trả sản phẩm của LUXE như thế nào?',
      a: 'LUXE áp dụng chính sách đổi hàng trong vòng 30 ngày kể từ ngày nhận hàng với điều kiện sản phẩm còn nguyên tem mác, chưa qua sử dụng và có hóa đơn mua hàng.'
    },
    {
      q: 'Thời gian giao hàng tiêu chuẩn là bao lâu?',
      a: 'Đối với khu vực nội thành TP.HCM và Hà Nội, thời gian nhận hàng từ 1-2 ngày làm việc. Các tỉnh thành khác thường từ 2-4 ngày làm việc. Đơn hàng từ 1.000.000đ được miễn phí vận chuyển.'
    },
    {
      q: 'Làm thế nào để chọn đúng size quần áo?',
      a: 'Trên mỗi trang chi tiết sản phẩm đều có liên kết "Hướng dẫn chọn size" với bảng số đo chi tiết (ngực, eo, mông, chiều cao, cân nặng). Ngoài ra, bạn có thể liên hệ trực tiếp hotline hoặc chat để được nhân viên tư vấn phom dáng phù hợp nhất.'
    },
    {
      q: 'LUXE có hỗ trợ may đo hoặc chỉnh sửa trang phục theo yêu cầu không?',
      a: 'Chúng tôi hỗ trợ chỉnh sửa nhẹ (lên lai, bóp eo vừa vặn) hoàn toàn miễn phí tại tất cả các showroom LUXE cho sản phẩm mua tại cửa hàng hoặc online.'
    },
    {
      q: 'Các hình thức thanh toán được hỗ trợ?',
      a: 'LUXE hỗ trợ thanh toán khi nhận hàng (COD), chuyển khoản ngân hàng, thanh toán qua thẻ tín dụng/ghi nợ quốc tế (Visa, Mastercard, JCB) và ví điện tử MoMo.'
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Hỏi về sản phẩm',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-page__header">
        <div className="container">
          <div className="contact-page__breadcrumb">
            <Link to="/">Trang chủ</Link> <span>/</span> <span>Liên hệ</span>
          </div>
          <h1 className="contact-page__title">Liên Hệ Với LUXE</h1>
          <p className="contact-page__subtitle">Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi yêu cầu của bạn</p>
        </div>
      </div>

      <div className="container">
        {/* Contact Info Cards */}
        <div className="contact-info__grid">
          <div className="contact-info-card">
            <div className="contact-info-card__icon"><FiMapPin /></div>
            <h4>Showroom Flagship</h4>
            <p>123 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh</p>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-card__icon"><FiPhone /></div>
            <h4>Hotline Chăm Sóc</h4>
            <p>1900 1234 (Nhánh 1)<br />0909 888 999 (VIP Support)</p>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-card__icon"><FiMail /></div>
            <h4>Hộp Thư Điện Tử</h4>
            <p>contact@luxefashion.vn<br />support@luxefashion.vn</p>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-card__icon"><FiClock /></div>
            <h4>Giờ Phục Vụ</h4>
            <p>Thứ 2 - Thứ 7: 08:30 - 21:30<br />Chủ Nhật: 09:00 - 21:00</p>
          </div>
        </div>

        {/* Form & Map section */}
        <div className="contact-section">
          <div className="contact-form-wrap">
            <div className="contact-form-heading">
              <h3>Gửi Lời Nhắn Đến Chúng Tôi</h3>
              <p>Điền thông tin vào form dưới đây, nhân viên tư vấn sẽ liên hệ lại với bạn trong vòng 24 giờ làm việc.</p>
            </div>

            {submitted && (
              <div className="contact-form-success">
                <FiCheck />
                <span>Cảm ơn bạn! Tin nhắn đã được gửi thành công. Chúng tôi sẽ phản hồi sớm nhất.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label>Họ và tên *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Nguyễn Văn A"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-form__group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label>Số điện thoại</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="0912 345 678"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-form__group">
                  <label>Chủ đề</label>
                  <select name="subject" value={formData.subject} onChange={handleChange}>
                    <option value="Hỏi về sản phẩm">Hỏi về sản phẩm</option>
                    <option value="Tư vấn kích cỡ và phối đồ">Tư vấn kích cỡ và phối đồ</option>
                    <option value="Tình trạng đơn hàng">Tình trạng đơn hàng</option>
                    <option value="Đổi trả & Khiếu nại">Đổi trả & Khiếu nại</option>
                    <option value="Hợp tác kinh doanh">Hợp tác kinh doanh</option>
                  </select>
                </div>
              </div>

              <div className="contact-form__group">
                <label>Nội dung tin nhắn *</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Nhập nội dung cần hỗ trợ..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary contact-form__submit">
                <FiSend /> Gửi tin nhắn
              </button>
            </form>
          </div>

          <div className="contact-map-wrap">
            <div className="contact-map-header">
              <h3>Bản Đồ Chỉ Dẫn</h3>
              <p>Ghé thăm không gian mua sắm sang trọng của LUXE tại trung tâm thành phố.</p>
            </div>
            <div className="contact-map-frame">
              <iframe
                title="LUXE Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.521538356942!2d106.7017555148007!3d10.77130299232502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f416d860161%3A0x63351a66a1a0f8bf!2zTmd1eeG7hW4gSHXhu4csIELhur9uIE5naMOpLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s"
                width="100%"
                height="380"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="contact-faq section">
          <div className="section-title">
            <h2>Câu Hỏi Thường Gặp</h2>
            <div className="line" />
            <p>Giải đáp nhanh những thắc mắc phổ biến của khách hàng</p>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${openFaq === idx ? 'faq-item--open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <FiChevronDown className="faq-icon" />
                </div>
                {openFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

