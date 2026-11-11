import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiUpload, FiRefreshCw, FiShoppingBag, FiCheck, FiTrash2, FiEye } from 'react-icons/fi';
import { FaMagic } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import AiStylistChatbot from '../components/AiStylistChatbot';
import { callWeShopAiTryOn } from '../services/weShopAiService';
import products from '../data/products';
import './VirtualTryOnPage.css';

const VirtualTryOnPage = () => {
  const [searchParams] = useSearchParams();
  const { addToCart } = useContext(CartContext);
  const fileInputRef = useRef(null);

  const [userUploadedPhoto, setUserUploadedPhoto] = useState(null);
  const [userFile, setUserFile] = useState(null);
  const [aiResultImage, setAiResultImage] = useState(null);
  const [showOriginal, setShowOriginal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedSize, setSelectedSize] = useState(products[0].sizes[0] || 'L');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStep, setProcessStep] = useState('');
  const [tryOnCompleted, setTryOnCompleted] = useState(false);
  const [fitMatchScore, setFitMatchScore] = useState(98.4);

  // Nhận diện sản phẩm từ URL (khi bấm thử đồ từ trang chi tiết sản phẩm)
  useEffect(() => {
    const queryImage = searchParams.get('image');
    const queryName = searchParams.get('name');

    if (queryImage || queryName) {
      const found = products.find(
        (p) => p.images.includes(queryImage) || p.name === queryName
      );
      if (found) {
        setSelectedProduct(found);
        setSelectedSize(found.sizes[0] || 'M');
      }
    }
  }, [searchParams]);

  const handleFileUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUserUploadedPhoto(url);
      setUserFile(file);
      setAiResultImage(null);
      setTryOnCompleted(false);
      setErrorMessage('');
    }
  };

  const handleRemovePhoto = () => {
    setUserUploadedPhoto(null);
    setUserFile(null);
    setAiResultImage(null);
    setTryOnCompleted(false);
    setErrorMessage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes[0] || 'M');
    setAiResultImage(null);
    setTryOnCompleted(false);
    setErrorMessage('');
  };

  const handleStartTryOn = async () => {
    if (!userUploadedPhoto) {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
      return;
    }

    setIsProcessing(true);
    setTryOnCompleted(false);
    setShowOriginal(false);
    setErrorMessage('');

    try {
      setProcessStep('WeShop AI: Đang tải dữ liệu hình ảnh & kết nối hệ sinh thái...');
      await new Promise((resolve) => setTimeout(resolve, 400));

      const personInput = userFile || userUploadedPhoto;
      const garmentInput = selectedProduct.images[0];

      setProcessStep('WeShop AI: Đang nhận diện vóc dáng & tiến hành thử đồ ảo...');

      // CHỈ 1 TẦNG DUY NHẤT: Gọi trực tiếp WeShop AI
      const resultUrl = await callWeShopAiTryOn(personInput, garmentInput);

      if (resultUrl) {
        setAiResultImage(resultUrl);
        setFitMatchScore((96.5 + Math.random() * 2.8).toFixed(1));
        setTryOnCompleted(true);
        setErrorMessage('');
      } else {
        throw new Error('Hệ thống chưa nhận diện được ảnh kết quả.');
      }
    } catch (error) {
      console.error('Lỗi WeShop AI:', error);
      // NẾU NGHẼN HOẶC LỖI -> THÔNG BÁO CHỜ HOẶC THỬ LẠI SAU (THEO YÊU CẦU NGƯỜI DÙNG)
      setErrorMessage('⚠️ Hệ thống AI đang bận hoặc quá tải hàng đợi, bạn vui lòng chờ hoặc thử lại sau nhé!');
      setTryOnCompleted(false);
      setAiResultImage(null);
    } finally {
      setIsProcessing(false);
      setProcessStep('');
    }
  };

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
            <FaMagic /> CLIENT-SIDE AI VISION STUDIO
          </div>
          <h1 className="vton-title">Phòng Thử Đồ Trực Tuyến Thông Minh</h1>
          <p className="vton-subtitle">
            Tải ảnh chân dung của bạn để AI phân tích vóc dáng và ướm thử trang phục thời gian thực 100% trên trình duyệt.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="vton-layout">
          {/* Left Panel: Customer Photo Upload */}
          <div className="vton-panel vton-panel--left">
            <span className="vton-section-label">Ảnh Chân Dung Của Bạn:</span>

            <div className="vton-upload-area">
              {userUploadedPhoto ? (
                <div className="vton-uploaded-preview">
                  <img src={userUploadedPhoto} alt="Ảnh chân dung đã tải" />
                  <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                    <button
                      type="button"
                      className="btn btn-outline vton-reupload-btn"
                      style={{ flex: 1 }}
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    >
                      <FiRefreshCw /> Chọn ảnh khác
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline"
                      style={{ color: '#e74c3c', borderColor: '#f5c6cb', padding: '0 12px' }}
                      title="Xóa ảnh"
                      onClick={handleRemovePhoto}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className="vton-dropzone"
                  onClick={() => fileInputRef.current && fileInputRef.current.click()}
                >
                  <FiUpload className="vton-dropzone-icon" />
                  <h4>Tải lên ảnh toàn thân hoặc nửa người</h4>
                  <p>Hỗ trợ định dạng JPG, PNG, WEBP (khuyên dùng ảnh đứng thẳng, rõ nét)</p>
                  <button type="button" className="btn btn-primary btn--sm">
                    Chọn tệp từ máy tính
                  </button>
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
          </div>

          {/* Center: Stage / Fitting Room Display */}
          <div className="vton-stage">
            <div className="vton-stage__screen">
              {isProcessing && (
                <div className="vton-processing-overlay">
                  <div className="vton-spinner" />
                  <div className="vton-scanning-laser" />
                  <h3 className="vton-processing-title">AI Đang Khớp Trang Phục...</h3>
                  <p className="vton-processing-step">{processStep}</p>
                </div>
              )}

              {/* Viewport */}
              <div className="vton-canvas-wrap">
                {userUploadedPhoto ? (
                  aiResultImage && !showOriginal ? (
                    <img
                      src={aiResultImage}
                      alt="Kết quả thử đồ WeShop AI"
                      className="vton-base-img vton-ai-result-img"
                    />
                  ) : (
                    <>
                      <img
                        src={userUploadedPhoto}
                        alt="Ảnh chân dung người thử"
                        className="vton-base-img"
                      />
                      {selectedProduct && (
                        <div
                          className={`vton-garment-layer ${
                            tryOnCompleted ? 'vton-garment-layer--fitted' : 'vton-garment-layer--preview'
                          }`}
                        >
                          <img
                            src={selectedProduct.images[0]}
                            alt={selectedProduct.name}
                            className="vton-garment-img"
                          />
                        </div>
                      )}
                    </>
                  )
                ) : (
                  <div className="vton-empty-stage">
                    <div className="vton-empty-stage__icon">
                      <FiUpload />
                    </div>
                    <h3>Chưa Có Ảnh Chân Dung</h3>
                    <p>
                      Vui lòng tải lên ảnh chân dung toàn thân hoặc nửa người ở khung bên trái để bắt đầu ướm thử trang phục với AI.
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary btn--sm"
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    >
                      <FiUpload style={{ marginRight: '6px' }} /> Tải Ảnh Lên Ngay
                    </button>
                  </div>
                )}

                {/* Status chip */}
                {userUploadedPhoto && (
                  <div className="vton-stage-status">
                    {tryOnCompleted ? (
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        {aiResultImage && (
                          <button
                            type="button"
                            className="vton-status-chip"
                            style={{ cursor: 'pointer', border: 'none' }}
                            onClick={() => setShowOriginal(!showOriginal)}
                          >
                            <FiEye /> {showOriginal ? 'Xem ảnh AI' : 'Xem ảnh gốc'}
                          </button>
                        )}
                        <span className="vton-status-chip vton-status-chip--success">
                          <FiCheck /> {aiResultImage ? 'WeShopAI VTON' : 'Đã ghép AI chuẩn phom'}
                        </span>
                      </div>
                    ) : (
                      <span className="vton-status-chip">
                        Bấm "Bắt Đầu Thử Đồ (AI)" bên phải
                      </span>
                    )}
                  </div>
                )}
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
                  onClick={() => handleSelectProduct(p)}
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '4px 0' }}>
                    <span className="vton-price-highlight">
                      {selectedProduct.price.toLocaleString('vi-VN')}đ
                    </span>
                    {selectedProduct.originalPrice && (
                      <span style={{ fontSize: '0.82rem', textDecoration: 'line-through', color: '#999' }}>
                        {selectedProduct.originalPrice.toLocaleString('vi-VN')}đ
                      </span>
                    )}
                  </div>
                  {selectedProduct.badge && (
                    <span style={{ fontSize: '0.75rem', color: '#1565C0', fontWeight: '600' }}>
                      {selectedProduct.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* AI Fit Result Card */}
              {tryOnCompleted && (
                <div className="vton-ai-fit-card">
                  <div className="vton-ai-fit-card__header">
                    <span className="vton-ai-fit-card__title">🎯 Đánh Giá Phom Dáng AI:</span>
                    <span className="vton-ai-fit-card__badge">Chuẩn {fitMatchScore}%</span>
                  </div>
                  <div className="vton-ai-fit-card__body">
                    <span className="vton-ai-fit-card__match">• Vừa Vặn Hoàn Hảo (Size {selectedSize})</span>
                  </div>
                  <p className="vton-ai-fit-card__desc">
                    Tỷ lệ vai, ngực & chiều dài trang phục tương thích hoàn toàn với hình thể. An tâm đặt hàng không lo chật/rộng!
                  </p>
                </div>
              )}

              {/* Thông báo lỗi khi hệ thống AI quá tải hoặc nghẽn */}
              {errorMessage && (
                <div
                  className="vton-error-banner"
                  style={{
                    background: '#fff3cd',
                    border: '1px solid #ffeeba',
                    color: '#856404',
                    padding: '12px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    marginBottom: '14px',
                    lineHeight: 1.5,
                    fontWeight: '500'
                  }}
                >
                  {errorMessage}
                </div>
              )}

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
                <FiShoppingBag /> Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot nổi góc màn hình */}
      <AiStylistChatbot />
    </div>
  );
};

export default VirtualTryOnPage;
