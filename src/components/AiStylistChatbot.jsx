import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './AiStylistChatbot.css';

export default function AiStylistChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Xin chào! Tôi là Aureus AI Stylist - Trợ lý phong cách & tư vấn kích cỡ thông minh của thương hiệu Aureus. Bạn hãy cho tôi biết chiều cao, cân nặng hoặc trang phục bạn quan tâm để tôi hỗ trợ tư vấn chọn size chuẩn nhất nhé!'
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Vị trí bong bóng chat có thể kéo thả (Draggable)
  const [hasDragged, setHasDragged] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ mouseX: 0, mouseY: 0, posX: 0, posY: 0 });
  const hasMovedRef = useRef(false);

  // Resize listener: cập nhật lại biên khi người dùng đã kéo
  useEffect(() => {
    const handleResize = () => {
      if (hasDragged) {
        setPosition((prev) => ({
          x: Math.max(12, Math.min(window.innerWidth - 70, prev.x)),
          y: Math.max(12, Math.min(window.innerHeight - 70, prev.y)),
        }));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hasDragged]);

  // Xử lý kéo thả con trỏ (chuột + cảm ứng trên điện thoại)
  const handlePointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;

    isDraggingRef.current = true;
    hasMovedRef.current = false;
    setIsDragging(false);

    const rect = e.currentTarget.getBoundingClientRect();
    dragStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      posX: rect.left,
      posY: rect.top,
    };

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (err) {}
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;

    const dx = e.clientX - dragStartRef.current.mouseX;
    const dy = e.clientY - dragStartRef.current.mouseY;

    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
      hasMovedRef.current = true;
      setIsDragging(true);
      setHasDragged(true);
    }

    const BUBBLE_SIZE = 58;
    const newX = Math.max(12, Math.min(window.innerWidth - BUBBLE_SIZE - 12, dragStartRef.current.posX + dx));
    const newY = Math.max(12, Math.min(window.innerHeight - BUBBLE_SIZE - 12, dragStartRef.current.posY + dy));

    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {}

    // Nếu chỉ click/tap nhẹ mà không kéo di chuyển -> Mở cửa sổ chat
    if (!hasMovedRef.current) {
      setIsOpen(true);
    }
  };

  // Tính toán vị trí mở cửa sổ chat luôn nằm trọn trong màn hình
  const getWindowStyle = () => {
    if (!hasDragged) {
      return {};
    }

    const BUBBLE_SIZE = 58;
    const windowWidth = Math.min(380, window.innerWidth - 24);
    const windowHeight = Math.min(540, window.innerHeight - 30);

    let left = position.x + BUBBLE_SIZE - windowWidth;
    if (left < 12) left = 12;
    if (left + windowWidth > window.innerWidth - 12) {
      left = window.innerWidth - windowWidth - 12;
    }

    let top = position.y - windowHeight + BUBBLE_SIZE;
    if (top < 12) {
      top = Math.max(12, Math.min(position.y, window.innerHeight - windowHeight - 12));
    }
    if (top + windowHeight > window.innerHeight - 12) {
      top = window.innerHeight - windowHeight - 12;
    }

    return {
      position: 'fixed',
      left: `${left}px`,
      top: `${top}px`,
      width: `${windowWidth}px`,
      height: `${windowHeight}px`,
    };
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const userMsg = typeof e === 'string' ? e : input;
    if (!userMsg.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');
    // Hiển thị hiệu ứng đang chờ AI phản hồi
    setMessages((prev) => [...prev, { sender: 'ai', text: '...', id: 'loading' }]);

    try {
      // Gọi trực tiếp vào Local Server của LM Studio ở cổng 1235
      const response = await fetch("http://localhost:1235/v1/chat/completions", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: "local-model", // LM Studio tự động nhận diện model đang được Load
          messages: [
            {
              role: "system",
              content: "Bạn là Aureus AI Stylist - Trợ lý AI thời trang & phong cách của thương hiệu thời trang cao cấp Aureus. Bạn hỗ trợ khách hàng tư vấn kích cỡ, gợi ý phối đồ và phong cách thời trang.\nNếu khách hỏi về Áo Polo Đồng Phục HCMUTE (sản phẩm đặc trưng của shop có 6 size S, M, L, XL, XXL, XXXL), bảng size khuyến nghị là:\n- Size S: Cao 1m50 - 1m60, Cân nặng 42 - 50kg\n- Size M: Cao 1m60 - 1m68, Cân nặng 50 - 60kg\n- Size L: Cao 1m68 - 1m75, Cân nặng 60 - 70kg\n- Size XL: Cao 1m72 - 1m80, Cân nặng 70 - 78kg\n- Size XXL: Cao 1m75 - 1m85, Cân nặng 78 - 86kg\n- Size XXXL: Cao trên 1m80, Cân nặng trên 86kg (hoặc thích mặc form rộng rãi thoải mái)\nNếu khách hỏi về Áo Thun Raglan Oversize (BST 4 màu hot trend: Nâu cacao, Trắng sữa, Xanh nhạt pastel, Xám đậm charcoal; 5 size S, M, L, XL, XXL, chất liệu 100% cotton định lượng 250gsm dày dặn, phom unisex), tư vấn:\n- Size S: Dưới 1m62, 45-55kg\n- Size M: 1m62 - 1m70, 55-65kg\n- Size L: 1m70 - 1m76, 65-74kg\n- Size XL: 1m75 - 1m82, 74-82kg\n- Size XXL: Trên 1m80 hoặc trên 82kg\nNếu khách hỏi về Quần Jeans Baggy Ống Cong Mài Rách Durabletex™ (size 28, 29, 30, 31, 32, 34), tư vấn: phom ống cong thời thượng hack chiều cao, hạn chế nhăn chống bục đáy, size 28 (45-52kg), size 29 (52-58kg), size 30 (58-64kg), size 31 (64-70kg), size 32 (70-76kg), size 34 (76-85kg). Quần phối rất đẹp với Áo Thun Raglan và Áo Polo.\nHãy tư vấn ngắn gọn, lịch sự, thân thiện, thông minh bằng tiếng Việt cho khách hàng của Aureus."
            },
            {
              role: "user",
              content: userMsg
            }
          ],
          temperature: 0.7,
          stream: false
        })
      });

      const data = await response.json();
      const aiReply = data.choices?.[0]?.message?.content;

      if (aiReply) {
        setMessages((prev) =>
          prev.filter((msg) => msg.id !== 'loading').concat({ sender: 'ai', text: aiReply })
        );
      } else {
        setMessages((prev) =>
          prev.filter((msg) => msg.id !== 'loading').concat({
            sender: 'ai',
            text: "⚠️ Llama 3.1 chưa trả về nội dung. Bạn hãy kiểm tra lại mục Server Logs trên LM Studio nhé!"
          })
        );
      }
    } catch (error) {
      console.error('Lỗi kết nối LM Studio:', error);
      setMessages((prev) =>
        prev.filter((msg) => msg.id !== 'loading').concat({
          sender: 'ai',
          text: "⚠️ Không kết nối được tới LM Studio (Cổng 1235). Hãy chắc chắn bạn đã bật 'Local API server' và bật 'CORS' trên LM Studio!",
        })
      );
    }
  };

  return (
    <div className="ai-stylist-chatbot">
      {!isOpen ? (
        <button
          type="button"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={`ai-stylist-trigger ${isDragging ? 'ai-stylist-trigger--dragging' : ''}`}
          style={hasDragged ? {
            position: 'fixed',
            left: `${position.x}px`,
            top: `${position.y}px`,
            bottom: 'auto',
            right: 'auto',
          } : undefined}
          aria-label="Mở Aureus AI Stylist tư vấn"
          title="Aureus AI Stylist (Nhấn để chat, giữ kéo để di chuyển)"
        >
          <span className="ai-stylist-trigger__icon">
            <FaRobot />
          </span>
          <span className="ai-stylist-trigger__badge" />
        </button>
      ) : (
        <div className="ai-stylist-window" style={getWindowStyle()}>
          {/* Header */}
          <div className="ai-stylist-header">
            <div className="ai-stylist-header__info">
              <div className="ai-stylist-avatar">
                <FaRobot />
              </div>
              <div className="ai-stylist-header__text">
                <h4>Aureus AI Stylist</h4>
                <div className="ai-stylist-header__status">
                  <span className="ai-stylist-status-dot" />
                  <span>Trợ lý thời trang Aureus</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="ai-stylist-close-btn"
              aria-label="Đóng chat"
            >
              <FaTimes />
            </button>
          </div>

          {/* Quick suggestions */}
          <div className="ai-stylist-suggestions">
            <button
              type="button"
              className="ai-stylist-chip"
              onClick={() => handleSend('Tư vấn size: Cao 1m70 nặng 65kg thì mặc size gì?')}
            >
              📏 Size 1m70 65kg?
            </button>
            <button
              type="button"
              className="ai-stylist-chip"
              onClick={() => handleSend('Áo Polo Đồng Phục HCMUTE có những size nào?')}
            >
              👕 Các size áo có sẵn?
            </button>
          </div>

          {/* Chat Messages */}
          <div className="ai-stylist-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`ai-stylist-msg ${msg.sender === 'user' ? 'ai-stylist-msg--user' : 'ai-stylist-msg--ai'}`}
              >
                <div className={`ai-stylist-bubble ${msg.id === 'loading' ? 'ai-stylist-typing' : ''}`}>
                  {msg.id === 'loading' ? (
                    <>
                      <span className="ai-stylist-dot" />
                      <span className="ai-stylist-dot" />
                      <span className="ai-stylist-dot" />
                    </>
                  ) : (
                    typeof msg.text === 'string' &&
                    msg.text.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="ai-stylist-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Hỏi Aureus AI Stylist về size, dáng người..."
              className="ai-stylist-input"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="ai-stylist-send-btn"
              aria-label="Gửi tin nhắn"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
