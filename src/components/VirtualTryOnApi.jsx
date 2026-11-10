import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { client } from '@gradio/client';
import { FaUpload, FaSpinner, FaCheckCircle, FaTshirt, FaUser } from 'react-icons/fa';
import products from '../data/products';
import './VirtualTryOnApi.css';

export default function VirtualTryOnApi() {
  const [searchParams] = useSearchParams();

  const [selectedStoreProduct, setSelectedStoreProduct] = useState(null);
  const [garmentFile, setGarmentFile] = useState(null);
  const [garmentPreview, setGarmentPreview] = useState(null);

  const [personFile, setPersonFile] = useState(null);
  const [personPreview, setPersonPreview] = useState(null);

  const [loading, setLoading] = useState(false);
  const [resultImageUrl, setResultImageUrl] = useState(null);
  const [statusText, setStatusText] = useState('');

  // Tự động tải sản phẩm từ cửa hàng khi mở trang
  useEffect(() => {
    const queryImage = searchParams.get('image');
    const queryName = searchParams.get('name');

    let initialProduct = products[0];
    if (queryImage || queryName) {
      const found = products.find(
        (p) => p.images.includes(queryImage) || p.name === queryName
      );
      if (found) initialProduct = found;
    }

    if (initialProduct) {
      handleSelectStoreProduct(initialProduct);
    }
  }, [searchParams]);

  // Chọn trang phục có sẵn trong danh mục của cửa hàng
  const handleSelectStoreProduct = async (product) => {
    setSelectedStoreProduct(product);
    setGarmentPreview(product.images[0]);
    setResultImageUrl(null);
    setStatusText('');

    try {
      // Chuyển ảnh sản phẩm cửa hàng thành File blob để gửi sang WeShopAI
      const res = await fetch(product.images[0]);
      const blob = await res.blob();
      const file = new File([blob], 'garment.jpg', { type: blob.type || 'image/jpeg' });
      setGarmentFile(file);
    } catch (err) {
      console.error('Lỗi chuyển đổi ảnh sản phẩm:', err);
    }
  };

  // Xử lý khi người dùng muốn tự tải ảnh trang phục riêng từ máy tính
  const handleCustomGarmentChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedStoreProduct(null);
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

  // Gọi API WeShopAI Gradio Client để thực hiện Try-On
  const handleGenerateTryOn = async () => {
    if (!garmentFile || !personFile) {
      alert('Vui lòng chọn trang phục và tải lên ảnh của bạn!');
      return;
    }

    setLoading(true);
    setResultImageUrl(null);
    setStatusText('Đang kết nối tới WeShopAI trên Hugging Face...');

    try {
      setStatusText('Đang kết nối mô hình WeShopAI...');
      const app = await client("WeShopAI/WeShopAI-Virtual-Try-On");

      setStatusText('WeShopAI đang xử lý ghép đồ lên người bạn (Quá trình này mất khoảng 10-20 giây)...');
      
      let result;
      try {
        result = await app.predict("/generate_image", [
          garmentFile, // Ảnh trang phục (Main Image)
          personFile,  // Ảnh người (Background reference image)
        ]);
      } catch (epErr) {
        // Dự phòng nếu space dùng endpoint /predict
        result = await app.predict("/predict", [
          garmentFile,
          personFile,
        ]);
      }

      console.log("Kết quả trả về từ WeShopAI:", result);

      if (result && result.data) {
        const outputImage = result.data[0]?.url || result.data[0];
        if (outputImage) {
          setResultImageUrl(outputImage);
          setStatusText('🎉 Thành công! Đã tạo xong hình ảnh thử đồ chân thực.');
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
        <h2>✨ Phòng Thử Đồ Ảo AI (WeShopAI API)</h2>
        <p>Chọn trang phục có sẵn tại cửa hàng và tải ảnh của bạn để AI tự động ướm đồ thời gian thực.</p>
      </div>

      <div className="weshop-grid">
        {/* Bước 1: Chọn trang phục có sẵn ở cửa hàng */}
        <div className="upload-box">
          <div className="upload-box-header">
            <h3><FaTshirt /> Bước 1: Chọn trang phục cửa hàng</h3>
            <label className="btn-upload-custom-label">
              <FaUpload /> Tải ảnh riêng
              <input type="file" accept="image/*" onChange={handleCustomGarmentChange} hidden />
            </label>
          </div>

          {/* Danh mục sản phẩm cửa hàng */}
          <div className="store-products-carousel">
            {products.map((p) => (
              <div
                key={p.id}
                className={`store-product-item ${selectedStoreProduct?.id === p.id ? 'active' : ''}`}
                onClick={() => handleSelectStoreProduct(p)}
                title={p.name}
              >
                <img src={p.images[0]} alt={p.name} />
                <span className="store-product-name">{p.name}</span>
                <span className="store-product-price">{p.price.toLocaleString('vi-VN')}đ</span>
              </div>
            ))}
          </div>

          {/* Chi tiết trang phục đang chọn */}
          <div className="selected-garment-preview">
            {garmentPreview ? (
              <div className="preview-with-info">
                <img src={garmentPreview} alt="Selected Garment" className="preview-img" />
                <div className="garment-details">
                  <h4>{selectedStoreProduct?.name || 'Trang phục tùy chỉnh'}</h4>
                  {selectedStoreProduct && (
                    <>
                      <p className="garment-price">{selectedStoreProduct.price.toLocaleString('vi-VN')}đ</p>
                      <div className="garment-sizes">
                        <span>Kích thước có sẵn:</span>
                        <div className="size-tags">
                          {selectedStoreProduct.sizes.map((s) => (
                            <span key={s} className="size-tag">{s}</span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className="dropzone-placeholder">
                <FaTshirt className="icon-upl" />
                <span>Chọn 1 trang phục ở trên hoặc tải ảnh từ máy</span>
              </div>
            )}
          </div>
        </div>

        {/* Bước 2: Ảnh người mẫu / của bạn */}
        <div className="upload-box">
          <div className="upload-box-header">
            <h3><FaUser /> Bước 2: Ảnh chân dung của bạn</h3>
          </div>
          <label className="dropzone-label">
            {!personPreview ? (
              <div className="dropzone-placeholder">
                <FaUpload className="icon-upl" />
                <span>Chọn hoặc kéo thả ảnh chân dung / toàn thân</span>
                <span className="dropzone-subtext">Hỗ trợ JPG, PNG (khuyên dùng ảnh đứng thẳng, rõ nét)</span>
              </div>
            ) : (
              <div className="person-preview-wrapper">
                <img src={personPreview} alt="Person Preview" className="preview-img" />
                <span className="change-photo-badge">Bấm để đổi ảnh khác</span>
              </div>
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
          '🚀 Tiến hành Thử đồ ảo AI (WeShopAI)'
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
