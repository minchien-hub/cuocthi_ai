import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './AiStylistChatbot.css';

// Local Smart Fashion AI Knowledge Engine
function getSmartStylistResponse(userText) {
  const text = userText.toLowerCase();

  // Size consultation by height & weight
  const heightMatch = text.match(/(\d{1,3})\s*(m|cm)?/);
  const weightMatch = text.match(/(\d{2,3})\s*(kg|kí|ký)/);

  if (text.includes('size') || text.includes('cỡ') || (heightMatch && weightMatch)) {
    if (text.includes('1m5') || text.includes('150') || text.includes('45kg') || text.includes('48kg')) {
      return 'Dựa trên vóc dáng của bạn, **Size S** là sự lựa chọn chuẩn nhất, vừa vặn tôn dáng và thoải mái di chuyển nhé! Bạn có thể bật thêm tính năng **AI Quét Vóc Dáng** để AI đo tỷ lệ vai chính xác 98%!';
    }
    if (text.includes('1m6') || text.includes('160') || text.includes('50kg') || text.includes('55kg')) {
      return 'Với số đo này, **Size M** sẽ vừa vặn tuyệt đối! Nếu bạn thích mặc phong cách hơi ôm body quyến rũ có thể chọn S, còn nếu thích phom suông thoải mái thì Size M là chuẩn nhất!';
    }
    if (text.includes('1m7') || text.includes('170') || text.includes('60kg') || text.includes('65kg')) {
      return 'Vóc dáng này rất lý tưởng để diện **Size L** chuẩn phom dáng! Độ dài và vòng ngực sẽ vừa vặn hoàn hảo!';
    }
    if (text.includes('70kg') || text.includes('75kg') || text.includes('1m8')) {
      return 'Bạn nên chọn **Size XL** để có độ rộng rãi, thoáng mát và sang trọng nhất khi mặc nhé!';
    }
    return 'Để tư vấn size chuẩn xác nhất, bạn hãy cho mình biết chiều cao và cân nặng (ví dụ: "1m62 50kg"), hoặc bấm nút **"AI Quét Vóc Dáng"** ở trên để camera quét trực tiếp nhé!';
  }

  // Styling and mix-and-match advice
  if (text.includes('phối') || text.includes('mix') || text.includes('mặc gì') || text.includes('kết hợp')) {
    if (text.includes('blazer') || text.includes('áo khoác')) {
      return 'Áo Blazer thanh lịch tại LUXE Fashion cực kỳ cuốn hút khi mix cùng **Quần Ống Rộng Culottes** hoặc khoác ngoài **Đầm Dạ Hội Lụa Satin**. Đừng quên thêm một chiếc **Kính Mát Thời Trang** để hoàn thiện set đồ!';
    }
    if (text.includes('đầm') || text.includes('váy')) {
      return 'Với đầm dạ hội hoặc đầm maxi boho, bạn hãy kết hợp cùng **Vòng Tay Ngọc Trai** và **Túi Xách Da Handmade** để tôn lên vẻ quý phái, thanh lịch!';
    }
    if (text.includes('quần') || text.includes('croptop')) {
      return 'Áo Croptop Dệt Kim phối cùng **Quần Palazzo Vải Chiffon** cạp cao là công thức kéo dài đôi chân cực đỉnh, vừa trẻ trung vừa hiện đại!';
    }
    return 'Gợi ý phối đồ hôm nay: Bạn có thể chọn set **Áo Blazer + Quần Palazzo** cho phong cách công sở sang trọng, hoặc **Đầm Dạ Hội Lụa + Vòng Tay Ngọc Trai** cho những buổi tiệc tối lộng lẫy!';
  }

  // Guidance on AI Camera Body Scanner
  if (text.includes('quét') || text.includes('camera') || text.includes('đo') || text.includes('vóc dáng')) {
    return 'Để AI quét vóc dáng bằng camera:\n1. Bấm nút **"AI Quét Vóc Dáng"** hoặc chọn tab **"Quét Camera AI"**.\n2. Cấp quyền camera và đứng lùi lại cách màn hình 1.5m - 2m.\n3. AI MediaPipe Pose sẽ nhận diện 33 điểm mốc cơ thể và tự động khóa size chuẩn nhất cho bạn!';
  }

  // Default friendly response
  return 'Dạ vâng! LUXE AI Stylist luôn sẵn sàng hỗ trợ bạn. Bạn có thể hỏi mình về: **tư vấn chọn size theo chiều cao/cân nặng**, **cách phối đồ sang trọng**, hoặc **hướng dẫn dùng AI thử đồ trực tiếp** nhé! ❤️';
}

export default function AiStylistChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Xin chào quý khách! Tôi là LUXE AI Stylist. Tôi có thể hỗ trợ bạn chọn size chuẩn xác, gợi ý phối đồ hoặc hướng dẫn trải nghiệm phòng thử đồ AI hôm nay?'
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
    setMessages((prev) => [...prev, { sender: 'ai', text: '...', id: 'loading' }]);

    try {
      // Đổi cổng thành 1235 như trên LM Studio của bạn
      const url = "http://localhost:1235/v1/chat/completions";

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'local-model',
          messages: [
            {
              role: 'system',
              content: 'Bạn là trợ lý AI Stylist thời trang chuyên nghiệp của cửa hàng LUXE Fashion. Hãy tư vấn ngắn gọn, thân thiện, thông minh bằng tiếng Việt.'
            },
            {
              role: 'user',
              content: userMsg
            }
          ],
          temperature: 0.7
        })
      });

      const data = await response.json();

      // Bóc tách kết quả trả về từ LM Studio (chuẩn OpenAI format)
      const aiReply =
        data.choices?.[0]?.message?.content ||
        data.choices?.[0]?.text ||
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        data.output ||
        getSmartStylistResponse(userMsg) ||
        "Xin lỗi, tôi chưa nhận được phản hồi từ hệ thống AI.";

      setMessages((prev) => prev.filter((msg) => msg.id !== 'loading').concat({ sender: 'ai', text: aiReply }));
    } catch (error) {
      console.error('Lỗi gọi API LM Studio:', error);
      const fallback = getSmartStylistResponse(userMsg);
      setMessages((prev) =>
        prev.filter((msg) => msg.id !== 'loading').concat({
          sender: 'ai',
          text: fallback || "Hệ thống AI đang kết nối tới LM Studio, bạn thử gửi lại câu hỏi nhé! ❤️",
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
          <span>AI Stylist Tư Vấn</span>
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
                <h4>LUXE AI Stylist</h4>
                <div className="ai-stylist-header__status">
                  <span className="ai-stylist-status-dot" />
                  <span>Trực tuyến • Tư vấn 24/7</span>
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
              onClick={() => handleSend('Tư vấn size giúp tôi: Cao 1m62 nặng 50kg')}
            >
              📏 Size 1m62 50kg?
            </button>
            <button
              type="button"
              className="ai-stylist-chip"
              onClick={() => handleSend('Gợi ý cách phối đồ đẹp hôm nay')}
            >
              👗 Gợi ý phối đồ
            </button>
            <button
              type="button"
              className="ai-stylist-chip"
              onClick={() => handleSend('Hướng dẫn cách dùng AI quét vóc dáng bằng camera')}
            >
              📐 Cách quét dáng AI?
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
              placeholder="Hỏi AI về size, cách phối đồ..."
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