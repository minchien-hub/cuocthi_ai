import React, { useState } from 'react';
import { client } from '@gradio/client';
import { FaUpload, FaSpinner, FaCheckCircle, FaTshirt, FaUser } from 'react-icons/fa';
import './VirtualTryOnApi.css';

export default function VirtualTryOnApi() {
  const [garmentFile, setGarmentFile] = useState(null);
  const [garmentPreview, setGarmentPreview] = useState(null);

  const [personFile, setPersonFile] = useState(null);
  const [personPreview, setPersonPreview] = useState(null);

  const [loading, setLoading] = useState(false);
  const [resultImageUrl, setResultImageUrl] = useState(null);
  const [statusText, setStatusText] = useState('');

  // Xử lý chọn ảnh trang phục
  const handleGarmentChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setGarmentFile(file);
      setGarmentPreview(URL.createObjectURL(file));
      setResultImageUrl(null);
      setStatusText('');
    }
  };

  // Xử lý chọn ảnh người mẫu / cá nhân
  const handlePersonChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setPersonFile(file);
      setPersonPreview(URL.createObjectURL(file));
      setResultImageUrl(null);
      setStatusText('');
    }
  };

  // Gọi API Gradio Client để thực hiện Try-On
  const handleGenerateTryOn = async () => {
    if (!garmentFile || !personFile) {
      alert('Vui lòng tải lên cả ảnh trang phục và ảnh người mẫu!');
      return;
    }

    setLoading(true);
    setResultImageUrl(null);
    setStatusText('Đang kết nối tới WeShopAI trên Hugging Face...');

    try {
      // 1. Khởi tạo Gradio client trỏ tới Space của WeShopAI
      setStatusText('Đang tải mô hình AI...');
      const app = await client("WeShopAI/WeShopAI-Virtual-Try-On");

      // 2. Gửi yêu cầu dự đoán với 2 file ảnh đầu vào (Tự động nhận diện endpoint /generate_image hoặc /predict)
      setStatusText('AI đang xử lý ghép trang phục (Quá trình này mất khoảng 10-20 giây)...');
      
      let result;
      try {
        result = await app.predict("/generate_image", [
          garmentFile, // Ảnh trang phục (Main Image)
          personFile,  // Ảnh người (Background reference image)
        ]);
      } catch (epErr) {
        // Dự phòng nếu Space đổi sang endpoint /predict
        result = await app.predict("/predict", [
          garmentFile,
          personFile,
        ]);
      }

      console.log("Kết quả trả về từ WeShopAI:", result);

      // 3. Lấy URL ảnh kết quả trả về từ API
      if (result && result.data) {
        const outputImage = result.data[0]?.url || result.data[0];
        if (outputImage) {
          setResultImageUrl(outputImage);
          setStatusText('Thành công! Đã tạo xong trang phục ảo.');
        } else {
          throw new Error('Không tìm thấy đường dẫn ảnh kết quả.');
        }
      } else {
        throw new Error('Không nhận được phản hồi hình ảnh từ AI.');
      }
    } catch (error) {
      console.error('Lỗi khi gọi WeShopAI API:', error);
      setStatusText('⚠️ Hệ thống AI đang bận hoặc quá tải hàng đợi, bạn vui lòng chờ hoặc thử lại sau nhé!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weshop-tryon-container">
      <div className="weshop-header">
        <h2>✨ Phòng Thử Đồ Ảo AI (WeShopAI API Client)</h2>
        <p>Tải lên ảnh trang phục và ảnh của bạn để hệ thống AI tự động ghép đồ chân thực.</p>
      </div>

      <div className="weshop-grid">
        {/* Khu vực chọn ảnh quần áo */}
        <div className="upload-box">
          <h3><FaTshirt /> Bước 1: Ảnh trang phục</h3>
          <label className="dropzone-label">
            {!garmentPreview ? (
              <div className="dropzone-placeholder">
                <FaUpload className="icon-upl" />
                <span>Chọn hoặc kéo thả ảnh áo/quần</span>
              </div>
            ) : (
              <img src={garmentPreview} alt="Garment Preview" className="preview-img" />
            )}
            <input type="file" accept="image/*" onChange={handleGarmentChange} hidden />
          </label>
        </div>

        {/* Khu vực chọn ảnh người */}
        <div className="upload-box">
          <h3><FaUser /> Bước 2: Ảnh người mẫu / của bạn</h3>
          <label className="dropzone-label">
            {!personPreview ? (
              <div className="dropzone-placeholder">
                <FaUpload className="icon-upl" />
                <span>Chọn hoặc kéo thả ảnh toàn thân</span>
              </div>
            ) : (
              <img src={personPreview} alt="Person Preview" className="preview-img" />
            )}
            <input type="file" accept="image/*" onChange={handlePersonChange} hidden />
          </label>
        </div>
      </div>

      {/* Nút bấm thực thi */}
      <button 
        className="generate-btn" 
        onClick={handleGenerateTryOn} 
        disabled={loading || !garmentFile || !personFile}
      >
        {loading ? (
          <>
            <FaSpinner className="fa-spin" /> Đang xử lý...
          </>
        ) : (
          '🚀 Tiến hành Thử đồ ảo AI'
        )}
      </button>

      {/* Trạng thái và Kết quả */}
      {statusText && <p className="status-msg">{statusText}</p>}

      {resultImageUrl && (
        <div className="result-container">
          <h3><FaCheckCircle className="success-icon" /> Kết quả Thử Đồ Ảo</h3>
          <div className="result-image-wrapper">
            <img src={resultImageUrl} alt="Virtual Try-On Result" className="result-final-img" />
          </div>
          <a href={resultImageUrl} target="_blank" rel="noopener noreferrer" className="download-btn">
            Tải ảnh kết quả về máy
          </a>
        </div>
      )}
    </div>
  );
}
