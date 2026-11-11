import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './AiStylistChatbot.css';

export default function AiStylistChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Xin chào! Tôi là AI Stylist tư vấn Áo Polo Đồng Phục HCMUTE. Áo hiện có đầy đủ 6 size: S, M, L, XL, XXL, XXXL. Bạn hãy cho tôi biết chiều cao & cân nặng để tôi tư vấn chọn size chuẩn nhất nhé!'
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

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
              content: "Bạn là trợ lý AI Stylist thời trang chuyên nghiệp tư vấn Áo Polo Đồng Phục HCMUTE (Since 1962). Cửa hàng hiện cung cấp duy nhất sản phẩm: Áo Polo Đồng Phục HCMUTE với 6 size chuẩn: S, M, L, XL, XXL, XXXL.\nBảng chuẩn size khuyến nghị:\n- Size S: Cao 1m50 - 1m60, Cân nặng 42 - 50kg\n- Size M: Cao 1m60 - 1m68, Cân nặng 50 - 60kg\n- Size L: Cao 1m68 - 1m75, Cân nặng 60 - 70kg\n- Size XL: Cao 1m72 - 1m80, Cân nặng 70 - 78kg\n- Size XXL: Cao 1m75 - 1m85, Cân nặng 78 - 86kg\n- Size XXXL: Cao trên 1m80, Cân nặng trên 86kg (hoặc thích mặc form rộng rãi thoải mái)\nHãy tư vấn ngắn gọn, lịch sự, thân thiện, thông minh bằng tiếng Việt cho sinh viên HCMUTE."
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
          onClick={() => setIsOpen(true)}
          className="ai-stylist-trigger"
          aria-label="Mở AI Stylist tư vấn"
        >
          <span className="ai-stylist-trigger__icon">
            <FaRobot />
          </span>
          <span>AI Stylist</span>
          <span className="ai-stylist-trigger__badge" />
        </button>
      ) : (
        <div className="ai-stylist-window">
          {/* Header */}
          <div className="ai-stylist-header">
            <div className="ai-stylist-header__info">
              <div className="ai-stylist-avatar">
                <FaRobot />
              </div>
              <div className="ai-stylist-header__text">
                <h4>HCMUTE AI Stylist</h4>
                <div className="ai-stylist-header__status">
                  <span className="ai-stylist-status-dot" />
                  <span>Tư vấn size Áo Polo HCMUTE</span>
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
              placeholder="Nhắn tin cho Llama 3.1..."
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
