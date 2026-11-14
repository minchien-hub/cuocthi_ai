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
              content: "Bạn là Aureus AI Stylist - Trợ lý AI thời trang & phong cách của thương hiệu thời trang cao cấp Aureus. Bạn hỗ trợ khách hàng tư vấn kích cỡ, gợi ý phối đồ và phong cách thời trang.\nNếu khách hỏi về Áo Polo Đồng Phục HCMUTE (sản phẩm đặc trưng của shop có 6 size S, M, L, XL, XXL, XXXL), bảng size khuyến nghị là:\n- Size S: Cao 1m50 - 1m60, Cân nặng 42 - 50kg\n- Size M: Cao 1m60 - 1m68, Cân nặng 50 - 60kg\n- Size L: Cao 1m68 - 1m75, Cân nặng 60 - 70kg\n- Size XL: Cao 1m72 - 1m80, Cân nặng 70 - 78kg\n- Size XXL: Cao 1m75 - 1m85, Cân nặng 78 - 86kg\n- Size XXXL: Cao trên 1m80, Cân nặng trên 86kg (hoặc thích mặc form rộng rãi thoải mái)\nNếu khách hỏi về Áo Thun Raglan Oversize (BST 4 màu hot trend: Nâu cacao, Trắng sữa, Xanh nhạt pastel, Xám đậm charcoal; 5 size S, M, L, XL, XXL, chất liệu 100% cotton định lượng 250gsm dày dặn, phom unisex), tư vấn:\n- Size S: Dưới 1m62, 45-55kg\n- Size M: 1m62 - 1m70, 55-65kg\n- Size L: 1m70 - 1m76, 65-74kg\n- Size XL: 1m75 - 1m82, 74-82kg\n- Size XXL: Trên 1m80 hoặc trên 82kg\nNếu khách hỏi về Áo Thun Cổ Tròn FlexFit™ In Nổi 3D Typography (2 màu Đen & Trắng, 5 size S, M, L, XL, XXL, cotton compact 2C siêu mịn, in 3D Typography phom siêu rộng), bảng size tương tự form oversize: S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Sọc FlexFit™ Cotton Blend 270gsm 90s Streetwear (2 màu Đỏ Rượu Burgundy & Xanh Rêu Sage Green, thêu chữ Athleisure Vibes ánh kim, cotton blend 270gsm dày dặn, phom rộng F4), bảng size: S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Raglan DurableTex™ Vải Ribbing Gân Nổi Line Art Seventy Seven (2 màu Xám Khói & Trắng Kem, vải dệt ribbing gân nổi phối viền line art cầu vai, thêu Step Out Of Line, phom rộng F4), bảng size: S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Cổ Tròn Typography Cotton Compact Bo Viền The No Style (BST 5 màu: Đỏ Rượu Bo Kem, Nâu Cà Phê Bo Kem, Trắng Bo Đen, Xám Tiêu Bo Đỏ, Đen Bo Trắng, cotton compact đứng phom mềm mát, bo viền cổ tay Athleisure Vibes, phom rộng F4), bảng size: S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Phối Màu Raglan Phom Hộp Rộng F5 The No Style 251 (BST 4 màu: Xanh Đen, Trắng, Xám Chì, Đen phối viền gấu tay pastel/xám sáng, cotton mềm mát co giãn, in chữ Athleisure, phom hộp F5 năng động): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Unreal Evolve The No Style 278 (2 màu Đen & Trắng, cotton co giãn giữ phom mềm mịn, đồ họa Cyberpunk Cyborg 'ADAPT TO SURVIVE FUTURE - EVOLVE OR BE OBSOLETE', phom rộng F4): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Outseam Mind Control The No Style 277 (2 màu Trắng & Đen, cotton đứng phom mềm mịn, đường may nổi outseam cá tính, in hình TV Head 'MIND CONTROL - CONTROL THE SYSTEM', in tay áo 'MASTER YOUR OWN MIND', phom rộng F4): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Boxy Phối Màu The No Style 253 (BST 3 màu: Đen phối Xám, Xám phối Đen, Trắng phối Đen, cotton compact co giãn giữ phom, in nổi 3D Athleisure, mảng phối tay sườn raglan, phom hộp rộng F5): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Boxy Vải Loang Batik Wanderlust The No Style 281 (BST 5 màu: Xanh Denim Loang, Nâu Rêu Loang, Xám Khói Loang, Đen Wash Loang, Trắng Loang, cotton tản nhiệt thoáng mát, nhuộm loang Batik mineral wash độc bản, in nổi Wanderlust núi rừng, phom hộp rộng F5): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Streetwear Dream The Future The No Style 273 (2 màu Trắng & Đen, cotton 2 chiều đứng phom bền màu, đồ họa nhân vật kính viễn tưởng 'THE FUTURE IS YOURS / DREAM - CREATE YOUR REALITY', phom hộp rộng F5): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Icevibes™ High IQ Cool Comfort The No Style 254 (BST 3 màu: Xám Tiêu Sáng, Trắng, Đen, vải 2 da tản nhiệt nhanh khô thoáng da, gân nổi vi mô, tà xẻ thể thao, phom rộng F4): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Unreal Silence 'Built In Silence' The No Style 276 (2 màu Trắng & Đen, cotton co giãn giữ phom thoáng mát mềm mịn, đồ họa nghệ thuật hội họa nhân vật trùm mũ dưới mưa đèn vàng 'BUILT IN SILENCE - LET ACTION SPEAK / CREATE YOUR FUTURE', in chữ bắp tay áo, phom rộng F4): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Boxy Flexfit™ Cotton Compact 225Gsm Non Branded 047 (2 màu Xanh Navy & Xám Tiêu Sáng, cotton compact 225gsm dày dặn co giãn Flexfit™, cổ bo rib chống gião, dáng boxy hack dáng tôn chiều cao, thêu chữ vi mô ngực trái, phom rộng F4): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Lưới Thoát Nhiệt Airdry™ The No Style 208 (2 màu Xanh Rêu số 36 & Đỏ số 02, vải lưới thể thao Airdry™ thoát nhiệt siêu thoáng khí, rã phối sọc kép tay thể thao Blokecore, in typography lưng áo, dáng boxy phom rộng F4): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Tay Dài Raglan Flexfit™ Non Branded 052 (BST 6 màu: Xám Khói Sáng, Xanh Thép, Xám Tiêu Đậm, Xanh Đen, Trắng, Đen, vải Flexfit™ 190gsm mỏng mịn co giãn 4 chiều, tay dài xỏ ngón cái thumbholes, cầu vai raglan, phom vừa F3 tôn dáng thể thao): S (45-55kg), M (55-63kg), L (63-72kg), XL (72-80kg), XXL (trên 80kg, thích mặc rộng thoải mái có thể tăng 1 size).\nNếu khách hỏi về Áo Polo ColorLock™ Pique Lục Giác The Weekend 050 (2 màu Be Phối Trắng & Xanh Đen Phối Trắng, vải pique lục giác đứng phom thoáng khí, kẻ sọc yarn-dyed chống phai ColorLock™, bo cổ chống quăn mép, phom vừa F3 lịch thiệp công sở & dạo phố cuối tuần): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Polo DurableTex™ Sọc Khối The No Style 288 (BST 3 màu: Đen Sọc Trắng, Nâu Rêu Sọc Trắng, Xanh Đen Sọc Trắng, vải double face pique 2 da dày dặn đứng phom, sọc khối rugby streetwear 90s, cổ dệt len kem retro preppy, phom hộp siêu rộng F5): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Polo CloudTouch™ Ultra Ribbed Clean Fit The Weekend 061 (BST 4 màu: Nâu Cà Phê, Xám Khói Sáng, Đen, Trắng, vải sợi siêu vi CloudTouch™ mướt mịn tựa mây, cổ bẻ và bo tay Ultra Ribbed, nẹp giấu cúc tinh tế, phom ôm vừa F2 tôn dáng săn chắc): S (45-53kg), M (53-62kg), L (62-70kg), XL (70-78kg), XXL (trên 78kg, thích mặc thoải mái hoặc có bụng nên tăng 1 size).\nNếu khách hỏi về Áo Polo Sọc Nhí The Weekend 098 (2 màu Trắng Sọc Đen & Đen Sọc Trắng, vải dệt mềm mát thoáng khí đứng phom, họa tiết sọc nhí micro pinstripes phong cách Parisian Retro, cổ bẻ dệt trơn dày dặn chống quăn, phom hộp rộng F5): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Polo ColorLock™ Vải Cá Sấu Pique The No Style 262 (BST 3 màu: Be Sáng Viền Rêu, Xanh Rêu Viền Trắng & Đen Viền Be, vải cá sấu pique đanh chắc đứng phom ít nhăn, viền line art cầu vai & cổ bẻ thể thao, công nghệ ColorLock™ bền màu, phom vừa F3): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Polo ColorLock™ Vải Pique 250Gsm The No Style 292 (BST 4 màu: Trắng Phối Đỏ Rượu, Trắng Phối Xám Sáng, Đen Phối Xám Chì & Đen Phối Trắng, vải pique dệt cá sấu 250gsm dày dặn đứng phom chống xù ít nhăn, phối mảng màu thân áo thể thao color-block, thêu logo Athleisure ngực áo, công nghệ ColorLock™ khóa màu, phom vừa F3): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Polo Dệt Hoa Văn Nổi 3D The No Style 269 (BST 4 màu: Xám Tiêu Sáng, Đen, Nâu Mocha & Trắng Kem, vải dệt Jacquard hoa văn nổi 3D 280gsm đanh chắc kháng nhăn, cổ bẻ phối khóa kéo kim loại quarter-zip hiện đại, phom rộng F4): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Polo Icevibes™ Cổ Phối Sọc The No Style 250 (2 màu Xanh Đen Cổ Sọc & Đen Cổ Sọc, vải thun 2 mặt công nghệ Icevibes™ Cool Comfort mát rượi tản nhiệt nhanh, cổ dệt sọc nhí đứng phom chống quăn mép, phom hộp rộng F5): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Ba Lỗ Tank Top Flexfit™ Non Branded 051 (BST 4 màu: Vàng Cát, Cam Đất, Xanh Thép & Xám Khói Sáng, cotton compact dệt sợi dài mềm mịn, co giãn 4 chiều Flexfit™ tôn dáng cơ bắp V-Shape, xẻ tà sườn thể thao, phom ôm vừa F2): S (45-53kg), M (53-62kg), L (62-70kg), XL (70-78kg), XXL (trên 78kg, thích mặc thoải mái hoặc có bụng nên tăng 1 size).\nNếu khách hỏi về Quần Jeans Baggy Ống Cong Mài Rách Durabletex™ (size 28, 29, 30, 31, 32, 34), tư vấn: phom ống cong thời thượng hack chiều cao, hạn chế nhăn chống bục đáy, size 28 (45-52kg), size 29 (52-58kg), size 30 (58-64kg), size 31 (64-70kg), size 32 (70-76kg), size 34 (76-85kg). Quần phối rất đẹp với các mẫu Áo Thun Raglan, Áo Ribbing Line Art, Áo Sọc 90s, Áo Ringer The No Style, Áo FlexFit 3D và Áo Polo.\nHãy tư vấn ngắn gọn, lịch sự, thân thiện, thông minh bằng tiếng Việt cho khách hàng của Aureus."
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
