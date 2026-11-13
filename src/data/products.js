const products = [
  {
    id: 1,
    name: "Áo Polo Đồng Phục HCMUTE",
    category: "Áo",
    price: 180000,
    originalPrice: 220000,
    description: "Áo polo đồng phục chính hãng Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE - Since 1962). Thiết kế phối màu xanh dương - trắng thanh lịch, chất vải thun cá sấu 4 chiều co giãn thoáng mát, logo HCMUTE Since 1962 thêu nổi sắc nét trên ngực trái.",
    images: [
      "/images/products/polo-hcmute.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    colors: [
      { name: "Xanh - Trắng", hex: "#1565C0", imageIndex: 0 }
    ],
    rating: 5.0,
    reviews: 328,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Đồng phục HCMUTE"
  },
  {
    id: 2,
    name: "Áo Blazer Nữ Premium",
    category: "Áo",
    price: 1850000,
    originalPrice: 2500000,
    description: "Áo blazer nữ thiết kế cao cấp, chất liệu vải tweed nhập khẩu. Phom dáng chuẩn Hàn Quốc, cúc mạ vàng dập nổi sang trọng, phù hợp cho cả công sở và dạo phố.",
    images: [
      "/images/products/blazer-1.jpg",
      "/images/products/blazer-2.jpg",
      "/images/products/blazer-3.jpg"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Đen", hex: "#1a1a1a", imageIndex: 0 },
      { name: "Be", hex: "#d4b896", imageIndex: 1 },
      { name: "Trắng kem", hex: "#f5f0e8", imageIndex: 2 }
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Sale -26%"
  },
  {
    id: 3,
    name: "Đầm Dạ Hội Lụa Satin",
    category: "Đầm",
    price: 3200000,
    originalPrice: 3200000,
    description: "Đầm dạ hội sang trọng với chất liệu lụa satin cao cấp, thiết kế cổ đổ cut-out tinh tế, xẻ tà quyến rũ, phù hợp cho các buổi tiệc tối và sự kiện quan trọng.",
    images: [
      "/images/products/dress-1.jpg",
      "/images/products/dress-2.jpg",
      "/images/products/dress-3.jpg"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Đỏ đô", hex: "#8B0000", imageIndex: 0 },
      { name: "Đen", hex: "#1a1a1a", imageIndex: 1 },
      { name: "Navy", hex: "#1a2744", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    isNew: true,
    isSale: false,
    badge: "New"
  },
  {
    id: 4,
    name: "Quần Tây Slim Fit",
    category: "Quần",
    price: 890000,
    originalPrice: 1200000,
    description: "Quần tây slim fit với chất vải co giãn thoải mái, form chuẩn ôm vừa người, nếp ly ủi sắc nét. Thiết kế hiện đại phù hợp cho công sở và các dịp lịch sự.",
    images: [
      "/images/products/pants-1.jpg",
      "/images/products/pants-2.jpg",
      "/images/products/pants-3.jpg"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Đen", hex: "#1a1a1a", imageIndex: 0 },
      { name: "Xám", hex: "#6b6b6b", imageIndex: 1 },
      { name: "Navy", hex: "#1a2744", imageIndex: 2 }
    ],
    rating: 4.6,
    reviews: 203,
    inStock: true,
    isNew: false,
    isSale: true,
    badge: "Sale -26%"
  },
  {
    id: 5,
    name: "Túi Xách Da Handmade",
    category: "Phụ kiện",
    price: 2100000,
    originalPrice: 2100000,
    description: "Túi xách da thật 100% làm thủ công bởi nghệ nhân Việt Nam. Thiết kế thanh lịch, khóa vàng cao cấp, đường may tỉ mỉ, phù hợp mọi phong cách.",
    images: [
      "/images/products/bag-1.jpg",
      "/images/products/bag-2.jpg",
      "/images/products/bag-3.jpg"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Nâu", hex: "#8B4513", imageIndex: 0 },
      { name: "Đen", hex: "#1a1a1a", imageIndex: 1 },
      { name: "Camel", hex: "#C19A6B", imageIndex: 2 }
    ],
    rating: 4.7,
    reviews: 67,
    inStock: true,
    isNew: false,
    isSale: false,
    badge: "Hot"
  },
  {
    id: 6,
    name: "Áo Sơ Mi Lụa Cổ Đứng",
    category: "Áo",
    price: 750000,
    originalPrice: 950000,
    description: "Áo sơ mi nữ chất liệu lụa tơ tằm mềm mại, cổ tàu đứng thanh lịch. Thiết kế tối giản nhưng sang trọng, tôn lên vẻ nữ tính quý phái.",
    images: [
      "/images/products/shirt-1.jpg",
      "/images/products/shirt-2.jpg",
      "/images/products/shirt-3.jpg"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Trắng", hex: "#ffffff", imageIndex: 0 },
      { name: "Hồng nhạt", hex: "#FFB6C1", imageIndex: 1 },
      { name: "Xanh baby", hex: "#89CFF0", imageIndex: 2 }
    ],
    rating: 4.5,
    reviews: 156,
    inStock: true,
    isNew: false,
    isSale: true,
    badge: "Sale -21%"
  },
  {
    id: 7,
    name: "Đầm Midi Hoa Nhí",
    category: "Đầm",
    price: 1250000,
    originalPrice: 1600000,
    description: "Đầm midi họa tiết hoa nhí vintage, chất liệu voan tơ nhẹ nhàng bay bổng. Thiết kế eo co giãn tôn dáng, tay bồng thanh thoát cho mùa xuân-hè.",
    images: [
      "/images/products/midi-1.jpg",
      "/images/products/midi-2.jpg",
      "/images/products/midi-3.jpg"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Hoa đỏ", hex: "#FF6B6B", imageIndex: 0 },
      { name: "Hoa xanh", hex: "#4ECDC4", imageIndex: 1 },
      { name: "Hoa vàng", hex: "#FFE66D", imageIndex: 2 }
    ],
    rating: 4.8,
    reviews: 91,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Sale -22%"
  },
  {
    id: 8,
    name: "Quần Jeans Ống Rộng Vintage",
    category: "Quần",
    price: 680000,
    originalPrice: 850000,
    description: "Quần jeans ống rộng phong cách retro thập niên 90. Chất denim cotton 100% dày dặn, wash màu tự nhiên, cạp cao hack dáng cực đỉnh.",
    images: [
      "/images/products/jeans-1.jpg",
      "/images/products/jeans-2.jpg",
      "/images/products/jeans-3.jpg"
    ],
    sizes: ["26", "27", "28", "29", "30"],
    colors: [
      { name: "Xanh nhạt", hex: "#87CEEB", imageIndex: 0 },
      { name: "Xanh đậm", hex: "#1E3F66", imageIndex: 1 },
      { name: "Đen wash", hex: "#333333", imageIndex: 2 }
    ],
    rating: 4.7,
    reviews: 178,
    inStock: true,
    isNew: false,
    isSale: true,
    badge: "Sale -20%"
  },
  {
    id: 9,
    name: "Khăn Quàng Cổ Cashmere",
    category: "Phụ kiện",
    price: 590000,
    originalPrice: 790000,
    description: "Khăn quàng cổ chất liệu cashmere pha len lông cừu siêu mềm mịn, giữ ấm tốt. Họa tiết kẻ caro thanh lịch, tua rua viền tinh tế.",
    images: [
      "/images/products/scarf-1.jpg",
      "/images/products/scarf-2.jpg",
      "/images/products/scarf-3.jpg"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Be - Nâu", hex: "#D2B48C", imageIndex: 0 },
      { name: "Đỏ đô", hex: "#8B0000", imageIndex: 1 },
      { name: "Xám ghi", hex: "#808080", imageIndex: 2 }
    ],
    rating: 4.6,
    reviews: 112,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Sale -25%"
  },
  {
    id: 10,
    name: "Áo Khoác Măng Tô Dạ Dáng Dài",
    category: "Áo",
    price: 2450000,
    originalPrice: 3200000,
    description: "Áo khoác măng tô dáng dài qua gối, chất dạ len ép cao cấp dày dặn ấm áp. Cổ bẻ ve lớn, kèm đai thắt eo tạo phom đồng hồ cát sang trọng.",
    images: [
      "/images/products/coat-1.jpg",
      "/images/products/coat-2.jpg",
      "/images/products/coat-3.jpg"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Camel", hex: "#C19A6B", imageIndex: 0 },
      { name: "Đen", hex: "#1a1a1a", imageIndex: 1 },
      { name: "Ghi sáng", hex: "#D3D3D3", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 95,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Best Seller"
  },
  {
    id: 11,
    name: "Chân Váy Chữ A Xếp Ly",
    category: "Quần",
    price: 490000,
    originalPrice: 490000,
    description: "Chân váy chữ A xếp ly tinh tế, chất vải tuyết mưa đứng phom không nhăn. Khóa kéo ẩn bên hông, dễ dàng phối cùng sơ mi hoặc áo thun.",
    images: [
      "/images/products/culottes-1.jpg",
      "/images/products/culottes-2.jpg",
      "/images/products/culottes-3.jpg"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Nâu tây", hex: "#A0522D", imageIndex: 0 },
      { name: "Đen", hex: "#1a1a1a", imageIndex: 1 },
      { name: "Be nhạt", hex: "#F5F5DC", imageIndex: 2 }
    ],
    rating: 4.3,
    reviews: 76,
    inStock: true,
    isNew: false,
    isSale: false,
    badge: ""
  },
  {
    id: 12,
    name: "Quần Culottes Linen",
    category: "Quần",
    price: 550000,
    originalPrice: 720000,
    description: "Quần culottes ống rộng chất liệu linen đũi tự nhiên, thoáng mát cho mùa hè. Cạp chun dây rút thoải mái, phom rộng bay bổng nhẹ nhàng.",
    images: [
      "/images/products/culottes-1.jpg",
      "/images/products/culottes-2.jpg",
      "/images/products/culottes-3.jpg"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Trắng ngà", hex: "#ffffff", imageIndex: 0 },
      { name: "Be", hex: "#d4b896", imageIndex: 1 },
      { name: "Xanh nhạt", hex: "#B0C4DE", imageIndex: 2 }
    ],
    rating: 4.5,
    reviews: 134,
    inStock: true,
    isNew: false,
    isSale: true,
    badge: "Sale -24%"
  },
  {
    id: 13,
    name: "Kính Mát Thời Trang",
    category: "Phụ kiện",
    price: 450000,
    originalPrice: 450000,
    description: "Kính mát thời trang gọng kim loại cao cấp mạ vàng, tròng kính chống tia cực tím UV400. Thiết kế retro sang trọng, phù hợp mọi khuôn mặt.",
    images: [
      "/images/products/sunglasses-1.jpg",
      "/images/products/sunglasses-2.jpg"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Vàng gold", hex: "#FFD700", imageIndex: 0 },
      { name: "Bạc", hex: "#C0C0C0", imageIndex: 1 }
    ],
    rating: 4.2,
    reviews: 88,
    inStock: true,
    isNew: true,
    isSale: false,
    badge: "New"
  },
  {
    id: 14,
    name: "Áo Croptop Len Dệt",
    category: "Áo",
    price: 420000,
    originalPrice: 580000,
    description: "Áo croptop len dệt kim mềm mại, họa tiết dệt vặn thừng trẻ trung. Phù hợp mix-match thời thượng với quần cạp cao hoặc chân váy.",
    images: [
      "/images/products/croptop-1.jpg",
      "/images/products/croptop-2.jpg",
      "/images/products/croptop-3.jpg"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Hồng pastel", hex: "#FF69B4", imageIndex: 0 },
      { name: "Trắng kem", hex: "#f5f0e8", imageIndex: 1 },
      { name: "Xanh mint", hex: "#98FB98", imageIndex: 2 }
    ],
    rating: 4.6,
    reviews: 201,
    inStock: true,
    isNew: false,
    isSale: true,
    badge: "Sale -28%"
  },
  {
    id: 15,
    name: "Đầm Cocktail Sequin",
    category: "Đầm",
    price: 2800000,
    originalPrice: 2800000,
    description: "Đầm cocktail đính kim sa sequin lấp lánh, thiết kế hai dây quyến rũ ôm trọn đường cong. Hoàn hảo cho tiệc đêm sang trọng.",
    images: [
      "/images/products/cocktail-1.jpg",
      "/images/products/cocktail-2.jpg",
      "/images/products/cocktail-3.jpg"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Vàng champagne", hex: "#FFD700", imageIndex: 0 },
      { name: "Bạc lấp lánh", hex: "#C0C0C0", imageIndex: 1 },
      { name: "Đen huyền bí", hex: "#1a1a1a", imageIndex: 2 }
    ],
    rating: 4.8,
    reviews: 56,
    inStock: true,
    isNew: true,
    isSale: false,
    badge: "Hot"
  },
  {
    id: 16,
    name: "Quần Palazzo Vải Chiffon",
    category: "Quần",
    price: 620000,
    originalPrice: 820000,
    description: "Quần palazzo ống siêu rộng chất vải chiffon voan bay bổng. Cạp cao ôm eo, xếp ly dọc chân tạo hiệu ứng thanh thoát, kéo dài đôi chân.",
    images: [
      "/images/products/palazzo-1.jpg",
      "/images/products/palazzo-2.jpg",
      "/images/products/palazzo-3.jpg"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Hồng phấn", hex: "#FFD1DC", imageIndex: 0 },
      { name: "Đen", hex: "#1a1a1a", imageIndex: 1 },
      { name: "Trắng", hex: "#ffffff", imageIndex: 2 }
    ],
    rating: 4.4,
    reviews: 143,
    inStock: true,
    isNew: false,
    isSale: true,
    badge: "Sale -24%"
  },
  {
    id: 17,
    name: "Vòng Tay Ngọc Trai",
    category: "Phụ kiện",
    price: 780000,
    originalPrice: 780000,
    description: "Vòng tay chuỗi ngọc trai nước ngọt tự nhiên tròn đều bóng bẩy, móc khóa vàng 18K tinh xảo. Phụ kiện quý phái hoàn hảo cho quý cô hiện đại.",
    images: [
      "/images/products/bracelet-1.jpg",
      "/images/products/bracelet-2.jpg",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Trắng ngọc", hex: "#FAEBD7", imageIndex: 0 },
      { name: "Hồng ngọc", hex: "#FFB7C5", imageIndex: 1 }
    ],
    rating: 4.7,
    reviews: 92,
    inStock: true,
    isNew: true,
    isSale: false,
    badge: "New"
  },
  {
    id: 18,
    name: "Áo Thun Raglan Oversize - Màu Nâu",
    category: "Áo",
    price: 350000,
    originalPrice: 450000,
    description: "Áo thun raglan oversize thiết kế cao cấp của Aureus Fashion. Tông màu nâu cacao ấm áp, thời thượng kết hợp đường may raglan tạo phom vai xuôi mềm mại. Chất liệu 100% cotton định lượng 250gsm dày dặn, đứng phom, thoáng khí và thấm hút mồ hôi tốt. Họa tiết thêu chữ sắc nét tinh tế ở ngực áo, phong cách unisex trẻ trung cá tính.",
    images: [
      "/images/products/tshirt-raglan-brown-front.jpg",
      "/images/products/tshirt-raglan-brown-back.jpg",
      "/images/products/tshirt-raglan-cream-front.jpg",
      "/images/products/tshirt-raglan-cream-back.jpg",
      "/images/products/tshirt-raglan-blue-front.jpg",
      "/images/products/tshirt-raglan-blue-back.jpg",
      "/images/products/tshirt-raglan-grey-front.jpg",
      "/images/products/tshirt-raglan-grey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Nâu", hex: "#8D7362", imageIndex: 0 },
      { name: "Trắng sữa", hex: "#F3ECE2", imageIndex: 2 },
      { name: "Xanh nhạt", hex: "#A8C3D8", imageIndex: 4 },
      { name: "Xám đậm", hex: "#5C5C60", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 148,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "New"
  },
  {
    id: 19,
    name: "Áo Thun Raglan Oversize - Màu Trắng Sữa",
    category: "Áo",
    price: 350000,
    originalPrice: 450000,
    description: "Áo thun raglan oversize thiết kế cao cấp của Aureus Fashion. Tông màu trắng sữa thanh lịch, trẻ trung và dễ phối đồ kết hợp đường may raglan tôn dáng vai. Chất liệu 100% cotton định lượng 250gsm dày dặn, bề mặt vải xử lý mịn màng, co giãn tự nhiên. Họa tiết thêu chữ tinh tế ngực áo, phù hợp cho cả nam và nữ trong mọi hoạt động thường nhật.",
    images: [
      "/images/products/tshirt-raglan-cream-front.jpg",
      "/images/products/tshirt-raglan-cream-back.jpg",
      "/images/products/tshirt-raglan-brown-front.jpg",
      "/images/products/tshirt-raglan-brown-back.jpg",
      "/images/products/tshirt-raglan-blue-front.jpg",
      "/images/products/tshirt-raglan-blue-back.jpg",
      "/images/products/tshirt-raglan-grey-front.jpg",
      "/images/products/tshirt-raglan-grey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng sữa", hex: "#F3ECE2", imageIndex: 0 },
      { name: "Nâu", hex: "#8D7362", imageIndex: 2 },
      { name: "Xanh nhạt", hex: "#A8C3D8", imageIndex: 4 },
      { name: "Xám đậm", hex: "#5C5C60", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 162,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Hot"
  },
  {
    id: 20,
    name: "Áo Thun Raglan Oversize - Màu Xanh Nhạt",
    category: "Áo",
    price: 350000,
    originalPrice: 450000,
    description: "Áo thun raglan oversize thiết kế cao cấp của Aureus Fashion. Tông màu xanh nhạt pastel tươi mát, dịu mắt và trẻ trung kết hợp đường may raglan tạo phom vai xuôi mềm mại. Chất liệu 100% cotton định lượng 250gsm dày dặn, đứng phom, thoáng khí và thấm hút mồ hôi vượt trội. Họa tiết thêu chữ sắc nét tinh tế ở ngực áo, phong cách unisex năng động cho ngày hè.",
    images: [
      "/images/products/tshirt-raglan-blue-front.jpg",
      "/images/products/tshirt-raglan-blue-back.jpg",
      "/images/products/tshirt-raglan-cream-front.jpg",
      "/images/products/tshirt-raglan-cream-back.jpg",
      "/images/products/tshirt-raglan-brown-front.jpg",
      "/images/products/tshirt-raglan-brown-back.jpg",
      "/images/products/tshirt-raglan-grey-front.jpg",
      "/images/products/tshirt-raglan-grey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh nhạt", hex: "#A8C3D8", imageIndex: 0 },
      { name: "Trắng sữa", hex: "#F3ECE2", imageIndex: 2 },
      { name: "Nâu", hex: "#8D7362", imageIndex: 4 },
      { name: "Xám đậm", hex: "#5C5C60", imageIndex: 6 }
    ],
    rating: 4.8,
    reviews: 135,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "New"
  },
  {
    id: 21,
    name: "Áo Thun Raglan Oversize - Màu Xám Đậm",
    category: "Áo",
    price: 350000,
    originalPrice: 450000,
    description: "Áo thun raglan oversize thiết kế cao cấp của Aureus Fashion. Tông màu xám đậm (charcoal) cá tính, mạnh mẽ và thời thượng kết hợp đường may raglan tôn dáng vai. Chất liệu 100% cotton định lượng 250gsm dày dặn, bề mặt xử lý chống xù lông, co giãn êm ái. Họa tiết thêu chữ tinh xảo trước ngực, dễ dàng mix-match với quần jeans hoặc quần short.",
    images: [
      "/images/products/tshirt-raglan-grey-front.jpg",
      "/images/products/tshirt-raglan-grey-back.jpg",
      "/images/products/tshirt-raglan-cream-front.jpg",
      "/images/products/tshirt-raglan-cream-back.jpg",
      "/images/products/tshirt-raglan-brown-front.jpg",
      "/images/products/tshirt-raglan-brown-back.jpg",
      "/images/products/tshirt-raglan-blue-front.jpg",
      "/images/products/tshirt-raglan-blue-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám đậm", hex: "#5C5C60", imageIndex: 0 },
      { name: "Trắng sữa", hex: "#F3ECE2", imageIndex: 2 },
      { name: "Nâu", hex: "#8D7362", imageIndex: 4 },
      { name: "Xanh nhạt", hex: "#A8C3D8", imageIndex: 6 }
    ],
    rating: 4.8,
    reviews: 119,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Hot"
  },
  {
    id: 22,
    name: "Quần Jeans Baggy Ống Cong Mài Rách Durabletex™ Phủ Đồng Hạn Chế Nhăn Chống Bục Đáy Phom Siêu",
    category: "Quần",
    price: 790000,
    originalPrice: 980000,
    description: "Quần jeans baggy ống cong mài rách ứng dụng công nghệ sợi Durabletex™ phủ đồng cao cấp độc quyền từ Aureus Fashion. Thiết kế ống cong (curved silhouette) thời thượng, tạo hiệu ứng xếp nếp hack dáng chân dài tự nhiên. Xử lý wash màu xanh retro vintage cùng các vệt mài rách tinh tế. Vải denim co giãn êm ái, hạn chế nhăn tối đa, gia cố đường may kép chống bục đáy vượt trội, khóa kéo và khuy dập nổi bền bỉ theo thời gian.",
    images: [
      "/images/products/jeans-baggy-curved-1.jpg",
      "/images/products/jeans-baggy-curved-2.jpg",
      "/images/products/jeans-baggy-curved-3.jpg",
      "/images/products/jeans-baggy-curved-4.jpg"
    ],
    sizes: ["28", "29", "30", "31", "32", "34"],
    colors: [
      { name: "Xanh Wash Vintage", hex: "#7D9EB8", imageIndex: 0 }
    ],
    rating: 5.0,
    reviews: 186,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Durabletex™"
  },
  {
    id: 23,
    name: "Áo Thun Cổ Tròn FlexFit™ Cotton Compact 2C Co Giãn In Nổi 3D Typography Phom Siêu Rộng - Màu Đen",
    category: "Áo",
    price: 360000,
    originalPrice: 480000,
    description: "Áo thun cổ tròn ứng dụng công nghệ độc quyền FlexFit™ từ thương hiệu Aureus Fashion. Chất liệu cotton compact 2 chiều (2C) cao cấp bề mặt siêu mịn, co giãn đàn hồi tốt, giữ phom tuyệt đối sau nhiều lần giặt. Kỹ thuật in nổi 3D Typography đa sắc màu chủ đề 'BETTER DAYS START TODAY' nổi bật, hiệu ứng thị giác ấn tượng cả mặt trước và mặt sau. Phom dáng siêu rộng (ultra-oversize) phóng khoáng, thời thượng, phù hợp cho giới trẻ yêu thích phong cách streetwear năng động.",
    images: [
      "/images/products/tshirt-flexfit-black-front.jpg",
      "/images/products/tshirt-flexfit-black-back.jpg",
      "/images/products/tshirt-flexfit-white-front.jpg",
      "/images/products/tshirt-flexfit-white-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1a1a1a", imageIndex: 0 },
      { name: "Trắng", hex: "#ffffff", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 154,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "FlexFit™ 3D"
  },
  {
    id: 24,
    name: "Áo Thun Cổ Tròn FlexFit™ Cotton Compact 2C Co Giãn In Nổi 3D Typography Phom Siêu Rộng - Màu Trắng",
    category: "Áo",
    price: 360000,
    originalPrice: 480000,
    description: "Áo thun cổ tròn ứng dụng công nghệ độc quyền FlexFit™ từ thương hiệu Aureus Fashion. Chất liệu cotton compact 2 chiều (2C) cao cấp bề mặt siêu mịn, co giãn đàn hồi tốt, giữ phom tuyệt đối sau nhiều lần giặt. Kỹ thuật in nổi 3D Typography đa sắc màu chủ đề 'BETTER DAYS START TODAY' nổi bật, hiệu ứng thị giác ấn tượng cả mặt trước và mặt sau. Phom dáng siêu rộng (ultra-oversize) phóng khoáng, thời thượng, phù hợp cho giới trẻ yêu thích phong cách streetwear năng động.",
    images: [
      "/images/products/tshirt-flexfit-white-front.jpg",
      "/images/products/tshirt-flexfit-white-back.jpg",
      "/images/products/tshirt-flexfit-black-front.jpg",
      "/images/products/tshirt-flexfit-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng", hex: "#ffffff", imageIndex: 0 },
      { name: "Đen", hex: "#1a1a1a", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 168,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "FlexFit™ 3D"
  },
  {
    id: 25,
    name: "Áo Thun Cổ Tròn FlexFit™ Cotton Blend 270gsm Sọc Mảnh Typography 90s Streetwear Phom Rộng F4 - Đỏ Rượu",
    category: "Áo",
    price: 380000,
    originalPrice: 490000,
    description: "Áo thun sọc cổ tròn phong cách 90s Streetwear cổ điển ứng dụng chất vải Cotton Blend định lượng dày dặn 270gsm từ Aureus Fashion. Công nghệ dệt sợi FlexFit™ cao cấp giúp áo đanh mịn, hạn chế nhăn xù, co giãn êm ái và thấm hút mồ hôi tối ưu. Thiết kế sọc ngang mảnh tinh tế phối màu hoài niệm retro, nổi bật với họa tiết thêu chữ nghệ thuật 'ATHLEISURE VIBES' sắc nét ánh kim trước ngực. Phom rộng F4 thoải mái, phóng khoáng, dễ dàng mix đồ cùng quần jeans baggy hoặc quần short.",
    images: [
      "/images/products/tshirt-striped-burgundy-front.jpg",
      "/images/products/tshirt-striped-burgundy-back.jpg",
      "/images/products/tshirt-striped-sage-front.jpg",
      "/images/products/tshirt-striped-sage-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đỏ Rượu", hex: "#5C242A", imageIndex: 0 },
      { name: "Xanh Rêu", hex: "#6E7A6E", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 142,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "90s Vintage"
  },
  {
    id: 26,
    name: "Áo Thun Cổ Tròn FlexFit™ Cotton Blend 270gsm Sọc Mảnh Typography 90s Streetwear Phom Rộng F4 - Xanh Rêu",
    category: "Áo",
    price: 380000,
    originalPrice: 490000,
    description: "Áo thun sọc cổ tròn phong cách 90s Streetwear cổ điển ứng dụng chất vải Cotton Blend định lượng dày dặn 270gsm từ Aureus Fashion. Công nghệ dệt sợi FlexFit™ cao cấp giúp áo đanh mịn, hạn chế nhăn xù, co giãn êm ái và thấm hút mồ hôi tối ưu. Thiết kế sọc ngang mảnh tinh tế phối màu hoài niệm retro, nổi bật với họa tiết thêu chữ nghệ thuật 'ATHLEISURE VIBES' sắc nét ánh kim trước ngực. Phom rộng F4 thoải mái, phóng khoáng, dễ dàng mix đồ cùng quần jeans baggy hoặc quần short.",
    images: [
      "/images/products/tshirt-striped-sage-front.jpg",
      "/images/products/tshirt-striped-sage-back.jpg",
      "/images/products/tshirt-striped-burgundy-front.jpg",
      "/images/products/tshirt-striped-burgundy-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Rêu", hex: "#6E7A6E", imageIndex: 0 },
      { name: "Đỏ Rượu", hex: "#5C242A", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 129,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "90s Vintage"
  },
  {
    id: 27,
    name: "Áo Thun Cổ Tròn Tay Raglan DurableTex™ Vải Ribbing Gân Nổi Phối Viền Line Art Phom Rộng F4 - Màu Xám Khói",
    category: "Áo",
    price: 390000,
    originalPrice: 520000,
    description: "Áo thun cổ tròn tay raglan cao cấp thuộc bộ sưu tập Seventy Seven từ Aureus Fashion. Ứng dụng chất liệu vải dệt Ribbing gân nổi cao cấp kết hợp công nghệ sợi DurableTex™ siêu bền, co giãn đàn hồi vượt trội và chống nhăn xù. Thiết kế tay raglan phối đường viền line art tương phản sắc sảo dọc theo cầu vai, kết hợp họa tiết thêu chữ 'STEP OUT OF LINE' tinh tế ở trung tâm ngực. Phom rộng F4 chuẩn phong cách modern streetwear, thoải mái và tôn dáng trong mọi góc nhìn.",
    images: [
      "/images/products/tshirt-ribbed-grey-front.jpg",
      "/images/products/tshirt-ribbed-grey-back.jpg",
      "/images/products/tshirt-ribbed-cream-front.jpg",
      "/images/products/tshirt-ribbed-cream-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Khói", hex: "#525256", imageIndex: 0 },
      { name: "Trắng Kem", hex: "#F5F2EB", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 173,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Ribbing Line Art"
  },
  {
    id: 28,
    name: "Áo Thun Cổ Tròn Tay Raglan DurableTex™ Vải Ribbing Gân Nổi Phối Viền Line Art Phom Rộng F4 - Màu Trắng Kem",
    category: "Áo",
    price: 390000,
    originalPrice: 520000,
    description: "Áo thun cổ tròn tay raglan cao cấp thuộc bộ sưu tập Seventy Seven từ Aureus Fashion. Ứng dụng chất liệu vải dệt Ribbing gân nổi cao cấp kết hợp công nghệ sợi DurableTex™ siêu bền, co giãn đàn hồi vượt trội và chống nhăn xù. Thiết kế tay raglan phối đường viền line art tương phản sắc sảo dọc theo cầu vai, kết hợp họa tiết thêu chữ 'STEP OUT OF LINE' tinh tế ở trung tâm ngực. Phom rộng F4 chuẩn phong cách modern streetwear, thoải mái và tôn dáng trong mọi góc nhìn.",
    images: [
      "/images/products/tshirt-ribbed-cream-front.jpg",
      "/images/products/tshirt-ribbed-cream-back.jpg",
      "/images/products/tshirt-ribbed-grey-front.jpg",
      "/images/products/tshirt-ribbed-grey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng Kem", hex: "#F5F2EB", imageIndex: 0 },
      { name: "Xám Khói", hex: "#525256", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 158,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Ribbing Line Art"
  },
  {
    id: 29,
    name: "Áo Thun Cổ Tròn In Chữ Typography Cotton Compact Đứng Phom Mềm Mát Phom Rộng F4 - Màu Đỏ Rượu",
    category: "Áo",
    price: 370000,
    originalPrice: 480000,
    description: "Áo thun ringer cổ tròn phong cách Athleisure cổ điển thuộc bộ sưu tập The No Style từ Aureus Fashion. Chất liệu vải Cotton Compact cao cấp bề mặt mềm mịn, thoáng mát, giữ phom đứng áo và thấm hút mồ hôi tối ưu. Thiết kế cổ tròn và gấu tay phối viền rib màu kem tương phản tinh tế, tạo điểm nhấn phong cách retro varsity thể thao. Trung tâm ngực in chữ nghệ thuật 'Athleisure Vibes' kết hợp logo huy hiệu sắc nét. Phom rộng F4 tôn dáng, dễ dàng kết hợp cùng quần jeans baggy hoặc quần tây.",
    images: [
      "/images/products/tshirt-ringer-burgundy-front.jpg",
      "/images/products/tshirt-ringer-burgundy-back.jpg",
      "/images/products/tshirt-ringer-brown-front.jpg",
      "/images/products/tshirt-ringer-brown-back.jpg",
      "/images/products/tshirt-ringer-white-front.png",
      "/images/products/tshirt-ringer-white-back.png",
      "/images/products/tshirt-ringer-grey-front.jpg",
      "/images/products/tshirt-ringer-grey-back.jpg",
      "/images/products/tshirt-ringer-black-front.jpg",
      "/images/products/tshirt-ringer-black-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đỏ Rượu", hex: "#6B2737", imageIndex: 0 },
      { name: "Nâu Cà Phê", hex: "#4A3B32", imageIndex: 2 },
      { name: "Trắng Bo Đen", hex: "#FFFFFF", imageIndex: 4 },
      { name: "Xám Tiêu Bo Đỏ", hex: "#DCDCDC", imageIndex: 6 },
      { name: "Đen Bo Trắng", hex: "#1A1A1A", imageIndex: 8 }
    ],
    rating: 4.9,
    reviews: 146,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Ringer Athleisure"
  },
  {
    id: 30,
    name: "Áo Thun Cổ Tròn In Chữ Typography Cotton Compact Đứng Phom Mềm Mát Phom Rộng F4 - Màu Nâu Cà Phê",
    category: "Áo",
    price: 370000,
    originalPrice: 480000,
    description: "Áo thun ringer cổ tròn phong cách Athleisure cổ điển thuộc bộ sưu tập The No Style từ Aureus Fashion. Chất liệu vải Cotton Compact cao cấp bề mặt mềm mịn, thoáng mát, giữ phom đứng áo và thấm hút mồ hôi tối ưu. Thiết kế cổ tròn và gấu tay phối viền rib màu kem tương phản tinh tế, tạo điểm nhấn phong cách retro varsity thể thao. Trung tâm ngực in chữ nghệ thuật 'Athleisure Vibes' kết hợp logo huy hiệu sắc nét. Phom rộng F4 tôn dáng, dễ dàng kết hợp cùng quần jeans baggy hoặc quần tây.",
    images: [
      "/images/products/tshirt-ringer-brown-front.jpg",
      "/images/products/tshirt-ringer-brown-back.jpg",
      "/images/products/tshirt-ringer-burgundy-front.jpg",
      "/images/products/tshirt-ringer-burgundy-back.jpg",
      "/images/products/tshirt-ringer-white-front.png",
      "/images/products/tshirt-ringer-white-back.png",
      "/images/products/tshirt-ringer-grey-front.jpg",
      "/images/products/tshirt-ringer-grey-back.jpg",
      "/images/products/tshirt-ringer-black-front.jpg",
      "/images/products/tshirt-ringer-black-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Nâu Cà Phê", hex: "#4A3B32", imageIndex: 0 },
      { name: "Đỏ Rượu", hex: "#6B2737", imageIndex: 2 },
      { name: "Trắng Bo Đen", hex: "#FFFFFF", imageIndex: 4 },
      { name: "Xám Tiêu Bo Đỏ", hex: "#DCDCDC", imageIndex: 6 },
      { name: "Đen Bo Trắng", hex: "#1A1A1A", imageIndex: 8 }
    ],
    rating: 4.9,
    reviews: 138,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Ringer Athleisure"
  },
  {
    id: 31,
    name: "Áo Thun Cổ Tròn In Chữ Typography Cotton Compact Đứng Phom Mềm Mát Phom Rộng F4 - Màu Trắng Bo Đen",
    category: "Áo",
    price: 370000,
    originalPrice: 480000,
    description: "Áo thun ringer cổ tròn phong cách Athleisure cổ điển thuộc bộ sưu tập The No Style từ Aureus Fashion. Chất liệu vải Cotton Compact cao cấp bề mặt mềm mịn, thoáng mát, giữ phom đứng áo và thấm hút mồ hôi tối ưu. Thiết kế thân áo màu trắng tươi sáng phối bo viền cổ và gấu tay màu đen tương phản cực kỳ cá tính. Trung tâm ngực in chữ nghệ thuật 'Athleisure Vibes' kết hợp logo huy hiệu sắc nét. Phom rộng F4 tôn dáng, dễ dàng kết hợp cùng quần jeans baggy hoặc quần tây.",
    images: [
      "/images/products/tshirt-ringer-white-front.png",
      "/images/products/tshirt-ringer-white-back.png",
      "/images/products/tshirt-ringer-black-front.jpg",
      "/images/products/tshirt-ringer-black-back.png",
      "/images/products/tshirt-ringer-grey-front.jpg",
      "/images/products/tshirt-ringer-grey-back.jpg",
      "/images/products/tshirt-ringer-burgundy-front.jpg",
      "/images/products/tshirt-ringer-burgundy-back.jpg",
      "/images/products/tshirt-ringer-brown-front.jpg",
      "/images/products/tshirt-ringer-brown-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng Bo Đen", hex: "#FFFFFF", imageIndex: 0 },
      { name: "Đen Bo Trắng", hex: "#1A1A1A", imageIndex: 2 },
      { name: "Xám Tiêu Bo Đỏ", hex: "#DCDCDC", imageIndex: 4 },
      { name: "Đỏ Rượu", hex: "#6B2737", imageIndex: 6 },
      { name: "Nâu Cà Phê", hex: "#4A3B32", imageIndex: 8 }
    ],
    rating: 4.9,
    reviews: 165,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Ringer Athleisure"
  },
  {
    id: 32,
    name: "Áo Thun Cổ Tròn In Chữ Typography Cotton Compact Đứng Phom Mềm Mát Phom Rộng F4 - Màu Xám Tiêu Bo Đỏ",
    category: "Áo",
    price: 370000,
    originalPrice: 480000,
    description: "Áo thun ringer cổ tròn phong cách Athleisure cổ điển thuộc bộ sưu tập The No Style từ Aureus Fashion. Chất liệu vải Cotton Compact cao cấp dệt sợi màu xám tiêu (heather grey) độc đáo, mềm mại và thoáng mát. Thiết kế bo viền cổ tròn và gấu tay màu đỏ rượu (burgundy) tinh tế, hoài niệm chất retro varsity học đường Mỹ. Trung tâm ngực in chữ nghệ thuật 'Athleisure Vibes' cùng logo sắc xảo. Phom rộng F4 chuẩn phong cách streetwear năng động.",
    images: [
      "/images/products/tshirt-ringer-grey-front.jpg",
      "/images/products/tshirt-ringer-grey-back.jpg",
      "/images/products/tshirt-ringer-white-front.png",
      "/images/products/tshirt-ringer-white-back.png",
      "/images/products/tshirt-ringer-black-front.jpg",
      "/images/products/tshirt-ringer-black-back.png",
      "/images/products/tshirt-ringer-burgundy-front.jpg",
      "/images/products/tshirt-ringer-burgundy-back.jpg",
      "/images/products/tshirt-ringer-brown-front.jpg",
      "/images/products/tshirt-ringer-brown-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Tiêu Bo Đỏ", hex: "#DCDCDC", imageIndex: 0 },
      { name: "Trắng Bo Đen", hex: "#FFFFFF", imageIndex: 2 },
      { name: "Đen Bo Trắng", hex: "#1A1A1A", imageIndex: 4 },
      { name: "Đỏ Rượu", hex: "#6B2737", imageIndex: 6 },
      { name: "Nâu Cà Phê", hex: "#4A3B32", imageIndex: 8 }
    ],
    rating: 4.8,
    reviews: 141,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Ringer Athleisure"
  },
  {
    id: 33,
    name: "Áo Thun Cổ Tròn In Chữ Typography Cotton Compact Đứng Phom Mềm Mát Phom Rộng F4 - Màu Đen Bo Trắng",
    category: "Áo",
    price: 370000,
    originalPrice: 480000,
    description: "Áo thun ringer cổ tròn phong cách Athleisure cổ điển thuộc bộ sưu tập The No Style từ Aureus Fashion. Chất liệu vải Cotton Compact cao cấp bề mặt mềm mịn, thoáng mát, giữ phom đứng áo và thấm hút mồ hôi tối ưu. Thiết kế thân áo tông màu đen huyền bí, nam tính phối bo viền cổ và gấu tay màu trắng tương phản nổi bật chuẩn phong cách monochrome retro. Trung tâm ngực in chữ nghệ thuật 'Athleisure Vibes' kết hợp logo huy hiệu sắc nét. Phom rộng F4 tôn dáng, dễ dàng kết hợp cùng quần jeans baggy hoặc quần tây.",
    images: [
      "/images/products/tshirt-ringer-black-front.jpg",
      "/images/products/tshirt-ringer-black-back.png",
      "/images/products/tshirt-ringer-white-front.png",
      "/images/products/tshirt-ringer-white-back.png",
      "/images/products/tshirt-ringer-grey-front.jpg",
      "/images/products/tshirt-ringer-grey-back.jpg",
      "/images/products/tshirt-ringer-burgundy-front.jpg",
      "/images/products/tshirt-ringer-burgundy-back.jpg",
      "/images/products/tshirt-ringer-brown-front.jpg",
      "/images/products/tshirt-ringer-brown-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen Bo Trắng", hex: "#1A1A1A", imageIndex: 0 },
      { name: "Trắng Bo Đen", hex: "#FFFFFF", imageIndex: 2 },
      { name: "Xám Tiêu Bo Đỏ", hex: "#DCDCDC", imageIndex: 4 },
      { name: "Đỏ Rượu", hex: "#6B2737", imageIndex: 6 },
      { name: "Nâu Cà Phê", hex: "#4A3B32", imageIndex: 8 }
    ],
    rating: 4.9,
    reviews: 172,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Ringer Athleisure"
  },
  {
    id: 34,
    name: "Áo Thun Cổ Tròn Phối Màu Raglan Năng Động Cotton Mềm Mát Co Giãn Phom Hộp Rộng F5 - Màu Xanh Đen",
    category: "Áo",
    price: 380000,
    originalPrice: 490000,
    description: "Áo thun cổ tròn phom hộp rộng F5 (Boxy Fit) thuộc bộ sưu tập The No Style 251 từ Aureus Fashion. Sử dụng chất liệu sợi 100% Cotton cao cấp mềm mát, co giãn tự nhiên, thoáng khí tối đa mang lại cảm giác dễ chịu suốt ngày dài năng động. Thiết kế tay raglan phối đường cắt cúp vai thời thượng, gấu tay viền dải vải màu xanh pastel tinh tế tạo điểm nhấn thể thao hiện đại. Điểm xuyết chữ in nghệ thuật 'Athleisure' tối giản trước ngực. Phom hộp F5 rũ đẹp, cá tính, cực kỳ ăn ý khi mix cùng quần jeans baggy hoặc quần shorts.",
    images: [
      "/images/products/tshirt-boxyf5-navy-front.jpg",
      "/images/products/tshirt-boxyf5-navy-back.jpg",
      "/images/products/tshirt-boxyf5-white-front.jpg",
      "/images/products/tshirt-boxyf5-white-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Đen", hex: "#1C2541", imageIndex: 0 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 135,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Boxy Fit F5"
  },
  {
    id: 35,
    name: "Áo Thun Cổ Tròn Phối Màu Raglan Năng Động Cotton Mềm Mát Co Giãn Phom Hộp Rộng F5 - Màu Trắng",
    category: "Áo",
    price: 380000,
    originalPrice: 490000,
    description: "Áo thun cổ tròn phom hộp rộng F5 (Boxy Fit) thuộc bộ sưu tập The No Style 251 từ Aureus Fashion. Sử dụng chất liệu sợi 100% Cotton cao cấp màu trắng tinh khôi, bề mặt mịn màng, co giãn và thấm hút mồ hôi vượt trội. Thiết kế tay áo raglan năng động với viền gấu tay phối dải xanh pastel thời thượng và logo 'Athleisure' in sắc sảo giữa ngực áo. Dáng áo phom hộp F5 hiện đại che khuyết điểm tốt, dễ dàng biến hóa đa dạng phong cách từ năng động dạo phố đến du lịch.",
    images: [
      "/images/products/tshirt-boxyf5-white-front.jpg",
      "/images/products/tshirt-boxyf5-white-back.png",
      "/images/products/tshirt-boxyf5-navy-front.jpg",
      "/images/products/tshirt-boxyf5-navy-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 0 },
      { name: "Xanh Đen", hex: "#1C2541", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 142,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Boxy Fit F5"
  }
];

export const categories = ["Áo", "Quần", "Đầm", "Phụ kiện"];

export const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};

export default products;
