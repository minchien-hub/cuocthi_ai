import React from 'react';
import AiStylistChatbot from '../components/AiStylistChatbot';
import './VirtualTryOnPage.css';

export default function VirtualTryOnPage() {
  return (
    <div className="virtual-tryon-wrapper">
      <div className="virtual-tryon-container">
        <div className="tryon-header">
          <h2>✨ Phòng Thử Đồ Ảo AI (WeShopAI VTON)</h2>
          <p>Công nghệ ướm thử trang phục thông minh giúp khách hàng trải nghiệm sản phẩm chân thực trước khi mua.</p>
        </div>

        {/* Khung nhúng trực tiếp WeShopAI Virtual Try-On từ Hugging Face Spaces */}
        <div className="iframe-wrapper">
          <iframe
            src="https://weshopai-weshopai-virtual-try-on.hf.space"
            width="100%"
            height="800px"
            frameBorder="0"
            title="WeShopAI Virtual Try-On"
            allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>

        {/* Chatbot nổi góc màn hình */}
        <AiStylistChatbot />
      </div>
    </div>
  );
}
