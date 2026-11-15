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
              content: "Bạn là Aureus AI Stylist - Trợ lý AI thời trang & phong cách của thương hiệu thời trang cao cấp Aureus. Bạn hỗ trợ khách hàng tư vấn kích cỡ, gợi ý phối đồ và phong cách thời trang.\nNếu khách hỏi về Áo Polo Đồng Phục HCMUTE (sản phẩm đặc trưng của shop có 6 size S, M, L, XL, XXL, XXXL), bảng size khuyến nghị là:\n- Size S: Cao 1m50 - 1m60, Cân nặng 42 - 50kg\n- Size M: Cao 1m60 - 1m68, Cân nặng 50 - 60kg\n- Size L: Cao 1m68 - 1m75, Cân nặng 60 - 70kg\n- Size XL: Cao 1m72 - 1m80, Cân nặng 70 - 78kg\n- Size XXL: Cao 1m75 - 1m85, Cân nặng 78 - 86kg\n- Size XXXL: Cao trên 1m80, Cân nặng trên 86kg (hoặc thích mặc form rộng rãi thoải mái)\nNếu khách hỏi về Áo Thun Raglan Oversize (BST 4 màu hot trend: Nâu cacao, Trắng sữa, Xanh nhạt pastel, Xám đậm charcoal; 5 size S, M, L, XL, XXL, chất liệu 100% cotton định lượng 250gsm dày dặn, phom unisex), tư vấn:\n- Size S: Dưới 1m62, 45-55kg\n- Size M: 1m62 - 1m70, 55-65kg\n- Size L: 1m70 - 1m76, 65-74kg\n- Size XL: 1m75 - 1m82, 74-82kg\n- Size XXL: Trên 1m80 hoặc trên 82kg\nNếu khách hỏi về Áo Thun Cổ Tròn FlexFit™ In Nổi 3D Typography (2 màu Đen & Trắng, 5 size S, M, L, XL, XXL, cotton compact 2C siêu mịn, in 3D Typography phom siêu rộng), bảng size tương tự form oversize: S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Sọc FlexFit™ Cotton Blend 270gsm 90s Streetwear (2 màu Đỏ Rượu Burgundy & Xanh Rêu Sage Green, thêu chữ Athleisure Vibes ánh kim, cotton blend 270gsm dày dặn, phom rộng F4), bảng size: S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Raglan DurableTex™ Vải Ribbing Gân Nổi Line Art Seventy Seven (2 màu Xám Khói & Trắng Kem, vải dệt ribbing gân nổi phối viền line art cầu vai, thêu Step Out Of Line, phom rộng F4), bảng size: S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Cổ Tròn Typography Cotton Compact Bo Viền The No Style (BST 5 màu: Đỏ Rượu Bo Kem, Nâu Cà Phê Bo Kem, Trắng Bo Đen, Xám Tiêu Bo Đỏ, Đen Bo Trắng, cotton compact đứng phom mềm mát, bo viền cổ tay Athleisure Vibes, phom rộng F4), bảng size: S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Phối Màu Raglan Phom Hộp Rộng F5 The No Style 251 (BST 4 màu: Xanh Đen, Trắng, Xám Chì, Đen phối viền gấu tay pastel/xám sáng, cotton mềm mát co giãn, in chữ Athleisure, phom hộp F5 năng động): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Unreal Evolve The No Style 278 (2 màu Đen & Trắng, cotton co giãn giữ phom mềm mịn, đồ họa Cyberpunk Cyborg 'ADAPT TO SURVIVE FUTURE - EVOLVE OR BE OBSOLETE', phom rộng F4): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Outseam Mind Control The No Style 277 (2 màu Trắng & Đen, cotton đứng phom mềm mịn, đường may nổi outseam cá tính, in hình TV Head 'MIND CONTROL - CONTROL THE SYSTEM', in tay áo 'MASTER YOUR OWN MIND', phom rộng F4): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Boxy Phối Màu The No Style 253 (BST 3 màu: Đen phối Xám, Xám phối Đen, Trắng phối Đen, cotton compact co giãn giữ phom, in nổi 3D Athleisure, mảng phối tay sườn raglan, phom hộp rộng F5): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Boxy Vải Loang Batik Wanderlust The No Style 281 (BST 5 màu: Xanh Denim Loang, Nâu Rêu Loang, Xám Khói Loang, Đen Wash Loang, Trắng Loang, cotton tản nhiệt thoáng mát, nhuộm loang Batik mineral wash độc bản, in nổi Wanderlust núi rừng, phom hộp rộng F5): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Streetwear Dream The Future The No Style 273 (2 màu Trắng & Đen, cotton 2 chiều đứng phom bền màu, đồ họa nhân vật kính viễn tưởng 'THE FUTURE IS YOURS / DREAM - CREATE YOUR REALITY', phom hộp rộng F5): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Icevibes™ High IQ Cool Comfort The No Style 254 (BST 3 màu: Xám Tiêu Sáng, Trắng, Đen, vải 2 da tản nhiệt nhanh khô thoáng da, gân nổi vi mô, tà xẻ thể thao, phom rộng F4): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Unreal Silence 'Built In Silence' The No Style 276 (2 màu Trắng & Đen, cotton co giãn giữ phom thoáng mát mềm mịn, đồ họa nghệ thuật hội họa nhân vật trùm mũ dưới mưa đèn vàng 'BUILT IN SILENCE - LET ACTION SPEAK / CREATE YOUR FUTURE', in chữ bắp tay áo, phom rộng F4): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Boxy Flexfit™ Cotton Compact 225Gsm Non Branded 047 (2 màu Xanh Navy & Xám Tiêu Sáng, cotton compact 225gsm dày dặn co giãn Flexfit™, cổ bo rib chống gião, dáng boxy hack dáng tôn chiều cao, thêu chữ vi mô ngực trái, phom rộng F4): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Lưới Thoát Nhiệt Airdry™ The No Style 208 (2 màu Xanh Rêu số 36 & Đỏ số 02, vải lưới thể thao Airdry™ thoát nhiệt siêu thoáng khí, rã phối sọc kép tay thể thao Blokecore, in typography lưng áo, dáng boxy phom rộng F4): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Tay Dài Raglan Flexfit™ Non Branded 052 (BST 6 màu: Xám Khói Sáng, Xanh Thép, Xám Tiêu Đậm, Xanh Đen, Trắng, Đen, vải Flexfit™ 190gsm mỏng mịn co giãn 4 chiều, tay dài xỏ ngón cái thumbholes, cầu vai raglan, phom vừa F3 tôn dáng thể thao): S (45-55kg), M (55-63kg), L (63-72kg), XL (72-80kg), XXL (trên 80kg, thích mặc rộng thoải mái có thể tăng 1 size).\nNếu khách hỏi về Áo Polo ColorLock™ Pique Lục Giác The Weekend 050 (2 màu Be Phối Trắng & Xanh Đen Phối Trắng, vải pique lục giác đứng phom thoáng khí, kẻ sọc yarn-dyed chống phai ColorLock™, bo cổ chống quăn mép, phom vừa F3 lịch thiệp công sở & dạo phố cuối tuần): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Polo DurableTex™ Sọc Khối The No Style 288 (BST 3 màu: Đen Sọc Trắng, Nâu Rêu Sọc Trắng, Xanh Đen Sọc Trắng, vải double face pique 2 da dày dặn đứng phom, sọc khối rugby streetwear 90s, cổ dệt len kem retro preppy, phom hộp siêu rộng F5): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Polo CloudTouch™ Ultra Ribbed Clean Fit The Weekend 061 (BST 4 màu: Nâu Cà Phê, Xám Khói Sáng, Đen, Trắng, vải sợi siêu vi CloudTouch™ mướt mịn tựa mây, cổ bẻ và bo tay Ultra Ribbed, nẹp giấu cúc tinh tế, phom ôm vừa F2 tôn dáng săn chắc): S (45-53kg), M (53-62kg), L (62-70kg), XL (70-78kg), XXL (trên 78kg, thích mặc thoải mái hoặc có bụng nên tăng 1 size).\nNếu khách hỏi về Áo Polo Sọc Nhí The Weekend 098 (2 màu Trắng Sọc Đen & Đen Sọc Trắng, vải dệt mềm mát thoáng khí đứng phom, họa tiết sọc nhí micro pinstripes phong cách Parisian Retro, cổ bẻ dệt trơn dày dặn chống quăn, phom hộp rộng F5): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Polo ColorLock™ Vải Cá Sấu Pique The No Style 262 (BST 3 màu: Be Sáng Viền Rêu, Xanh Rêu Viền Trắng & Đen Viền Be, vải cá sấu pique đanh chắc đứng phom ít nhăn, viền line art cầu vai & cổ bẻ thể thao, công nghệ ColorLock™ bền màu, phom vừa F3): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Polo ColorLock™ Vải Pique 250Gsm The No Style 292 (BST 4 màu: Trắng Phối Đỏ Rượu, Trắng Phối Xám Sáng, Đen Phối Xám Chì & Đen Phối Trắng, vải pique dệt cá sấu 250gsm dày dặn đứng phom chống xù ít nhăn, phối mảng màu thân áo thể thao color-block, thêu logo Athleisure ngực áo, công nghệ ColorLock™ khóa màu, phom vừa F3): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Polo Dệt Hoa Văn Nổi 3D The No Style 269 (BST 4 màu: Xám Tiêu Sáng, Đen, Nâu Mocha & Trắng Kem, vải dệt Jacquard hoa văn nổi 3D 280gsm đanh chắc kháng nhăn, cổ bẻ phối khóa kéo kim loại quarter-zip hiện đại, phom rộng F4): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Polo Icevibes™ Cổ Phối Sọc The No Style 250 (2 màu Xanh Đen Cổ Sọc & Đen Cổ Sọc, vải thun 2 mặt công nghệ Icevibes™ Cool Comfort mát rượi tản nhiệt nhanh, cổ dệt sọc nhí đứng phom chống quăn mép, phom hộp rộng F5): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Thun Ba Lỗ Tank Top Flexfit™ Non Branded 051 (BST 6 màu: Vàng Cát, Cam Đất, Xanh Thép, Xám Khói Sáng, Trắng & Đen, cotton compact dệt sợi dài mềm mịn, co giãn 4 chiều Flexfit™ tôn dáng cơ bắp V-Shape, xẻ tà sườn thể thao, phom ôm vừa F2): S (45-53kg), M (53-62kg), L (62-70kg), XL (70-78kg), XXL (trên 78kg, thích mặc thoải mái hoặc có bụng nên tăng 1 size).\nNếu khách hỏi về Áo Thun Dệt Kim FlexFit™ The Weekend 081 (BST 4 màu: Đen, Be Yến Mạch, Trắng & Xám Tiêu, sợi dệt linen rayon mềm rũ mát da, dệt kim nguyên khối seamless hạn chế đường may cọ xát, chi tiết V-insert cổ áo vintage, phom vừa F3 phong cách Quiet Luxury & Resort Wear): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Sơ Mi Tay Ngắn CloudTouch™ Vải Jean Waffle Wash Bụi Bặm The Original 061 (2 màu Xanh Đậm & Xanh Nhạt, vải dệt jean waffle tổ ong kết hợp sợi CloudTouch™ mềm êm thoáng khí không thô ráp, wash bụi bặm retro vintage, túi ốp ngực vuông tiện lợi, phom hộp rộng F5): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Sơ Mi Tay Ngắn EasyCare™ Vải Nhung Tăm Cổ Phối Nẹp Lai Nút Bấm Seventy Seven 065 (BST 4 màu: Be Sáng Cổ Nâu, Nâu Cà Phê Cổ Đen, Đen Cổ Xám & Xanh Than Cổ Đen, vải nhung tăm micro corduroy ứng dụng công nghệ EasyCare™ hạn chế nhăn nhàu dễ ủi, cổ phối màu tương phản retro, nẹp lai nút bấm snap kim loại bọc thời thượng, phom hộp rộng F5): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Sơ Mi Tay Ngắn Vải Thun Icevibes™ 270Gsm The Minimalist 026 (BST 4 màu: Xám Tiêu Sáng, Xám Chì, Đen & Trắng, vải thun đanh dệt 2 mặt công nghệ Icevibes™ 270gsm dày dặn đứng phom, co giãn 4 chiều mềm mịn mát lạnh tản nhiệt nhanh, cúc nút bấm snap kim loại bọc thời thượng, túi ốp ngực vuông, phom hộp rộng F5): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Sơ Mi Tay Ngắn Airdry™ 145Gsm Vải Dệt Rổ Sọc Mảnh The Weekend 067 (BST 4 màu: Xanh Đen Sọc Trắng, Đen Sọc Trắng, Trắng Sọc Đen & Xanh Nhạt Sọc Trắng, vải dệt rổ basketweave Airdry™ 145gsm siêu nhẹ thoáng khí, sọc pinstripes dọc hack dáng thon gọn tôn chiều cao, túi hộp đôi 2 bên ngực may sọc ngang đối xứng độc đáo, phom hộp rộng F5): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Sơ Mi Tay Ngắn Airdry™ Cổ Trụ The Weekend 056 (BST 4 màu: Trắng, Be Yến Mạch, Xanh Đen & Đen, vải dệt xước slub hiệu ứng linen mộc mạc cao cấp, công nghệ Airdry™ siêu thoáng khí chống bết dính mồ hôi, cổ trụ mandarin thanh lịch, túi ốp ngực, phom rộng F4 phong cách Quiet Luxury & Resort Wear): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Sơ Mi Tay Dài Công Sở Non Branded 060 (Màu Trắng, chất vải mềm đứng phom ít nhăn dễ ủi EasyCare™ Wrinkle-Free, cổ bẻ ve nhọn Classic Point Collar phối viền lót xám thanh lịch, xếp ly lưng đôi cử động thoải mái, phom vừa F3 công sở lịch lãm): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Sơ Mi Tay Dài Easycare™ Oxford The No Style 266 (BST 4 màu: Đen, Xám Tiêu, Xanh Nhạt & Trắng, vải Oxford dệt đanh dày dặn thoáng mát ít nhăn Easycare™, phối lót cổ sọc tinh tế, cúc nút vân sừng hổ phách sang trọng, phom vừa F3 thanh lịch): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Áo Sơ Mi Tay Dài Công Sở Airdry™ Seventy Seven 052 (BST 4 màu: Xanh Nhạt, Xanh Đen, Trắng & Đen, vải sợi dệt Airdry™ siêu nhẹ co giãn 4 chiều thoát nhiệt êm mát da, chiết eo tôn dáng, phom ôm vừa F2): S (45-53kg), M (53-62kg), L (62-70kg), XL (70-78kg), XXL (trên 78kg, thích mặc thoải mái hoặc có bụng nên tăng 1 size).\nNếu khách hỏi về Áo Sơ Mi Tay Dài Công Sở Airdry™ Sọc Chìm The Minimalist 017 (BST 5 màu: Xanh Nhạt, Xanh Dương, Xanh Băng, Xám Sáng & Tím Nhạt, dệt họa tiết sọc chìm tone-on-tone pinstripe thanh lịch hack dáng cao ráo, vải công nghệ Airdry™ siêu nhẹ thoáng khí ít nhăn, túi ốp ngực tiện lợi, phom vừa F3 công sở): S (45-55kg), M (55-65kg), L (65-74kg), XL (74-82kg), XXL (trên 82kg).\nNếu khách hỏi về Quần Jeans Baggy Ống Cong Mài Rách Durabletex™ Phủ Đồng The Original 072 (Màu Xanh Wash Vintage, công nghệ sợi Durabletex™ phủ đồng chống bục đáy hạn chế nhăn, phom siêu rộng F5 ống cong curved silhouette hack chiều cao, mài rách thủ công retro vintage, size 28, 29, 30, 31, 32, 34), tư vấn: phom ống cong thời thượng hack chiều cao, hạn chế nhăn chống bục đáy, size 28 (45-52kg), size 29 (52-58kg), size 30 (58-64kg), size 31 (64-70kg), size 32 (70-76kg), size 34 (76-85kg). Quần phối rất đẹp với các mẫu Áo Thun Raglan, Áo Ribbing Line Art, Áo Sọc 90s, Áo Ringer The No Style, Áo FlexFit 3D, áo polo boxy hoặc hoodie streetwear.\nNếu khách hỏi về Quần Jeans Ôm Vừa Slim Fit Denim 12Oz The Original 028 (Màu Xanh Nhạt Wash, vải denim 12Oz co giãn bền bỉ, công nghệ chống bùng gối Anti-Knee Bagging, tag da cạp lưng sang trọng, phom ôm vừa Slim Fit F2 tôn dáng): tư vấn size 29 (48-55kg), size 30 (55-62kg), size 31 (62-68kg), size 32 (68-75kg), size 34 (75-82kg), size 36 (trên 82kg). Quần phối rất đẹp với áo sơ mi công sở (The Minimalist 017, Seventy Seven 052, The No Style 266), áo polo hoặc áo thun casual.\nNếu khách hỏi về Quần Jeans Ống Suông Mài Nhẹ Durabletex™ 11.8Oz The Original 064 (BST 4 màu: Xanh Nhạt Wash, Xanh Đậm Indigo, Xám Khói Wash & Đen, vải denim Durabletex™ 11.8Oz mềm mát đứng phom, mài nhẹ phong cách Retro Streetwear, phom rộng ống suông F4 hack chiều cao): tư vấn size 28 (45-52kg), size 29 (52-58kg), size 30 (58-64kg), size 31 (64-70kg), size 32 (70-76kg), size 34 (76-85kg). Phối cực đẹp với áo thun oversize, áo sơ mi phom hộp hoặc áo polo boxy.\nNếu khách hỏi về Quần Jeans Ống Rộng Loose Fit Double Knee Durabletex™ 310Gsm Multi Color Jean 012 (BST 4 màu: Xanh Xô Thơm, Nâu Khaki, Nâu Mocha & Xám Xi Măng, chất vải denim Durabletex™ 310Gsm chịu lực bền bỉ, gối đôi Double Knee tán đinh tán phong cách Workwear/Skatewear, quai búa tiện dụng, phom rộng F4 hack chiều cao): tư vấn size 28 (45-52kg), size 29 (52-58kg), size 30 (58-64kg), size 31 (64-70kg), size 32 (70-76kg), size 34 (76-85kg). Phối cực đẹp với áo thun boxy, áo hoodie streetwear, áo polo hoặc sơ mi khoác ngoài.\nNếu khách hỏi về Quần Jeans Jogger Lưng Thun Mài Nhẹ Durabletex™ Co Giãn The Original 102 (2 màu Đen Wash & Xanh Nhạt Wash, denim Durabletex™ co giãn 4 chiều mềm mại đứng phom, cạp chun dây rút êm ái, gấu bo chun jogger năng động, phom vừa F3 tôn dáng): tư vấn size 29 (48-55kg), size 30 (55-62kg), size 31 (62-68kg), size 32 (68-75kg), size 34 (75-82kg), size 36 (trên 82kg). Quần phối cực đẹp với áo thun oversize, hoodie, áo polo hoặc sneaker thể thao năng động.\nNếu khách hỏi về Quần Jeans Jogger Lưng Thun Durabletex™ Phom Rộng F4 The Original 101 (2 màu Xanh Nhạt Wash & Xanh Vừa Wash, vải denim Durabletex™ thoáng mát giữ dáng, cạp lưng thun dây rút êm ái, ống suông thả tự nhiên phom rộng F4 hack chiều cao che khuyết điểm chân): tư vấn size 28 (45-52kg), size 29 (52-58kg), size 30 (58-64kg), size 31 (64-70kg), size 32 (70-76kg), size 34 (76-85kg). Phối cực đẹp với áo thun oversize, áo polo phom hộp, sơ mi cộc tay hoặc sneaker phong cách dạo phố.\nNếu khách hỏi về Quần Jeans Ống Loe Regular Fit Durabletex™ The Original 076 (2 màu Xanh Đậm Indigo & Xanh Nhạt Wash, denim Durabletex™ đứng phom co giãn nhẹ, phom vừa F3 ống loe bootcut/flare hack chiều dài chân tôn dáng cực đỉnh): tư vấn size 28 (45-52kg), size 29 (52-58kg), size 30 (58-64kg), size 31 (64-70kg), size 32 (70-76kg), size 34 (76-85kg). Phối cực đẹp với áo thun ôm fit, sơ mi Cuban, áo polo dệt kim, áo blazer hoặc boots/sneaker phong cách lãng tử bụi bặm.\nNếu khách hỏi về Quần Jeans Baggy Ống Cong 3D Durabletex™ Đáy Hạ Phom Siêu Rộng F5 The Original 053 (2 màu Xanh Đậm Indigo & Xanh Vừa Wash, vải denim Durabletex™ cao cấp dày dặn êm mát, thiết kế đáy hạ giải phóng đôi chân kết hợp ống cong 3D phồng nhẹ hack chiều cao, phom siêu rộng F5 cực ngầu): tư vấn size 28 (45-52kg), size 29 (52-58kg), size 30 (58-64kg), size 31 (64-70kg), size 32 (70-76kg), size 34 (76-85kg). Phối cực đẹp với áo thun oversize streetwear, hoodie boxy, sơ mi flannel hoặc giày chunky sneaker.\nNếu khách hỏi về Quần Dài Kaki Chinos Vải Twill 245Gsm Non Branded 032 (BST 6 màu: Đen, Be Sáng, Vàng Khaki, Vàng Cát, Xanh Rêu Khaki & Xám Sáng, chất vải kaki cotton dệt chéo twill 245gsm dày dặn đanh mịn co giãn thoải mái, phom ôm vừa F2 thanh lịch đứng dáng): tư vấn size 29 (48-55kg), size 30 (55-62kg), size 31 (62-68kg), size 32 (68-75kg), size 34 (75-82kg), size 36 (trên 82kg). Quần phối cực đẹp chuẩn phong cách Smart Casual cùng áo sơ mi công sở (The Minimalist 017, Seventy Seven 052, The No Style 266, Non Branded 060), áo polo hoặc áo thun casual.\nNếu khách hỏi về Quần Dài Kaki Túi Hộp Cargo Durabletex™ 300Gsm The Worker 009 (2 màu Xanh Rêu Đậm & Đen, chất vải kaki cotton Durabletex™ 300gsm dày dặn đanh mịn co giãn nhẹ, rập gối xếp ly 3D công thái học chịu lực, túi hộp cargo đa dụng, phom vừa F3 tôn dáng): tư vấn size 29 (48-55kg), size 30 (55-62kg), size 31 (62-68kg), size 32 (68-75kg), size 34 (75-82kg), size 36 (trên 82kg). Quần phối cực chất chuẩn phong cách Gorpcore, Utility & Streetwear cùng áo thun oversize, hoodie boxy, sơ mi flannel hoặc giày chunky sneaker/boots.\nNếu khách hỏi về Quần Dài Jogger Thun Vải Bird Eye Mesh Non Branded 007 (BST 4 màu: Xanh Rêu, Trắng Kem, Nâu Mocha & Xanh Rêu Đen, chất vải thun dệt mắt chim Bird Eye Mesh siêu thoáng khí tản nhiệt nhanh co giãn 4 chiều mềm mát nhẹ tênh, nhiều túi tiện lợi, cạp chun dây rút và bo gấu thun năng động, phom vừa F3): tư vấn size S (dưới 1m65, 45-55kg), size M (1m62-1m72, 55-65kg), size L (1m68-1m78, 65-74kg), size XL (1m74-1m82, 74-82kg), size XXL (trên 1m80 hoặc trên 82kg). Quần phối cực chuẩn phong cách Athleisure, Sporty & Daily Casual cùng áo thun thể thao, áo ba lỗ tank top (Non Branded 051), áo polo pique hoặc áo khoác gió running.\nNếu khách hỏi về Quần Dài Jogger Thể Thao Double Face 200Gsm The Beginner 007 (BST 3 màu: Xanh Thép, Xám Sáng & Đen, chất vải thể thao 2 mặt Double Face 200gsm siêu nhẹ nhanh khô tản nhiệt co giãn 4 chiều, thiết kế rã đáy kim cương mở rộng góc xoạc, đai vắt khăn thể thao tiện lợi và viền line sườn tôn dáng chân, phom vừa F3): tư vấn size S (dưới 1m65, 45-55kg), size M (1m62-1m72, 55-65kg), size L (1m68-1m78, 65-74kg), size XL (1m74-1m82, 74-82kg), size XXL (trên 1m80 hoặc trên 82kg). Quần cực kỳ lý tưởng cho tập gym, chạy bộ, thể thao ngoài trời hoặc athleisure hàng ngày, phối hoàn hảo cùng áo thun tank top, áo polo thể thao hay áo gió.\nNếu khách hỏi về Quần Dài Jogger Mặc Nhà Airdry™ The Homebody 006 (2 màu Xám Tiêu Sáng & Đen, chất vải thun dệt công nghệ Airdry™ siêu nhẹ thoáng khí tản nhiệt nhanh mềm mát như không mặc gì, đáy hạ Relaxed Rise thông minh chống gò bó, cạp chun êm ái, phom rộng F4): tư vấn size S (dưới 1m65, 45-55kg), size M (1m62-1m72, 55-65kg), size L (1m68-1m78, 65-74kg), size XL (1m74-1m82, 74-82kg), size XXL (trên 1m80 hoặc trên 82kg). Quần cực kỳ thoải mái để mặc nhà, ngủ, làm việc từ xa WFH hay dạo phố thư giãn, phối ăn ý cùng áo thun trơn, áo tank top hoặc áo thun tay dài.\nNếu khách hỏi về Quần Dài Jogger Ống Rộng Vải Nhung Corduroy Durabletex™ Seventy Seven 033 (2 màu Xanh Rêu Đậm & Nâu Cacao, vải nhung tăm tăm nhuyễn Corduroy siêu nhẹ óng ả tản nhiệt ít nhăn, thêu logo 7.7 đùi trước, phối viền sọc kem hai bên sườn hack dài chân, cạp thun dây rút kem vintage, phom rộng F4): tư vấn size S (dưới 1m65, 45-55kg), size M (1m62-1m72, 55-65kg), size L (1m68-1m78, 65-74kg), size XL (1m74-1m82, 74-82kg), size XXL (trên 1m80 hoặc trên 82kg). Quần phối cực đẹp chuẩn phong cách Retro Athleisure, Vintage Streetwear cùng áo thun oversize, áo sơ mi nhung tăm (Seventy Seven 065), hoodie boxy hay giày chunky sneaker.\nNếu khách hỏi về Quần Jogger Thun Scuba Cloudtouch™ Non Branded 053 (2 màu Xám Sáng & Xám Chì, vải thun Scuba công nghệ Cloudtouch™ siêu mịn màng mềm xốp nhẹ tênh ít nhăn đứng phom, kỹ thuật cắt rập 3D công thái học tôn dáng, túi hộp tiện lợi bên đùi trái, túi zip mổ hông sau an toàn, bo gấu jogger gọn gàng, phom vừa F3): tư vấn size S (dưới 1m65, 45-55kg), size M (1m62-1m72, 55-65kg), size L (1m68-1m78, 65-74kg), size XL (1m74-1m82, 74-82kg), size XXL (trên 1m80 hoặc trên 82kg). Quần phối cực đẹp chuẩn phong cách Modern Athleisure & Techwear cùng áo thun ôm hoặc oversize, hoodie, áo polo dệt kim hay áo khoác gió năng động.\nNếu khách hỏi về Quần Dài Lưng Thun Ống Siêu Rộng Vải Đầm Tay The No Style 246 (BST 3 màu: Đen, Trắng & Xám Tiêu Sáng, chất vải dệt đầm tay rũ mềm thoáng mát ít nhăn, kỹ thuật xếp nếp ly chìm trước bụng tạo hiệu ứng phẳng bụng giấu eo hoàn hảo, cạp lưng thun co giãn êm ái, túi sau vuông tiện lợi, phom siêu rộng F5 phóng khoáng chuẩn phong cách Avant-Garde / City Boy Nhật Bản): tư vấn size S (dưới 1m65, 45-55kg), size M (1m62-1m72, 55-65kg), size L (1m68-1m78, 65-74kg), size XL (1m74-1m82, 74-82kg), size XXL (trên 1m80 hoặc trên 82kg). Quần phối cực phong cách cùng áo thun oversize, áo sơ mi phom hộp F5, áo khoác blazer rộng, áo thun ba lỗ hay sandal streetwear.\nNếu khách hỏi về Quần Dài Lưng Thun Ống Cong Viền Line Cotton Dệt Kép The No Style 215 (2 màu Đen Phối Cạp Xám & Xám Tiêu Phối Cạp Đen, vải cotton dệt kép Interlock dày dặn đứng phom chống bai dão, rập ống cong 3D Curved Balloon hack chân cong, cạp chun phối màu thể thao color-block kèm dây rút, viền line sườn tôn chiều cao, 2 túi ốp lớn phía trước, phom siêu rộng F5): tư vấn size S (dưới 1m65, 45-55kg), size M (1m62-1m72, 55-65kg), size L (1m68-1m78, 65-74kg), size XL (1m74-1m82, 74-82kg), size XXL (trên 1m80 hoặc trên 82kg). Quần cực kỳ bắt mắt chuẩn phong cách Y2K, Gorpcore & Avant-Garde Streetwear, phối chuẩn bài cùng áo thun oversize, hoodie boxy, áo polo dệt kim hay sneaker chunky.\nNếu khách hỏi về Quần Tây Công Sở Casual Easycare™ Non Branded 030 (BST 5 màu: Đen, Be Sáng, Vàng Khaki, Xanh Navy & Xám, chất vải Twill dệt chéo cao cấp tích hợp công nghệ Easycare™ chống nhăn nhàu vượt trội, co giãn 4 chiều linh hoạt và giữ nếp ly ủi sắc nét đứng dáng suốt ngày dài, cạp đỉa thắt lưng may đo Sartorial, túi mổ sau khuy cài tinh tế, phom ôm vừa F2 tôn dáng chân thon dài): tư vấn size 29 (48-55kg), size 30 (55-62kg), size 31 (62-68kg), size 32 (68-75kg), size 34 (75-82kg), size 36 (trên 82kg). Quần phối cực sang chuẩn phong cách Công Sở Lịch Lãm & Smart Casual cùng áo sơ mi công sở (The Minimalist 017, Seventy Seven 052, Non Branded 060, The No Style 266), áo polo knit dệt kim hay áo blazer.\nNếu khách hỏi về Quần Tây Casual Easycare™ Vải Rayon Blend Non Iron 001 (BST 4 màu: Đen, Be Yến Mạch, Nâu Khaki & Xanh Băng, chất vải Rayon Blend tổng hợp mềm mại rũ nhẹ thoáng mát, công nghệ Non-Iron Easycare™ tự phục hồi nếp phẳng không lo nhăn nhàu, cạp thun co giãn thông minh hai bên hông giải phóng vòng eo khi ngồi lâu, nếp ly ép nhiệt thẳng tắp, phom ôm vừa F2 tôn dáng): tư vấn size 29 (48-55kg), size 30 (55-62kg), size 31 (62-68kg), size 32 (68-75kg), size 34 (75-82kg), size 36 (trên 82kg). Quần phối cực đẹp chuẩn phong cách Smart Casual & Daily Office cùng áo sơ mi công sở, áo polo dệt kim hay áo blazer sang trọng.\nNếu khách hỏi về Quần Tây Công Sở Easycare™ Xếp Ly Thoải Mái Giữ Ly Thẳng Đứng The Ceo 033 (2 màu Đen & Xám, vải dệt thoi cao cấp công nghệ Easycare™ chống nhăn nhàu vượt bậc, mặt vải đanh mịn rũ tự nhiên thoáng mát, thiết kế xếp ly đôi Double Pleats mặt trước giải phóng không gian hông đùi cử động thoải mái tối đa, nếp ly ép nhiệt thẳng tắp giữ ly vĩnh viễn tôn chân dài, cạp Sartorial vạt khuy cài mở rộng tinh tế, phom vừa F3 đĩnh đạc): tư vấn size 29 (48-55kg), size 30 (55-62kg), size 31 (62-68kg), size 32 (68-75kg), size 34 (75-82kg), size 36 (trên 82kg). Quần phối cực sang chuẩn phong thái Doanh Nhân, Lãnh Đạo & Executive Smart Casual cùng áo sơ mi công sở cao cấp, áo polo dệt kim hay áo blazer sang trọng.\nNếu khách hỏi về Quần Short Lưng Thun CloudTouch™ Tự Phẳng Không Cần Ủi Non Branded 066 (2 màu Đen & Xám Tiêu, vải dệt thun cao cấp công nghệ CloudTouch™ xốp nhẹ mềm mịn tựa mây, đàn hồi co giãn đa chiều, công nghệ tự phẳng phục hồi nếp phẳng không cần là ủi, thiết kế đáy thụng vừa vặn Comfort Drop Crotch giải phóng áp lực hông đùi thoải mái tối đa, cạp thun co giãn không lằn bụng, 2 túi xẻ sườn và 2 túi ốp vuông phía sau, phom rộng F4 phóng khoáng): tư vấn size S (dưới 1m65, 45-55kg), size M (1m62-1m72, 55-65kg), size L (1m68-1m78, 65-74kg), size XL (1m74-1m82, 74-82kg), size XXL (trên 1m80 hoặc trên 82kg). Quần phối cực đẹp chuẩn phong cách Athleisure & Streetwear mùa hè cùng áo thun oversize, áo ba lỗ tank top, áo polo dệt kim hay áo sơ mi cộc tay khoác ngoài.\nNếu khách hỏi về Quần Short Lưng Thun AirDry™ Xếp Ly Thanh Lịch The No Style 296 (2 màu Trắng Kem & Đen, chất vải cao cấp công nghệ AirDry™ siêu thoáng khí tản nhiệt nhanh nhẹ mát không dính da, thiết kế xếp ly đôi Double Pleats mặt trước thanh lịch nới rộng cử động hông đùi tối đa, lưng thun thông minh cạp trước khuy cài cạp sau bo chun co giãn, chiều dài qua gối thời thượng che khuyết điểm, phom rộng F4 chuẩn phong cách City Boy & Sartorial Casual): tư vấn size S (dưới 1m65, 45-55kg), size M (1m62-1m72, 55-65kg), size L (1m68-1m78, 65-74kg), size XL (1m74-1m82, 74-82kg), size XXL (trên 1m80 hoặc trên 82kg). Quần phối cực đẹp chuẩn phong cách City Boy & Sartorial Casual cùng áo polo knit dệt kim, áo sơ mi cộc tay phom hộp F5, áo thun boxy hay giày loafer/sneaker.\nNếu khách hỏi về Quần Đùi Lưng Thun Ống Rộng Vải Dệt Vân Nổi 280Gsm The No Style 272 (BST 4 màu: Xám Tiêu Sáng, Đen, Nâu Cacao & Trắng Kem, vải dệt Jacquard vân nổi 3D họa tiết hình học cao cấp 280Gsm dày dặn đứng phom thoáng mát không xù lông, bản lưng thun dệt phẳng công nghệ chống xoắn Anti-twist Flat Waistband giữ cạp luôn phẳng phiu êm ái, đường ly xếp nhẹ mặt trước tạo độ rũ tự nhiên, 2 túi xẻ sườn và 1 túi ốp sau, phom rộng F4 năng động phóng khoáng): tư vấn size S (dưới 1m65, 45-55kg), size M (1m62-1m72, 55-65kg), size L (1m68-1m78, 65-74kg), size XL (1m74-1m82, 74-82kg), size XXL (trên 1m80 hoặc trên 82kg). Quần cực kỳ bắt mắt chuẩn phong cách Streetwear & Modern Casual, phối chuẩn bài cùng áo thun graphic, áo tank top, áo polo dệt kim hay áo khoác sơ mi.\nNếu khách hỏi về Quần Đùi Lưng Thun Vải Co Giãn Tự Phẳng Phối Túi Hộp 3D The No Style 268 (2 màu Trắng & Đen, vải công nghệ co giãn 4 chiều tự phẳng hạn chế nhăn nhàu vượt trội bề mặt đanh mịn mát rượi, thiết kế 2 túi hộp 3D vạt nắp bản lớn phía trước đùi cực ngầu chuẩn phong cách Techwear & Gorpcore, cạp chun co giãn êm ái, 2 túi xẻ sườn và 1 túi ốp sau vát góc, phom rộng F4 phóng khoáng): tư vấn size S (dưới 1m65, 45-55kg), size M (1m62-1m72, 55-65kg), size L (1m68-1m78, 65-74kg), size XL (1m74-1m82, 74-82kg), size XXL (trên 1m80 hoặc trên 82kg). Quần phối cực chất chuẩn phong cách Techwear & Urban Utility cùng áo thun oversize, áo hoodie không tay, áo tank top thể thao hay áo khoác dù bomber.\nNếu khách hỏi về Quần Short Kaki Ống Rộng Airdry™ Hiệu Ứng Linen Sọc Mịn The No Style 202 (2 màu Sọc Xanh Biển & Sọc Xanh Rêu, vải kaki dệt xước mộc cao cấp công nghệ Airdry™ tạo hiệu ứng sợi Linen thoáng mát siêu nhẹ tản nhiệt nhanh, họa tiết sọc dọc thanh mảnh pinstripes chuẩn phong cách Resort Chic & Coastal Summer tôn dáng chân thon dài, cạp lưng thun phối thông minh cạp trước khuy cài cạp sau bo chun kèm dây rút tiện lợi, phom rộng F4 thoải mái): tư vấn size S (dưới 1m65, 45-55kg), size M (1m62-1m72, 55-65kg), size L (1m68-1m78, 65-74kg), size XL (1m74-1m82, 74-82kg), size XXL (trên 1m80 hoặc trên 82kg). Quần phối cực đẹp chuẩn phong cách Parisian Resort & Summer Holiday cùng áo polo knit dệt kim, sơ mi trắng đũi linen, áo thun trơn hay giày loafer/sandal.\nNếu khách hỏi về Quần Short Thun Icevibes™ Chạm Mát Lạnh The Minimalist 012 (BST 6 màu: Nâu Xám, Xanh Rêu Đậm, Xám Sáng, Xám Chì, Trắng Kem & Cam Đất, vải thun công nghệ Icevibes™ cảm giác mát lạnh tức thì Instant Cool Touch co giãn 4 chiều kháng nhăn thoáng khí, kỹ thuật chèn miếng đệm đáy Gusset chịu lực phân bổ lực kéo chống bục rách đũng quần khi chạy bộ hay tập gym, 2 túi sườn khóa kéo ẩn Concealed Zip an toàn và 1 túi sau, cạp lưng thun co giãn êm ái kèm dây rút, phom vừa F3 gọn gàng tôn dáng thể thao): tư vấn size S (dưới 1m65, 45-55kg), size M (1m62-1m72, 55-65kg), size L (1m68-1m78, 65-74kg), size XL (1m74-1m82, 74-82kg), size XXL (trên 1m80 hoặc trên 82kg). Quần phối cực đẹp chuẩn phong cách Athletic, Gym & Minimalist Athleisure cùng áo thun thể thao, áo ba lỗ tank top hay polo dệt kim.\nHãy tư vấn ngắn gọn, lịch sự, thân thiện, thông minh bằng tiếng Việt cho khách hàng của Aureus."
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
