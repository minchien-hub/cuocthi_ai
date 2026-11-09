import React, { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiUpload, FiRefreshCw, FiShoppingBag, FiCheck } from 'react-icons/fi';
import { FaMagic } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import BodySizeAI from '../components/BodySizeAI';
import products from '../data/products';
import './VirtualTryOnPage.css';

const defaultModels = [
  {
    id: 'model-1',
    name: 'Người mẫu Nữ A (Cao 1m68, 50kg)',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    gender: 'female'
  },
  {
    id: 'model-2',
    name: 'Người mẫu Nữ B (Cao 1m62, 48kg)',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    gender: 'female'
  },
  {
    id: 'model-3',
    name: 'Người mẫu Nữ C (Cao 1m72, 54kg)',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    gender: 'female'
  },
  {
    id: 'model-4',
    name: 'Người mẫu Nam (Cao 1m78, 68kg)',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    gender: 'male'
  }
];

const VirtualTryOnPage = () => {
  const { addToCart } = useContext(CartContext);
  const fileInputRef = useRef(null);

  const [selectedModel, setSelectedModel] = useState(defaultModels[0]);
  const [userUploadedPhoto, setUserUploadedPhoto] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [userFile, setUserFile] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedSize, setSelectedSize] = useState('M');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStep, setProcessStep] = useState('');
  const [tryOnCompleted, setTryOnCompleted] = useState(false);
  const [activeTab, setActiveTab] = useState('models'); // 'models' | 'upload'
  const [aiResultImage, setAiResultImage] = useState(null);
  const [showAiSizeModal, setShowAiSizeModal] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUserUploadedPhoto(url);
      setUserFile(file);
      setActiveTab('upload');
      setTryOnCompleted(false);
      setAiResultImage(null);
    }
  };

  const handleStartTryOn = async () => {
    setIsProcessing(true);
    setTryOnCompleted(false);
    setAiResultImage(null);

    try {
      setProcessStep('Đang chuẩn bị dữ liệu gửi lên AI Server...');

      // Lấy URL ảnh người dùng (nếu upload ảnh riêng, tạm dùng ảnh mẫu công khai nếu chạy demo cục bộ)
      const humanImageUrl = activeTab === 'upload' && userUploadedPhoto
        ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
        : selectedModel.image;

      // Lấy URL ảnh trang phục
      const garmentImageUrl = selectedProduct.images[0].startsWith('http')
        ? selectedProduct.images[0]
        : 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80';

      setProcessStep('AI (IDM-VTON) đang xử lý hình học và khớp trang phục (10-15s)...');

      // Gọi API đến Backend FastAPI Python của bạn
      const response = await fetch('http://localhost:8000/api/vton', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          human_image_url: humanImageUrl,
          garment_image_url: garmentImageUrl,
          category: 'upper_body'
        }),
      });

      const data = await response.json();

      if (data.status === 'success') {
        setAiResultImage(data.result_image); // Hứng URL ảnh kết quả từ AI trả về
        setTryOnCompleted(true);
      } else {
        alert('Lỗi từ AI Server: ' + (data.message || 'Không thể tạo ảnh thử đồ'));
      }
    } catch (error) {
      console.error('Lỗi kết nối API:', error);
      alert('Không thể kết nối tới Backend FastAPI. Hãy chắc chắn bạn đã chạy lệnh `uvicorn main:app --reload`!');
    } finally {
      setIsProcessing(false);
      setProcessStep('');
    }
  };

  const currentPersonImage = activeTab === 'upload' && userUploadedPhoto
    ? userUploadedPhoto
    : selectedModel.image;

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct, selectedSize, selectedProduct.colors[0], 1);
    }
  };

  return (
    <div className="vton-page">
      {/* Header */}
      <div className="vton-header">
        <div className="container">
          <div className="vton-breadcrumb">
            <Link to="/">Trang chủ</Link> <span>/</span> <span>Phòng Thử Đồ Ảo AI</span>
          </div>
          <div className="vton-badge-tag">
            <FaMagic /> AI VIRTUAL TRY-ON STUDIO
          </div>
          <h1 className="vton-title">Phòng Thử Đồ Trực Tuyến Thông Minh</h1>
          <p className="vton-subtitle">
            Ứng dụng công nghệ AI tiên tiến giúp bạn ướm thử trang phục lên người mẫu hoặc ảnh chính mình ngay lập tức.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="vton-layout">
          {/* Left Panel: Person & Model Selector */}
          <div className="vton-panel vton-panel--left">
            <div className="vton-panel__tabs">
              <button
                className={`vton-panel__tab ${activeTab === 'models' ? 'active' : ''}`}
                onClick={() => setActiveTab('models')}
              >
                Chọn Người Mẫu
              </button>
              <button
                className={`vton-panel__tab ${activeTab === 'upload' ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab('upload');
                  if (!userUploadedPhoto && fileInputRef.current) {
                    fileInputRef.current.click();
                  }
                }}
              >
                Tải Ảnh Của Bạn
              </button>
            </div>

            {activeTab === 'models' ? (
              <div className="vton-models-list">
                <span className="vton-section-label">Danh sách người mẫu chuẩn phom dáng:</span>
                <div className="vton-models-grid">
                  {defaultModels.map((m) => (
                    <div
                      key={m.id}
                      className={`vton-model-card ${selectedModel.id === m.id ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedModel(m);
                        setTryOnCompleted(false);
                        setAiResultImage(null);
                      }}
                    >
                      <img src={m.image} alt={m.name} />
                      <div className="vton-model-info">
                        <span className="vton-model-name">{m.name}</span>
                        {selectedModel.id === m.id && <span className="vton-selected-badge"><FiCheck /> Đang chọn</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="vton-upload-area">
                <span className="vton-section-label">Ảnh chân dung của bạn:</span>
                {userUploadedPhoto ? (
                  <div className="vton-uploaded-preview">
                    <img src={userUploadedPhoto} alt="Uploaded portrait" />
                    <button
                      className="btn btn-outline vton-reupload-btn"
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    >
                      <FiRefreshCw /> Chọn ảnh khác
                    </button>
                  </div>
                ) : (
                  <div
                    className="vton-dropzone"
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                  >
                    <FiUpload className="vton-dropzone-icon" />
                    <h4>Tải lên ảnh toàn thân hoặc nửa người</h4>
                    <p>Hỗ trợ định dạng JPG, PNG (khuyên dùng ảnh đứng thẳng, rõ nét)</p>
                    <span className="btn btn-primary btn--sm">Chọn tệp từ máy tính</span>
                  </div>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  accept="image/*"
                  onChange={handleFileUpload}
                />
              </div>
            )}
          </div>

          {/* Center: Stage / Fitting Room Display */}
          <div className="vton-stage">
            <div className="vton-stage__screen">
              {isProcessing && (
                <div className="vton-processing-overlay">
                  <div className="vton-spinner" />
                  <div className="vton-scanning-laser" />
                  <h3 className="vton-processing-title">AI Đang Tạo Mẫu Thử...</h3>
                  <p className="vton-processing-step">{processStep}</p>
                </div>
              )}

              {/* Viewport */}
              <div className="vton-canvas-wrap">
                {tryOnCompleted && aiResultImage ? (
                  // HIỂN THỊ ẢNH THẬT DO AI (IDM-VTON) SINH RA
                  <img
                    src={aiResultImage}
                    alt="AI Virtual Try-On Result"
                    className="vton-base-img"
                  />
                ) : (
                  // HIỂN THỊ ẢNH GỐC TRƯỚC KHI THỬ
                  <>
                    <img
                      src={currentPersonImage}
                      alt="Base model"
                      className="vton-base-img"
                    />
                    {selectedProduct && (
                      <div className="vton-garment-layer vton-garment-layer--preview">
                        <img
                          src={selectedProduct.images[0]}
                          alt={selectedProduct.name}
                          className="vton-garment-img"
                        />
                      </div>
                    )}
                  </>
                )}

                {/* Status chip */}
                <div className="vton-stage-status">
                  {tryOnCompleted ? (
                    <span className="vton-status-chip vton-status-chip--success">
                      <FiCheck /> Đã ghép AI chuẩn phom thực tế
                    </span>
                  ) : (
                    <span className="vton-status-chip">
                      Bấm "Bắt Đầu Thử Đồ (AI)" bên phải
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Garment Selector & Action */}
          <div className="vton-panel vton-panel--right">
            <span className="vton-section-label">Chọn trang phục muốn ướm thử:</span>

            <div className="vton-garment-catalog">
              {products.map((p) => (
                <div
                  key={p.id}
                  className={`vton-garment-thumb ${selectedProduct.id === p.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedProduct(p);
                    setTryOnCompleted(false);
                    setAiResultImage(null);
                  }}
                >
                  <img src={p.images[0]} alt={p.name} />
                  <div className="vton-garment-thumb-info">
                    <span className="vton-garment-thumb-name">{p.name}</span>
                    <span className="vton-garment-thumb-price">
                      {p.price.toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Product Summary Box */}
            <div className="vton-selected-summary">
              <div className="vton-selected-header">
                <img src={selectedProduct.images[0]} alt={selectedProduct.name} />
                <div>
                  <h4>{selectedProduct.name}</h4>
                  <span className="vton-price-highlight">
                    {selectedProduct.price.toLocaleString('vi-VN')}đ
                  </span>
                </div>
              </div>

              <div className="vton-size-picker">
                <div className="vton-size-picker-header">
                  <span className="vton-sublabel">Chọn size thử đồ:</span>
                  <button
                    type="button"
                    className="vton-ai-size-btn"
                    onClick={() => setShowAiSizeModal(true)}
                  >
                    <FaMagic /> AI Quét Vóc Dáng
                  </button>
                </div>
                <div className="vton-size-buttons">
                  {selectedProduct.sizes.map((s) => (
                    <button
                      key={s}
                      className={`vton-size-btn ${selectedSize === s ? 'active' : ''}`}
                      onClick={() => setSelectedSize(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <button
                className="btn btn-primary vton-try-btn"
                onClick={handleStartTryOn}
                disabled={isProcessing}
              >
                <FaMagic /> {tryOnCompleted ? 'Ướm Thử Lại (AI)' : 'Bắt Đầu Thử Đồ (AI)'}
              </button>

              <button
                className="btn btn-dark vton-cart-btn"
                onClick={handleAddToCart}
              >
                <FiShoppingBag /> Thêm sản phẩm này vào giỏ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* AI Body Size Scanner Modal */}
      {showAiSizeModal && (
        <div className="ai-size-modal-overlay" onClick={() => setShowAiSizeModal(false)}>
          <div className="ai-size-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="ai-size-modal-close"
              onClick={() => setShowAiSizeModal(false)}
              aria-label="Đóng"
            >
              ✕
            </button>
            <BodySizeAI
              currentSize={selectedSize}
              onSizeCalculated={(recommendedSize) => {
                if (selectedProduct && selectedProduct.sizes && selectedProduct.sizes.includes(recommendedSize)) {
                  setSelectedSize(recommendedSize);
                } else if (selectedProduct && selectedProduct.sizes && selectedProduct.sizes.length > 0) {
                  setSelectedSize(selectedProduct.sizes[0]);
                }
                setShowAiSizeModal(false);
              }}
              onClose={() => setShowAiSizeModal(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualTryOnPage;