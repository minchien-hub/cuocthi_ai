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
    name: "Quần Jeans Baggy Ống Cong Mài Rách Durabletex™ Phủ Đồng Hạn Chế Nhăn Chống Bục Đáy Phom Siêu Rộng F5 - The Original 072",
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
      "/images/products/tshirt-boxyf5-white-back.png",
      "/images/products/tshirt-boxyf5-grey-front.jpg",
      "/images/products/tshirt-boxyf5-grey-back.jpg",
      "/images/products/tshirt-boxyf5-black-front.jpg",
      "/images/products/tshirt-boxyf5-black-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Đen", hex: "#1C2541", imageIndex: 0 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 2 },
      { name: "Xám Chì", hex: "#5E6064", imageIndex: 4 },
      { name: "Đen", hex: "#1A1A1A", imageIndex: 6 }
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
      "/images/products/tshirt-boxyf5-navy-back.jpg",
      "/images/products/tshirt-boxyf5-grey-front.jpg",
      "/images/products/tshirt-boxyf5-grey-back.jpg",
      "/images/products/tshirt-boxyf5-black-front.jpg",
      "/images/products/tshirt-boxyf5-black-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 0 },
      { name: "Xanh Đen", hex: "#1C2541", imageIndex: 2 },
      { name: "Xám Chì", hex: "#5E6064", imageIndex: 4 },
      { name: "Đen", hex: "#1A1A1A", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 142,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Boxy Fit F5"
  },
  {
    id: 36,
    name: "Áo Thun Cổ Tròn Phối Màu Raglan Năng Động Cotton Mềm Mát Co Giãn Phom Hộp Rộng F5 - Màu Xám Chì",
    category: "Áo",
    price: 380000,
    originalPrice: 490000,
    description: "Áo thun cổ tròn phom hộp rộng F5 (Boxy Fit) thuộc bộ sưu tập The No Style 251 từ Aureus Fashion. Sử dụng chất liệu sợi 100% Cotton cao cấp màu xám chì (charcoal grey) hiện đại, bề mặt mịn màng, co giãn và thoáng khí tối đa. Thiết kế tay áo raglan năng động với viền gấu tay phối dải xám sáng thời thượng và logo 'Athleisure' in sắc nét giữa ngực áo. Dáng áo phom hộp F5 hiện đại tôn dáng, che khuyết điểm tốt, chuẩn phong cách streetwear thời thượng.",
    images: [
      "/images/products/tshirt-boxyf5-grey-front.jpg",
      "/images/products/tshirt-boxyf5-grey-back.jpg",
      "/images/products/tshirt-boxyf5-black-front.jpg",
      "/images/products/tshirt-boxyf5-black-back.png",
      "/images/products/tshirt-boxyf5-white-front.jpg",
      "/images/products/tshirt-boxyf5-white-back.png",
      "/images/products/tshirt-boxyf5-navy-front.jpg",
      "/images/products/tshirt-boxyf5-navy-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Chì", hex: "#5E6064", imageIndex: 0 },
      { name: "Đen", hex: "#1A1A1A", imageIndex: 2 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 4 },
      { name: "Xanh Đen", hex: "#1C2541", imageIndex: 6 }
    ],
    rating: 4.8,
    reviews: 129,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Boxy Fit F5"
  },
  {
    id: 37,
    name: "Áo Thun Cổ Tròn Phối Màu Raglan Năng Động Cotton Mềm Mát Co Giãn Phom Hộp Rộng F5 - Màu Đen",
    category: "Áo",
    price: 380000,
    originalPrice: 490000,
    description: "Áo thun cổ tròn phom hộp rộng F5 (Boxy Fit) thuộc bộ sưu tập The No Style 251 từ Aureus Fashion. Sử dụng chất liệu sợi 100% Cotton cao cấp tông màu đen tuyền cá tính, co giãn tự nhiên, thoáng mát tối ưu. Thiết kế tay raglan phối đường cắt cúp vai thời thượng, gấu tay viền dải vải màu xám sáng tinh tế tạo điểm nhấn thể thao hiện đại. Điểm xuyết chữ in nghệ thuật 'Athleisure' tối giản trước ngực. Phom hộp F5 rũ đẹp, cá tính, cực kỳ ăn ý khi mix cùng quần jeans baggy hoặc quần shorts.",
    images: [
      "/images/products/tshirt-boxyf5-black-front.jpg",
      "/images/products/tshirt-boxyf5-black-back.png",
      "/images/products/tshirt-boxyf5-grey-front.jpg",
      "/images/products/tshirt-boxyf5-grey-back.jpg",
      "/images/products/tshirt-boxyf5-white-front.jpg",
      "/images/products/tshirt-boxyf5-white-back.png",
      "/images/products/tshirt-boxyf5-navy-front.jpg",
      "/images/products/tshirt-boxyf5-navy-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1A1A1A", imageIndex: 0 },
      { name: "Xám Chì", hex: "#5E6064", imageIndex: 2 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 4 },
      { name: "Xanh Đen", hex: "#1C2541", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 156,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Boxy Fit F5"
  },
  {
    id: 38,
    name: "Áo Thun Cổ Tròn Vải Cotton Co Giãn Giữ Phom Mềm Mịn In Hình Unreal Evolve Phom Rộng F4 - Màu Đen",
    category: "Áo",
    price: 390000,
    originalPrice: 500000,
    description: "Áo thun cổ tròn đồ họa tương lai Cyberpunk thuộc bộ sưu tập The No Style 278 từ Aureus Fashion. Chất liệu vải Cotton cao cấp kết hợp sợi spandex co giãn 4 chiều, giữ phom áo đứng chuẩn F4 và bề mặt tiếp xúc mềm mịn, mát mẻ suốt ngày dài. Mặt trước áo nổi bật với slogan nghệ thuật 'ADAPT TO SURVIVE FUTURE' phong cách stencil grunge bụi bặm. Mặt sau là tác phẩm đồ họa Mecha Cyborg ấn tượng với thông điệp 'BUILT TO ENDURE - EVOLVE OR BE OBSOLETE' đậm chất viễn tưởng và cá tính mạnh mẽ. Phom rộng F4 chuẩn phong cách streetwear hiện đại, cực chất khi diện cùng quần jeans baggy mài rách.",
    images: [
      "/images/products/tshirt-evolve-black-front.jpg",
      "/images/products/tshirt-evolve-black-back.jpg",
      "/images/products/tshirt-evolve-white-front.jpg",
      "/images/products/tshirt-evolve-white-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1A1A1A", imageIndex: 0 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 148,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Unreal Evolve"
  },
  {
    id: 39,
    name: "Áo Thun Cổ Tròn Vải Cotton Co Giãn Giữ Phom Mềm Mịn In Hình Unreal Evolve Phom Rộng F4 - Màu Trắng",
    category: "Áo",
    price: 390000,
    originalPrice: 500000,
    description: "Áo thun cổ tròn đồ họa tương lai Cyberpunk thuộc bộ sưu tập The No Style 278 từ Aureus Fashion. Sử dụng tông màu trắng sáng hiện đại trên nền chất liệu Cotton dệt mịn co giãn cao cấp, giữ phom đứng áo và thấm hút mồ hôi tối ưu. Mặt trước ngực in slogan nghệ thuật 'ADAPT TO SURVIVE FUTURE'. Điểm nhấn đắt giá ở mặt sau với hình in Mecha Cyborg cơ khí chi tiết cao cùng thông điệp 'BUILT TO ENDURE - EVOLVE OR BE OBSOLETE'. Thiết kế phom rộng F4 phóng khoáng, dễ dàng mix-match cùng quần baggy jeans hoặc cargo.",
    images: [
      "/images/products/tshirt-evolve-white-front.jpg",
      "/images/products/tshirt-evolve-white-back.jpg",
      "/images/products/tshirt-evolve-black-front.jpg",
      "/images/products/tshirt-evolve-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 0 },
      { name: "Đen", hex: "#1A1A1A", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 136,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Unreal Evolve"
  },
  {
    id: 40,
    name: "Áo Thun Cổ Tròn Phối Đường May Nổi Outseam Cá Tính Cotton Đứng Phom Phom Rộng F4 - Màu Trắng",
    category: "Áo",
    price: 380000,
    originalPrice: 490000,
    description: "Áo thun cổ tròn đường may nổi outseam thuộc bộ sưu tập The No Style 277 từ Aureus Fashion. Sử dụng chất liệu vải Cotton cao cấp tông màu trắng sáng, bề mặt mềm mịn, giữ phom áo đứng chuẩn F4 và thoáng khí vượt trội suốt cả ngày. Thiết kế phá cách với các đường may nổi outseam tinh xảo, gấu tay in slogan nghệ thuật 'MASTER YOUR OWN MIND'. Trung tâm thân trước là tác phẩm đồ họa phản ánh thời đại số với hình tượng nhân vật TV Head cùng thông điệp 'MIND CONTROL - CONTROL THE SYSTEM / OBEY • CONFORM • SUBMIT'. Phom rộng F4 cá tính, cực kỳ ăn ý khi phối cùng quần jeans baggy hoặc quần cargo.",
    images: [
      "/images/products/tshirt-outseam277-white-front.jpg",
      "/images/products/tshirt-outseam277-white-back.png",
      "/images/products/tshirt-outseam277-black-front.jpg",
      "/images/products/tshirt-outseam277-black-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 0 },
      { name: "Đen", hex: "#1A1A1A", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 139,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Outseam Cyber"
  },
  {
    id: 41,
    name: "Áo Thun Cổ Tròn Phối Đường May Nổi Outseam Cá Tính Cotton Đứng Phom Phom Rộng F4 - Màu Đen",
    category: "Áo",
    price: 380000,
    originalPrice: 490000,
    description: "Áo thun cổ tròn đường may nổi outseam thuộc bộ sưu tập The No Style 277 từ Aureus Fashion. Sử dụng chất liệu vải Cotton cao cấp tông màu đen tuyền nam tính, đứng phom, co giãn và thấm hút mồ hôi tối ưu. Thiết kế phá cách với các đường may nổi outseam gân viền tinh xảo, gấu tay in slogan 'MASTER YOUR OWN MIND'. Mặt trước nổi bật với tác phẩm đồ họa nghệ thuật TV Head sắc nét cùng thông điệp 'MIND CONTROL - CONTROL THE SYSTEM'. Dáng áo phom rộng F4 chuẩn phong cách streetwear nổi loạn và đậm chất nghệ thuật đường phố hiện đại.",
    images: [
      "/images/products/tshirt-outseam277-black-front.jpg",
      "/images/products/tshirt-outseam277-black-back.png",
      "/images/products/tshirt-outseam277-white-front.jpg",
      "/images/products/tshirt-outseam277-white-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1A1A1A", imageIndex: 0 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 162,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Outseam Cyber"
  },
  {
    id: 42,
    name: "Áo Thun Cổ Tròn Dáng Boxy Phối Màu Cotton Compact Co Giãn Giữ Phom In Nổi 3D Phom Hộp Rộng F5 - Màu Đen Phối Xám",
    category: "Áo",
    price: 390000,
    originalPrice: 510000,
    description: "Áo thun cổ tròn dáng boxy phối màu phong cách thể thao Athleisure thuộc bộ sưu tập The No Style 253 từ Aureus Fashion. Sử dụng chất liệu vải Cotton Compact cao cấp dệt sợi siêu mịn, co giãn 4 chiều linh hoạt và giữ phom áo đứng chuẩn hộp rộng F5. Thiết kế thân áo tông màu đen phối tay và sườn xám tiêu tương phản cá tính. Điểm nhấn trung tâm ngực in nổi 3D cao cấp chữ 'Athleisure - Athletic x Leisure' sắc sảo. Phom hộp rộng F5 rũ đẹp, tôn dáng, cực kỳ ăn ý khi mix cùng quần jeans baggy hoặc quần cargo.",
    images: [
      "/images/products/tshirt-boxy253-blackgrey-front.jpg",
      "/images/products/tshirt-boxy253-blackgrey-back.jpg",
      "/images/products/tshirt-boxy253-greyblack-front.jpg",
      "/images/products/tshirt-boxy253-greyblack-back.jpg",
      "/images/products/tshirt-boxy253-whiteblack-front.jpg",
      "/images/products/tshirt-boxy253-whiteblack-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen Phối Xám", hex: "#1A1A1A", imageIndex: 0 },
      { name: "Xám Phối Đen", hex: "#5E6064", imageIndex: 2 },
      { name: "Trắng Phối Đen", hex: "#FFFFFF", imageIndex: 4 }
    ],
    rating: 4.9,
    reviews: 145,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Boxy 3D Athleisure"
  },
  {
    id: 43,
    name: "Áo Thun Cổ Tròn Dáng Boxy Phối Màu Cotton Compact Co Giãn Giữ Phom In Nổi 3D Phom Hộp Rộng F5 - Màu Xám Phối Đen",
    category: "Áo",
    price: 390000,
    originalPrice: 510000,
    description: "Áo thun cổ tròn dáng boxy phối màu phong cách thể thao Athleisure thuộc bộ sưu tập The No Style 253 từ Aureus Fashion. Sử dụng chất liệu vải Cotton Compact cao cấp tông màu xám chì thời thượng, dệt sợi thoáng mát, co giãn tự nhiên và chống nhăn tối đa. Thiết kế cắt rập tay raglan và mảng sườn phối đen mạnh mẽ, ngực áo in nổi 3D chữ 'Athleisure - Athletic x Leisure' nổi bật. Phom hộp rộng F5 hiện đại mang đến diện mạo phóng khoáng và chuẩn chất streetwear.",
    images: [
      "/images/products/tshirt-boxy253-greyblack-front.jpg",
      "/images/products/tshirt-boxy253-greyblack-back.jpg",
      "/images/products/tshirt-boxy253-blackgrey-front.jpg",
      "/images/products/tshirt-boxy253-blackgrey-back.jpg",
      "/images/products/tshirt-boxy253-whiteblack-front.jpg",
      "/images/products/tshirt-boxy253-whiteblack-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Phối Đen", hex: "#5E6064", imageIndex: 0 },
      { name: "Đen Phối Xám", hex: "#1A1A1A", imageIndex: 2 },
      { name: "Trắng Phối Đen", hex: "#FFFFFF", imageIndex: 4 }
    ],
    rating: 4.9,
    reviews: 153,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Boxy 3D Athleisure"
  },
  {
    id: 44,
    name: "Áo Thun Cổ Tròn Dáng Boxy Phối Màu Cotton Compact Co Giãn Giữ Phom In Nổi 3D Phom Hộp Rộng F5 - Màu Trắng Phối Đen",
    category: "Áo",
    price: 390000,
    originalPrice: 510000,
    description: "Áo thun cổ tròn dáng boxy phối màu phong cách thể thao Athleisure thuộc bộ sưu tập The No Style 253 từ Aureus Fashion. Sử dụng chất liệu vải Cotton Compact cao cấp tông màu trắng sáng, bề mặt mịn màng, co giãn 4 chiều linh hoạt và giữ phom áo đứng chuẩn hộp rộng F5. Thiết kế raglan thể thao cắt rập phối mảng màu đen mạnh mẽ ở cầu vai, tay áo và hai bên sườn. Ngực áo dập nổi 3D cao cấp chữ 'Athleisure - Athletic x Leisure' sang trọng. Phom hộp rộng F5 tôn dáng, năng động và chuẩn phong cách streetwear hiện đại.",
    images: [
      "/images/products/tshirt-boxy253-whiteblack-front.jpg",
      "/images/products/tshirt-boxy253-whiteblack-back.jpg",
      "/images/products/tshirt-boxy253-blackgrey-front.jpg",
      "/images/products/tshirt-boxy253-blackgrey-back.jpg",
      "/images/products/tshirt-boxy253-greyblack-front.jpg",
      "/images/products/tshirt-boxy253-greyblack-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng Phối Đen", hex: "#FFFFFF", imageIndex: 0 },
      { name: "Đen Phối Xám", hex: "#1A1A1A", imageIndex: 2 },
      { name: "Xám Phối Đen", hex: "#5E6064", imageIndex: 4 }
    ],
    rating: 5.0,
    reviews: 168,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Boxy 3D Athleisure"
  },
  {
    id: 45,
    name: "Áo Thun Cổ Tròn Dáng Boxy Vải Loang Batik Tản Nhiệt Thoáng Mịn In Nổi Wanderlust Phom Hộp Rộng F5 - Màu Xanh Denim Loang",
    category: "Áo",
    price: 390000,
    originalPrice: 520000,
    description: "Áo thun cổ tròn dáng boxy vải loang Batik thuộc bộ sưu tập The No Style 281 từ Aureus Fashion. Ứng dụng công nghệ nhuộm wash loang khoáng chất (Batik mineral wash) thủ công độc bản trên nền sắc xanh denim cổ điển, mang lại họa tiết loang tự nhiên không trùng lặp. Chất vải Cotton cao cấp kết cấu tản nhiệt siêu thoáng khí, bề mặt mềm mịn và kháng khuẩn tốt. Trung tâm ngực in nổi artwork phong cảnh núi rừng hùng vĩ cùng thông điệp 'WANDERLUST - Wander more WORRY LESS'. Phom hộp rộng F5 phóng khoáng, cực chất khi mix cùng quần jeans baggy hoặc quần shorts đi du lịch, dã ngoại.",
    images: [
      "/images/products/tshirt-batik281-blue-front.jpg",
      "/images/products/tshirt-batik281-blue-back.jpg",
      "/images/products/tshirt-batik281-brown-front.jpg",
      "/images/products/tshirt-batik281-brown-back.jpg",
      "/images/products/tshirt-batik281-grey-front.jpg",
      "/images/products/tshirt-batik281-grey-back.jpg",
      "/images/products/tshirt-batik281-black-front.jpg",
      "/images/products/tshirt-batik281-black-back.jpg",
      "/images/products/tshirt-batik281-white-front.jpg",
      "/images/products/tshirt-batik281-white-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Denim Loang", hex: "#4A6572", imageIndex: 0 },
      { name: "Nâu Rêu Loang", hex: "#7D7468", imageIndex: 2 },
      { name: "Xám Khói Loang", hex: "#55585C", imageIndex: 4 },
      { name: "Đen Wash Loang", hex: "#2B2B2B", imageIndex: 6 },
      { name: "Trắng Loang", hex: "#EAEAEA", imageIndex: 8 }
    ],
    rating: 4.9,
    reviews: 154,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Batik Wanderlust"
  },
  {
    id: 46,
    name: "Áo Thun Cổ Tròn Dáng Boxy Vải Loang Batik Tản Nhiệt Thoáng Mịn In Nổi Wanderlust Phom Hộp Rộng F5 - Màu Nâu Rêu Loang",
    category: "Áo",
    price: 390000,
    originalPrice: 520000,
    description: "Áo thun cổ tròn dáng boxy vải loang Batik thuộc bộ sưu tập The No Style 281 từ Aureus Fashion. Ứng dụng công nghệ nhuộm wash loang khoáng chất (Batik mineral wash) thủ công độc bản trên nền gam màu nâu rêu / nâu cát trầm ấm, bụi bặm đậm chất phiêu lưu. Chất vải Cotton dệt sợi tản nhiệt làm mát tự nhiên, co giãn nhẹ và giữ phom áo hộp F5 chuẩn dáng suốt ngày dài. Mặt trước in nổi sắc sảo họa tiết thiên nhiên kỳ vĩ cùng slogan truyền cảm hứng 'WANDERLUST - Wander more WORRY LESS'. Phom áo thời thượng dễ dàng phối đồ theo phong cách camping, outdoor hay streetwear dạo phố.",
    images: [
      "/images/products/tshirt-batik281-brown-front.jpg",
      "/images/products/tshirt-batik281-brown-back.jpg",
      "/images/products/tshirt-batik281-blue-front.jpg",
      "/images/products/tshirt-batik281-blue-back.jpg",
      "/images/products/tshirt-batik281-grey-front.jpg",
      "/images/products/tshirt-batik281-grey-back.jpg",
      "/images/products/tshirt-batik281-black-front.jpg",
      "/images/products/tshirt-batik281-black-back.jpg",
      "/images/products/tshirt-batik281-white-front.jpg",
      "/images/products/tshirt-batik281-white-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Nâu Rêu Loang", hex: "#7D7468", imageIndex: 0 },
      { name: "Xanh Denim Loang", hex: "#4A6572", imageIndex: 2 },
      { name: "Xám Khói Loang", hex: "#55585C", imageIndex: 4 },
      { name: "Đen Wash Loang", hex: "#2B2B2B", imageIndex: 6 },
      { name: "Trắng Loang", hex: "#EAEAEA", imageIndex: 8 }
    ],
    rating: 5.0,
    reviews: 161,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Batik Wanderlust"
  },
  {
    id: 47,
    name: "Áo Thun Cổ Tròn Dáng Boxy Vải Loang Batik Tản Nhiệt Thoáng Mịn In Nổi Wanderlust Phom Hộp Rộng F5 - Màu Xám Khói Loang",
    category: "Áo",
    price: 390000,
    originalPrice: 520000,
    description: "Áo thun cổ tròn dáng boxy vải loang Batik thuộc bộ sưu tập The No Style 281 từ Aureus Fashion. Ứng dụng kỹ thuật nhuộm wash loang khoáng chất (Batik mineral wash) thủ công độc bản trên tông xám khói cá tính, bụi bặm và thời thượng. Chất liệu Cotton cao cấp tản nhiệt làm mát tự nhiên, co giãn nhẹ và giữ phom áo hộp F5 chuẩn dáng suốt ngày dài. Mặt trước in nổi sắc nét họa tiết núi rừng kỳ vĩ cùng slogan truyền cảm hứng 'WANDERLUST - Wander more WORRY LESS'. Phom áo rộng rãi, trẻ trung, cực kỳ thích hợp cho các buổi dạo phố, cà phê hoặc du lịch.",
    images: [
      "/images/products/tshirt-batik281-grey-front.jpg",
      "/images/products/tshirt-batik281-grey-back.jpg",
      "/images/products/tshirt-batik281-black-front.jpg",
      "/images/products/tshirt-batik281-black-back.jpg",
      "/images/products/tshirt-batik281-white-front.jpg",
      "/images/products/tshirt-batik281-white-back.jpg",
      "/images/products/tshirt-batik281-blue-front.jpg",
      "/images/products/tshirt-batik281-blue-back.jpg",
      "/images/products/tshirt-batik281-brown-front.jpg",
      "/images/products/tshirt-batik281-brown-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Khói Loang", hex: "#55585C", imageIndex: 0 },
      { name: "Đen Wash Loang", hex: "#2B2B2B", imageIndex: 2 },
      { name: "Trắng Loang", hex: "#EAEAEA", imageIndex: 4 },
      { name: "Xanh Denim Loang", hex: "#4A6572", imageIndex: 6 },
      { name: "Nâu Rêu Loang", hex: "#7D7468", imageIndex: 8 }
    ],
    rating: 4.9,
    reviews: 147,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Batik Wanderlust"
  },
  {
    id: 48,
    name: "Áo Thun Cổ Tròn Dáng Boxy Vải Loang Batik Tản Nhiệt Thoáng Mịn In Nổi Wanderlust Phom Hộp Rộng F5 - Màu Đen Wash Loang",
    category: "Áo",
    price: 390000,
    originalPrice: 520000,
    description: "Áo thun cổ tròn dáng boxy vải loang Batik thuộc bộ sưu tập The No Style 281 từ Aureus Fashion. Xử lý hiệu ứng wash khoáng chất trên nền đen tuyền tạo ra những mảng màu đen loang xám khói độc bản, đậm chất rock chic và gothic streetwear. Chất vải Cotton tản nhiệt mềm mịn, thoáng khí tối ưu, kháng khuẩn và không bai dão. Họa tiết núi rừng Wanderlust in nổi 3D sang trọng trước ngực áo. Dáng áo phom hộp rộng F5 tôn dáng, hoàn hảo khi mix cùng quần jeans baggy mài rách hoặc quần cargo túi hộp.",
    images: [
      "/images/products/tshirt-batik281-black-front.jpg",
      "/images/products/tshirt-batik281-black-back.jpg",
      "/images/products/tshirt-batik281-grey-front.jpg",
      "/images/products/tshirt-batik281-grey-back.jpg",
      "/images/products/tshirt-batik281-white-front.jpg",
      "/images/products/tshirt-batik281-white-back.jpg",
      "/images/products/tshirt-batik281-blue-front.jpg",
      "/images/products/tshirt-batik281-blue-back.jpg",
      "/images/products/tshirt-batik281-brown-front.jpg",
      "/images/products/tshirt-batik281-brown-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen Wash Loang", hex: "#2B2B2B", imageIndex: 0 },
      { name: "Xám Khói Loang", hex: "#55585C", imageIndex: 2 },
      { name: "Trắng Loang", hex: "#EAEAEA", imageIndex: 4 },
      { name: "Xanh Denim Loang", hex: "#4A6572", imageIndex: 6 },
      { name: "Nâu Rêu Loang", hex: "#7D7468", imageIndex: 8 }
    ],
    rating: 5.0,
    reviews: 176,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Batik Wanderlust"
  },
  {
    id: 49,
    name: "Áo Thun Cổ Tròn Dáng Boxy Vải Loang Batik Tản Nhiệt Thoáng Mịn In Nổi Wanderlust Phom Hộp Rộng F5 - Màu Trắng Loang",
    category: "Áo",
    price: 390000,
    originalPrice: 520000,
    description: "Áo thun cổ tròn dáng boxy vải loang Batik thuộc bộ sưu tập The No Style 281 từ Aureus Fashion. Kỹ thuật wash loang mây khói khoáng chất (Batik mineral wash) thủ công trên nền trắng sứ tinh khôi, tạo nên những đường vân mây loang xám khói nhẹ nhàng, tinh tế và độc nhất vô nhị. Chất vải Cotton tản nhiệt mềm mát cao cấp, kháng khuẩn và giữ phom áo hộp F5 chuẩn dáng suốt ngày dài. Mặt trước in nổi artwork phong cảnh núi rừng Wanderlust sắc nét cùng thông điệp 'Wander more WORRY LESS'. Phom rộng thời thượng, cực kỳ tươi sáng và thanh lịch cho mọi chuyến du lịch hay dạo phố.",
    images: [
      "/images/products/tshirt-batik281-white-front.jpg",
      "/images/products/tshirt-batik281-white-back.jpg",
      "/images/products/tshirt-batik281-grey-front.jpg",
      "/images/products/tshirt-batik281-grey-back.jpg",
      "/images/products/tshirt-batik281-black-front.jpg",
      "/images/products/tshirt-batik281-black-back.jpg",
      "/images/products/tshirt-batik281-blue-front.jpg",
      "/images/products/tshirt-batik281-blue-back.jpg",
      "/images/products/tshirt-batik281-brown-front.jpg",
      "/images/products/tshirt-batik281-brown-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng Loang", hex: "#EAEAEA", imageIndex: 0 },
      { name: "Xám Khói Loang", hex: "#55585C", imageIndex: 2 },
      { name: "Đen Wash Loang", hex: "#2B2B2B", imageIndex: 4 },
      { name: "Xanh Denim Loang", hex: "#4A6572", imageIndex: 6 },
      { name: "Nâu Rêu Loang", hex: "#7D7468", imageIndex: 8 }
    ],
    rating: 5.0,
    reviews: 182,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Batik Wanderlust"
  },
  {
    id: 50,
    name: "Áo Thun Cổ Tròn Dáng Rộng Streetwear Cotton 2 Chiều Đứng Phom Bền Màu Phom Hộp Rộng F5 - Màu Trắng",
    category: "Áo",
    price: 380000,
    originalPrice: 490000,
    description: "Áo thun cổ tròn dáng rộng streetwear thuộc bộ sưu tập The No Style 273 từ Aureus Fashion. Sử dụng chất liệu vải Cotton 2 chiều cao cấp dệt mật độ cao dày dặn, giữ phom áo đứng chuẩn hộp rộng F5, bề mặt tiếp xúc mịn mát, chống xù lông và cực kỳ bền màu qua nhiều lần giặt. Nổi bật với tác phẩm đồ họa nghệ thuật mang đậm phong cách tương lai Cyberpunk: nhân vật đeo kính viễn tưởng hướng về phía trước kết hợp vầng hào quang đỏ rực cùng thông điệp truyền cảm hứng 'THE FUTURE IS YOURS / DREAM - CREATE YOUR REALITY'. Phom hộp rộng F5 phóng khoáng, dễ dàng mix cùng quần jeans baggy hoặc quần cargo chuẩn phong cách đường phố.",
    images: [
      "/images/products/tshirt-dream273-white-front.jpg",
      "/images/products/tshirt-dream273-white-back.png",
      "/images/products/tshirt-dream273-black-front.jpg",
      "/images/products/tshirt-dream273-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 0 },
      { name: "Đen", hex: "#1A1A1A", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 149,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Dream Streetwear"
  },
  {
    id: 51,
    name: "Áo Thun Cổ Tròn Dáng Rộng Streetwear Cotton 2 Chiều Đứng Phom Bền Màu Phom Hộp Rộng F5 - Màu Đen",
    category: "Áo",
    price: 380000,
    originalPrice: 490000,
    description: "Áo thun cổ tròn dáng rộng streetwear thuộc bộ sưu tập The No Style 273 từ Aureus Fashion. Tông màu đen tuyền nam tính kết hợp chất vải Cotton 2 chiều đứng phom chuẩn hộp rộng F5, mềm mịn, thoáng khí và co giãn nhẹ tạo cảm giác dễ chịu khi vận động. Artwork mặt trước với đồ họa nhân vật viễn tưởng nổi bật trên vầng tròn đỏ và chữ in 'THE FUTURE IS YOURS / DREAM' sắc nét, không bong tróc. Dáng áo phom hộp F5 thời thượng, tôn dáng và che khuyết điểm hoàn hảo.",
    images: [
      "/images/products/tshirt-dream273-black-front.jpg",
      "/images/products/tshirt-dream273-black-back.jpg",
      "/images/products/tshirt-dream273-white-front.jpg",
      "/images/products/tshirt-dream273-white-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1A1A1A", imageIndex: 0 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 167,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Dream Streetwear"
  },
  {
    id: 52,
    name: "Áo Thun Cổ Tròn Icevibes™ High Iq Cool Comfort Vải 2 Da Nhanh Khô Thoáng Da Gân Nổi Phom Rộng F4 - Màu Xám Tiêu Sáng",
    category: "Áo",
    price: 390000,
    originalPrice: 510000,
    description: "Áo thun cổ tròn thể thao công nghệ Icevibes™ High IQ Cool Comfort thuộc bộ sưu tập The No Style 254 từ Aureus Fashion. Sử dụng chất liệu vải dệt 2 da (double-faced fabric) cấu trúc gân nổi vi mô cao cấp tông màu xám tiêu sáng trẻ trung, mặt trong thấm hút mồ hôi cực nhanh và đẩy ẩm ra mặt ngoài tản nhiệt, giữ cho làn da luôn khô thoáng, mát lạnh tức thì trong mọi điều kiện thời tiết. Thiết kế tối giản mang hơi hướng tương lai (minimal techwear) với đường cắt cúp cầu vai thể thao, đường may gân nổi cánh tay và tà áo xẻ nhẹ năng động. Phom rộng F4 đứng dáng, tôn chiều cao và độ rũ tự nhiên hoàn hảo.",
    images: [
      "/images/products/tshirt-icevibes254-grey-front.jpg",
      "/images/products/tshirt-icevibes254-grey-back.jpg",
      "/images/products/tshirt-icevibes254-white-front.jpg",
      "/images/products/tshirt-icevibes254-white-back.jpg",
      "/images/products/tshirt-icevibes254-black-front.jpg",
      "/images/products/tshirt-icevibes254-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Tiêu Sáng", hex: "#E2E4E6", imageIndex: 0 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 2 },
      { name: "Đen", hex: "#1A1A1A", imageIndex: 4 }
    ],
    rating: 4.9,
    reviews: 158,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Icevibes™ Cool Comfort"
  },
  {
    id: 53,
    name: "Áo Thun Cổ Tròn Icevibes™ High Iq Cool Comfort Vải 2 Da Nhanh Khô Thoáng Da Gân Nổi Phom Rộng F4 - Màu Trắng",
    category: "Áo",
    price: 390000,
    originalPrice: 510000,
    description: "Áo thun cổ tròn thể thao công nghệ Icevibes™ High IQ Cool Comfort thuộc bộ sưu tập The No Style 254 từ Aureus Fashion. Sử dụng chất liệu vải dệt 2 da (double-faced fabric) công nghệ làm mát Icevibes™ tông màu trắng sứ sang trọng và tinh tế. Bề mặt vải dệt gân nổi chống nhăn xù, co giãn 4 chiều linh hoạt, kháng khuẩn và nhanh khô vượt trội. Thiết kế cầu vai raglan vát góc thể thao, đường may dập nổi độc đáo và tà xẻ cách điệu. Phom rộng F4 mang lại sự tự do tối đa cho mọi hoạt động hàng ngày từ đi làm, đi chơi đến tập luyện thể thao.",
    images: [
      "/images/products/tshirt-icevibes254-white-front.jpg",
      "/images/products/tshirt-icevibes254-white-back.jpg",
      "/images/products/tshirt-icevibes254-grey-front.jpg",
      "/images/products/tshirt-icevibes254-grey-back.jpg",
      "/images/products/tshirt-icevibes254-black-front.jpg",
      "/images/products/tshirt-icevibes254-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 0 },
      { name: "Xám Tiêu Sáng", hex: "#E2E4E6", imageIndex: 2 },
      { name: "Đen", hex: "#1A1A1A", imageIndex: 4 }
    ],
    rating: 5.0,
    reviews: 172,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Icevibes™ Cool Comfort"
  },
  {
    id: 54,
    name: "Áo Thun Cổ Tròn Icevibes™ High Iq Cool Comfort Vải 2 Da Nhanh Khô Thoáng Da Gân Nổi Phom Rộng F4 - Màu Đen",
    category: "Áo",
    price: 390000,
    originalPrice: 510000,
    description: "Áo thun cổ tròn thể thao công nghệ Icevibes™ High IQ Cool Comfort thuộc bộ sưu tập The No Style 254 từ Aureus Fashion. Sử dụng chất liệu vải dệt 2 da (double-faced fabric) công nghệ làm mát Icevibes™ tông màu đen tuyền nam tính, cá tính và sang trọng. Bề mặt vải dệt gân vi mô chống nhăn xù, đẩy ẩm cực nhanh giữ cơ thể luôn thoáng mát, không đọng mồ hôi. Thiết kế cầu vai raglan vát góc thể thao, đường may định hình dập nổi và tà áo xẻ nhẹ năng động. Phom rộng F4 đứng dáng chuẩn phong cách minimal techwear hiện đại.",
    images: [
      "/images/products/tshirt-icevibes254-black-front.jpg",
      "/images/products/tshirt-icevibes254-black-back.jpg",
      "/images/products/tshirt-icevibes254-white-front.jpg",
      "/images/products/tshirt-icevibes254-white-back.jpg",
      "/images/products/tshirt-icevibes254-grey-front.jpg",
      "/images/products/tshirt-icevibes254-grey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1A1A1A", imageIndex: 0 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 2 },
      { name: "Xám Tiêu Sáng", hex: "#E2E4E6", imageIndex: 4 }
    ],
    rating: 5.0,
    reviews: 185,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Icevibes™ Cool Comfort"
  },
  {
    id: 55,
    name: "Áo Thun Cổ Tròn Vải Cotton Co Giãn Giữ Phom Thoáng Mát In Hình Unreal Silence Phom Rộng F4 - Màu Trắng",
    category: "Áo",
    price: 390000,
    originalPrice: 510000,
    description: "Áo thun cổ tròn nghệ thuật streetwear 'Built In Silence' thuộc bộ sưu tập The No Style 276 từ Aureus Fashion. Sử dụng chất liệu vải Cotton cao cấp kết hợp sợi spandex co giãn, giữ phom áo đứng chuẩn F4 và bề mặt tiếp xúc mềm mịn, mát mẻ suốt ngày dài. Mặt trước áo nổi bật với tác phẩm đồ họa hội họa đường phố đầy tính tự sự: hình ảnh nhân vật đội mũ trùm đứng dưới ánh đèn đêm mưa cùng thông điệp truyền cảm hứng mạnh mẽ 'BUILT IN SILENCE - LET ACTION SPEAK / CREATE YOUR FUTURE - ONE DAY OR DAY ONE YOU DECIDE'. Điểm nhấn tinh tế với dòng chữ 'BUILT IN SILENCE' in sắc nét trên bắp tay áo. Phom rộng F4 phóng khoáng, dễ dàng mix-match cùng quần jeans baggy hoặc quần short thể thao.",
    images: [
      "/images/products/tshirt-silence276-white-front.jpg",
      "/images/products/tshirt-silence276-white-back.png",
      "/images/products/tshirt-silence276-black-front.jpg",
      "/images/products/tshirt-silence276-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 0 },
      { name: "Đen", hex: "#1A1A1A", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 136,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Unreal Silence"
  },
  {
    id: 56,
    name: "Áo Thun Cổ Tròn Vải Cotton Co Giãn Giữ Phom Thoáng Mát In Hình Unreal Silence Phom Rộng F4 - Màu Đen",
    category: "Áo",
    price: 390000,
    originalPrice: 510000,
    description: "Áo thun cổ tròn nghệ thuật streetwear 'Built In Silence' thuộc bộ sưu tập The No Style 276 từ Aureus Fashion. Tông màu đen tuyền nam tính kết hợp chất vải Cotton co giãn 4 chiều mềm mịn, thoáng khí, chống nhăn xù và giữ phom áo đứng chuẩn F4. Mặt trước nổi bật với artwork hội họa bí ẩn: nhân vật trùm mũ đơn độc dưới làn mưa và ánh đèn vàng rực rỡ, kèm các câu slogan truyền động lực sâu sắc 'BUILT IN SILENCE - LET ACTION SPEAK' và 'CREATE YOUR FUTURE'. Chi tiết in typography 'BUILT IN SILENCE' ở tay áo tạo điểm nhấn độc đáo. Dáng áo phom rộng F4 mang phong cách đường phố phóng khoáng và cá tính.",
    images: [
      "/images/products/tshirt-silence276-black-front.jpg",
      "/images/products/tshirt-silence276-black-back.jpg",
      "/images/products/tshirt-silence276-white-front.jpg",
      "/images/products/tshirt-silence276-white-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1A1A1A", imageIndex: 0 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 148,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Unreal Silence"
  },
  {
    id: 57,
    name: "Áo Thun Cổ Tròn Dáng Boxy Flexfit™ Cotton Compact 225Gsm Co Giãn Hack Dáng Chống Gião Cổ Phom Rộng F4 - Màu Xanh Navy",
    category: "Áo",
    price: 360000,
    originalPrice: 480000,
    description: "Áo thun cổ tròn dáng boxy tối giản thuộc bộ sưu tập Non Branded 047 từ Aureus Fashion. Được phát triển trên nền chất liệu Cotton Compact 225Gsm dệt chải kỹ cao cấp kết hợp công nghệ co giãn đa chiều Flexfit™, mang đến bề mặt vải mịn lì, mát lạnh, chống xù lông và có khả năng phục hồi phom dáng vượt trội sau nhiều lần giặt. Thiết kế cổ tròn bo rib 2 lớp dệt mật độ cao chống gião cổ triệt để. Dáng áo Boxy cắt vuông hiện đại tạo hiệu ứng hack dáng tôn chiều cao, vai rơi thả nhẹ và phom rộng F4 chuẩn phong cách minimal streetwear. Điểm nhấn tinh giản với chi tiết thêu vi mô chữ 'Tue' thanh lịch bên ngực trái.",
    images: [
      "/images/products/tshirt-nonbranded047-navy-front.jpg",
      "/images/products/tshirt-nonbranded047-navy-back.jpg",
      "/images/products/tshirt-nonbranded047-grey-front.jpg",
      "/images/products/tshirt-nonbranded047-grey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Navy", hex: "#1F293D", imageIndex: 0 },
      { name: "Xám Tiêu Sáng", hex: "#D1D5DB", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 164,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "FlexFit™ Boxy"
  },
  {
    id: 58,
    name: "Áo Thun Cổ Tròn Dáng Boxy Flexfit™ Cotton Compact 225Gsm Co Giãn Hack Dáng Chống Gião Cổ Phom Rộng F4 - Màu Xám Tiêu Sáng",
    category: "Áo",
    price: 360000,
    originalPrice: 480000,
    description: "Áo thun cổ tròn dáng boxy tối giản thuộc bộ sưu tập Non Branded 047 từ Aureus Fashion. Sử dụng chất vải Cotton Compact định lượng 225Gsm dày dặn đứng phom, công nghệ làm mát và đàn hồi Flexfit™ cao cấp tạo cảm giác mềm mịn, thoáng khí tối đa suốt ngày dài. Cổ áo bo rib dệt đôi công nghệ chống gião độc quyền giữ cho đường viền cổ luôn phẳng phiu, cứng cáp. Phom dáng Boxy F4 cắt cúp gọn gàng giúp kéo dài tỉ lệ đôi chân, mang lại diện mạo trẻ trung, năng động và thời thượng. Ngực trái điểm xuyết thêu chữ vi mô 'Fri' tinh tế, là item hoàn hảo cho phong cách Daily Minimalist.",
    images: [
      "/images/products/tshirt-nonbranded047-grey-front.jpg",
      "/images/products/tshirt-nonbranded047-grey-back.jpg",
      "/images/products/tshirt-nonbranded047-navy-front.jpg",
      "/images/products/tshirt-nonbranded047-navy-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Tiêu Sáng", hex: "#D1D5DB", imageIndex: 0 },
      { name: "Xanh Navy", hex: "#1F293D", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 152,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "FlexFit™ Boxy"
  },
  {
    id: 59,
    name: "Áo Thun Cổ Tròn Dáng Boxy Airdry™ Vải Lưới Thoát Nhiệt Rã Phối Sọc Tay Năng Động Phom Rộng F4 - Màu Xanh Rêu",
    category: "Áo",
    price: 390000,
    originalPrice: 520000,
    description: "Áo thun thể thao vải lưới dáng boxy phong cách Blokecore / Jersey Streetwear thuộc bộ sưu tập The No Style 208 từ Aureus Fashion. Ứng dụng chất liệu vải lưới dệt tổ ong cao cấp công nghệ Airdry™ siêu thoáng khí, thoát nhiệt và bay hơi ẩm thần tốc, mang lại cảm giác nhẹ tênh, mát lạnh sảng khoái suốt ngày dài. Thiết kế dáng Boxy phom rộng F4 thời thượng, phối đường sọc kép thể thao chạy dọc cầu vai và tay áo. Mặt trước in số thi đấu '36' viền chỉ nổi bật, lưng sau in typography thể thao bản lớn 'PEACE IN EVERY CORNER' đậm chất đường phố. Hoàn hảo khi diện layer cùng áo thun lót bên trong hoặc phối với quần short dù, quần jeans baggy cá tính.",
    images: [
      "/images/products/tshirt-airdry208-moss-front.jpg",
      "/images/products/tshirt-airdry208-moss-back.jpg",
      "/images/products/tshirt-airdry208-red-front.jpg",
      "/images/products/tshirt-airdry208-red-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Rêu", hex: "#4B5340", imageIndex: 0 },
      { name: "Đỏ", hex: "#D32F2F", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 142,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Mesh"
  },
  {
    id: 60,
    name: "Áo Thun Cổ Tròn Dáng Boxy Airdry™ Vải Lưới Thoát Nhiệt Rã Phối Sọc Tay Năng Động Phom Rộng F4 - Màu Đỏ",
    category: "Áo",
    price: 390000,
    originalPrice: 520000,
    description: "Áo thun thể thao vải lưới dáng boxy phong cách Blokecore / Jersey Streetwear thuộc bộ sưu tập The No Style 208 từ Aureus Fashion. Tông màu đỏ thể thao rực rỡ kết hợp rã phối mảng ngực và bo cổ viền trắng tương phản bắt mắt. Chất liệu vải lưới Airdry™ dệt mắt nhỏ cao cấp chống cọ xát, tản nhiệt cực nhanh, bền màu và không nhăn nhàu. Mặt trước in số '02' đồ họa sọc ngang tốc độ, tay áo chạy sọc viền kép năng động và lưng sau nổi bật với thông điệp 'GOLDEN BRIDGE'S EMBRACE'. Phom rộng Boxy F4 hack dáng, giải phóng tối đa sự thoải mái cho phong cách thời trang thể thao đường phố hiện đại.",
    images: [
      "/images/products/tshirt-airdry208-red-front.jpg",
      "/images/products/tshirt-airdry208-red-back.jpg",
      "/images/products/tshirt-airdry208-moss-front.jpg",
      "/images/products/tshirt-airdry208-moss-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đỏ", hex: "#D32F2F", imageIndex: 0 },
      { name: "Xanh Rêu", hex: "#4B5340", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 168,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Mesh"
  },
  {
    id: 61,
    name: "Áo Thun Tay Dài Raglan Flexfit™ 190Gsm Mỏng Mịn Co Giãn 4 Chiều Tay Xỏ Ngón Phom Vừa F3 - Màu Xám Khói Sáng",
    category: "Áo",
    price: 380000,
    originalPrice: 490000,
    description: "Áo thun tay dài thể thao công nghệ Flexfit™ thuộc bộ sưu tập Non Branded 052 từ Aureus Fashion. Sử dụng chất liệu vải Flexfit™ cao cấp định lượng 190Gsm mỏng nhẹ, bề mặt chải kỹ siêu mềm mượt như làn da thứ hai, co giãn 4 chiều vượt trội giúp vận động tối đa mà không gây gò bó. Thiết kế cầu vai raglan vát cong thể thao tôn dáng ngực và vai, đường may phẳng êm ái chống ma sát. Chi tiết cổ tay thiết kế khe xỏ ngón tay cái (thumbholes) thông minh giúp cố định ống tay khi chạy bộ, tập gym hoặc che mu bàn tay khi ra ngoài trời. Phom vừa F3 gọn gàng, năng động và tôn dáng.",
    images: [
      "/images/products/tshirt-raglan052-grey-front.jpg",
      "/images/products/tshirt-raglan052-grey-back.jpg",
      "/images/products/tshirt-raglan052-blue-front.jpg",
      "/images/products/tshirt-raglan052-blue-back.jpg",
      "/images/products/tshirt-raglan052-charcoal-front.jpg",
      "/images/products/tshirt-raglan052-charcoal-back.jpg",
      "/images/products/tshirt-raglan052-navy-front.jpg",
      "/images/products/tshirt-raglan052-navy-back.jpg",
      "/images/products/tshirt-raglan052-white-front.png",
      "/images/products/tshirt-raglan052-white-back.png",
      "/images/products/tshirt-raglan052-black-front.jpg",
      "/images/products/tshirt-raglan052-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Khói Sáng", hex: "#D5D6D8", imageIndex: 0 },
      { name: "Xanh Thép", hex: "#59738A", imageIndex: 2 },
      { name: "Xám Tiêu Đậm", hex: "#6E7278", imageIndex: 4 },
      { name: "Xanh Đen", hex: "#232A3B", imageIndex: 6 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 8 },
      { name: "Đen", hex: "#1A1A1A", imageIndex: 10 }
    ],
    rating: 4.9,
    reviews: 128,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "FlexFit™ Raglan"
  },
  {
    id: 62,
    name: "Áo Thun Tay Dài Raglan Flexfit™ 190Gsm Mỏng Mịn Co Giãn 4 Chiều Tay Xỏ Ngón Phom Vừa F3 - Màu Xanh Thép",
    category: "Áo",
    price: 380000,
    originalPrice: 490000,
    description: "Áo thun tay dài thể thao công nghệ Flexfit™ thuộc bộ sưu tập Non Branded 052 từ Aureus Fashion. Tông màu xanh thép (Steel Blue) hiện đại, nam tính và thanh lịch. Chất vải dệt Flexfit™ 190Gsm mỏng mát, thấm hút mồ hôi và nhanh khô vượt trội, giữ cơ thể luôn thoáng đãng trong mọi cường độ tập luyện. Cấu trúc raglan thể thao giảm áp lực vai gáy, kết hợp đường cắt cúp công thái học và ống tay xỏ ngón tay cái tiện dụng. Phom dáng vừa vặn F3 chuẩn athletic fit, hoàn hảo cho các hoạt động thể thao ngoài trời, phòng tập gym hoặc phong cách athleisure hàng ngày.",
    images: [
      "/images/products/tshirt-raglan052-blue-front.jpg",
      "/images/products/tshirt-raglan052-blue-back.jpg",
      "/images/products/tshirt-raglan052-grey-front.jpg",
      "/images/products/tshirt-raglan052-grey-back.jpg",
      "/images/products/tshirt-raglan052-charcoal-front.jpg",
      "/images/products/tshirt-raglan052-charcoal-back.jpg",
      "/images/products/tshirt-raglan052-navy-front.jpg",
      "/images/products/tshirt-raglan052-navy-back.jpg",
      "/images/products/tshirt-raglan052-white-front.png",
      "/images/products/tshirt-raglan052-white-back.png",
      "/images/products/tshirt-raglan052-black-front.jpg",
      "/images/products/tshirt-raglan052-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Thép", hex: "#59738A", imageIndex: 0 },
      { name: "Xám Khói Sáng", hex: "#D5D6D8", imageIndex: 2 },
      { name: "Xám Tiêu Đậm", hex: "#6E7278", imageIndex: 4 },
      { name: "Xanh Đen", hex: "#232A3B", imageIndex: 6 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 8 },
      { name: "Đen", hex: "#1A1A1A", imageIndex: 10 }
    ],
    rating: 5.0,
    reviews: 139,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "FlexFit™ Raglan"
  },
  {
    id: 63,
    name: "Áo Thun Tay Dài Raglan Flexfit™ 190Gsm Mỏng Mịn Co Giãn 4 Chiều Tay Xỏ Ngón Phom Vừa F3 - Màu Xám Tiêu Đậm",
    category: "Áo",
    price: 380000,
    originalPrice: 490000,
    description: "Áo thun tay dài thể thao công nghệ Flexfit™ thuộc bộ sưu tập Non Branded 052 từ Aureus Fashion. Gam màu xám chì / xám tiêu đậm (Charcoal Grey) mạnh mẽ, trung tính và tôn dáng. Chất liệu Flexfit™ định lượng 190Gsm siêu co giãn, thoáng khí và êm ái khi tiếp xúc trực tiếp với làn da. Đường cúp raglan vát cong tinh tế từ cổ áo giúp mở rộng biên độ chuyển động của cánh tay, hạn chế tình trạng co kéo khi tập luyện. Thiết kế tay áo xỏ ngón tay cái thời thượng, bảo vệ đôi bàn tay trước nắng gió và giữ ấm hiệu quả. Phom vừa F3 tôn nét đẹp khỏe khoắn, năng động.",
    images: [
      "/images/products/tshirt-raglan052-charcoal-front.jpg",
      "/images/products/tshirt-raglan052-charcoal-back.jpg",
      "/images/products/tshirt-raglan052-grey-front.jpg",
      "/images/products/tshirt-raglan052-grey-back.jpg",
      "/images/products/tshirt-raglan052-blue-front.jpg",
      "/images/products/tshirt-raglan052-blue-back.jpg",
      "/images/products/tshirt-raglan052-navy-front.jpg",
      "/images/products/tshirt-raglan052-navy-back.jpg",
      "/images/products/tshirt-raglan052-white-front.png",
      "/images/products/tshirt-raglan052-white-back.png",
      "/images/products/tshirt-raglan052-black-front.jpg",
      "/images/products/tshirt-raglan052-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Tiêu Đậm", hex: "#6E7278", imageIndex: 0 },
      { name: "Xám Khói Sáng", hex: "#D5D6D8", imageIndex: 2 },
      { name: "Xanh Thép", hex: "#59738A", imageIndex: 4 },
      { name: "Xanh Đen", hex: "#232A3B", imageIndex: 6 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 8 },
      { name: "Đen", hex: "#1A1A1A", imageIndex: 10 }
    ],
    rating: 4.9,
    reviews: 145,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "FlexFit™ Raglan"
  },
  {
    id: 64,
    name: "Áo Thun Tay Dài Raglan Flexfit™ 190Gsm Mỏng Mịn Co Giãn 4 Chiều Tay Xỏ Ngón Phom Vừa F3 - Màu Xanh Đen",
    category: "Áo",
    price: 380000,
    originalPrice: 490000,
    description: "Áo thun tay dài thể thao công nghệ Flexfit™ thuộc bộ sưu tập Non Branded 052 từ Aureus Fashion. Tông màu xanh đen (Dark Navy) kinh điển, sạch sẽ và dễ phối với mọi trang phục thể thao. Ứng dụng công nghệ sợi đàn hồi Flexfit™ 190Gsm siêu mịn, mềm mát, chống bám bụi và chống nhăn nhàu vượt trội. Cầu vai raglan vát góc thể thao, đường may phẳng (flatlock seams) giảm ma sát tối đa khi vận động cường độ cao. Cổ tay xỏ ngón tay cái năng động giúp giữ cố định phom áo và che mu bàn tay khi chạy bộ ngoài trời. Dáng áo phom vừa F3 chuẩn athletic fit.",
    images: [
      "/images/products/tshirt-raglan052-navy-front.jpg",
      "/images/products/tshirt-raglan052-navy-back.jpg",
      "/images/products/tshirt-raglan052-grey-front.jpg",
      "/images/products/tshirt-raglan052-grey-back.jpg",
      "/images/products/tshirt-raglan052-blue-front.jpg",
      "/images/products/tshirt-raglan052-blue-back.jpg",
      "/images/products/tshirt-raglan052-charcoal-front.jpg",
      "/images/products/tshirt-raglan052-charcoal-back.jpg",
      "/images/products/tshirt-raglan052-white-front.png",
      "/images/products/tshirt-raglan052-white-back.png",
      "/images/products/tshirt-raglan052-black-front.jpg",
      "/images/products/tshirt-raglan052-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Đen", hex: "#232A3B", imageIndex: 0 },
      { name: "Xám Khói Sáng", hex: "#D5D6D8", imageIndex: 2 },
      { name: "Xanh Thép", hex: "#59738A", imageIndex: 4 },
      { name: "Xám Tiêu Đậm", hex: "#6E7278", imageIndex: 6 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 8 },
      { name: "Đen", hex: "#1A1A1A", imageIndex: 10 }
    ],
    rating: 5.0,
    reviews: 162,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "FlexFit™ Raglan"
  },
  {
    id: 65,
    name: "Áo Thun Tay Dài Raglan Flexfit™ 190Gsm Mỏng Mịn Co Giãn 4 Chiều Tay Xỏ Ngón Phom Vừa F3 - Màu Trắng",
    category: "Áo",
    price: 380000,
    originalPrice: 490000,
    description: "Áo thun tay dài thể thao công nghệ Flexfit™ thuộc bộ sưu tập Non Branded 052 từ Aureus Fashion. Tông màu trắng sứ tinh khiết, thanh lịch và tôn dáng. Chất liệu Flexfit™ 190Gsm mỏng nhẹ, bề mặt chải kỹ siêu mềm mịn không ngứa rát, co giãn 4 chiều linh hoạt và thoáng mát vượt trội. Thiết kế cầu vai raglan vát cong công thái học kết hợp chi tiết xỏ ngón tay cái (thumbholes) tiện lợi, giúp cố định cổ tay khi tập luyện hoặc bảo vệ da mu bàn tay khi di chuyển ngoài trời. Phom vừa F3 gọn gàng, phong cách athleisure hiện đại.",
    images: [
      "/images/products/tshirt-raglan052-white-front.png",
      "/images/products/tshirt-raglan052-white-back.png",
      "/images/products/tshirt-raglan052-grey-front.jpg",
      "/images/products/tshirt-raglan052-grey-back.jpg",
      "/images/products/tshirt-raglan052-blue-front.jpg",
      "/images/products/tshirt-raglan052-blue-back.jpg",
      "/images/products/tshirt-raglan052-charcoal-front.jpg",
      "/images/products/tshirt-raglan052-charcoal-back.jpg",
      "/images/products/tshirt-raglan052-navy-front.jpg",
      "/images/products/tshirt-raglan052-navy-back.jpg",
      "/images/products/tshirt-raglan052-black-front.jpg",
      "/images/products/tshirt-raglan052-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 0 },
      { name: "Xám Khói Sáng", hex: "#D5D6D8", imageIndex: 2 },
      { name: "Xanh Thép", hex: "#59738A", imageIndex: 4 },
      { name: "Xám Tiêu Đậm", hex: "#6E7278", imageIndex: 6 },
      { name: "Xanh Đen", hex: "#232A3B", imageIndex: 8 },
      { name: "Đen", hex: "#1A1A1A", imageIndex: 10 }
    ],
    rating: 4.9,
    reviews: 135,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "FlexFit™ Raglan"
  },
  {
    id: 66,
    name: "Áo Thun Tay Dài Raglan Flexfit™ 190Gsm Mỏng Mịn Co Giãn 4 Chiều Tay Xỏ Ngón Phom Vừa F3 - Màu Đen",
    category: "Áo",
    price: 380000,
    originalPrice: 490000,
    description: "Áo thun tay dài thể thao công nghệ Flexfit™ thuộc bộ sưu tập Non Branded 052 từ Aureus Fashion. Tông màu đen tuyền nam tính, cá tính và che khuyết điểm hoàn hảo. Sử dụng chất vải dệt Flexfit™ 190Gsm mỏng mát, co giãn 4 chiều đa chiều, thoáng ẩm và nhanh khô thần tốc. Cắt cúp raglan thể thao giảm ma sát vai gáy, ống tay dài thiết kế khe xỏ ngón tay cái (thumbholes) năng động. Phom dáng vừa vặn F3 chuẩn athletic fit mang lại diện mạo khỏe khoắn, nam tính và thời thượng.",
    images: [
      "/images/products/tshirt-raglan052-black-front.jpg",
      "/images/products/tshirt-raglan052-black-back.jpg",
      "/images/products/tshirt-raglan052-grey-front.jpg",
      "/images/products/tshirt-raglan052-grey-back.jpg",
      "/images/products/tshirt-raglan052-blue-front.jpg",
      "/images/products/tshirt-raglan052-blue-back.jpg",
      "/images/products/tshirt-raglan052-charcoal-front.jpg",
      "/images/products/tshirt-raglan052-charcoal-back.jpg",
      "/images/products/tshirt-raglan052-navy-front.jpg",
      "/images/products/tshirt-raglan052-navy-back.jpg",
      "/images/products/tshirt-raglan052-white-front.png",
      "/images/products/tshirt-raglan052-white-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1A1A1A", imageIndex: 0 },
      { name: "Xám Khói Sáng", hex: "#D5D6D8", imageIndex: 2 },
      { name: "Xanh Thép", hex: "#59738A", imageIndex: 4 },
      { name: "Xám Tiêu Đậm", hex: "#6E7278", imageIndex: 6 },
      { name: "Xanh Đen", hex: "#232A3B", imageIndex: 8 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 10 }
    ],
    rating: 5.0,
    reviews: 178,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "FlexFit™ Raglan"
  },
  {
    id: 67,
    name: "Áo Polo ColorLock™ Vải Pique Lục Giác Kẻ Sọc Yarn-Dyed Đứng Phom Phom Vừa F3 - Màu Be Phối Trắng",
    category: "Áo",
    price: 420000,
    originalPrice: 560000,
    description: "Áo polo nam công nghệ ColorLock™ thuộc bộ sưu tập The Weekend 050 từ Aureus Fashion. Sử dụng chất liệu vải dệt Pique lục giác (hexagonal honeycomb pique) cao cấp, cấu trúc dệt mắt kim cương thoáng khí tối ưu, thấm hút mồ hôi nhanh và giữ phom áo luôn phẳng phiu, đứng dáng. Họa tiết kẻ sọc ngang ngực dệt nhuộm từng sợi (Yarn-Dyed) theo công nghệ ColorLock™ chống phai màu, chống loang màu tuyệt đối sau nhiều chu kỳ giặt. Thiết kế phối màu be cát thanh lịch ở phần ngực, tay áo và toàn bộ thân sau, kết hợp thân trước trắng sáng trang nhã. Bo cổ và bo tay dệt ribbing mật độ cao chống quăn mép. Phom vừa F3 tôn dáng lịch thiệp, dễ dàng kết hợp cùng quần âu, kaki đi làm hoặc quần jeans dạo phố cuối tuần.",
    images: [
      "/images/products/polo-weekend050-beige-front.jpg",
      "/images/products/polo-weekend050-beige-back.jpg",
      "/images/products/polo-weekend050-navy-front.jpg",
      "/images/products/polo-weekend050-navy-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Be Phối Trắng", hex: "#B0A696", imageIndex: 0 },
      { name: "Xanh Đen Phối Trắng", hex: "#1E2837", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 154,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "ColorLock™ Polo"
  },
  {
    id: 68,
    name: "Áo Polo ColorLock™ Vải Pique Lục Giác Kẻ Sọc Yarn-Dyed Đứng Phom Phom Vừa F3 - Màu Xanh Đen Phối Trắng",
    category: "Áo",
    price: 420000,
    originalPrice: 560000,
    description: "Áo polo nam công nghệ ColorLock™ thuộc bộ sưu tập The Weekend 050 từ Aureus Fashion. Tông màu xanh đen (Navy) nam tính, sang trọng phối cùng mảng trắng tinh tế ở thân dưới. Bề mặt vải Pique dệt lục giác dày dặn, đứng phom, co giãn nhẹ và cực kỳ thoáng mát. Công nghệ dệt sợi nhuộm Yarn-Dyed ColorLock™ độc quyền bảo toàn độ tươi sáng của sợi vải, không bai nhão và chống xù lông. Cổ áo dệt bẻ góc tinh xảo, nẹp 2 cúc chỉn chu. Dáng phom vừa F3 ôm gọn gàng, tôn bờ vai vững chãi và đem đến sự tự tin cho phái mạnh trong cả môi trường công sở lẫn các buổi hẹn hò cuối tuần.",
    images: [
      "/images/products/polo-weekend050-navy-front.jpg",
      "/images/products/polo-weekend050-navy-back.jpg",
      "/images/products/polo-weekend050-beige-front.jpg",
      "/images/products/polo-weekend050-beige-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Đen Phối Trắng", hex: "#1E2837", imageIndex: 0 },
      { name: "Be Phối Trắng", hex: "#B0A696", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 168,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "ColorLock™ Polo"
  },
  {
    id: 69,
    name: "Áo Polo DurableTex™ Vải Double Face Pique Sọc Khối Streetwear Phom Siêu Rộng F5 - Màu Đen Sọc Trắng",
    category: "Áo",
    price: 450000,
    originalPrice: 590000,
    description: "Áo polo phong cách 90s Rugby Streetwear thuộc bộ sưu tập The No Style 288 từ Aureus Fashion. Sử dụng chất liệu vải DurableTex™ dệt Double Face Pique (pique 2 da) mật độ cao dày dặn, mặt ngoài cấu trúc gân pique dệt khối đứng phom, mặt trong tiếp xúc da êm ái, tản nhiệt và thấm hút mồ hôi hiệu quả. Họa tiết sọc ngang bản lớn (bold block stripes) đen phối trắng kem tương phản mạnh mẽ, mang đậm cảm hứng Retro Preppy và văn hóa đường phố cổ điển. Cổ polo dệt len cotton dệt kim màu trắng kem cao cấp, nẹp cổ dập cúc tinh xảo. Phom siêu rộng F5 (oversize boxy fit) vai rơi cực sâu, mang lại độ rũ tự nhiên và phong cách phóng khoáng đỉnh cao.",
    images: [
      "/images/products/polo-nostyle288-black-front.jpg",
      "/images/products/polo-nostyle288-black-back.jpg",
      "/images/products/polo-nostyle288-brown-front.jpg",
      "/images/products/polo-nostyle288-brown-back.jpg",
      "/images/products/polo-nostyle288-navy-front.jpg",
      "/images/products/polo-nostyle288-navy-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen Sọc Trắng", hex: "#1A1A1A", imageIndex: 0 },
      { name: "Nâu Rêu Sọc Trắng", hex: "#5C5346", imageIndex: 2 },
      { name: "Xanh Đen Sọc Trắng", hex: "#252D3C", imageIndex: 4 }
    ],
    rating: 4.9,
    reviews: 162,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "DurableTex™ Pique"
  },
  {
    id: 70,
    name: "Áo Polo DurableTex™ Vải Double Face Pique Sọc Khối Streetwear Phom Siêu Rộng F5 - Màu Nâu Rêu Sọc Trắng",
    category: "Áo",
    price: 450000,
    originalPrice: 590000,
    description: "Áo polo phong cách 90s Rugby Streetwear thuộc bộ sưu tập The No Style 288 từ Aureus Fashion. Tông màu nâu rêu / nâu đất (Olive Mocha) phối sọc khối trắng kem cổ điển, ấm áp và cực kỳ cuốn hút. Ứng dụng công nghệ sợi DurableTex™ dệt Double Face Pique 2 da cao cấp bền bỉ, chống bai nhão và chống xù lông vượt trội qua nhiều lần giặt. Bản cổ dệt cotton màu kem tinh tế, phom siêu rộng F5 tạo hiệu ứng boxy che khuyết điểm hoàn hảo, dễ dàng phối layer cùng áo thun cổ lọ bên trong hoặc phối đơn cùng quần jeans ống rộng, quần túi hộp streetwear.",
    images: [
      "/images/products/polo-nostyle288-brown-front.jpg",
      "/images/products/polo-nostyle288-brown-back.jpg",
      "/images/products/polo-nostyle288-black-front.jpg",
      "/images/products/polo-nostyle288-black-back.jpg",
      "/images/products/polo-nostyle288-navy-front.jpg",
      "/images/products/polo-nostyle288-navy-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Nâu Rêu Sọc Trắng", hex: "#5C5346", imageIndex: 0 },
      { name: "Đen Sọc Trắng", hex: "#1A1A1A", imageIndex: 2 },
      { name: "Xanh Đen Sọc Trắng", hex: "#252D3C", imageIndex: 4 }
    ],
    rating: 5.0,
    reviews: 175,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "DurableTex™ Pique"
  },
  {
    id: 71,
    name: "Áo Polo DurableTex™ Vải Double Face Pique Sọc Khối Streetwear Phom Siêu Rộng F5 - Màu Xanh Đen Sọc Trắng",
    category: "Áo",
    price: 450000,
    originalPrice: 590000,
    description: "Áo polo phong cách 90s Rugby Streetwear thuộc bộ sưu tập The No Style 288 từ Aureus Fashion. Tông màu xanh đen (Navy) phối sọc khối trắng kem thời thượng, trẻ trung và tôn da. Chất vải công nghệ DurableTex™ dệt Double Face Pique 2 da dày dặn đứng dáng, thông thoáng và êm ái khi mặc. Cổ bẻ dệt len cotton màu kem sang trọng, phom siêu rộng F5 (oversize boxy fit) tạo độ rũ tự nhiên, chuẩn phong cách retro streetwear đường phố.",
    images: [
      "/images/products/polo-nostyle288-navy-front.jpg",
      "/images/products/polo-nostyle288-navy-back.jpg",
      "/images/products/polo-nostyle288-black-front.jpg",
      "/images/products/polo-nostyle288-black-back.jpg",
      "/images/products/polo-nostyle288-brown-front.jpg",
      "/images/products/polo-nostyle288-brown-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Đen Sọc Trắng", hex: "#252D3C", imageIndex: 0 },
      { name: "Đen Sọc Trắng", hex: "#1A1A1A", imageIndex: 2 },
      { name: "Nâu Rêu Sọc Trắng", hex: "#5C5346", imageIndex: 4 }
    ],
    rating: 5.0,
    reviews: 184,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "DurableTex™ Pique"
  },
  {
    id: 72,
    name: "Áo Polo CloudTouch™ Vải Ultra Ribbed Mướt Mịn Clean Fit Phom Ôm Vừa F2 - Màu Nâu Cà Phê",
    category: "Áo",
    price: 420000,
    originalPrice: 550000,
    description: "Áo polo phong cách Clean Fit & Quiet Luxury thuộc bộ sưu tập The Weekend 061 từ Aureus Fashion. Ứng dụng chất liệu vải công nghệ CloudTouch™ dệt từ sợi siêu vi cao cấp, mang lại cảm giác êm ái mướt mịn tựa mây trời, mát lạnh tức thì khi chạm vào da và co giãn đàn hồi 4 chiều linh hoạt. Điểm nhấn đắt giá ở phần cổ bẻ và bo viền tay áo dệt gân nổi Ultra Ribbed tinh xảo, định hình chuẩn phom chống bai dão. Thiết kế nẹp cổ giấu cúc (clean hidden placket) tối giản, hiện đại và sang trọng. Phom ôm vừa F2 (Clean Fit) tôn dáng vai ngực săn chắc, là sự lựa chọn hoàn hảo khi kết hợp cùng quần âu, kaki công sở hoặc quần short dạo phố cuối tuần.",
    images: [
      "/images/products/polo-cloudtouch061-brown-front.jpg",
      "/images/products/polo-cloudtouch061-brown-back.jpg",
      "/images/products/polo-cloudtouch061-grey-front.jpg",
      "/images/products/polo-cloudtouch061-grey-back.jpg",
      "/images/products/polo-cloudtouch061-black-front.jpg",
      "/images/products/polo-cloudtouch061-black-back.jpg",
      "/images/products/polo-cloudtouch061-white-front.png",
      "/images/products/polo-cloudtouch061-white-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Nâu Cà Phê", hex: "#54483F", imageIndex: 0 },
      { name: "Xám Khói Sáng", hex: "#ACB0B6", imageIndex: 2 },
      { name: "Đen", hex: "#1A1A1A", imageIndex: 4 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 138,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "CloudTouch™ F2"
  },
  {
    id: 73,
    name: "Áo Polo CloudTouch™ Vải Ultra Ribbed Mướt Mịn Clean Fit Phom Ôm Vừa F2 - Màu Xám Khói Sáng",
    category: "Áo",
    price: 420000,
    originalPrice: 550000,
    description: "Áo polo phong cách Clean Fit & Quiet Luxury thuộc bộ sưu tập The Weekend 061 từ Aureus Fashion. Tông màu xám khói sáng (Silver Mist Grey) thanh lịch, hiện đại và cực kỳ dễ phối đồ. Chất liệu sợi dệt CloudTouch™ mỏng mát, thấm hút mồ hôi và bay ẩm siêu tốc, giữ cho cơ thể luôn khô thoáng và tự tin trong suốt ngày dài. Bản cổ dệt Ultra Ribbed cao cấp chống quăn mép, đường cúp cầu vai xéo thể thao giảm ma sát khi cử động. Dáng phom ôm vừa F2 giúp tôn đường nét cơ thể nam tính, gọn gàng và chỉn chu trong mọi khoảnh khắc.",
    images: [
      "/images/products/polo-cloudtouch061-grey-front.jpg",
      "/images/products/polo-cloudtouch061-grey-back.jpg",
      "/images/products/polo-cloudtouch061-brown-front.jpg",
      "/images/products/polo-cloudtouch061-brown-back.jpg",
      "/images/products/polo-cloudtouch061-black-front.jpg",
      "/images/products/polo-cloudtouch061-black-back.jpg",
      "/images/products/polo-cloudtouch061-white-front.png",
      "/images/products/polo-cloudtouch061-white-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Khói Sáng", hex: "#ACB0B6", imageIndex: 0 },
      { name: "Nâu Cà Phê", hex: "#54483F", imageIndex: 2 },
      { name: "Đen", hex: "#1A1A1A", imageIndex: 4 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 152,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "CloudTouch™ F2"
  },
  {
    id: 74,
    name: "Áo Polo CloudTouch™ Vải Ultra Ribbed Mướt Mịn Clean Fit Phom Ôm Vừa F2 - Màu Đen",
    category: "Áo",
    price: 420000,
    originalPrice: 550000,
    description: "Áo polo phong cách Clean Fit & Quiet Luxury thuộc bộ sưu tập The Weekend 061 từ Aureus Fashion. Tông màu đen tuyền nam tính, sang trọng và tôn dáng tuyệt đối. Chất liệu sợi dệt siêu vi CloudTouch™ mướt mịn tựa mây trời, êm dịu làm mát tức thì, co giãn 4 chiều linh hoạt. Chi tiết cổ bẻ và bo tay dệt gân Ultra Ribbed cao cấp định hình chống dão, kết hợp nẹp cổ giấu cúc (clean hidden placket) tối giản và lịch lãm. Phom ôm vừa F2 (Clean Fit) tôn đường nét cơ thể săn chắc, chỉn chu và đẳng cấp.",
    images: [
      "/images/products/polo-cloudtouch061-black-front.jpg",
      "/images/products/polo-cloudtouch061-black-back.jpg",
      "/images/products/polo-cloudtouch061-brown-front.jpg",
      "/images/products/polo-cloudtouch061-brown-back.jpg",
      "/images/products/polo-cloudtouch061-grey-front.jpg",
      "/images/products/polo-cloudtouch061-grey-back.jpg",
      "/images/products/polo-cloudtouch061-white-front.png",
      "/images/products/polo-cloudtouch061-white-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1A1A1A", imageIndex: 0 },
      { name: "Nâu Cà Phê", hex: "#54483F", imageIndex: 2 },
      { name: "Xám Khói Sáng", hex: "#ACB0B6", imageIndex: 4 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 164,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "CloudTouch™ F2"
  },
  {
    id: 75,
    name: "Áo Polo CloudTouch™ Vải Ultra Ribbed Mướt Mịn Clean Fit Phom Ôm Vừa F2 - Màu Trắng",
    category: "Áo",
    price: 420000,
    originalPrice: 550000,
    description: "Áo polo phong cách Clean Fit & Quiet Luxury thuộc bộ sưu tập The Weekend 061 từ Aureus Fashion. Tông màu trắng sáng tinh tế, trang nhã và dễ dàng phối hợp với mọi trang phục. Ứng dụng công nghệ vải dệt CloudTouch™ mỏng mát, thấm hút mồ hôi và bay ẩm siêu tốc giúp cơ thể luôn sảng khoái suốt ngày dài. Cổ bẻ và bo tay Ultra Ribbed dệt tinh xảo, nẹp giấu cúc hiện đại cùng đường cắt cúp cầu vai thể thao. Dáng phom ôm vừa F2 mang lại vẻ ngoài trẻ trung, lịch thiệp và sang trọng chuẩn phong cách doanh nhân hiện đại cuối tuần.",
    images: [
      "/images/products/polo-cloudtouch061-white-front.png",
      "/images/products/polo-cloudtouch061-white-back.png",
      "/images/products/polo-cloudtouch061-brown-front.jpg",
      "/images/products/polo-cloudtouch061-brown-back.jpg",
      "/images/products/polo-cloudtouch061-grey-front.jpg",
      "/images/products/polo-cloudtouch061-grey-back.jpg",
      "/images/products/polo-cloudtouch061-black-front.jpg",
      "/images/products/polo-cloudtouch061-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 0 },
      { name: "Nâu Cà Phê", hex: "#54483F", imageIndex: 2 },
      { name: "Xám Khói Sáng", hex: "#ACB0B6", imageIndex: 4 },
      { name: "Đen", hex: "#1A1A1A", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 147,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "CloudTouch™ F2"
  },
  {
    id: 76,
    name: "Áo Polo Tay Ngắn Họa Tiết Sọc Nhí Thoáng Mát Đứng Phom Trẻ Trung Phom Hộp Rộng F5 - Màu Trắng Sọc Đen",
    category: "Áo",
    price: 390000,
    originalPrice: 520000,
    description: "Áo polo phong cách Parisian Retro & Vintage Streetwear thuộc bộ sưu tập The Weekend 098 từ Aureus Fashion. Sử dụng chất liệu vải dệt cao cấp mềm mát, đứng phom, thấm hút mồ hôi và thoáng khí tối đa. Điểm nhấn là họa tiết sọc nhí (micro pinstripes) đen thanh mảnh trên nền trắng sáng tinh tế, tạo hiệu ứng thị giác thon gọn và mang đến vẻ đẹp cổ điển, lịch thiệp. Bản cổ polo dệt trơn màu trắng kem đồng điệu, dày dặn chống quăn mép. Dáng áo phom hộp rộng F5 (boxy oversize fit) vai rơi phóng khoáng, độ rủ tự nhiên chuẩn phong cách dạo phố, cà phê cuối tuần cùng bạn bè.",
    images: [
      "/images/products/polo-weekend098-white-front.jpg",
      "/images/products/polo-weekend098-white-back.jpg",
      "/images/products/polo-weekend098-black-front.jpg",
      "/images/products/polo-weekend098-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng Sọc Đen", hex: "#FFFFFF", imageIndex: 0 },
      { name: "Đen Sọc Trắng", hex: "#1A1A1A", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 146,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Micro Stripe F5"
  },
  {
    id: 77,
    name: "Áo Polo Tay Ngắn Họa Tiết Sọc Nhí Thoáng Mát Đứng Phom Trẻ Trung Phom Hộp Rộng F5 - Màu Đen Sọc Trắng",
    category: "Áo",
    price: 390000,
    originalPrice: 520000,
    description: "Áo polo phong cách Parisian Retro & Vintage Streetwear thuộc bộ sưu tập The Weekend 098 từ Aureus Fashion. Tông màu đen tuyền nam tính kết hợp họa tiết đường kẻ sọc nhí trắng tinh tế, trẻ trung và tôn dáng. Chất vải dệt mật độ cao dày dặn nhưng vẫn cực kỳ êm mát và thoáng khí, không lo xù lông hay phai màu sau nhiều lần giặt. Cổ bẻ dệt đen tuyền sang trọng, nẹp cúc chỉn chu. Thiết kế phom hộp rộng F5 cá tính, tôn dáng và che khuyết điểm hoàn hảo, dễ dàng mix-match cùng quần short hoặc quần jeans baggy ống rộng.",
    images: [
      "/images/products/polo-weekend098-black-front.jpg",
      "/images/products/polo-weekend098-black-back.jpg",
      "/images/products/polo-weekend098-white-front.jpg",
      "/images/products/polo-weekend098-white-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen Sọc Trắng", hex: "#1A1A1A", imageIndex: 0 },
      { name: "Trắng Sọc Đen", hex: "#FFFFFF", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 162,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Micro Stripe F5"
  },
  {
    id: 78,
    name: "Áo Polo Tay Ngắn Colorlock™ Vải Cá Sấu Pique Đanh Chắc Đứng Phom Co Giãn Ít Nhăn Phom Vừa F3 - Màu Be Sáng Viền Rêu",
    category: "Áo",
    price: 410000,
    originalPrice: 540000,
    description: "Áo polo nam phong cách Athletic Luxury thuộc bộ sưu tập The No Style 262 từ Aureus Fashion. Sử dụng chất liệu vải cá sấu Pique cao cấp dệt mắt đanh chắc, bề mặt đứng dáng, co giãn linh hoạt và ít nhăn nhàu sau khi giặt. Ứng dụng công nghệ nhuộm ColorLock™ độc quyền giúp giữ màu vải luôn tươi sáng, bền bỉ theo thời gian. Thiết kế tinh xảo với các đường viền phối màu xanh rêu tương phản (piping line) chạy dọc cầu vai, mép cổ bẻ và bo viền tay áo. Phom vừa F3 tôn nét đẹp khỏe khoắn, nam tính và chỉn chu, thích hợp cho cả môi trường làm việc smart-casual lẫn các buổi gặp gỡ thường ngày.",
    images: [
      "/images/products/polo-nostyle262-beige-front.jpg",
      "/images/products/polo-nostyle262-beige-back.jpg",
      "/images/products/polo-nostyle262-moss-front.jpg",
      "/images/products/polo-nostyle262-moss-back.jpg",
      "/images/products/polo-nostyle262-black-front.jpg",
      "/images/products/polo-nostyle262-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Be Sáng Viền Rêu", hex: "#D4CEBF", imageIndex: 0 },
      { name: "Xanh Rêu Viền Trắng", hex: "#4A5340", imageIndex: 2 },
      { name: "Đen Viền Be", hex: "#212121", imageIndex: 4 }
    ],
    rating: 4.9,
    reviews: 152,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "ColorLock™ Pique"
  },
  {
    id: 79,
    name: "Áo Polo Tay Ngắn Colorlock™ Vải Cá Sấu Pique Đanh Chắc Đứng Phom Co Giãn Ít Nhăn Phom Vừa F3 - Màu Xanh Rêu Viền Trắng",
    category: "Áo",
    price: 410000,
    originalPrice: 540000,
    description: "Áo polo nam phong cách Athletic Luxury thuộc bộ sưu tập The No Style 262 từ Aureus Fashion. Tông màu xanh rêu (Moss Green) trầm ấm, nam tính và tôn da. Chất vải cá sấu Pique dày dặn đứng phom kết hợp công nghệ ColorLock™ chống bay màu tối đa. Điểm nhấn thể thao hiện đại với đường lé viền trắng sắc sảo chạy dọc theo cầu vai, bo cổ và tay áo. Nẹp 3 cúc sang trọng cùng dáng áo phom vừa F3 ôm nhẹ tôn dáng, mang lại vẻ ngoài lịch lãm, năng động và đầy cuốn hút.",
    images: [
      "/images/products/polo-nostyle262-moss-front.jpg",
      "/images/products/polo-nostyle262-moss-back.jpg",
      "/images/products/polo-nostyle262-beige-front.jpg",
      "/images/products/polo-nostyle262-beige-back.jpg",
      "/images/products/polo-nostyle262-black-front.jpg",
      "/images/products/polo-nostyle262-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Rêu Viền Trắng", hex: "#4A5340", imageIndex: 0 },
      { name: "Be Sáng Viền Rêu", hex: "#D4CEBF", imageIndex: 2 },
      { name: "Đen Viền Be", hex: "#212121", imageIndex: 4 }
    ],
    rating: 5.0,
    reviews: 168,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "ColorLock™ Pique"
  },
  {
    id: 80,
    name: "Áo Polo Tay Ngắn Colorlock™ Vải Cá Sấu Pique Đanh Chắc Đứng Phom Co Giãn Ít Nhăn Phom Vừa F3 - Màu Đen Viền Be",
    category: "Áo",
    price: 410000,
    originalPrice: 540000,
    description: "Áo polo nam phong cách Athletic Luxury thuộc bộ sưu tập The No Style 262 từ Aureus Fashion. Tông màu đen kinh điển huyền bí và sang trọng, kết hợp cùng đường lé viền màu be kem tương phản (piping line) chạy dọc cầu vai, mép cổ bẻ và bo gấu tay áo tạo điểm nhấn thể thao nổi bật. Sử dụng chất liệu vải cá sấu Pique cao cấp dệt mắt đanh chắc, bề mặt đứng phom, co giãn linh hoạt và ít nhăn nhàu sau khi giặt. Ứng dụng công nghệ nhuộm ColorLock™ độc quyền giúp giữ sắc đen luôn sâu thẳm, không bạc màu theo thời gian. Nẹp 3 cúc sang trọng cùng dáng áo phom vừa F3 ôm nhẹ tôn dáng khỏe khoắn, nam tính và chỉn chu.",
    images: [
      "/images/products/polo-nostyle262-black-front.jpg",
      "/images/products/polo-nostyle262-black-back.jpg",
      "/images/products/polo-nostyle262-beige-front.jpg",
      "/images/products/polo-nostyle262-beige-back.jpg",
      "/images/products/polo-nostyle262-moss-front.jpg",
      "/images/products/polo-nostyle262-moss-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen Viền Be", hex: "#212121", imageIndex: 0 },
      { name: "Be Sáng Viền Rêu", hex: "#D4CEBF", imageIndex: 2 },
      { name: "Xanh Rêu Viền Trắng", hex: "#4A5340", imageIndex: 4 }
    ],
    rating: 5.0,
    reviews: 175,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "ColorLock™ Pique"
  },
  {
    id: 81,
    name: "Áo Polo Tay Ngắn Phối Màu Thân Áo Colorlock™ Vải Pique 250Gsm Khóa Màu Chống Xù Ít Nhăn Phom Vừa F3 - Màu Trắng Phối Đỏ Rượu",
    category: "Áo",
    price: 420000,
    originalPrice: 550000,
    description: "Áo polo nam thể thao phong cách Athletic Color-Block thuộc bộ sưu tập The No Style 292 từ Aureus Fashion. Thiết kế thân áo rã phối mảng màu thời thượng: nửa trên tone trắng sáng thanh lịch kết hợp cùng nửa dưới màu đỏ rượu (Burgundy) trầm ấm tôn da. Sử dụng chất liệu vải Pique dệt cá sấu định lượng 250Gsm dày dặn đanh chắc, bề mặt đứng dáng, co giãn linh hoạt và ít nhăn nhàu sau khi giặt. Ứng dụng công nghệ nhuộm ColorLock™ khóa màu sợi vải, chống phai và chống xù lông vượt trội sau nhiều lần giặt. Cổ bẻ và bo tay dệt sọc viền tương phản sắc nét cùng logo Athleisure thêu ngực áo tạo điểm nhấn thể thao nổi bật. Phom vừa F3 tôn dáng khỏe khoắn, nam tính và chỉn chu.",
    images: [
      "/images/products/polo-nostyle292-burgundy-front.jpg",
      "/images/products/polo-nostyle292-burgundy-back.jpg",
      "/images/products/polo-nostyle292-grey-front.jpg",
      "/images/products/polo-nostyle292-grey-back.jpg",
      "/images/products/polo-nostyle292-black-charcoal-front.jpg",
      "/images/products/polo-nostyle292-black-charcoal-back.jpg",
      "/images/products/polo-nostyle292-black-white-front.png",
      "/images/products/polo-nostyle292-black-white-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng Phối Đỏ Rượu", hex: "#7B1123", imageIndex: 0 },
      { name: "Trắng Phối Xám Sáng", hex: "#A8ACB0", imageIndex: 2 },
      { name: "Đen Phối Xám Chì", hex: "#4C5057", imageIndex: 4 },
      { name: "Đen Phối Trắng", hex: "#1F2024", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 146,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "ColorLock™ 250Gsm"
  },
  {
    id: 82,
    name: "Áo Polo Tay Ngắn Phối Màu Thân Áo Colorlock™ Vải Pique 250Gsm Khóa Màu Chống Xù Ít Nhăn Phom Vừa F3 - Màu Trắng Phối Xám Sáng",
    category: "Áo",
    price: 420000,
    originalPrice: 550000,
    description: "Áo polo nam thể thao phong cách Athletic Color-Block thuộc bộ sưu tập The No Style 292 từ Aureus Fashion. Bản phối màu trung tính hiện đại: nửa trên trắng tinh khôi kết hợp cùng nửa dưới xám sáng (Grey Mist) trẻ trung, dễ phối đồ. Chất vải cá sấu Pique cao cấp định lượng 250Gsm đanh chắc, thoáng khí và ít nhăn. Công nghệ ColorLock™ chống phai màu bền bỉ. Bo cổ bẻ và viền tay áo dệt sọc thể thao tinh xảo, ngực áo tạo điểm nhấn với logo thêu Athleisure Athletic & Leisure. Dáng áo phom vừa F3 tôn nét đẹp nam tính, phong độ, lý tưởng cho mọi hoạt động thể thao, dạo phố và đi làm thường ngày.",
    images: [
      "/images/products/polo-nostyle292-grey-front.jpg",
      "/images/products/polo-nostyle292-grey-back.jpg",
      "/images/products/polo-nostyle292-burgundy-front.jpg",
      "/images/products/polo-nostyle292-burgundy-back.jpg",
      "/images/products/polo-nostyle292-black-charcoal-front.jpg",
      "/images/products/polo-nostyle292-black-charcoal-back.jpg",
      "/images/products/polo-nostyle292-black-white-front.png",
      "/images/products/polo-nostyle292-black-white-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng Phối Xám Sáng", hex: "#A8ACB0", imageIndex: 0 },
      { name: "Trắng Phối Đỏ Rượu", hex: "#7B1123", imageIndex: 2 },
      { name: "Đen Phối Xám Chì", hex: "#4C5057", imageIndex: 4 },
      { name: "Đen Phối Trắng", hex: "#1F2024", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 162,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "ColorLock™ 250Gsm"
  },
  {
    id: 83,
    name: "Áo Polo Tay Ngắn Phối Màu Thân Áo Colorlock™ Vải Pique 250Gsm Khóa Màu Chống Xù Ít Nhăn Phom Vừa F3 - Màu Đen Phối Xám Chì",
    category: "Áo",
    price: 420000,
    originalPrice: 550000,
    description: "Áo polo nam thể thao phong cách Athletic Color-Block thuộc bộ sưu tập The No Style 292 từ Aureus Fashion. Mảng phối màu nam tính và huyền bí: nửa trên tone đen tuyền kết hợp cùng nửa dưới xám chì (Charcoal Grey) trầm ổn, tôn trọn nét đẹp khỏe khoắn. Sử dụng chất liệu vải Pique dệt cá sấu định lượng 250Gsm đanh mịn, dày dặn, đứng phom và ít nhăn nhàu sau khi giặt. Ứng dụng công nghệ nhuộm ColorLock™ khóa màu sợi vải, chống phai sờn và xù lông. Cổ bẻ dệt đen phối sọc viền trắng nổi bật cùng logo Athleisure Athletic & Leisure thêu sắc nét ngực trái. Dáng áo phom vừa F3 ôm gọn gàng, mang lại phong thái tự tin và chỉn chu.",
    images: [
      "/images/products/polo-nostyle292-black-charcoal-front.jpg",
      "/images/products/polo-nostyle292-black-charcoal-back.jpg",
      "/images/products/polo-nostyle292-black-white-front.png",
      "/images/products/polo-nostyle292-black-white-back.jpg",
      "/images/products/polo-nostyle292-burgundy-front.jpg",
      "/images/products/polo-nostyle292-burgundy-back.jpg",
      "/images/products/polo-nostyle292-grey-front.jpg",
      "/images/products/polo-nostyle292-grey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen Phối Xám Chì", hex: "#4C5057", imageIndex: 0 },
      { name: "Đen Phối Trắng", hex: "#1F2024", imageIndex: 2 },
      { name: "Trắng Phối Đỏ Rượu", hex: "#7B1123", imageIndex: 4 },
      { name: "Trắng Phối Xám Sáng", hex: "#A8ACB0", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 184,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "ColorLock™ 250Gsm"
  },
  {
    id: 84,
    name: "Áo Polo Tay Ngắn Phối Màu Thân Áo Colorlock™ Vải Pique 250Gsm Khóa Màu Chống Xù Ít Nhăn Phom Vừa F3 - Màu Đen Phối Trắng",
    category: "Áo",
    price: 420000,
    originalPrice: 550000,
    description: "Áo polo nam thể thao phong cách Athletic Color-Block thuộc bộ sưu tập The No Style 292 từ Aureus Fashion. Bản phối màu đen - trắng (Monochrome Black & White) tương phản kinh điển không bao giờ lỗi mốt: nửa trên đen tuyền sang trọng, nửa dưới trắng sáng nổi bật. Chất vải cá sấu Pique 250Gsm cao cấp co giãn đa chiều, đanh chắc đứng phom và thoáng mát. Công nghệ ColorLock™ ngăn hiện tượng loang màu giữa các mảng vải khi giặt. Bo cổ bẻ và viền tay áo dệt sọc thể thao tinh tế, logo thêu Athleisure ngực áo phong cách. Phom vừa F3 tôn dáng năng động, cuốn hút trong mọi khung cảnh.",
    images: [
      "/images/products/polo-nostyle292-black-white-front.png",
      "/images/products/polo-nostyle292-black-white-back.jpg",
      "/images/products/polo-nostyle292-black-charcoal-front.jpg",
      "/images/products/polo-nostyle292-black-charcoal-back.jpg",
      "/images/products/polo-nostyle292-burgundy-front.jpg",
      "/images/products/polo-nostyle292-burgundy-back.jpg",
      "/images/products/polo-nostyle292-grey-front.jpg",
      "/images/products/polo-nostyle292-grey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen Phối Trắng", hex: "#1F2024", imageIndex: 0 },
      { name: "Đen Phối Xám Chì", hex: "#4C5057", imageIndex: 2 },
      { name: "Trắng Phối Đỏ Rượu", hex: "#7B1123", imageIndex: 4 },
      { name: "Trắng Phối Xám Sáng", hex: "#A8ACB0", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 178,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "ColorLock™ 250Gsm"
  },
  {
    id: 85,
    name: "Áo Polo Tay Ngắn Dệt Hoa Văn Nổi 3D 280Gsm Đứng Phom Kháng Nhăn Co Giãn Linh Hoạt Phom Rộng F4 - Màu Xám Tiêu Sáng",
    category: "Áo",
    price: 430000,
    originalPrice: 560000,
    description: "Áo polo nam cao cấp thuộc bộ sưu tập The No Style 269 từ Aureus Fashion. Ứng dụng kỹ thuật dệt Jacquard hoa văn vân chéo hình học nổi 3D độc đáo trên nền vải định lượng 280Gsm đanh chắc, bề mặt sang trọng, kháng nhăn tự nhiên và co giãn linh hoạt 4 chiều. Thiết kế cổ bẻ dệt rib phối khóa kéo kim loại nửa ngực (quarter-zip) hiện đại thay thế hàng khuy truyền thống, mang đến phong thái lịch lãm, tinh giản và thời thượng. Tông màu xám tiêu sáng (Melange Grey) trẻ trung, dễ dàng phối hợp đa phong cách. Phom rộng F4 thoải mái, che khuyết điểm tốt và tôn vóc dáng phóng khoáng.",
    images: [
      "/images/products/polo-nostyle269-grey-front.jpg",
      "/images/products/polo-nostyle269-grey-back.jpg",
      "/images/products/polo-nostyle269-black-front.jpg",
      "/images/products/polo-nostyle269-black-back.jpg",
      "/images/products/polo-nostyle269-brown-front.jpg",
      "/images/products/polo-nostyle269-brown-back.jpg",
      "/images/products/polo-nostyle269-cream-front.jpg",
      "/images/products/polo-nostyle269-cream-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Tiêu Sáng", hex: "#B5B7B9", imageIndex: 0 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 2 },
      { name: "Nâu Mocha", hex: "#5A4538", imageIndex: 4 },
      { name: "Trắng Kem", hex: "#F5F0E6", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 156,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "3D Jacquard 280Gsm"
  },
  {
    id: 86,
    name: "Áo Polo Tay Ngắn Dệt Hoa Văn Nổi 3D 280Gsm Đứng Phom Kháng Nhăn Co Giãn Linh Hoạt Phom Rộng F4 - Màu Đen",
    category: "Áo",
    price: 430000,
    originalPrice: 560000,
    description: "Áo polo nam cao cấp thuộc bộ sưu tập The No Style 269 từ Aureus Fashion. Tông màu đen huyền bí kết hợp cấu trúc dệt hoa văn hình học nổi 3D tinh xảo, tạo hiệu ứng thị giác chiều sâu ấn tượng trên từng thớ vải. Chất vải dệt Jacquard định lượng 280Gsm dày dặn đứng phom, kháng nhăn vượt trội, giữ dáng áo thẳng thớm suốt ngày dài. Điểm nhấn khóa kéo kim loại quarter-zip cổ áo mang đậm phong cách Urban Chic hiện đại. Phom rộng F4 năng động, thoáng mát và tôn lên nét nam tính cuốn hút.",
    images: [
      "/images/products/polo-nostyle269-black-front.jpg",
      "/images/products/polo-nostyle269-black-back.jpg",
      "/images/products/polo-nostyle269-grey-front.jpg",
      "/images/products/polo-nostyle269-grey-back.jpg",
      "/images/products/polo-nostyle269-brown-front.jpg",
      "/images/products/polo-nostyle269-brown-back.jpg",
      "/images/products/polo-nostyle269-cream-front.jpg",
      "/images/products/polo-nostyle269-cream-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1C1C1E", imageIndex: 0 },
      { name: "Xám Tiêu Sáng", hex: "#B5B7B9", imageIndex: 2 },
      { name: "Nâu Mocha", hex: "#5A4538", imageIndex: 4 },
      { name: "Trắng Kem", hex: "#F5F0E6", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 168,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "3D Jacquard 280Gsm"
  },
  {
    id: 87,
    name: "Áo Polo Tay Ngắn Dệt Hoa Văn Nổi 3D 280Gsm Đứng Phom Kháng Nhăn Co Giãn Linh Hoạt Phom Rộng F4 - Màu Nâu Mocha",
    category: "Áo",
    price: 430000,
    originalPrice: 560000,
    description: "Áo polo nam cao cấp thuộc bộ sưu tập The No Style 269 từ Aureus Fashion. Tông màu nâu mocha (Mocha Brown / Cà phê) sang trọng, ấm áp và cực kỳ tôn da. Sử dụng kỹ thuật dệt Jacquard tạo vân hoa văn hình học nổi 3D độc đáo trên chất vải định lượng 280Gsm dày dặn đanh chắc, kháng nhăn tự nhiên và co giãn 4 chiều linh hoạt. Cổ bẻ dệt rib đanh mịn kết hợp cùng khóa kéo kim loại quarter-zip nửa ngực hiện đại mang hơi thở Old Money tinh tế. Phom rộng F4 mang lại sự thoải mái, phóng khoáng và lịch lãm trong mọi hoàn cảnh.",
    images: [
      "/images/products/polo-nostyle269-brown-front.jpg",
      "/images/products/polo-nostyle269-brown-back.jpg",
      "/images/products/polo-nostyle269-cream-front.jpg",
      "/images/products/polo-nostyle269-cream-back.jpg",
      "/images/products/polo-nostyle269-grey-front.jpg",
      "/images/products/polo-nostyle269-grey-back.jpg",
      "/images/products/polo-nostyle269-black-front.jpg",
      "/images/products/polo-nostyle269-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Nâu Mocha", hex: "#5A4538", imageIndex: 0 },
      { name: "Trắng Kem", hex: "#F5F0E6", imageIndex: 2 },
      { name: "Xám Tiêu Sáng", hex: "#B5B7B9", imageIndex: 4 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 142,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "3D Jacquard 280Gsm"
  },
  {
    id: 88,
    name: "Áo Polo Tay Ngắn Dệt Hoa Văn Nổi 3D 280Gsm Đứng Phom Kháng Nhăn Co Giãn Linh Hoạt Phom Rộng F4 - Màu Trắng Kem",
    category: "Áo",
    price: 430000,
    originalPrice: 560000,
    description: "Áo polo nam cao cấp thuộc bộ sưu tập The No Style 269 từ Aureus Fashion. Sắc trắng kem (Off-White / Cream) thanh nhã, tôn lên trọn vẹn những đường nét hoa văn dệt chìm nổi 3D tinh tế và đẳng cấp. Vải dệt Jacquard 280Gsm đứng dáng, co giãn linh hoạt, không lo nhăn nhàu sau khi giặt. Thiết kế cổ bẻ kết hợp khóa kéo kim loại quarter-zip bóng bẩy tạo diện mạo sang trọng, trẻ trung. Phom rộng F4 thoáng mát, dễ dàng phối cùng nhiều kiểu quần từ âu, khaki đến jeans.",
    images: [
      "/images/products/polo-nostyle269-cream-front.jpg",
      "/images/products/polo-nostyle269-cream-back.jpg",
      "/images/products/polo-nostyle269-brown-front.jpg",
      "/images/products/polo-nostyle269-brown-back.jpg",
      "/images/products/polo-nostyle269-grey-front.jpg",
      "/images/products/polo-nostyle269-grey-back.jpg",
      "/images/products/polo-nostyle269-black-front.jpg",
      "/images/products/polo-nostyle269-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng Kem", hex: "#F5F0E6", imageIndex: 0 },
      { name: "Nâu Mocha", hex: "#5A4538", imageIndex: 2 },
      { name: "Xám Tiêu Sáng", hex: "#B5B7B9", imageIndex: 4 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 158,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "3D Jacquard 280Gsm"
  },
  {
    id: 89,
    name: "Áo Polo Tay Ngắn Icevibes™ Vải Thun 2 Mặt Cool Comfort Mát Rượi Cổ Phối Sọc Đứng Phom Phom Hộp Rộng F5 - Màu Xanh Đen Cổ Sọc",
    category: "Áo",
    price: 420000,
    originalPrice: 550000,
    description: "Áo polo nam cao cấp phong cách Modern Streetwear thuộc bộ sưu tập The No Style 250 từ Aureus Fashion. Sử dụng chất liệu vải thun 2 mặt (Double-Face Knit) ứng dụng công nghệ làm mát Icevibes™ Cool Comfort độc quyền, bề mặt ngoài đanh chắc đứng phom, mặt trong tiếp xúc da tản nhiệt nhanh cho cảm giác mát lạnh tức thì, chống nhăn và kháng xù hiệu quả. Điểm nhấn thời trang ấn tượng với cổ áo dệt sọc nhí màu xanh nhạt (Light Blue Pinstripes) và bo viền tay áo đồng điệu mang hơi thở Retro Preppy thanh lịch. Thiết kế vai rơi drop-shoulder cùng phom hộp rộng F5 (Boxy Fit) thời thượng, tôn nét cá tính, phóng khoáng và tràn đầy năng lượng cho người mặc.",
    images: [
      "/images/products/polo-nostyle250-navy-front.jpg",
      "/images/products/polo-nostyle250-navy-back.jpg",
      "/images/products/polo-nostyle250-black-front.jpg",
      "/images/products/polo-nostyle250-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Đen Cổ Sọc", hex: "#232B3E", imageIndex: 0 },
      { name: "Đen Cổ Sọc", hex: "#1D1E22", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 148,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Icevibes™ Boxy F5"
  },
  {
    id: 90,
    name: "Áo Polo Tay Ngắn Icevibes™ Vải Thun 2 Mặt Cool Comfort Mát Rượi Cổ Phối Sọc Đứng Phom Phom Hộp Rộng F5 - Màu Đen Cổ Sọc",
    category: "Áo",
    price: 420000,
    originalPrice: 550000,
    description: "Áo polo nam cao cấp phong cách Modern Streetwear thuộc bộ sưu tập The No Style 250 từ Aureus Fashion. Tông màu đen kinh điển sang trọng và huyền bí, nổi bật với chi tiết cổ bẻ dệt sọc xám trắng tinh tế, đứng dáng chống quăn gập mép. Chất vải thun 2 mặt công nghệ Icevibes™ Cool Comfort mang lại sự thoáng mát vượt trội, đanh mịn và co giãn dễ chịu suốt ngày dài năng động. Dáng áo phom hộp rộng F5 (Boxy Fit) hack chiều cao, che khuyết điểm tốt và cực kỳ dễ phối cùng các loại quần jeans, quần túi hộp hay quần short.",
    images: [
      "/images/products/polo-nostyle250-black-front.jpg",
      "/images/products/polo-nostyle250-black-back.jpg",
      "/images/products/polo-nostyle250-navy-front.jpg",
      "/images/products/polo-nostyle250-navy-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen Cổ Sọc", hex: "#1D1E22", imageIndex: 0 },
      { name: "Xanh Đen Cổ Sọc", hex: "#232B3E", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 165,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Icevibes™ Boxy F5"
  },
  {
    id: 91,
    name: "Áo Thun Ba Lỗ Tank Top Flexfit™ Cotton Compact Mềm Mịn Co Giãn Tôn Dáng V-Shape Phom Ôm Vừa F2 - Màu Vàng Cát",
    category: "Áo",
    price: 260000,
    originalPrice: 350000,
    description: "Áo thun ba lỗ nam (Tank Top) cao cấp thuộc bộ sưu tập Non Branded 051 từ Aureus Fashion. Ứng dụng chất liệu Cotton Compact chải kỹ dệt sợi dài siêu mềm mịn, thấm hút mồ hôi vượt trội và kháng xù lông tối đa. Công nghệ sợi Flexfit™ mang lại độ co giãn đàn hồi 4 chiều tuyệt hảo, ôm vừa vặn cơ thể và giữ phom bền bỉ sau nhiều chu kỳ giặt. Thiết kế cổ tròn dệt bo đanh chắc, nách khoét sâu vừa vặn tôn trọn cầu vai và khuôn ngực vạm vỡ, tạo hiệu ứng vóc dáng chữ V (V-Shape) đầy nam tính. Tà áo xẻ sườn nhẹ nhàng tạo độ linh hoạt tối đa khi vận động thể thao, tập gym, chạy bộ hoặc mặc lót trong áo sơ mi, áo khoác.",
    images: [
      "/images/products/tanktop-nonbranded051-sand-front.jpg",
      "/images/products/tanktop-nonbranded051-sand-back.jpg",
      "/images/products/tanktop-nonbranded051-terracotta-front.jpg",
      "/images/products/tanktop-nonbranded051-terracotta-back.jpg",
      "/images/products/tanktop-nonbranded051-steelblue-front.jpg",
      "/images/products/tanktop-nonbranded051-steelblue-back.jpg",
      "/images/products/tanktop-nonbranded051-smokegrey-front.jpg",
      "/images/products/tanktop-nonbranded051-smokegrey-back.png",
      "/images/products/tanktop-nonbranded051-white-front.png",
      "/images/products/tanktop-nonbranded051-white-back.png",
      "/images/products/tanktop-nonbranded051-black-front.png",
      "/images/products/tanktop-nonbranded051-black-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Vàng Cát", hex: "#BFA888", imageIndex: 0 },
      { name: "Cam Đất", hex: "#A2583E", imageIndex: 2 },
      { name: "Xanh Thép", hex: "#4F6D7A", imageIndex: 4 },
      { name: "Xám Khói Sáng", hex: "#D8D7D5", imageIndex: 6 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 8 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 10 }
    ],
    rating: 4.9,
    reviews: 138,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Flexfit™ V-Shape"
  },
  {
    id: 92,
    name: "Áo Thun Ba Lỗ Tank Top Flexfit™ Cotton Compact Mềm Mịn Co Giãn Tôn Dáng V-Shape Phom Ôm Vừa F2 - Màu Cam Đất",
    category: "Áo",
    price: 260000,
    originalPrice: 350000,
    description: "Áo thun ba lỗ nam (Tank Top) cao cấp thuộc bộ sưu tập Non Branded 051 từ Aureus Fashion. Tông màu cam đất (Terracotta / Nâu Cam) thời thượng, trầm ấm và tôn làn da bánh mật khỏe khoắn. Sử dụng chất liệu Cotton Compact cao cấp kết hợp sợi đàn hồi Flexfit™ mềm mịn, mát da và co giãn 4 chiều linh hoạt. Phom ôm vừa F2 (Athletic Fit) kết hợp đường cắt may tỉ mỉ giúp tôn dáng ngực và siết nhẹ phần eo, tôn nét đẹp cơ bắp săn chắc. Lựa chọn lý tưởng cho các buổi tập luyện cường độ cao hoặc phối đồ mùa hè năng động.",
    images: [
      "/images/products/tanktop-nonbranded051-terracotta-front.jpg",
      "/images/products/tanktop-nonbranded051-terracotta-back.jpg",
      "/images/products/tanktop-nonbranded051-sand-front.jpg",
      "/images/products/tanktop-nonbranded051-sand-back.jpg",
      "/images/products/tanktop-nonbranded051-steelblue-front.jpg",
      "/images/products/tanktop-nonbranded051-steelblue-back.jpg",
      "/images/products/tanktop-nonbranded051-smokegrey-front.jpg",
      "/images/products/tanktop-nonbranded051-smokegrey-back.png",
      "/images/products/tanktop-nonbranded051-white-front.png",
      "/images/products/tanktop-nonbranded051-white-back.png",
      "/images/products/tanktop-nonbranded051-black-front.png",
      "/images/products/tanktop-nonbranded051-black-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Cam Đất", hex: "#A2583E", imageIndex: 0 },
      { name: "Vàng Cát", hex: "#BFA888", imageIndex: 2 },
      { name: "Xanh Thép", hex: "#4F6D7A", imageIndex: 4 },
      { name: "Xám Khói Sáng", hex: "#D8D7D5", imageIndex: 6 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 8 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 10 }
    ],
    rating: 5.0,
    reviews: 154,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Flexfit™ V-Shape"
  },
  {
    id: 93,
    name: "Áo Thun Ba Lỗ Tank Top Flexfit™ Cotton Compact Mềm Mịn Co Giãn Tôn Dáng V-Shape Phom Ôm Vừa F2 - Màu Xanh Thép",
    category: "Áo",
    price: 260000,
    originalPrice: 350000,
    description: "Áo thun ba lỗ nam (Tank Top) cao cấp thuộc bộ sưu tập Non Branded 051 từ Aureus Fashion. Tông màu xanh thép (Steel Blue) hiện đại, nam tính và tôn da. Chất vải Cotton Compact mềm mịn kết hợp công nghệ co giãn 4 chiều Flexfit™ giúp tôn trọn vóc dáng cơ bắp V-Shape săn chắc. Thoáng khí, thấm hút mồ hôi tốt và kháng xù lông tối đa. Dáng áo phom ôm vừa F2 cùng đường cắt nách và xẻ tà sườn hoàn hảo cho các hoạt động thể thao, gym hoặc mặc hằng ngày.",
    images: [
      "/images/products/tanktop-nonbranded051-steelblue-front.jpg",
      "/images/products/tanktop-nonbranded051-steelblue-back.jpg",
      "/images/products/tanktop-nonbranded051-smokegrey-front.jpg",
      "/images/products/tanktop-nonbranded051-smokegrey-back.png",
      "/images/products/tanktop-nonbranded051-sand-front.jpg",
      "/images/products/tanktop-nonbranded051-sand-back.jpg",
      "/images/products/tanktop-nonbranded051-terracotta-front.jpg",
      "/images/products/tanktop-nonbranded051-terracotta-back.jpg",
      "/images/products/tanktop-nonbranded051-white-front.png",
      "/images/products/tanktop-nonbranded051-white-back.png",
      "/images/products/tanktop-nonbranded051-black-front.png",
      "/images/products/tanktop-nonbranded051-black-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Thép", hex: "#4F6D7A", imageIndex: 0 },
      { name: "Xám Khói Sáng", hex: "#D8D7D5", imageIndex: 2 },
      { name: "Vàng Cát", hex: "#BFA888", imageIndex: 4 },
      { name: "Cam Đất", hex: "#A2583E", imageIndex: 6 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 8 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 10 }
    ],
    rating: 5.0,
    reviews: 146,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Flexfit™ V-Shape"
  },
  {
    id: 94,
    name: "Áo Thun Ba Lỗ Tank Top Flexfit™ Cotton Compact Mềm Mịn Co Giãn Tôn Dáng V-Shape Phom Ôm Vừa F2 - Màu Xám Khói Sáng",
    category: "Áo",
    price: 260000,
    originalPrice: 350000,
    description: "Áo thun ba lỗ nam (Tank Top) cao cấp thuộc bộ sưu tập Non Branded 051 từ Aureus Fashion. Gam màu xám khói sáng (Light Smoke Grey / Be Sáng) thanh lịch, tối giản theo chuẩn phong cách Clean Fit. Sử dụng chất liệu Cotton Compact chải kỹ dệt sợi dài mềm mát, thấm hút mồ hôi và kháng nhăn hiệu quả. Sợi co giãn Flexfit™ đàn hồi 4 chiều ôm trọn cơ thể, tôn nét nở nang của khuôn ngực và bắp tay. Dễ dàng kết hợp cùng quần short thể thao, quần jogger hoặc làm lớp áo lót bên trong sơ mi, áo khoác.",
    images: [
      "/images/products/tanktop-nonbranded051-smokegrey-front.jpg",
      "/images/products/tanktop-nonbranded051-smokegrey-back.png",
      "/images/products/tanktop-nonbranded051-steelblue-front.jpg",
      "/images/products/tanktop-nonbranded051-steelblue-back.jpg",
      "/images/products/tanktop-nonbranded051-sand-front.jpg",
      "/images/products/tanktop-nonbranded051-sand-back.jpg",
      "/images/products/tanktop-nonbranded051-terracotta-front.jpg",
      "/images/products/tanktop-nonbranded051-terracotta-back.jpg",
      "/images/products/tanktop-nonbranded051-white-front.png",
      "/images/products/tanktop-nonbranded051-white-back.png",
      "/images/products/tanktop-nonbranded051-black-front.png",
      "/images/products/tanktop-nonbranded051-black-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Khói Sáng", hex: "#D8D7D5", imageIndex: 0 },
      { name: "Xanh Thép", hex: "#4F6D7A", imageIndex: 2 },
      { name: "Vàng Cát", hex: "#BFA888", imageIndex: 4 },
      { name: "Cam Đất", hex: "#A2583E", imageIndex: 6 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 8 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 10 }
    ],
    rating: 4.9,
    reviews: 162,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Flexfit™ V-Shape"
  },
  {
    id: 95,
    name: "Áo Thun Ba Lỗ Tank Top Flexfit™ Cotton Compact Mềm Mịn Co Giãn Tôn Dáng V-Shape Phom Ôm Vừa F2 - Màu Trắng",
    category: "Áo",
    price: 260000,
    originalPrice: 350000,
    description: "Áo thun ba lỗ nam (Tank Top) cao cấp thuộc bộ sưu tập Non Branded 051 từ Aureus Fashion. Gam màu trắng tinh khôi, sạch sẽ và năng động. Chất vải Cotton Compact dệt từ sợi bông dài chải kỹ, mềm mịn mát da và thấm hút mồ hôi vượt bậc. Công nghệ dệt co giãn Flexfit™ 4 chiều ôm nhẹ tôn dáng cơ bắp V-Shape đầy nam tính. Rất linh hoạt làm trang phục tập gym, thể thao mùa hè hoặc làm lớp lót trong sơ mi, áo khoác.",
    images: [
      "/images/products/tanktop-nonbranded051-white-front.png",
      "/images/products/tanktop-nonbranded051-white-back.png",
      "/images/products/tanktop-nonbranded051-black-front.png",
      "/images/products/tanktop-nonbranded051-black-back.png",
      "/images/products/tanktop-nonbranded051-sand-front.jpg",
      "/images/products/tanktop-nonbranded051-sand-back.jpg",
      "/images/products/tanktop-nonbranded051-terracotta-front.jpg",
      "/images/products/tanktop-nonbranded051-terracotta-back.jpg",
      "/images/products/tanktop-nonbranded051-steelblue-front.jpg",
      "/images/products/tanktop-nonbranded051-steelblue-back.jpg",
      "/images/products/tanktop-nonbranded051-smokegrey-front.jpg",
      "/images/products/tanktop-nonbranded051-smokegrey-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 0 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 2 },
      { name: "Vàng Cát", hex: "#BFA888", imageIndex: 4 },
      { name: "Cam Đất", hex: "#A2583E", imageIndex: 6 },
      { name: "Xanh Thép", hex: "#4F6D7A", imageIndex: 8 },
      { name: "Xám Khói Sáng", hex: "#D8D7D5", imageIndex: 10 }
    ],
    rating: 5.0,
    reviews: 172,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Flexfit™ V-Shape"
  },
  {
    id: 96,
    name: "Áo Thun Ba Lỗ Tank Top Flexfit™ Cotton Compact Mềm Mịn Co Giãn Tôn Dáng V-Shape Phom Ôm Vừa F2 - Màu Đen",
    category: "Áo",
    price: 260000,
    originalPrice: 350000,
    description: "Áo thun ba lỗ nam (Tank Top) cao cấp thuộc bộ sưu tập Non Branded 051 từ Aureus Fashion. Tông màu đen tuyền kinh điển, nam tính và mạnh mẽ. Chất vải Cotton Compact cao cấp chống xù lông, co giãn 4 chiều Flexfit™ đàn hồi tốt, giúp khoe trọn khuôn ngực nở và bờ vai săn chắc. Phom ôm vừa F2 cùng thiết kế xẻ tà sườn hỗ trợ tối đa cho các bài tập thể hình cường độ cao cũng như phong cách streetwear thường ngày.",
    images: [
      "/images/products/tanktop-nonbranded051-black-front.png",
      "/images/products/tanktop-nonbranded051-black-back.png",
      "/images/products/tanktop-nonbranded051-white-front.png",
      "/images/products/tanktop-nonbranded051-white-back.png",
      "/images/products/tanktop-nonbranded051-sand-front.jpg",
      "/images/products/tanktop-nonbranded051-sand-back.jpg",
      "/images/products/tanktop-nonbranded051-terracotta-front.jpg",
      "/images/products/tanktop-nonbranded051-terracotta-back.jpg",
      "/images/products/tanktop-nonbranded051-steelblue-front.jpg",
      "/images/products/tanktop-nonbranded051-steelblue-back.jpg",
      "/images/products/tanktop-nonbranded051-smokegrey-front.jpg",
      "/images/products/tanktop-nonbranded051-smokegrey-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1C1C1E", imageIndex: 0 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 2 },
      { name: "Vàng Cát", hex: "#BFA888", imageIndex: 4 },
      { name: "Cam Đất", hex: "#A2583E", imageIndex: 6 },
      { name: "Xanh Thép", hex: "#4F6D7A", imageIndex: 8 },
      { name: "Xám Khói Sáng", hex: "#D8D7D5", imageIndex: 10 }
    ],
    rating: 5.0,
    reviews: 185,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Flexfit™ V-Shape"
  },
  {
    id: 97,
    name: "Áo Thun Dệt Kim Cổ Tròn FlexFit™ Vải Linen Rayon Mềm Rũ Seamless Phom Vừa F3 - Màu Đen",
    category: "Áo",
    price: 380000,
    originalPrice: 520000,
    description: "Áo thun nam dệt kim cao cấp phong cách Quiet Luxury & Resort Wear thuộc bộ sưu tập The Weekend 081 từ Aureus Fashion. Sử dụng chất liệu sợi dệt kết hợp Linen & Rayon (Linen Rayon Blend Knit) siêu mềm mại, độ rủ tự nhiên tinh tế, bề mặt thoáng khí và tản nhiệt tối ưu cho mùa hè oi bức. Ứng dụng kỹ thuật dệt kim nguyên khối Seamless hạn chế đường may ma sát vào cơ thể, kết hợp công nghệ co giãn FlexFit™ giữ phom áo luôn chỉn chu, không bai dão sau nhiều lần giặt. Thiết kế cổ tròn dệt bo gân rib sắc sảo với chi tiết tam giác retro V-insert cổ điển, gấu áo và viền tay dệt bo nhẹ tôn phom dáng. Phom vừa F3 thanh lịch, sang trọng và chuẩn mực cho những buổi hẹn hò cuối tuần hay kỳ nghỉ dưỡng.",
    images: [
      "/images/products/knit-weekend081-black-front.jpg",
      "/images/products/knit-weekend081-black-back.jpg",
      "/images/products/knit-weekend081-oatmeal-front.jpg",
      "/images/products/knit-weekend081-oatmeal-back.jpg",
      "/images/products/knit-weekend081-white-front.jpg",
      "/images/products/knit-weekend081-white-back.jpg",
      "/images/products/knit-weekend081-grey-front.jpg",
      "/images/products/knit-weekend081-grey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1C1C1E", imageIndex: 0 },
      { name: "Be Yến Mạch", hex: "#E6DFD5", imageIndex: 2 },
      { name: "Trắng", hex: "#FAF8F5", imageIndex: 4 },
      { name: "Xám Tiêu", hex: "#9EA1A5", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 142,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Linen Rayon Knit"
  },
  {
    id: 98,
    name: "Áo Thun Dệt Kim Cổ Tròn FlexFit™ Vải Linen Rayon Mềm Rũ Seamless Phom Vừa F3 - Màu Be Yến Mạch",
    category: "Áo",
    price: 380000,
    originalPrice: 520000,
    description: "Áo thun nam dệt kim cao cấp phong cách Quiet Luxury & Resort Wear thuộc bộ sưu tập The Weekend 081 từ Aureus Fashion. Tông màu be yến mạch (Oatmeal Beige / Kem Tiêu) nhã nhặn, tôn vinh kết cấu vân xơ tự nhiên của sợi Linen mộc mạc và Rayon mềm mát. Công nghệ dệt Seamless không đường nối cọ xát, cùng sợi đàn hồi FlexFit™ tạo cảm giác dễ chịu, nhẹ tênh khi chạm vào làn da. Chi tiết V-insert cổ áo vintage cùng bo gấu dệt tinh xảo tạo nét cuốn hút lịch thiệp, dễ dàng phối cùng quần âu ống suông, quần linen hoặc short đũi.",
    images: [
      "/images/products/knit-weekend081-oatmeal-front.jpg",
      "/images/products/knit-weekend081-oatmeal-back.jpg",
      "/images/products/knit-weekend081-black-front.jpg",
      "/images/products/knit-weekend081-black-back.jpg",
      "/images/products/knit-weekend081-white-front.jpg",
      "/images/products/knit-weekend081-white-back.jpg",
      "/images/products/knit-weekend081-grey-front.jpg",
      "/images/products/knit-weekend081-grey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Be Yến Mạch", hex: "#E6DFD5", imageIndex: 0 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 2 },
      { name: "Trắng", hex: "#FAF8F5", imageIndex: 4 },
      { name: "Xám Tiêu", hex: "#9EA1A5", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 156,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Linen Rayon Knit"
  },
  {
    id: 99,
    name: "Áo Thun Dệt Kim Cổ Tròn FlexFit™ Vải Linen Rayon Mềm Rũ Seamless Phom Vừa F3 - Màu Trắng",
    category: "Áo",
    price: 380000,
    originalPrice: 520000,
    description: "Áo thun nam dệt kim cao cấp phong cách Quiet Luxury & Resort Wear thuộc bộ sưu tập The Weekend 081 từ Aureus Fashion. Tông màu trắng thanh lịch, tinh tế và thuần khiết. Chất vải dệt kim từ sợi pha Linen & Rayon tạo độ rủ mềm mại, thoáng mát và tản nhiệt tối ưu cho những ngày hè rực nắng. Kỹ thuật dệt nguyên khối Seamless hạn chế ma sát tối đa cùng sợi đàn hồi FlexFit™ giúp áo giữ phom đứng dáng, không lo co rút hay biến dạng sau khi giặt. Chi tiết cổ tròn dệt gân với miếng đệm tam giác retro V-insert mang đậm vẻ đẹp lịch thiệp, dễ phối cùng mọi kiểu quần âu, khaki hoặc quần short.",
    images: [
      "/images/products/knit-weekend081-white-front.jpg",
      "/images/products/knit-weekend081-white-back.jpg",
      "/images/products/knit-weekend081-grey-front.jpg",
      "/images/products/knit-weekend081-grey-back.jpg",
      "/images/products/knit-weekend081-black-front.jpg",
      "/images/products/knit-weekend081-black-back.jpg",
      "/images/products/knit-weekend081-oatmeal-front.jpg",
      "/images/products/knit-weekend081-oatmeal-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng", hex: "#FAF8F5", imageIndex: 0 },
      { name: "Xám Tiêu", hex: "#9EA1A5", imageIndex: 2 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 4 },
      { name: "Be Yến Mạch", hex: "#E6DFD5", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 168,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Linen Rayon Knit"
  },
  {
    id: 100,
    name: "Áo Thun Dệt Kim Cổ Tròn FlexFit™ Vải Linen Rayon Mềm Rũ Seamless Phom Vừa F3 - Màu Xám Tiêu",
    category: "Áo",
    price: 380000,
    originalPrice: 520000,
    description: "Áo thun nam dệt kim cao cấp phong cách Quiet Luxury & Resort Wear thuộc bộ sưu tập The Weekend 081 từ Aureus Fashion. Tông màu xám tiêu (Heather Grey) kinh điển, kết hợp hài hòa giữa các sợi dệt sáng tối tạo nên hiệu ứng melange tự nhiên sang trọng. Vải dệt Linen Rayon Blend mềm mát rũ nhẹ, thấm hút mồ hôi và thoáng khí tuyệt đối. Công nghệ FlexFit™ co giãn linh hoạt giúp dáng áo phom vừa F3 tôn lên nét nam tính, phóng khoáng và lịch lãm.",
    images: [
      "/images/products/knit-weekend081-grey-front.jpg",
      "/images/products/knit-weekend081-grey-back.jpg",
      "/images/products/knit-weekend081-white-front.jpg",
      "/images/products/knit-weekend081-white-back.jpg",
      "/images/products/knit-weekend081-black-front.jpg",
      "/images/products/knit-weekend081-black-back.jpg",
      "/images/products/knit-weekend081-oatmeal-front.jpg",
      "/images/products/knit-weekend081-oatmeal-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Tiêu", hex: "#9EA1A5", imageIndex: 0 },
      { name: "Trắng", hex: "#FAF8F5", imageIndex: 2 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 4 },
      { name: "Be Yến Mạch", hex: "#E6DFD5", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 152,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Linen Rayon Knit"
  },
  {
    id: 101,
    name: "Áo Sơ Mi Tay Ngắn CloudTouch™ Vải Jean Waffle Wash Bụi Bặm Phom Hộp Rộng F5 - Màu Xanh Đậm",
    category: "Áo",
    price: 420000,
    originalPrice: 590000,
    description: "Áo sơ mi nam tay ngắn phong cách Streetwear & Modern Vintage thuộc bộ sưu tập The Original 061 từ Aureus Fashion. Ứng dụng chất liệu vải Jean Waffle độc đáo dệt nổi vân tổ ong kết hợp công nghệ làm mềm CloudTouch™ mang lại cảm giác êm ái, thoáng khí vượt trội so với chất jean truyền thống. Kỹ thuật giặt wash bụi bặm (Vintage Garment Enzyme Wash) tạo hiệu ứng phai màu tự nhiên mang đậm hơi thở thời trang đường phố. Thiết kế phom hộp rộng F5 (Boxy Fit) hiện đại với vai hạ thả rủ, vạt bằng tinh tế và túi ốp ngực vuông tiện lợi, dễ dàng diện khoác ngoài cùng áo thun ba lỗ hoặc mặc đơn lẻ tôn trọn cá tính phóng khoáng.",
    images: [
      "/images/products/shirt-original061-darkblue-front.jpg",
      "/images/products/shirt-original061-darkblue-back.jpg",
      "/images/products/shirt-original061-lightblue-front.jpg",
      "/images/products/shirt-original061-lightblue-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Đậm", hex: "#22354F", imageIndex: 0 },
      { name: "Xanh Nhạt", hex: "#8DAAC6", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 138,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "CloudTouch™ Waffle"
  },
  {
    id: 102,
    name: "Áo Sơ Mi Tay Ngắn CloudTouch™ Vải Jean Waffle Wash Bụi Bặm Phom Hộp Rộng F5 - Màu Xanh Nhạt",
    category: "Áo",
    price: 420000,
    originalPrice: 590000,
    description: "Áo sơ mi nam tay ngắn phong cách Streetwear & Clean Fit thuộc bộ sưu tập The Original 061 từ Aureus Fashion. Tông màu xanh nhạt wash sáng (Bleach / Light Indigo Wash) năng động, trẻ trung và cực kỳ bắt mắt dưới ánh nắng mùa hè. Sử dụng chất liệu vải dệt Jean Waffle cấu trúc tổ ong cải tiến kết hợp công nghệ sợi CloudTouch™ tạo độ mềm rũ tự nhiên, kháng cứng ráp và thấm hút mồ hôi tối ưu. Phom áo hộp rộng F5 (Boxy Fit) với bờ vai drop-shoulder thoải mái, cổ bẻ classic chỉn chu và cúc áo may tỉ mỉ, hoàn hảo để tạo nên outfit layer thời thượng cùng quần jeans baggy hoặc quần short túi hộp.",
    images: [
      "/images/products/shirt-original061-lightblue-front.jpg",
      "/images/products/shirt-original061-lightblue-back.jpg",
      "/images/products/shirt-original061-darkblue-front.jpg",
      "/images/products/shirt-original061-darkblue-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Nhạt", hex: "#8DAAC6", imageIndex: 0 },
      { name: "Xanh Đậm", hex: "#22354F", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 124,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "CloudTouch™ Waffle"
  },
  {
    id: 103,
    name: "Áo Sơ Mi Tay Ngắn EasyCare™ Vải Nhung Tăm Cổ Phối Nẹp Lai Nút Bấm Phom Hộp Rộng F5 - Màu Be Sáng Cổ Nâu",
    category: "Áo",
    price: 410000,
    originalPrice: 580000,
    description: "Áo sơ mi nam tay ngắn phong cách Modern Retro & Vintage Chic thuộc bộ sưu tập Seventy Seven 065 từ Aureus Fashion. Sử dụng chất liệu vải nhung tăm siêu mảnh (Micro Corduroy) cao cấp ứng dụng công nghệ EasyCare™ hạn chế nhăn nhàu, giữ phom đứng nếp và cực kỳ dễ dàng là ủi, bảo quản. Thiết kế ấn tượng với phần cổ bẻ tương phản sắc nét tone nâu trầm trên nền thân áo be sáng nhã nhặn. Điểm nhấn hàng cúc nẹp lai nút bấm (Snap Buttons) bọc màu tiệp vải hiện đại, thao tác đóng mở nhanh chóng và tiện lợi. Phom hộp rộng F5 (Boxy Fit) cá tính với vạt bằng tinh tế, tạo nên vẻ ngoài thanh lịch, phóng khoáng khi kết hợp cùng áo thun lót bên trong và quần âu hoặc quần ống suông.",
    images: [
      "/images/products/shirt-seventyseven065-cream-front.jpg",
      "/images/products/shirt-seventyseven065-cream-back.jpg",
      "/images/products/shirt-seventyseven065-brown-front.jpg",
      "/images/products/shirt-seventyseven065-brown-back.jpg",
      "/images/products/shirt-seventyseven065-black-front.jpg",
      "/images/products/shirt-seventyseven065-black-back.jpg",
      "/images/products/shirt-seventyseven065-navy-front.jpg",
      "/images/products/shirt-seventyseven065-navy-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Be Sáng Cổ Nâu", hex: "#EAE5DC", imageIndex: 0 },
      { name: "Nâu Cà Phê Cổ Đen", hex: "#5C4638", imageIndex: 2 },
      { name: "Đen Cổ Xám", hex: "#1C1C1E", imageIndex: 4 },
      { name: "Xanh Than Cổ Đen", hex: "#343B47", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 146,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "EasyCare™ Corduroy"
  },
  {
    id: 104,
    name: "Áo Sơ Mi Tay Ngắn EasyCare™ Vải Nhung Tăm Cổ Phối Nẹp Lai Nút Bấm Phom Hộp Rộng F5 - Màu Nâu Cà Phê Cổ Đen",
    category: "Áo",
    price: 410000,
    originalPrice: 580000,
    description: "Áo sơ mi nam tay ngắn phong cách Streetwear & Retro Sartorial thuộc bộ sưu tập Seventy Seven 065 từ Aureus Fashion. Tông màu nâu cà phê đậm đà kết hợp cổ bẻ đen tương phản quyền lực, tạo điểm nhấn thị giác đẳng cấp và nam tính. Chất vải nhung tăm mịn màng ứng dụng công nghệ xử lý EasyCare™ chống xù lông, hạn chế bám bụi và duy trì độ đanh chắc, mềm mại theo thời gian. Hàng nút bấm snap kim loại bọc thời thượng cùng phom dáng hộp rộng F5 (Boxy Fit) thoải mái mang đến tinh thần tự do, đậm chất nghệ thuật đường phố đương đại.",
    images: [
      "/images/products/shirt-seventyseven065-brown-front.jpg",
      "/images/products/shirt-seventyseven065-brown-back.jpg",
      "/images/products/shirt-seventyseven065-black-front.jpg",
      "/images/products/shirt-seventyseven065-black-back.jpg",
      "/images/products/shirt-seventyseven065-navy-front.jpg",
      "/images/products/shirt-seventyseven065-navy-back.jpg",
      "/images/products/shirt-seventyseven065-cream-front.jpg",
      "/images/products/shirt-seventyseven065-cream-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Nâu Cà Phê Cổ Đen", hex: "#5C4638", imageIndex: 0 },
      { name: "Đen Cổ Xám", hex: "#1C1C1E", imageIndex: 2 },
      { name: "Xanh Than Cổ Đen", hex: "#343B47", imageIndex: 4 },
      { name: "Be Sáng Cổ Nâu", hex: "#EAE5DC", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 132,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "EasyCare™ Corduroy"
  },
  {
    id: 105,
    name: "Áo Sơ Mi Tay Ngắn EasyCare™ Vải Nhung Tăm Cổ Phối Nẹp Lai Nút Bấm Phom Hộp Rộng F5 - Màu Đen Cổ Xám",
    category: "Áo",
    price: 410000,
    originalPrice: 580000,
    description: "Áo sơ mi nam tay ngắn phong cách Streetwear & Minimalist Luxury thuộc bộ sưu tập Seventy Seven 065 từ Aureus Fashion. Tông màu đen tuyền huyền bí được làm bật lên nhờ chi tiết cổ bẻ phối màu xám tiêu tương phản tinh tế. Bề mặt vải nhung tăm micro corduroy dệt mịn với công nghệ EasyCare™ giúp chống nhăn, ít bám bụi, giữ cho áo luôn đứng nếp chuẩn mực. Hàng nút bấm snap kim loại bọc màu tiệp vải đồng bộ cùng thiết kế phom hộp rộng F5 (Boxy Fit) vai hạ drop-shoulder và vạt bằng gọn gàng, mang lại phong thái cuốn hút, nam tính và đầy tự tin.",
    images: [
      "/images/products/shirt-seventyseven065-black-front.jpg",
      "/images/products/shirt-seventyseven065-black-back.jpg",
      "/images/products/shirt-seventyseven065-navy-front.jpg",
      "/images/products/shirt-seventyseven065-navy-back.jpg",
      "/images/products/shirt-seventyseven065-cream-front.jpg",
      "/images/products/shirt-seventyseven065-cream-back.jpg",
      "/images/products/shirt-seventyseven065-brown-front.jpg",
      "/images/products/shirt-seventyseven065-brown-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen Cổ Xám", hex: "#1C1C1E", imageIndex: 0 },
      { name: "Xanh Than Cổ Đen", hex: "#343B47", imageIndex: 2 },
      { name: "Be Sáng Cổ Nâu", hex: "#EAE5DC", imageIndex: 4 },
      { name: "Nâu Cà Phê Cổ Đen", hex: "#5C4638", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 158,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "EasyCare™ Corduroy"
  },
  {
    id: 106,
    name: "Áo Sơ Mi Tay Ngắn EasyCare™ Vải Nhung Tăm Cổ Phối Nẹp Lai Nút Bấm Phom Hộp Rộng F5 - Màu Xanh Than Cổ Đen",
    category: "Áo",
    price: 410000,
    originalPrice: 580000,
    description: "Áo sơ mi nam tay ngắn phong cách Modern Casual & Dark Academia thuộc bộ sưu tập Seventy Seven 065 từ Aureus Fashion. Tông màu xanh than trầm lắng (Deep Charcoal Navy) kết hợp cổ bẻ đen tương phản quyền lực, tạo nên tổng thể trang nhã, hiện đại và bí ẩn. Ứng dụng chất vải nhung tăm sợi siêu nhỏ kết hợp công nghệ EasyCare™ mềm êm, thấm hút tốt và không lo co rút hay biến dạng sau khi giặt. Hàng nẹp lai nút bấm snap kim loại bọc thời thượng cùng phom dáng hộp rộng F5 (Boxy Fit) vạt bằng chuẩn form, cực kỳ dễ phối cùng quần âu, khaki hoặc quần short tối màu.",
    images: [
      "/images/products/shirt-seventyseven065-navy-front.jpg",
      "/images/products/shirt-seventyseven065-navy-back.jpg",
      "/images/products/shirt-seventyseven065-black-front.jpg",
      "/images/products/shirt-seventyseven065-black-back.jpg",
      "/images/products/shirt-seventyseven065-cream-front.jpg",
      "/images/products/shirt-seventyseven065-cream-back.jpg",
      "/images/products/shirt-seventyseven065-brown-front.jpg",
      "/images/products/shirt-seventyseven065-brown-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Than Cổ Đen", hex: "#343B47", imageIndex: 0 },
      { name: "Đen Cổ Xám", hex: "#1C1C1E", imageIndex: 2 },
      { name: "Be Sáng Cổ Nâu", hex: "#EAE5DC", imageIndex: 4 },
      { name: "Nâu Cà Phê Cổ Đen", hex: "#5C4638", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 142,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "EasyCare™ Corduroy"
  },
  {
    id: 107,
    name: "Áo Sơ Mi Tay Ngắn Vải Thun Icevibes™ 270Gsm Nút Bấm Co Giãn Mát Mịn Mặc Êm Phom Hộp Rộng F5 - Màu Xám Tiêu Sáng",
    category: "Áo",
    price: 390000,
    originalPrice: 550000,
    description: "Áo sơ mi nam tay ngắn phong cách Clean Fit & Urban Minimalist thuộc bộ sưu tập The Minimalist 026 từ Aureus Fashion. Được dệt từ chất liệu vải thun hai mặt cao cấp định lượng 270Gsm dày dặn đứng phom, tích hợp công nghệ làm mát sợi Icevibes™ Cool Comfort mang lại cảm giác mát rượi tức thì, thấm hút mồ hôi và tản nhiệt tối ưu suốt cả ngày. Sợi vải có độ đàn hồi co giãn linh hoạt 4 chiều giúp cử động êm ái, hoàn toàn không gò bó như sơ mi truyền thống. Thiết kế hiện đại với hàng nút bấm snap bọc tiệp màu sang trọng, túi ốp ngực vuông tiện lợi và phom hộp rộng F5 (Boxy Fit) tôn lên nét nam tính, phóng khoáng, trẻ trung.",
    images: [
      "/images/products/shirt-minimalist026-grey-front.jpg",
      "/images/products/shirt-minimalist026-grey-back.jpg",
      "/images/products/shirt-minimalist026-charcoal-front.jpg",
      "/images/products/shirt-minimalist026-charcoal-back.jpg",
      "/images/products/shirt-minimalist026-black-front.jpg",
      "/images/products/shirt-minimalist026-black-back.jpg",
      "/images/products/shirt-minimalist026-white-front.png",
      "/images/products/shirt-minimalist026-white-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Tiêu Sáng", hex: "#D8D9DC", imageIndex: 0 },
      { name: "Xám Chì", hex: "#636569", imageIndex: 2 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 4 },
      { name: "Trắng", hex: "#FAF9F6", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 152,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Icevibes™ 270Gsm"
  },
  {
    id: 108,
    name: "Áo Sơ Mi Tay Ngắn Vải Thun Icevibes™ 270Gsm Nút Bấm Co Giãn Mát Mịn Mặc Êm Phom Hộp Rộng F5 - Màu Xám Chì",
    category: "Áo",
    price: 390000,
    originalPrice: 550000,
    description: "Áo sơ mi nam tay ngắn phong cách Smart Minimalist & Athletic Leisure thuộc bộ sưu tập The Minimalist 026 từ Aureus Fashion. Tông màu xám chì (Charcoal Grey) mạnh mẽ, sang trọng và chuẩn mực cho mọi dịp từ công sở đến dạo phố. Ứng dụng công nghệ vải thun dệt đanh 2 mặt Icevibes™ 270Gsm mát lạnh, bề mặt láng mịn không xù lông và kháng nhăn tuyệt đối. Điểm nhấn hàng cúc nút bấm snap kim loại tiện lợi kết hợp bờ vai drop-shoulder và vạt bằng phom hộp rộng F5 (Boxy Fit), đem lại diện mạo đĩnh đạc, hiện đại và cực kỳ thoải mái khi vận động.",
    images: [
      "/images/products/shirt-minimalist026-charcoal-front.jpg",
      "/images/products/shirt-minimalist026-charcoal-back.jpg",
      "/images/products/shirt-minimalist026-black-front.jpg",
      "/images/products/shirt-minimalist026-black-back.jpg",
      "/images/products/shirt-minimalist026-white-front.png",
      "/images/products/shirt-minimalist026-white-back.png",
      "/images/products/shirt-minimalist026-grey-front.jpg",
      "/images/products/shirt-minimalist026-grey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Chì", hex: "#636569", imageIndex: 0 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 2 },
      { name: "Trắng", hex: "#FAF9F6", imageIndex: 4 },
      { name: "Xám Tiêu Sáng", hex: "#D8D9DC", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 138,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Icevibes™ 270Gsm"
  },
  {
    id: 109,
    name: "Áo Sơ Mi Tay Ngắn Vải Thun Icevibes™ 270Gsm Nút Bấm Co Giãn Mát Mịn Mặc Êm Phom Hộp Rộng F5 - Màu Đen",
    category: "Áo",
    price: 390000,
    originalPrice: 550000,
    description: "Áo sơ mi nam tay ngắn phong cách All-Black Minimalist & Urban Chic thuộc bộ sưu tập The Minimalist 026 từ Aureus Fashion. Tông màu đen tuyền huyền bí, nam tính và tối giản đỉnh cao. Ứng dụng chất liệu vải thun dệt đanh 2 mặt công nghệ Icevibes™ định lượng 270Gsm đanh chắc đứng phom, co giãn đàn hồi 4 chiều và tạo cảm giác mát dịu trên da. Hàng nút bấm snap bọc màu đen đồng điệu sắc sảo cùng thiết kế túi ốp ngực vuông và phom dáng hộp rộng F5 (Boxy Fit) thời thượng, đem đến sự tự do phóng khoáng, dễ phối cùng mọi kiểu quần âu hoặc quần short thể thao.",
    images: [
      "/images/products/shirt-minimalist026-black-front.jpg",
      "/images/products/shirt-minimalist026-black-back.jpg",
      "/images/products/shirt-minimalist026-white-front.png",
      "/images/products/shirt-minimalist026-white-back.png",
      "/images/products/shirt-minimalist026-grey-front.jpg",
      "/images/products/shirt-minimalist026-grey-back.jpg",
      "/images/products/shirt-minimalist026-charcoal-front.jpg",
      "/images/products/shirt-minimalist026-charcoal-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1C1C1E", imageIndex: 0 },
      { name: "Trắng", hex: "#FAF9F6", imageIndex: 2 },
      { name: "Xám Tiêu Sáng", hex: "#D8D9DC", imageIndex: 4 },
      { name: "Xám Chì", hex: "#636569", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 164,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Icevibes™ 270Gsm"
  },
  {
    id: 110,
    name: "Áo Sơ Mi Tay Ngắn Vải Thun Icevibes™ 270Gsm Nút Bấm Co Giãn Mát Mịn Mặc Êm Phom Hộp Rộng F5 - Màu Trắng",
    category: "Áo",
    price: 390000,
    originalPrice: 550000,
    description: "Áo sơ mi nam tay ngắn phong cách Clean Fit & Pure Minimalist thuộc bộ sưu tập The Minimalist 026 từ Aureus Fashion. Tông màu trắng tinh khôi, thanh lịch và tươi mới, dễ dàng hòa phối cùng mọi outfit thường nhật. Chất vải thun hai mặt cao cấp dệt sợi Icevibes™ 270Gsm thoáng khí, không xù lông và có độ dày vừa vặn không lo lộ áo trong. Công nghệ co giãn đa chiều mang lại sự thoải mái tuyệt đối trong mọi chuyển động. Cúc bấm snap hiện đại kết hợp đường may tinh tế và phom hộp rộng F5 (Boxy Fit) tạo nên chuẩn mực thời trang hiện đại cho phái mạnh.",
    images: [
      "/images/products/shirt-minimalist026-white-front.png",
      "/images/products/shirt-minimalist026-white-back.png",
      "/images/products/shirt-minimalist026-black-front.jpg",
      "/images/products/shirt-minimalist026-black-back.jpg",
      "/images/products/shirt-minimalist026-grey-front.jpg",
      "/images/products/shirt-minimalist026-grey-back.jpg",
      "/images/products/shirt-minimalist026-charcoal-front.jpg",
      "/images/products/shirt-minimalist026-charcoal-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng", hex: "#FAF9F6", imageIndex: 0 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 2 },
      { name: "Xám Tiêu Sáng", hex: "#D8D9DC", imageIndex: 4 },
      { name: "Xám Chì", hex: "#636569", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 172,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Icevibes™ 270Gsm"
  },
  {
    id: 111,
    name: "Áo Sơ Mi Tay Ngắn Airdry™ 145Gsm Vải Dệt Rổ Sọc Mảnh Siêu Thoáng Khí Hack Dáng Phom Hộp Rộng F5 - Màu Xanh Đen Sọc Trắng",
    category: "Áo",
    price: 410000,
    originalPrice: 580000,
    description: "Áo sơ mi nam tay ngắn phong cách Parisian Casual & Resort Chic thuộc bộ sưu tập The Weekend 067 từ Aureus Fashion. Được dệt theo cấu trúc dệt rổ (Basketweave) kết hợp công nghệ Airdry™ siêu nhẹ chỉ 145Gsm với hàng ngàn lỗ thoát khí vi mô giúp cơ thể luôn mát mẻ, khô thoáng ngay cả dưới thời tiết oi ả. Họa tiết sọc mảnh (Pinstripes) dọc thân áo phối màu trắng trên nền xanh đen (Navy) thanh lịch tạo hiệu ứng thị giác hack dáng thon gọn và kéo dài tỷ lệ cơ thể. Điểm nhấn túi hộp đôi (Double Utility Pockets) hai bên ngực với sọc ngang đối xứng độc đáo cùng phom hộp rộng F5 (Boxy Fit) vai hạ drop-shoulder, vạt cắt ngang phóng khoáng, dễ phối cùng quần âu suông hoặc quần short đi biển.",
    images: [
      "/images/products/shirt-weekend067-navy-front.jpg",
      "/images/products/shirt-weekend067-navy-back.jpg",
      "/images/products/shirt-weekend067-black-front.jpg",
      "/images/products/shirt-weekend067-black-back.jpg",
      "/images/products/shirt-weekend067-white-front.jpg",
      "/images/products/shirt-weekend067-white-back.jpg",
      "/images/products/shirt-weekend067-lightblue-front.jpg",
      "/images/products/shirt-weekend067-lightblue-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Đen Sọc Trắng", hex: "#232B3B", imageIndex: 0 },
      { name: "Đen Sọc Trắng", hex: "#1E1F22", imageIndex: 2 },
      { name: "Trắng Sọc Đen", hex: "#EDEDF0", imageIndex: 4 },
      { name: "Xanh Nhạt Sọc Trắng", hex: "#7E9DBF", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 158,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Basketweave"
  },
  {
    id: 112,
    name: "Áo Sơ Mi Tay Ngắn Airdry™ 145Gsm Vải Dệt Rổ Sọc Mảnh Siêu Thoáng Khí Hack Dáng Phom Hộp Rộng F5 - Màu Đen Sọc Trắng",
    category: "Áo",
    price: 410000,
    originalPrice: 580000,
    description: "Áo sơ mi nam tay ngắn phong cách Modern Streetwear & Chic Sartorial thuộc bộ sưu tập The Weekend 067 từ Aureus Fashion. Tông màu đen huyền bí kết hợp sọc pinstripe trắng mảnh mai sắc nét, mang lại vẻ ngoài nam tính, sang trọng và chuẩn mực. Cấu trúc vải dệt rổ Airdry™ 145Gsm siêu mỏng nhẹ, bề mặt xốp thoáng khí tự nhiên và có độ rủ mềm mại tựa lụa nhưng đứng phom bền chắc. Thiết kế hai túi ngực vuông đối xứng may sọc ngang cá tính, cúc áo dập nổi tinh xảo cùng phom hộp rộng F5 (Boxy Fit) mang đến trải nghiệm thời trang sành điệu, tôn trọn vóc dáng nam giới.",
    images: [
      "/images/products/shirt-weekend067-black-front.jpg",
      "/images/products/shirt-weekend067-black-back.jpg",
      "/images/products/shirt-weekend067-white-front.jpg",
      "/images/products/shirt-weekend067-white-back.jpg",
      "/images/products/shirt-weekend067-lightblue-front.jpg",
      "/images/products/shirt-weekend067-lightblue-back.jpg",
      "/images/products/shirt-weekend067-navy-front.jpg",
      "/images/products/shirt-weekend067-navy-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen Sọc Trắng", hex: "#1E1F22", imageIndex: 0 },
      { name: "Trắng Sọc Đen", hex: "#EDEDF0", imageIndex: 2 },
      { name: "Xanh Nhạt Sọc Trắng", hex: "#7E9DBF", imageIndex: 4 },
      { name: "Xanh Đen Sọc Trắng", hex: "#232B3B", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 146,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Basketweave"
  },
  {
    id: 113,
    name: "Áo Sơ Mi Tay Ngắn Airdry™ 145Gsm Vải Dệt Rổ Sọc Mảnh Siêu Thoáng Khí Hack Dáng Phom Hộp Rộng F5 - Màu Trắng Sọc Đen",
    category: "Áo",
    price: 410000,
    originalPrice: 580000,
    description: "Áo sơ mi nam tay ngắn phong cách Clean Fit & Mediterranean Summer thuộc bộ sưu tập The Weekend 067 từ Aureus Fashion. Tông màu trắng trang nhã kết hợp sọc pinstripe đen mảnh mai tinh tế, mang lại diện mạo thư thái, tươi sáng và cuốn hút. Cấu trúc vải dệt rổ (Basketweave) công nghệ Airdry™ siêu nhẹ 145Gsm với các khe thoáng khí tự nhiên giúp thoát mồ hôi và giảm nhiệt độ bề mặt da tức thì. Thiết kế túi ngực đôi may sọc ngang đối xứng phá cách, cúc áo dập nổi sắc nét cùng phom hộp rộng F5 (Boxy Fit) tạo hiệu ứng hack dáng thanh thoát và phong cách thời thượng.",
    images: [
      "/images/products/shirt-weekend067-white-front.jpg",
      "/images/products/shirt-weekend067-white-back.jpg",
      "/images/products/shirt-weekend067-lightblue-front.jpg",
      "/images/products/shirt-weekend067-lightblue-back.jpg",
      "/images/products/shirt-weekend067-navy-front.jpg",
      "/images/products/shirt-weekend067-navy-back.jpg",
      "/images/products/shirt-weekend067-black-front.jpg",
      "/images/products/shirt-weekend067-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng Sọc Đen", hex: "#EDEDF0", imageIndex: 0 },
      { name: "Xanh Nhạt Sọc Trắng", hex: "#7E9DBF", imageIndex: 2 },
      { name: "Xanh Đen Sọc Trắng", hex: "#232B3B", imageIndex: 4 },
      { name: "Đen Sọc Trắng", hex: "#1E1F22", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 162,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Basketweave"
  },
  {
    id: 114,
    name: "Áo Sơ Mi Tay Ngắn Airdry™ 145Gsm Vải Dệt Rổ Sọc Mảnh Siêu Thoáng Khí Hack Dáng Phom Hộp Rộng F5 - Màu Xanh Nhạt Sọc Trắng",
    category: "Áo",
    price: 410000,
    originalPrice: 580000,
    description: "Áo sơ mi nam tay ngắn phong cách Coastal Summer & Resort Chic thuộc bộ sưu tập The Weekend 067 từ Aureus Fashion. Tông màu xanh biển nhạt (Sky Blue) phối sọc pinstripe trắng mát mắt, mang đậm hơi thở của những kỳ nghỉ hè phóng khoáng. Chất liệu dệt rổ Airdry™ 145Gsm siêu mỏng nhẹ, bề mặt vải có độ xốp nhẹ tự nhiên, không nhăn nhàu và tạo cảm giác mát rượi khi mặc. Điểm nhấn túi hộp đôi hai bên ngực sọc ngang đối xứng cá tính, vạt bằng phom hộp rộng F5 (Boxy Fit) hiện đại, hoàn hảo để diện cùng quần short đũi, quần linen hoặc quần âu sáng màu.",
    images: [
      "/images/products/shirt-weekend067-lightblue-front.jpg",
      "/images/products/shirt-weekend067-lightblue-back.jpg",
      "/images/products/shirt-weekend067-white-front.jpg",
      "/images/products/shirt-weekend067-white-back.jpg",
      "/images/products/shirt-weekend067-navy-front.jpg",
      "/images/products/shirt-weekend067-navy-back.jpg",
      "/images/products/shirt-weekend067-black-front.jpg",
      "/images/products/shirt-weekend067-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Nhạt Sọc Trắng", hex: "#7E9DBF", imageIndex: 0 },
      { name: "Trắng Sọc Đen", hex: "#EDEDF0", imageIndex: 2 },
      { name: "Xanh Đen Sọc Trắng", hex: "#232B3B", imageIndex: 4 },
      { name: "Đen Sọc Trắng", hex: "#1E1F22", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 150,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Basketweave"
  },
  {
    id: 115,
    name: "Áo Sơ Mi Tay Ngắn Airdry™ Vải Dệt Xước Hiệu Ứng Linen Thoáng Mát Chống Bết Dính Phom Rộng F4 - Màu Trắng",
    category: "Áo",
    price: 390000,
    originalPrice: 550000,
    description: "Áo sơ mi nam cổ trụ tay ngắn phong cách Quiet Luxury & Resort Wear thuộc bộ sưu tập The Weekend 056 từ Aureus Fashion. Sử dụng chất liệu vải dệt xước (Slub Fabric) tạo hiệu ứng vân sợi Linen mộc mạc, tự nhiên và sang trọng. Ứng dụng công nghệ xử lý sợi Airdry™ mang lại khả năng thoáng khí siêu việt, tản nhiệt tức thì và hạn chế tối đa tình trạng vải bết dính vào da khi đổ mồ hôi. Thiết kế cổ trụ (Mandarin Collar / Cổ tàu) tối giản, trẻ trung và tôn nét phong độ, kết hợp túi ốp ngực trái và phom rộng F4 thoải mái, vạt bầu nhẹ dễ dàng sơ vin hoặc thả ngoài phóng khoáng cùng quần âu, khaki hoặc quần short đũi.",
    images: [
      "/images/products/shirt-weekend056-white-front.jpg",
      "/images/products/shirt-weekend056-white-back.jpg",
      "/images/products/shirt-weekend056-beige-front.jpg",
      "/images/products/shirt-weekend056-beige-back.jpg",
      "/images/products/shirt-weekend056-navy-front.jpg",
      "/images/products/shirt-weekend056-navy-back.jpg",
      "/images/products/shirt-weekend056-black-front.jpg",
      "/images/products/shirt-weekend056-black-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng", hex: "#FAF9F6", imageIndex: 0 },
      { name: "Be Yến Mạch", hex: "#E8E2D8", imageIndex: 2 },
      { name: "Xanh Đen", hex: "#202636", imageIndex: 4 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 154,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Linen-Touch"
  },
  {
    id: 116,
    name: "Áo Sơ Mi Tay Ngắn Airdry™ Vải Dệt Xước Hiệu Ứng Linen Thoáng Mát Chống Bết Dính Phom Rộng F4 - Màu Be Yến Mạch",
    category: "Áo",
    price: 390000,
    originalPrice: 550000,
    description: "Áo sơ mi nam cổ trụ tay ngắn phong cách Minimalist Sartorial thuộc bộ sưu tập The Weekend 056 từ Aureus Fashion. Tông màu be yến mạch (Oatmeal Beige / Be Cát) trang nhã, nhẹ nhàng và tôn da, mang lại cảm giác thư thái của những kỳ nghỉ cuối tuần. Bề mặt vải dệt xước mô phỏng kết cấu xơ tự nhiên của Linen nhưng êm ái, ít nhăn và dễ giặt ủi nhờ công nghệ Airdry™. Thiết kế cổ trụ tinh tế, hàng khuy cài bọc chỉn chu cùng phom rộng F4 giúp che khuyết điểm cơ thể và mang lại diện mạo đĩnh đạc, thanh lịch trong mọi khoảnh khắc.",
    images: [
      "/images/products/shirt-weekend056-beige-front.jpg",
      "/images/products/shirt-weekend056-beige-back.jpg",
      "/images/products/shirt-weekend056-white-front.jpg",
      "/images/products/shirt-weekend056-white-back.jpg",
      "/images/products/shirt-weekend056-navy-front.jpg",
      "/images/products/shirt-weekend056-navy-back.jpg",
      "/images/products/shirt-weekend056-black-front.jpg",
      "/images/products/shirt-weekend056-black-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Be Yến Mạch", hex: "#E8E2D8", imageIndex: 0 },
      { name: "Trắng", hex: "#FAF9F6", imageIndex: 2 },
      { name: "Xanh Đen", hex: "#202636", imageIndex: 4 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 142,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Linen-Touch"
  },
  {
    id: 117,
    name: "Áo Sơ Mi Tay Ngắn Airdry™ Vải Dệt Xước Hiệu Ứng Linen Thoáng Mát Chống Bết Dính Phom Rộng F4 - Màu Xanh Đen",
    category: "Áo",
    price: 390000,
    originalPrice: 550000,
    description: "Áo sơ mi nam cổ trụ tay ngắn phong cách Quiet Luxury & Minimalist Resort thuộc bộ sưu tập The Weekend 056 từ Aureus Fashion. Tông màu xanh đen (Navy Night) trang nhã, nam tính và dễ dàng tôn vóc dáng. Chất vải dệt xước mô phỏng kết cấu xơ tự nhiên của Linen cao cấp kết hợp công nghệ thoát nhiệt Airdry™ mang lại cảm giác nhẹ tênh, mát mẻ và chống bết dính mồ hôi tối ưu. Thiết kế cổ trụ (Mandarin Collar) sắc nét, hàng nút cài tinh xảo cùng phom rộng F4 vạt bầu thanh lịch, cực kỳ phù hợp khi kết hợp cùng quần âu, khaki hoặc short đi dạo phố cuối tuần.",
    images: [
      "/images/products/shirt-weekend056-navy-front.jpg",
      "/images/products/shirt-weekend056-navy-back.jpg",
      "/images/products/shirt-weekend056-black-front.jpg",
      "/images/products/shirt-weekend056-black-back.png",
      "/images/products/shirt-weekend056-white-front.jpg",
      "/images/products/shirt-weekend056-white-back.jpg",
      "/images/products/shirt-weekend056-beige-front.jpg",
      "/images/products/shirt-weekend056-beige-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Đen", hex: "#202636", imageIndex: 0 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 2 },
      { name: "Trắng", hex: "#FAF9F6", imageIndex: 4 },
      { name: "Be Yến Mạch", hex: "#E8E2D8", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 168,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Linen-Touch"
  },
  {
    id: 118,
    name: "Áo Sơ Mi Tay Ngắn Airdry™ Vải Dệt Xước Hiệu Ứng Linen Thoáng Mát Chống Bết Dính Phom Rộng F4 - Màu Đen",
    category: "Áo",
    price: 390000,
    originalPrice: 550000,
    description: "Áo sơ mi nam cổ trụ tay ngắn phong cách All-Black Chic & Modern Sartorial thuộc bộ sưu tập The Weekend 056 từ Aureus Fashion. Tông màu đen tuyền huyền bí kết hợp cấu trúc dệt xước (Slub Linen-Effect) tạo nên bề mặt vải có chiều sâu thị giác ấn tượng và cuốn hút. Nhờ công nghệ sợi Airdry™ tiên tiến, áo khắc phục hoàn toàn nhược điểm dày nóng của vải thông thường, giúp cơ thể luôn mát mẻ và khô thoáng. Chi tiết cổ trụ cổ điển kết hợp túi ốp ngực vuông và phom rộng F4 mang lại phong thái đỉnh đạc, tự tin cho phái mạnh.",
    images: [
      "/images/products/shirt-weekend056-black-front.jpg",
      "/images/products/shirt-weekend056-black-back.png",
      "/images/products/shirt-weekend056-navy-front.jpg",
      "/images/products/shirt-weekend056-navy-back.jpg",
      "/images/products/shirt-weekend056-white-front.jpg",
      "/images/products/shirt-weekend056-white-back.jpg",
      "/images/products/shirt-weekend056-beige-front.jpg",
      "/images/products/shirt-weekend056-beige-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1C1C1E", imageIndex: 0 },
      { name: "Xanh Đen", hex: "#202636", imageIndex: 2 },
      { name: "Trắng", hex: "#FAF9F6", imageIndex: 4 },
      { name: "Be Yến Mạch", hex: "#E8E2D8", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 152,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Linen-Touch"
  },
  {
    id: 119,
    name: "Áo Sơ Mi Tay Dài Công Sở Vải Mềm Đứng Phom Ít Nhăn Dễ Ủi Lịch Lãm Phom Vừa F3 - Màu Trắng",
    category: "Áo",
    price: 420000,
    originalPrice: 590000,
    description: "Áo sơ mi nam tay dài công sở cao cấp thuộc dòng Non Branded 060 từ thương hiệu Aureus Fashion. Được dệt từ chất liệu cotton blend kết hợp sợi tơ mềm mại, bề mặt vải đanh mịn, đứng phom chuẩn mực và sở hữu khả năng hạn chế nhăn nhàu vượt trội, dễ ủi (EasyCare™ Wrinkle-Free). Thiết kế cổ bẻ ve nhọn (Classic Point Collar) phối viền lót cổ màu xám nhạt tinh tế, hàng nút cài chỉn chu cùng chi tiết xếp ly lưng đôi mang lại sự thoải mái tối đa khi cử động. Phom vừa F3 (Regular Fit F3) tôn nét đĩnh đạc, thanh lịch, là lựa chọn hoàn hảo cho môi trường văn phòng công sở, gặp gỡ đối tác hoặc các sự kiện trang trọng.",
    images: [
      "/images/products/shirt-nonbranded060-white-front.png",
      "/images/products/shirt-nonbranded060-white-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 0 }
    ],
    rating: 5.0,
    reviews: 138,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "EasyCare™ Wrinkle-Free"
  },
  {
    id: 120,
    name: "Áo Sơ Mi Tay Dài Easycare™ Vải Oxford Thoáng Mát Ít Nhăn Phối Cổ Sọc Tinh Tế Phom Vừa F3 - Màu Đen",
    category: "Áo",
    price: 390000,
    originalPrice: 550000,
    description: "Áo sơ mi nam tay dài vải Oxford cao cấp thuộc bộ sưu tập The No Style 266 từ thương hiệu Aureus Fashion. Ứng dụng công nghệ xử lý sợi Easycare™ giúp chất vải Oxford dệt đanh dày dặn nhưng vẫn cực kỳ thoáng mát, thấm hút mồ hôi tốt và chống nhăn nhàu vượt trội, tiết kiệm tối đa thời gian là ủi. Điểm nhấn nổi bật là phần lót chân cổ dệt họa tiết sọc pinstripe tinh tế, kết hợp hàng cúc nút vân sừng hổ phách sang trọng tạo nét tương phản hiện đại trên nền vải đen tuyền huyền bí. Phom vừa F3 (Regular Fit F3) đứng dáng, che khuyết điểm tốt, dễ dàng phối cùng quần âu, chinos hay jeans cho diện mạo lịch lãm chốn công sở hay năng động khi dạo phố.",
    images: [
      "/images/products/shirt-nostyle266-black-front.jpg",
      "/images/products/shirt-nostyle266-black-back.jpg",
      "/images/products/shirt-nostyle266-grey-front.jpg",
      "/images/products/shirt-nostyle266-grey-back.jpg",
      "/images/products/shirt-nostyle266-blue-front.jpg",
      "/images/products/shirt-nostyle266-blue-back.jpg",
      "/images/products/shirt-nostyle266-white-front.jpg",
      "/images/products/shirt-nostyle266-white-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1C1C1E", imageIndex: 0 },
      { name: "Xám Tiêu", hex: "#8A8D91", imageIndex: 2 },
      { name: "Xanh Nhạt", hex: "#9BB8D3", imageIndex: 4 },
      { name: "Trắng", hex: "#FAF9F6", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 146,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "EasyCare™ Oxford"
  },
  {
    id: 121,
    name: "Áo Sơ Mi Tay Dài Easycare™ Vải Oxford Thoáng Mát Ít Nhăn Phối Cổ Sọc Tinh Tế Phom Vừa F3 - Màu Xám Tiêu",
    category: "Áo",
    price: 390000,
    originalPrice: 550000,
    description: "Áo sơ mi nam tay dài vải Oxford cao cấp thuộc bộ sưu tập The No Style 266 từ thương hiệu Aureus Fashion. Tông màu xám tiêu (Heather Grey) hiện đại, trẻ trung và cực kỳ trang nhã. Chất vải Oxford dệt đanh dày dặn ứng dụng công nghệ xử lý Easycare™ tạo độ thông thoáng tuyệt đối, kháng nhăn hiệu quả và giữ phom chuẩn mực suốt ngày dài. Điểm nhấn tinh tế với ve lót chân cổ dệt sọc pinstripe cổ điển cùng hàng khuy nút vân sừng hổ phách sang trọng. Phom vừa F3 (Regular Fit F3) tôn nét chững chạc, lịch lãm chốn văn phòng hay các buổi gặp gỡ quan trọng.",
    images: [
      "/images/products/shirt-nostyle266-grey-front.jpg",
      "/images/products/shirt-nostyle266-grey-back.jpg",
      "/images/products/shirt-nostyle266-black-front.jpg",
      "/images/products/shirt-nostyle266-black-back.jpg",
      "/images/products/shirt-nostyle266-blue-front.jpg",
      "/images/products/shirt-nostyle266-blue-back.jpg",
      "/images/products/shirt-nostyle266-white-front.jpg",
      "/images/products/shirt-nostyle266-white-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Tiêu", hex: "#8A8D91", imageIndex: 0 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 2 },
      { name: "Xanh Nhạt", hex: "#9BB8D3", imageIndex: 4 },
      { name: "Trắng", hex: "#FAF9F6", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 135,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "EasyCare™ Oxford"
  },
  {
    id: 122,
    name: "Áo Sơ Mi Tay Dài Easycare™ Vải Oxford Thoáng Mát Ít Nhăn Phối Cổ Sọc Tinh Tế Phom Vừa F3 - Màu Xanh Nhạt",
    category: "Áo",
    price: 390000,
    originalPrice: 550000,
    description: "Áo sơ mi nam tay dài vải Oxford cao cấp thuộc bộ sưu tập The No Style 266 từ thương hiệu Aureus Fashion. Gam màu xanh nhạt (Baby Blue Oxford) thanh lịch, tươi sáng và mang lại năng lượng tích cực cho phong cách công sở hàng ngày. Vải Oxford dệt cấu trúc rổ đanh mịn kết hợp sợi xử lý Easycare™ kháng khuẩn, thấm hút mồ hôi tối ưu và hạn chế nhăn nhàu vượt bậc. Chi tiết viền lót cổ dệt sọc pinstripe đồng điệu kết hợp cúc nút màu hổ phách ấm áp tạo nên vẻ ngoài chuẩn quý ông hiện đại. Phom vừa F3 (Regular Fit F3) vừa vặn tôn dáng, linh hoạt phối sơ vin hoặc buông ngoài.",
    images: [
      "/images/products/shirt-nostyle266-blue-front.jpg",
      "/images/products/shirt-nostyle266-blue-back.jpg",
      "/images/products/shirt-nostyle266-black-front.jpg",
      "/images/products/shirt-nostyle266-black-back.jpg",
      "/images/products/shirt-nostyle266-grey-front.jpg",
      "/images/products/shirt-nostyle266-grey-back.jpg",
      "/images/products/shirt-nostyle266-white-front.jpg",
      "/images/products/shirt-nostyle266-white-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Nhạt", hex: "#9BB8D3", imageIndex: 0 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 2 },
      { name: "Xám Tiêu", hex: "#8A8D91", imageIndex: 4 },
      { name: "Trắng", hex: "#FAF9F6", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 158,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "EasyCare™ Oxford"
  },
  {
    id: 123,
    name: "Áo Sơ Mi Tay Dài Easycare™ Vải Oxford Thoáng Mát Ít Nhăn Phối Cổ Sọc Tinh Tế Phom Vừa F3 - Màu Trắng",
    category: "Áo",
    price: 390000,
    originalPrice: 550000,
    description: "Áo sơ mi nam tay dài vải Oxford cao cấp thuộc bộ sưu tập The No Style 266 từ thương hiệu Aureus Fashion. Tông màu trắng tinh khôi chuẩn phong thái quý ông lịch thiệp, dễ dàng phối hợp cùng mọi trang phục từ thường nhật đến sự kiện quan trọng. Chất liệu vải Oxford dệt vân nổi đanh mịn, thoáng khí vượt trội kết hợp công nghệ xử lý sợi Easycare™ kháng khuẩn, chống nhăn hiệu quả và giữ phom áo phẳng phiu. Điểm nhấn đắt giá nằm ở ve lót chân cổ dệt họa tiết sọc pinstripe xanh dương cổ điển cùng hàng cúc nút vân sừng hổ phách tương phản độc đáo. Thiết kế xếp ly đôi sống lưng cùng phom vừa F3 (Regular Fit F3) tôn nét đĩnh đạc, tự tin trong mọi hoàn cảnh.",
    images: [
      "/images/products/shirt-nostyle266-white-front.jpg",
      "/images/products/shirt-nostyle266-white-back.jpg",
      "/images/products/shirt-nostyle266-black-front.jpg",
      "/images/products/shirt-nostyle266-black-back.jpg",
      "/images/products/shirt-nostyle266-grey-front.jpg",
      "/images/products/shirt-nostyle266-grey-back.jpg",
      "/images/products/shirt-nostyle266-blue-front.jpg",
      "/images/products/shirt-nostyle266-blue-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng", hex: "#FAF9F6", imageIndex: 0 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 2 },
      { name: "Xám Tiêu", hex: "#8A8D91", imageIndex: 4 },
      { name: "Xanh Nhạt", hex: "#9BB8D3", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 164,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "EasyCare™ Oxford"
  },
  {
    id: 124,
    name: "Áo Sơ Mi Tay Dài Công Sở Airdry™ Siêu Nhẹ Co Giãn Thoát Nhiệt Tốt Êm Ái Phom Ôm Vừa F2 - Màu Xanh Nhạt",
    category: "Áo",
    price: 420000,
    originalPrice: 590000,
    description: "Áo sơ mi nam công sở cao cấp tay dài thuộc bộ sưu tập Seventy Seven 052 từ Aureus Fashion. Ứng dụng chất liệu vải Airdry™ thế hệ mới siêu nhẹ tênh, bề mặt đanh mịn như lụa với khả năng co giãn 4 chiều linh hoạt và thoát nhiệt vượt trội, đem lại cảm giác êm ái thoáng mát suốt 8 tiếng làm việc. Thiết kế cổ bẻ ve nhọn sắc sảo kết hợp đường cắt may chiết eo tinh tế phía sau lưng. Phom ôm vừa F2 (Fitted / Slim Fit F2) tôn trọn bờ vai rộng và vóc dáng săn chắc, hoàn hảo khi diện cùng quần âu slim-fit và veston hiện đại.",
    images: [
      "/images/products/shirt-seventyseven052-blue-front.jpg",
      "/images/products/shirt-seventyseven052-blue-back.jpg",
      "/images/products/shirt-seventyseven052-navy-front.jpg",
      "/images/products/shirt-seventyseven052-navy-back.jpg",
      "/images/products/shirt-seventyseven052-white-front.png",
      "/images/products/shirt-seventyseven052-white-back.png",
      "/images/products/shirt-seventyseven052-black-front.png",
      "/images/products/shirt-seventyseven052-black-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Nhạt", hex: "#A8CEEB", imageIndex: 0 },
      { name: "Xanh Đen", hex: "#1F2937", imageIndex: 2 },
      { name: "Trắng", hex: "#FAF9F6", imageIndex: 4 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 148,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Featherlight"
  },
  {
    id: 125,
    name: "Áo Sơ Mi Tay Dài Công Sở Airdry™ Siêu Nhẹ Co Giãn Thoát Nhiệt Tốt Êm Ái Phom Ôm Vừa F2 - Màu Xanh Đen",
    category: "Áo",
    price: 420000,
    originalPrice: 590000,
    description: "Áo sơ mi nam công sở cao cấp tay dài thuộc bộ sưu tập Seventy Seven 052 từ Aureus Fashion. Tông màu xanh đen (Midnight Navy) nam tính, bí ẩn và cực kỳ dễ phối đồ. Công nghệ sợi dệt Airdry™ siêu nhẹ tích hợp tính năng co giãn đàn hồi và tản nhiệt tức thì, xua tan cảm giác bí bách thường thấy ở sơ mi truyền thống. Đường may chiết lưng công phu cùng phom ôm vừa F2 (Fitted / Slim Fit F2) ôm nhẹ theo đường cong cơ thể, giúp quý ông luôn tự tin, đĩnh đạc và nổi bật trong mọi cuộc họp hay gặp gỡ đối tác.",
    images: [
      "/images/products/shirt-seventyseven052-navy-front.jpg",
      "/images/products/shirt-seventyseven052-navy-back.jpg",
      "/images/products/shirt-seventyseven052-blue-front.jpg",
      "/images/products/shirt-seventyseven052-blue-back.jpg",
      "/images/products/shirt-seventyseven052-white-front.png",
      "/images/products/shirt-seventyseven052-white-back.png",
      "/images/products/shirt-seventyseven052-black-front.png",
      "/images/products/shirt-seventyseven052-black-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Đen", hex: "#1F2937", imageIndex: 0 },
      { name: "Xanh Nhạt", hex: "#A8CEEB", imageIndex: 2 },
      { name: "Trắng", hex: "#FAF9F6", imageIndex: 4 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 139,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Featherlight"
  },
  {
    id: 126,
    name: "Áo Sơ Mi Tay Dài Công Sở Airdry™ Siêu Nhẹ Co Giãn Thoát Nhiệt Tốt Êm Ái Phom Ôm Vừa F2 - Màu Trắng",
    category: "Áo",
    price: 420000,
    originalPrice: 590000,
    description: "Áo sơ mi nam công sở cao cấp tay dài thuộc bộ sưu tập Seventy Seven 052 từ Aureus Fashion. Tông màu trắng trang nhã, thanh lịch vượt thời gian, là món đồ không thể thiếu của các quý ông hiện đại. Ứng dụng công nghệ sợi dệt Airdry™ Featherlight siêu nhẹ, co giãn đàn hồi 4 chiều và thoáng khí tối đa, xua tan hoàn toàn cảm giác ngột ngạt khi làm việc trong văn phòng suốt cả ngày. Đường chiết eo sau lưng chuẩn xác tôn trọn bờ ngực nở nang và vòng eo gọn gàng. Phom ôm vừa F2 (Fitted / Slim Fit F2) sắc sảo, hoàn mỹ khi kết hợp cùng cà vạt, veston hoặc diện đơn giản cùng quần âu.",
    images: [
      "/images/products/shirt-seventyseven052-white-front.png",
      "/images/products/shirt-seventyseven052-white-back.png",
      "/images/products/shirt-seventyseven052-blue-front.jpg",
      "/images/products/shirt-seventyseven052-blue-back.jpg",
      "/images/products/shirt-seventyseven052-navy-front.jpg",
      "/images/products/shirt-seventyseven052-navy-back.jpg",
      "/images/products/shirt-seventyseven052-black-front.png",
      "/images/products/shirt-seventyseven052-black-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng", hex: "#FAF9F6", imageIndex: 0 },
      { name: "Xanh Nhạt", hex: "#A8CEEB", imageIndex: 2 },
      { name: "Xanh Đen", hex: "#1F2937", imageIndex: 4 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 162,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Featherlight"
  },
  {
    id: 127,
    name: "Áo Sơ Mi Tay Dài Công Sở Airdry™ Siêu Nhẹ Co Giãn Thoát Nhiệt Tốt Êm Ái Phom Ôm Vừa F2 - Màu Đen",
    category: "Áo",
    price: 420000,
    originalPrice: 590000,
    description: "Áo sơ mi nam công sở cao cấp tay dài thuộc bộ sưu tập Seventy Seven 052 từ Aureus Fashion. Tông màu đen tuyền cá tính, quyến rũ và đầy quyền lực theo phong cách All-Black Sartorial. Bề mặt vải dệt Airdry™ đanh mịn, mỏng nhẹ êm ái với khả năng co giãn 4 chiều và thoát mồ hôi ấn tượng. Thiết kế cổ ve nhọn chỉn chu cùng đường may chiết eo lưng giúp tôn vóc dáng chữ V săn chắc. Phom ôm vừa F2 (Fitted / Slim Fit F2) vừa vặn tôn dáng, lý tưởng cho những buổi tiệc tối sang trọng hay phong cách Smart Casual ấn tượng.",
    images: [
      "/images/products/shirt-seventyseven052-black-front.png",
      "/images/products/shirt-seventyseven052-black-back.png",
      "/images/products/shirt-seventyseven052-blue-front.jpg",
      "/images/products/shirt-seventyseven052-blue-back.jpg",
      "/images/products/shirt-seventyseven052-navy-front.jpg",
      "/images/products/shirt-seventyseven052-navy-back.jpg",
      "/images/products/shirt-seventyseven052-white-front.png",
      "/images/products/shirt-seventyseven052-white-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1C1C1E", imageIndex: 0 },
      { name: "Xanh Nhạt", hex: "#A8CEEB", imageIndex: 2 },
      { name: "Xanh Đen", hex: "#1F2937", imageIndex: 4 },
      { name: "Trắng", hex: "#FAF9F6", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 145,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Featherlight"
  },
  {
    id: 128,
    name: "Áo Sơ Mi Tay Dài Công Sở Airdry™ Họa Tiết Sọc Chìm Siêu Nhẹ Thoáng Khí Ít Nhăn Phom Vừa F3 - Màu Xanh Nhạt",
    category: "Áo",
    price: 420000,
    originalPrice: 590000,
    description: "Áo sơ mi nam tay dài công sở cao cấp thuộc bộ sưu tập The Minimalist 017 từ Aureus Fashion. Họa tiết kẻ sọc tăm chìm (Micro Tone-on-tone Pinstripes) trên nền xanh pastel nhạt mang đến hiệu ứng thị giác tinh tế, thanh nhã và giúp vóc dáng thon gọn, cao ráo hơn. Ứng dụng chất liệu công nghệ Airdry™ siêu nhẹ tênh, thấm hút mồ hôi cực nhanh và hạn chế nhăn nhàu vượt trội sau nhiều lần giặt. Thiết kế cổ bẻ ve nhọn tiêu chuẩn, túi ốp ngực vuông tiện lợi cùng phom vừa F3 (Regular Fit F3) chuẩn mực, dễ dàng phối cùng cà vạt, veston hoặc diện thường nhật cùng quần âu, chinos.",
    images: [
      "/images/products/shirt-minimalist017-lightblue-front.jpg",
      "/images/products/shirt-minimalist017-lightblue-back.jpg",
      "/images/products/shirt-minimalist017-blue-front.jpg",
      "/images/products/shirt-minimalist017-blue-back.jpg",
      "/images/products/shirt-minimalist017-iceblue-front.jpg",
      "/images/products/shirt-minimalist017-iceblue-back.jpg",
      "/images/products/shirt-minimalist017-grey-front.jpg",
      "/images/products/shirt-minimalist017-grey-back.jpg",
      "/images/products/shirt-minimalist017-purple-front.jpg",
      "/images/products/shirt-minimalist017-purple-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Nhạt", hex: "#B2D3EE", imageIndex: 0 },
      { name: "Xanh Dương", hex: "#7E9EC9", imageIndex: 2 },
      { name: "Xanh Băng", hex: "#CFDEE7", imageIndex: 4 },
      { name: "Xám Sáng", hex: "#CCD1D9", imageIndex: 6 },
      { name: "Tím Nhạt", hex: "#E2C8E4", imageIndex: 8 }
    ],
    rating: 5.0,
    reviews: 154,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Pinstripe"
  },
  {
    id: 129,
    name: "Áo Sơ Mi Tay Dài Công Sở Airdry™ Họa Tiết Sọc Chìm Siêu Nhẹ Thoáng Khí Ít Nhăn Phom Vừa F3 - Màu Xanh Dương",
    category: "Áo",
    price: 420000,
    originalPrice: 590000,
    description: "Áo sơ mi nam tay dài công sở cao cấp thuộc bộ sưu tập The Minimalist 017 từ Aureus Fashion. Gam màu xanh dương thanh lịch (Cornflower Blue) kết hợp kỹ thuật dệt sọc chìm tinh xảo, tạo chiều sâu thị giác sang trọng và lịch lãm cho quý ông công sở. Công nghệ sợi dệt Airdry™ mang lại khả năng lưu thông khí tối đa, mát dịu suốt ngày dài và chống bết dính hiệu quả. Thiết kế cổ bẻ ve nhọn cứng cáp, túi ốp ngực tiện ích cùng phom vừa F3 (Regular Fit F3) vừa vặn tôn nét đĩnh đạc, chỉn chu trong mọi buổi họp và sự kiện kinh doanh.",
    images: [
      "/images/products/shirt-minimalist017-blue-front.jpg",
      "/images/products/shirt-minimalist017-blue-back.jpg",
      "/images/products/shirt-minimalist017-lightblue-front.jpg",
      "/images/products/shirt-minimalist017-lightblue-back.jpg",
      "/images/products/shirt-minimalist017-iceblue-front.jpg",
      "/images/products/shirt-minimalist017-iceblue-back.jpg",
      "/images/products/shirt-minimalist017-grey-front.jpg",
      "/images/products/shirt-minimalist017-grey-back.jpg",
      "/images/products/shirt-minimalist017-purple-front.jpg",
      "/images/products/shirt-minimalist017-purple-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Dương", hex: "#7E9EC9", imageIndex: 0 },
      { name: "Xanh Nhạt", hex: "#B2D3EE", imageIndex: 2 },
      { name: "Xanh Băng", hex: "#CFDEE7", imageIndex: 4 },
      { name: "Xám Sáng", hex: "#CCD1D9", imageIndex: 6 },
      { name: "Tím Nhạt", hex: "#E2C8E4", imageIndex: 8 }
    ],
    rating: 4.9,
    reviews: 142,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Pinstripe"
  },
  {
    id: 130,
    name: "Áo Sơ Mi Tay Dài Công Sở Airdry™ Họa Tiết Sọc Chìm Siêu Nhẹ Thoáng Khí Ít Nhăn Phom Vừa F3 - Màu Xanh Băng",
    category: "Áo",
    price: 420000,
    originalPrice: 590000,
    description: "Áo sơ mi nam tay dài công sở cao cấp thuộc bộ sưu tập The Minimalist 017 từ Aureus Fashion. Tông màu xanh băng (Ice Blue) thanh thoát, dịu mát mang đến luồng gió tươi mới cho diện mạo chốn văn phòng. Cấu trúc dệt sọc tăm chìm mờ ảo tạo nét nhã nhặn, sang trọng mà không đơn điệu. Vải sợi công nghệ Airdry™ siêu nhẹ thoáng khí, giải phóng nhiệt độ cơ thể nhanh chóng và giữ bề mặt phẳng phiu ít nhăn. Thiết kế cổ ve nhọn, túi ngực vuông và phom vừa F3 (Regular Fit F3) tôn phong thái điềm tĩnh, chuyên nghiệp.",
    images: [
      "/images/products/shirt-minimalist017-iceblue-front.jpg",
      "/images/products/shirt-minimalist017-iceblue-back.jpg",
      "/images/products/shirt-minimalist017-lightblue-front.jpg",
      "/images/products/shirt-minimalist017-lightblue-back.jpg",
      "/images/products/shirt-minimalist017-blue-front.jpg",
      "/images/products/shirt-minimalist017-blue-back.jpg",
      "/images/products/shirt-minimalist017-grey-front.jpg",
      "/images/products/shirt-minimalist017-grey-back.jpg",
      "/images/products/shirt-minimalist017-purple-front.jpg",
      "/images/products/shirt-minimalist017-purple-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Băng", hex: "#CFDEE7", imageIndex: 0 },
      { name: "Xanh Nhạt", hex: "#B2D3EE", imageIndex: 2 },
      { name: "Xanh Dương", hex: "#7E9EC9", imageIndex: 4 },
      { name: "Xám Sáng", hex: "#CCD1D9", imageIndex: 6 },
      { name: "Tím Nhạt", hex: "#E2C8E4", imageIndex: 8 }
    ],
    rating: 5.0,
    reviews: 160,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Pinstripe"
  },
  {
    id: 131,
    name: "Áo Sơ Mi Tay Dài Công Sở Airdry™ Họa Tiết Sọc Chìm Siêu Nhẹ Thoáng Khí Ít Nhăn Phom Vừa F3 - Màu Xám Sáng",
    category: "Áo",
    price: 420000,
    originalPrice: 590000,
    description: "Áo sơ mi nam tay dài công sở cao cấp thuộc bộ sưu tập The Minimalist 017 từ Aureus Fashion. Gam màu xám sáng (Light Grey / Ash Grey) hiện đại, trung tính và chuẩn mực cho thời trang Sartorial tối giản. Kỹ thuật dệt sọc chìm đồng màu tinh xảo mang lại nét thanh lịch kín đáo. Ứng dụng công nghệ vải Airdry™ thế hệ mới siêu nhẹ và siêu thoáng khí, chống co rút và giữ nếp tuyệt đối suốt ngày dài bận rộn. Phom vừa F3 (Regular Fit F3) vừa vặn che khuyết điểm tốt, cực kỳ lịch lãm khi phối cùng quần tây đen, navy hay ghi đậm.",
    images: [
      "/images/products/shirt-minimalist017-grey-front.jpg",
      "/images/products/shirt-minimalist017-grey-back.jpg",
      "/images/products/shirt-minimalist017-lightblue-front.jpg",
      "/images/products/shirt-minimalist017-lightblue-back.jpg",
      "/images/products/shirt-minimalist017-blue-front.jpg",
      "/images/products/shirt-minimalist017-blue-back.jpg",
      "/images/products/shirt-minimalist017-iceblue-front.jpg",
      "/images/products/shirt-minimalist017-iceblue-back.jpg",
      "/images/products/shirt-minimalist017-purple-front.jpg",
      "/images/products/shirt-minimalist017-purple-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Sáng", hex: "#CCD1D9", imageIndex: 0 },
      { name: "Xanh Nhạt", hex: "#B2D3EE", imageIndex: 2 },
      { name: "Xanh Dương", hex: "#7E9EC9", imageIndex: 4 },
      { name: "Xanh Băng", hex: "#CFDEE7", imageIndex: 6 },
      { name: "Tím Nhạt", hex: "#E2C8E4", imageIndex: 8 }
    ],
    rating: 4.9,
    reviews: 147,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Pinstripe"
  },
  {
    id: 132,
    name: "Áo Sơ Mi Tay Dài Công Sở Airdry™ Họa Tiết Sọc Chìm Siêu Nhẹ Thoáng Khí Ít Nhăn Phom Vừa F3 - Màu Tím Nhạt",
    category: "Áo",
    price: 420000,
    originalPrice: 590000,
    description: "Áo sơ mi nam tay dài công sở cao cấp thuộc bộ sưu tập The Minimalist 017 từ Aureus Fashion. Tông màu tím nhạt pastel (Lavender Pinstripe) lãng mạn, tinh tế và đầy cuốn hút, tạo điểm nhấn phong cách mới lạ chuẩn quý ông hiện đại. Cấu trúc dệt sọc tăm chìm dọc thân áo giúp tôn chiều cao và tạo nét hài hòa nhã nhặn. Nhờ chất vải dệt công nghệ Airdry™ siêu nhẹ và thoáng khí, áo mang lại cảm giác dễ chịu, mát mịn và hạn chế tối đa nhăn nhàu khi vận động. Thiết kế cổ bẻ ve nhọn cùng túi ngực vuông và phom vừa F3 (Regular Fit F3) chuẩn mực, kết hợp cực đẹp cùng quần âu màu be, xám hoặc xanh navy.",
    images: [
      "/images/products/shirt-minimalist017-purple-front.jpg",
      "/images/products/shirt-minimalist017-purple-back.jpg",
      "/images/products/shirt-minimalist017-lightblue-front.jpg",
      "/images/products/shirt-minimalist017-lightblue-back.jpg",
      "/images/products/shirt-minimalist017-blue-front.jpg",
      "/images/products/shirt-minimalist017-blue-back.jpg",
      "/images/products/shirt-minimalist017-iceblue-front.jpg",
      "/images/products/shirt-minimalist017-iceblue-back.jpg",
      "/images/products/shirt-minimalist017-grey-front.jpg",
      "/images/products/shirt-minimalist017-grey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Tím Nhạt", hex: "#E2C8E4", imageIndex: 0 },
      { name: "Xanh Nhạt", hex: "#B2D3EE", imageIndex: 2 },
      { name: "Xanh Dương", hex: "#7E9EC9", imageIndex: 4 },
      { name: "Xanh Băng", hex: "#CFDEE7", imageIndex: 6 },
      { name: "Xám Sáng", hex: "#CCD1D9", imageIndex: 8 }
    ],
    rating: 5.0,
    reviews: 156,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Pinstripe"
  },
  {
    id: 133,
    name: "Quần Jeans Ôm Vừa Slim Fit Vải Denim 12Oz Co Giãn Chống Bùng Gối Bền Bỉ Đứng Dáng Phom Ôm Vừa F2 - Màu Xanh Nhạt Wash",
    category: "Quần",
    price: 490000,
    originalPrice: 690000,
    description: "Quần jeans nam slim-fit cao cấp thuộc bộ sưu tập The Original 028 từ thương hiệu Aureus Fashion. Được dệt từ chất liệu vải denim định lượng 12Oz dày dặn, đanh chắc nhưng tích hợp sợi co giãn cao cấp mang lại sự thoải mái tối đa khi di chuyển, ngồi làm việc và đặc biệt sở hữu công nghệ chống bùng gối (Anti-Knee Bagging) giữ phom dáng luôn sắc nét sau thời gian dài sử dụng. Công nghệ wash màu xanh sáng (Light Blue Stone Wash) tự nhiên theo phong cách Retro Casual cổ điển. Thiết kế chuẩn 5 túi tiện dụng, khóa kéo kim loại đồng cao cấp chống trượt cùng tag da khắc chìm logo thương hiệu tinh xảo ở cạp lưng. Phom ôm vừa F2 (Slim Fit F2) tôn đôi chân thon dài, mạnh mẽ, cực kỳ dễ phối cùng áo thun, polo hoặc áo sơ mi công sở.",
    images: [
      "/images/products/pants-original028-lightblue-front.jpg",
      "/images/products/pants-original028-lightblue-back.jpg",
      "/images/products/pants-original028-lightblue-detail1.jpg",
      "/images/products/pants-original028-lightblue-detail2.jpg"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Xanh Nhạt Wash", hex: "#A4B5CD", imageIndex: 0 }
    ],
    rating: 5.0,
    reviews: 172,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Denim 12Oz Stretch"
  },
  {
    id: 134,
    name: "Quần Jeans Ống Suông Mài Nhẹ Durabletex™ 11.8Oz Vải Mềm Thoáng Mát Đứng Phom Phom Rộng F4 - Màu Xanh Nhạt Wash",
    category: "Quần",
    price: 490000,
    originalPrice: 690000,
    description: "Quần jeans nam ống suông cao cấp thuộc bộ sưu tập The Original 064 từ Aureus Fashion. Được phát triển từ chất liệu vải denim Durabletex™ định lượng 11.8Oz tiêu chuẩn, mềm mịn, thông thoáng và có khả năng chống mài mòn vượt trội. Hiệu ứng mài nhẹ (Subtle Whiskers & Sanded Wash) mang lại phong cách Retro Streetwear hiện đại, bụi bặm nhưng vẫn giữ được nét lịch lãm. Thiết kế cạp cao vừa vặn, chuẩn 5 túi cổ điển, khóa kéo kim loại cao cấp và tag da bò dập logo thương hiệu ở cạp lưng. Phom rộng F4 (Wide Leg / Relaxed Straight Fit F4) buông thẳng đứng ống, hack chiều cao và che khuyết điểm chân tuyệt đối, cực kỳ ăn ý khi kết hợp cùng áo thun oversize, polo boxy hay sơ mi khoác ngoài.",
    images: [
      "/images/products/pants-original064-lightblue-front.jpg",
      "/images/products/pants-original064-lightblue-back.jpg",
      "/images/products/pants-original064-darkblue-front.jpg",
      "/images/products/pants-original064-darkblue-back.jpg",
      "/images/products/pants-original064-greywash-front.jpg",
      "/images/products/pants-original064-greywash-back.jpg",
      "/images/products/pants-original064-black-front.jpg",
      "/images/products/pants-original064-black-back.jpg"
    ],
    sizes: ["28", "29", "30", "31", "32", "34"],
    colors: [
      { name: "Xanh Nhạt Wash", hex: "#7E9EC9", imageIndex: 0 },
      { name: "Xanh Đậm", hex: "#232B3E", imageIndex: 2 },
      { name: "Xám Khói Wash", hex: "#4A4D53", imageIndex: 4 },
      { name: "Đen", hex: "#1E1E20", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 168,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Durabletex™ 11.8Oz"
  },
  {
    id: 135,
    name: "Quần Jeans Ống Suông Mài Nhẹ Durabletex™ 11.8Oz Vải Mềm Thoáng Mát Đứng Phom Phom Rộng F4 - Màu Xanh Đậm",
    category: "Quần",
    price: 490000,
    originalPrice: 690000,
    description: "Quần jeans nam ống suông cao cấp thuộc bộ sưu tập The Original 064 từ Aureus Fashion. Tông màu xanh chàm đậm nguyên bản (Raw Indigo Denim) sang trọng, đứng đắn và chuẩn phong cách Casual Smart. Chất liệu denim Durabletex™ 11.8Oz đanh mịn, đứng phom và tản nhiệt thoáng mát, không gây bí nóng. Thiết kế đường chỉ may nổi tương phản sắc nét, phụ kiện cúc đinh tán kim loại đúc bền bỉ cùng tag da cao cấp. Phom rộng F4 (Wide Leg / Relaxed Straight Fit F4) phóng khoáng, thoải mái trong mọi chuyển động, dễ dàng nâng tầm phong cách khi phối cùng áo thun trơn, sơ mi oxford hay áo khoác denim.",
    images: [
      "/images/products/pants-original064-darkblue-front.jpg",
      "/images/products/pants-original064-darkblue-back.jpg",
      "/images/products/pants-original064-lightblue-front.jpg",
      "/images/products/pants-original064-lightblue-back.jpg",
      "/images/products/pants-original064-greywash-front.jpg",
      "/images/products/pants-original064-greywash-back.jpg",
      "/images/products/pants-original064-black-front.jpg",
      "/images/products/pants-original064-black-back.jpg"
    ],
    sizes: ["28", "29", "30", "31", "32", "34"],
    colors: [
      { name: "Xanh Đậm", hex: "#232B3E", imageIndex: 0 },
      { name: "Xanh Nhạt Wash", hex: "#7E9EC9", imageIndex: 2 },
      { name: "Xám Khói Wash", hex: "#4A4D53", imageIndex: 4 },
      { name: "Đen", hex: "#1E1E20", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 152,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Durabletex™ 11.8Oz"
  },
  {
    id: 136,
    name: "Quần Jeans Ống Suông Mài Nhẹ Durabletex™ 11.8Oz Vải Mềm Thoáng Mát Đứng Phom Phom Rộng F4 - Màu Xám Khói Wash",
    category: "Quần",
    price: 490000,
    originalPrice: 690000,
    description: "Quần jeans nam ống suông cao cấp thuộc bộ sưu tập The Original 064 từ Aureus Fashion. Tông màu xám khói wash (Washed Smoke Grey) cá tính, nổi bật với hiệu ứng wash râu mèo nhẹ nhàng và mài loang tự nhiên mang hơi thở thời trang đường phố đương đại. Chất vải denim Durabletex™ định lượng 11.8Oz bền bỉ, xử lý làm mềm đặc biệt cho cảm giác êm ái, thoáng mát cả ngày dài. Thiết kế cạp chuẩn, chi tiết 5 túi cổ điển sắc sảo, nút đinh tán kim loại mạ bạc và tag da may tỉ mỉ phía sau. Phom rộng F4 (Wide Leg / Relaxed Straight Fit F4) suông thẳng đứng ống giúp kéo dài đôi chân, cực kỳ phong cách và dễ biến hóa khi phối cùng hoodie, áo thun oversize hay sơ mi layering.",
    images: [
      "/images/products/pants-original064-greywash-front.jpg",
      "/images/products/pants-original064-greywash-back.jpg",
      "/images/products/pants-original064-black-front.jpg",
      "/images/products/pants-original064-black-back.jpg",
      "/images/products/pants-original064-lightblue-front.jpg",
      "/images/products/pants-original064-lightblue-back.jpg",
      "/images/products/pants-original064-darkblue-front.jpg",
      "/images/products/pants-original064-darkblue-back.jpg"
    ],
    sizes: ["28", "29", "30", "31", "32", "34"],
    colors: [
      { name: "Xám Khói Wash", hex: "#4A4D53", imageIndex: 0 },
      { name: "Đen", hex: "#1E1E20", imageIndex: 2 },
      { name: "Xanh Nhạt Wash", hex: "#7E9EC9", imageIndex: 4 },
      { name: "Xanh Đậm", hex: "#232B3E", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 145,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Durabletex™ 11.8Oz"
  },
  {
    id: 137,
    name: "Quần Jeans Ống Suông Mài Nhẹ Durabletex™ 11.8Oz Vải Mềm Thoáng Mát Đứng Phom Phom Rộng F4 - Màu Đen",
    category: "Quần",
    price: 490000,
    originalPrice: 690000,
    description: "Quần jeans nam ống suông cao cấp thuộc bộ sưu tập The Original 064 từ Aureus Fashion. Tông màu đen tuyền huyền bí, tối giản và thời thượng (Pitch Black Denim), đem lại vẻ ngoài nam tính, chững chạc và cực kỳ tôn dáng. Dệt từ chất liệu denim Durabletex™ 11.8Oz cao cấp mềm mịn, chống co rút và giữ độ bền màu tối ưu sau nhiều lần giặt. Phom rộng F4 (Wide Leg / Relaxed Straight Fit F4) buông thả tự nhiên, che khuyết điểm chân hoàn hảo và tạo sự thoải mái tối đa trong mọi hoạt động. Món đồ 'must-have' dễ dàng mix & match cùng áo thun trắng, sơ mi flannel, áo len hay áo khoác blazer hiện đại.",
    images: [
      "/images/products/pants-original064-black-front.jpg",
      "/images/products/pants-original064-black-back.jpg",
      "/images/products/pants-original064-greywash-front.jpg",
      "/images/products/pants-original064-greywash-back.jpg",
      "/images/products/pants-original064-lightblue-front.jpg",
      "/images/products/pants-original064-lightblue-back.jpg",
      "/images/products/pants-original064-darkblue-front.jpg",
      "/images/products/pants-original064-darkblue-back.jpg"
    ],
    sizes: ["28", "29", "30", "31", "32", "34"],
    colors: [
      { name: "Đen", hex: "#1E1E20", imageIndex: 0 },
      { name: "Xám Khói Wash", hex: "#4A4D53", imageIndex: 2 },
      { name: "Xanh Nhạt Wash", hex: "#7E9EC9", imageIndex: 4 },
      { name: "Xanh Đậm", hex: "#232B3E", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 138,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Durabletex™ 11.8Oz"
  },
  {
    id: 138,
    name: "Quần Jeans Ống Rộng Loose Fit Durabletex™ 310Gsm Gối Double Knee Chịu Lực Bền Bỉ Phom Rộng F4 - Màu Xanh Xô Thơm",
    category: "Quần",
    price: 490000,
    originalPrice: 690000,
    description: "Quần jeans nam ống rộng phong cách workwear utility cao cấp thuộc bộ sưu tập Multi Color Jean 012 từ Aureus Fashion. Được phát triển từ chất vải denim/canvas Durabletex™ định lượng 310Gsm dày dặn, đanh mịn và sở hữu khả năng chống mài mòn, chống rách vượt trội. Điểm nhấn ấn tượng là thiết kế gối đôi chịu lực (Double Knee Panel) gia cố bằng đinh tán tán góc (rivets) đặc trưng của văn hóa thợ thủ công và thời trang skatewear cổ điển. Tích hợp quai gài búa (hammer loop) và túi dụng cụ tiện ích bên sườn quần. Tông màu xanh xô thơm (Sage Green) trầm ấm, độc đáo và cực kỳ tôn gu thẩm mỹ. Phom rộng F4 (Loose Fit / Wide Leg F4) buông suông thẳng đứng, che khuyết điểm chân, hack chiều cao và mang lại sự phóng khoáng, tự do trong từng bước di chuyển.",
    images: [
      "/images/products/pants-doubleknee012-sagegreen-front.jpg",
      "/images/products/pants-doubleknee012-sagegreen-back.jpg",
      "/images/products/pants-doubleknee012-khaki-front.jpg",
      "/images/products/pants-doubleknee012-khaki-back.jpg",
      "/images/products/pants-doubleknee012-mocha-front.jpg",
      "/images/products/pants-doubleknee012-mocha-back.jpg",
      "/images/products/pants-doubleknee012-grey-front.jpg",
      "/images/products/pants-doubleknee012-grey-back.jpg"
    ],
    sizes: ["28", "29", "30", "31", "32", "34"],
    colors: [
      { name: "Xanh Xô Thơm", hex: "#7E8F84", imageIndex: 0 },
      { name: "Nâu Khaki", hex: "#B5A593", imageIndex: 2 },
      { name: "Nâu Mocha", hex: "#7B6C5F", imageIndex: 4 },
      { name: "Xám Xi Măng", hex: "#A0A2A5", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 156,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Double Knee 310Gsm"
  },
  {
    id: 139,
    name: "Quần Jeans Ống Rộng Loose Fit Durabletex™ 310Gsm Gối Double Knee Chịu Lực Bền Bỉ Phom Rộng F4 - Màu Nâu Khaki",
    category: "Quần",
    price: 490000,
    originalPrice: 690000,
    description: "Quần jeans nam ống rộng phong cách workwear utility cao cấp thuộc bộ sưu tập Multi Color Jean 012 từ Aureus Fashion. Tông màu nâu khaki cát (Sand Khaki / Tan) kinh điển đậm chất thời trang dã ngoại gorpcore và phong cách đường phố đương đại. Chất vải denim/canvas Durabletex™ định lượng 310Gsm cao cấp, dệt chắc tay, giữ phom đứng dáng sau thời gian dài sử dụng. Cấu trúc mảng đắp gối đôi (Double Knee) với đinh tán tán góc kim loại chịu lực tối đa, kèm quai búa và túi hộp utility bên hông tiện dụng. Phom rộng F4 (Loose Fit / Wide Leg F4) chuẩn mực, cực kỳ thoải mái và dễ dàng phối cùng áo thun phom hộp boxy, áo polo, hoodie hay khoác ngoài sơ mi flannel.",
    images: [
      "/images/products/pants-doubleknee012-khaki-front.jpg",
      "/images/products/pants-doubleknee012-khaki-back.jpg",
      "/images/products/pants-doubleknee012-sagegreen-front.jpg",
      "/images/products/pants-doubleknee012-sagegreen-back.jpg",
      "/images/products/pants-doubleknee012-mocha-front.jpg",
      "/images/products/pants-doubleknee012-mocha-back.jpg",
      "/images/products/pants-doubleknee012-grey-front.jpg",
      "/images/products/pants-doubleknee012-grey-back.jpg"
    ],
    sizes: ["28", "29", "30", "31", "32", "34"],
    colors: [
      { name: "Nâu Khaki", hex: "#B5A593", imageIndex: 0 },
      { name: "Xanh Xô Thơm", hex: "#7E8F84", imageIndex: 2 },
      { name: "Nâu Mocha", hex: "#7B6C5F", imageIndex: 4 },
      { name: "Xám Xi Măng", hex: "#A0A2A5", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 142,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Double Knee 310Gsm"
  },
  {
    id: 140,
    name: "Quần Jeans Ống Rộng Loose Fit Durabletex™ 310Gsm Gối Double Knee Chịu Lực Bền Bỉ Phom Rộng F4 - Màu Nâu Mocha",
    category: "Quần",
    price: 490000,
    originalPrice: 690000,
    description: "Quần jeans nam ống rộng phong cách workwear utility cao cấp thuộc bộ sưu tập Multi Color Jean 012 từ Aureus Fashion. Tông màu nâu mocha trầm ấm (Mocha Brown / Earth Tone) mang vẻ đẹp cổ điển, bụi bặm và đậm chất thời trang đường phố vintage. Chất liệu denim/canvas Durabletex™ định lượng 310Gsm đanh chắc, có khả năng chống sờn rách và giữ form ống suông đứng dáng hoàn hảo. Cấu trúc gối đôi chịu lực (Double Knee) gia cố bằng đinh tán tán góc kim loại mạ đồng, kết hợp quai búa và túi dụng cụ utility tiện ích. Phom rộng F4 (Loose Fit / Wide Leg F4) chuẩn mực, tôn dáng nam tính, thoải mái vận động và cực kỳ nổi bật khi mix cùng áo thun ringer, polo dệt kim hay áo khoác canvas.",
    images: [
      "/images/products/pants-doubleknee012-mocha-front.jpg",
      "/images/products/pants-doubleknee012-mocha-back.jpg",
      "/images/products/pants-doubleknee012-grey-front.jpg",
      "/images/products/pants-doubleknee012-grey-back.jpg",
      "/images/products/pants-doubleknee012-sagegreen-front.jpg",
      "/images/products/pants-doubleknee012-sagegreen-back.jpg",
      "/images/products/pants-doubleknee012-khaki-front.jpg",
      "/images/products/pants-doubleknee012-khaki-back.jpg"
    ],
    sizes: ["28", "29", "30", "31", "32", "34"],
    colors: [
      { name: "Nâu Mocha", hex: "#7B6C5F", imageIndex: 0 },
      { name: "Xám Xi Măng", hex: "#A0A2A5", imageIndex: 2 },
      { name: "Xanh Xô Thơm", hex: "#7E8F84", imageIndex: 4 },
      { name: "Nâu Khaki", hex: "#B5A593", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 139,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Double Knee 310Gsm"
  },
  {
    id: 141,
    name: "Quần Jeans Ống Rộng Loose Fit Durabletex™ 310Gsm Gối Double Knee Chịu Lực Bền Bỉ Phom Rộng F4 - Màu Xám Xi Măng",
    category: "Quần",
    price: 490000,
    originalPrice: 690000,
    description: "Quần jeans nam ống rộng phong cách workwear utility cao cấp thuộc bộ sưu tập Multi Color Jean 012 từ Aureus Fashion. Tông màu xám xi măng (Cement Grey) hiện đại, sắc sảo và mang tinh thần thời trang công nghiệp đương đại (Industrial Streetwear). Chất vải denim/canvas Durabletex™ định lượng 310Gsm bền bỉ, dày dặn nhưng tản nhiệt thông thoáng, không gây bí bách khi mặc cả ngày. Điểm nhấn mảng đắp gối đôi (Double Knee Panel) với hàng đinh tán tán góc chắc chắn, quai treo dụng cụ và túi sườn tiện dụng. Phom rộng F4 (Loose Fit / Wide Leg F4) buông rủ tự nhiên, hack dáng chân thon dài, dễ dàng phối match cùng áo thun oversize đen/trắng, áo hoodie nỉ hay sơ mi flannel năng động.",
    images: [
      "/images/products/pants-doubleknee012-grey-front.jpg",
      "/images/products/pants-doubleknee012-grey-back.jpg",
      "/images/products/pants-doubleknee012-mocha-front.jpg",
      "/images/products/pants-doubleknee012-mocha-back.jpg",
      "/images/products/pants-doubleknee012-sagegreen-front.jpg",
      "/images/products/pants-doubleknee012-sagegreen-back.jpg",
      "/images/products/pants-doubleknee012-khaki-front.jpg",
      "/images/products/pants-doubleknee012-khaki-back.jpg"
    ],
    sizes: ["28", "29", "30", "31", "32", "34"],
    colors: [
      { name: "Xám Xi Măng", hex: "#A0A2A5", imageIndex: 0 },
      { name: "Nâu Mocha", hex: "#7B6C5F", imageIndex: 2 },
      { name: "Xanh Xô Thơm", hex: "#7E8F84", imageIndex: 4 },
      { name: "Nâu Khaki", hex: "#B5A593", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 134,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Double Knee 310Gsm"
  },
  {
    id: 142,
    name: "Quần Jeans Jogger Lưng Thun Mài Nhẹ Durabletex™ Co Giãn Thoải Mái Đứng Phom Phom Vừa F3 - Màu Đen Wash",
    category: "Quần",
    price: 450000,
    originalPrice: 650000,
    description: "Quần jeans nam dáng jogger cao cấp thuộc bộ sưu tập The Original 102 từ thương hiệu Aureus Fashion. Được dệt từ chất liệu vải denim Durabletex™ cao cấp tích hợp sợi co giãn 4 chiều linh hoạt, mang lại cảm giác êm ái, thoải mái vận động tối đa mà vẫn giữ được độ đanh dày và đứng phom chuẩn mực. Thiết kế cạp lưng thun co giãn tích hợp dây rút kim loại cao cấp tùy chỉnh tiện lợi, kết hợp gấu quần bo chun jogger gọn gàng, năng động. Điểm nhấn độc đáo là các đường rã cúp cắt may vát xéo công thái học (Ergonomic Curved Seams) ở phần đùi và gối, tạo hiệu ứng thị giác khỏe khoắn, hiện đại và chống căng chật khi ngồi hoặc vận động mạnh. Tông màu đen wash mài nhẹ (Acid Washed Black) cá tính, bụi bặm, dễ dàng phối cùng sneaker, áo thun oversized, hoodie hay áo khoác bomber.",
    images: [
      "/images/products/pants-original102-blackwash-front.jpg",
      "/images/products/pants-original102-blackwash-back.jpg",
      "/images/products/pants-original102-lightblue-front.jpg",
      "/images/products/pants-original102-lightblue-back.jpg"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Đen Wash", hex: "#333438", imageIndex: 0 },
      { name: "Xanh Nhạt Wash", hex: "#A8B3C0", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 165,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Lưng Thun Co Giãn"
  },
  {
    id: 143,
    name: "Quần Jeans Jogger Lưng Thun Mài Nhẹ Durabletex™ Co Giãn Thoải Mái Đứng Phom Phom Vừa F3 - Màu Xanh Nhạt Wash",
    category: "Quần",
    price: 450000,
    originalPrice: 650000,
    description: "Quần jeans nam dáng jogger cao cấp thuộc bộ sưu tập The Original 102 từ Aureus Fashion. Tông màu xanh nhạt wash loang tự nhiên (Light Acid Blue Wash) trẻ trung, tươi sáng và tràn đầy năng lượng đường phố. Sử dụng chất liệu vải denim Durabletex™ mềm mại, tản nhiệt tốt, tích hợp sợi thun co giãn đàn hồi giúp người mặc luôn cảm thấy nhẹ nhõm, dễ chịu trong mọi hoạt động. Cạp chun co giãn êm ái kèm dây rút thời trang, gấu jogger ôm vừa cổ chân tôn đôi giày sneaker yêu thích. Thiết kế đường rã cắt xéo tạo phom 3D nâng đỡ chuyển động, túi xéo phía trước sâu rộng cùng 2 túi sau tiện ích. Phom vừa F3 (Regular Jogger Fit F3) vừa vặn, gọn gàng, phối cực chất cùng áo thun basic, polo thể thao hoặc áo nỉ sweater.",
    images: [
      "/images/products/pants-original102-lightblue-front.jpg",
      "/images/products/pants-original102-lightblue-back.jpg",
      "/images/products/pants-original102-blackwash-front.jpg",
      "/images/products/pants-original102-blackwash-back.jpg"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Xanh Nhạt Wash", hex: "#A8B3C0", imageIndex: 0 },
      { name: "Đen Wash", hex: "#333438", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 148,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Lưng Thun Co Giãn"
  },
  {
    id: 144,
    name: "Quần Jeans Baggy Ống Cong Mài Rách Durabletex™ Phủ Đồng Hạn Chế Nhăn Chống Bục Đáy Phom Siêu Rộng F5 - The Original 072",
    category: "Quần",
    price: 490000,
    originalPrice: 690000,
    description: "Quần jeans nam baggy ống cong mài rách cao cấp thuộc bộ sưu tập The Original 072 từ thương hiệu Aureus Fashion. Ứng dụng công nghệ sợi Durabletex™ phủ đồng cao cấp độc quyền giúp tăng cường độ bền sợi vải, hạn chế nhăn tối đa và gia cố đường may kép chống bục đáy vượt trội. Thiết kế phom siêu rộng F5 với đường cắt ống cong thời thượng (Curved Silhouette F5) tạo hiệu ứng xếp nếp hack dáng chân dài tự nhiên, che khuyết điểm chân tuyệt đối. Hiệu ứng wash màu xanh retro vintage kết hợp cùng các chi tiết mài rách thủ công tinh xảo, cúc kim loại dập nổi và tag da bò The Original Denim ở cạp lưng. Dễ dàng mix & match cùng áo thun oversize, áo polo boxy hay hoodie đường phố.",
    images: [
      "/images/products/pants-original072-curved-front.jpg",
      "/images/products/pants-original072-curved-back.jpg",
      "/images/products/pants-original072-curved-detail1.jpg",
      "/images/products/pants-original072-curved-detail2.jpg"
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
    badge: "Phủ Đồng F5"
  },
  {
    id: 145,
    name: "Quần Jeans Jogger Lưng Thun Durabletex™ Thoáng Mát Độ Bền Cao Giữ Dáng Hoàn Hảo Phom Rộng F4 - The Original 101 - Màu Xanh Nhạt Wash",
    category: "Quần",
    price: 450000,
    originalPrice: 650000,
    description: "Quần jeans nam dáng jogger ống suông cao cấp thuộc bộ sưu tập The Original 101 từ Aureus Fashion. Được phát triển từ chất liệu vải denim Durabletex™ cao cấp với kết cấu sợi dệt bền chắc, thông thoáng tản nhiệt tốt và có khả năng giữ dáng hoàn hảo sau nhiều lần giặt. Thiết kế cạp lưng thun co giãn êm ái tích hợp dây rút tùy chỉnh độ vừa vặn, kết hợp ống suông buông tự nhiên phóng khoáng. Tông màu xanh nhạt wash (Light Bleach Blue) tươi trẻ, đậm chất thời trang dạo phố mùa hè. Thiết kế túi xéo sâu rộng và túi sau ốp nổi có thêu logo biểu tượng tinh tế ở góc túi. Phom rộng F4 (Relaxed Wide Fit F4) thoải mái, che khuyết điểm chân và tôn chiều cao, cực kỳ ăn ý khi kết hợp cùng áo thun oversize, áo polo hay sơ mi cộc tay.",
    images: [
      "/images/products/pants-original101-lightblue-front.jpg",
      "/images/products/pants-original101-lightblue-back.jpg",
      "/images/products/pants-original101-midblue-front.jpg",
      "/images/products/pants-original101-midblue-back.jpg"
    ],
    sizes: ["28", "29", "30", "31", "32", "34"],
    colors: [
      { name: "Xanh Nhạt Wash", hex: "#AEC2D9", imageIndex: 0 },
      { name: "Xanh Vừa Wash", hex: "#7D98B8", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 154,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Lưng Thun F4"
  },
  {
    id: 146,
    name: "Quần Jeans Jogger Lưng Thun Durabletex™ Thoáng Mát Độ Bền Cao Giữ Dáng Hoàn Hảo Phom Rộng F4 - The Original 101 - Màu Xanh Vừa Wash",
    category: "Quần",
    price: 450000,
    originalPrice: 650000,
    description: "Quần jeans nam dáng jogger ống suông cao cấp thuộc bộ sưu tập The Original 101 từ Aureus Fashion. Tông màu xanh vừa wash (Medium Stone Wash) cổ điển, nam tính và dễ dàng phối đồ trong mọi hoàn cảnh. Ứng dụng công nghệ vải denim sợi Durabletex™ bền bỉ, thoáng khí, kháng nhăn và giữ phom ống đứng dáng chuẩn mực. Cạp chun co giãn kèm dây rút dệt cao cấp giúp cử động linh hoạt không gò bó. Phom rộng F4 (Relaxed Wide Fit F4) suông thẳng hiện đại, mang lại sự tự do thoải mái tuyệt đối cho cả ngày dài làm việc, học tập hay dạo phố cuối tuần.",
    images: [
      "/images/products/pants-original101-midblue-front.jpg",
      "/images/products/pants-original101-midblue-back.jpg",
      "/images/products/pants-original101-lightblue-front.jpg",
      "/images/products/pants-original101-lightblue-back.jpg"
    ],
    sizes: ["28", "29", "30", "31", "32", "34"],
    colors: [
      { name: "Xanh Vừa Wash", hex: "#7D98B8", imageIndex: 0 },
      { name: "Xanh Nhạt Wash", hex: "#AEC2D9", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 146,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Lưng Thun F4"
  },
  {
    id: 147,
    name: "Quần Jeans Ống Loe Regular Fit Durabletex™ Tôn Dáng Hack Chiều Dài Chân Bụi Bặm Phom Vừa F3 - The Original 076 - Màu Xanh Đậm Indigo",
    category: "Quần",
    price: 490000,
    originalPrice: 690000,
    description: "Quần jeans nam ống loe cao cấp thuộc bộ sưu tập The Original 076 từ thương hiệu Aureus Fashion. Được phát triển từ chất liệu vải denim Durabletex™ cao cấp dày dặn, đanh mịn và co giãn nhẹ tạo cảm giác thoải mái khi di chuyển. Thiết kế phom vừa F3 kết hợp dáng ống loe thời thượng (Flared / Bootcut Silhouette F3) ôm nhẹ ở phần đùi và xòe dần từ đầu gối xuống gấu quần, tạo hiệu ứng thị giác kéo dài đôi chân cực đỉnh và hack dáng thon gọn tuyệt đối. Tông màu xanh chàm đậm Indigo nguyên bản (Raw Dark Indigo) sang trọng, kết hợp đường chỉ may nổi tương phản sắc sảo, cúc kim loại dập nổi và tag da The Original Denim cao cấp. Hoàn hảo để diện cùng áo sơ mi Cuban, áo thun ôm fit, polo dệt kim hay áo khoác da biker.",
    images: [
      "/images/products/pants-original076-darkindigo-front.jpg",
      "/images/products/pants-original076-darkindigo-back.jpg",
      "/images/products/pants-original076-lightblue-front.jpg",
      "/images/products/pants-original076-lightblue-back.jpg"
    ],
    sizes: ["28", "29", "30", "31", "32", "34"],
    colors: [
      { name: "Xanh Đậm Indigo", hex: "#1E2838", imageIndex: 0 },
      { name: "Xanh Nhạt Wash", hex: "#9FB2C8", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 162,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Ống Loe F3"
  },
  {
    id: 148,
    name: "Quần Jeans Ống Loe Regular Fit Durabletex™ Tôn Dáng Hack Chiều Dài Chân Bụi Bặm Phom Vừa F3 - The Original 076 - Màu Xanh Nhạt Wash",
    category: "Quần",
    price: 490000,
    originalPrice: 690000,
    description: "Quần jeans nam ống loe cao cấp thuộc bộ sưu tập The Original 076 từ thương hiệu Aureus Fashion. Tông màu xanh nhạt wash (Light Bleach Blue Wash) kết hợp hiệu ứng mài râu mèo nhẹ nhàng ở hông và đùi mang hơi thở Retro thập niên 70 pha lẫn tinh thần Y2K bụi bặm, phá cách. Chất vải denim Durabletex™ cao cấp thoáng mát, thấm hút mồ hôi và giữ phom ống loe sắc nét không bị gãy form sau khi giặt. Thiết kế cạp chuẩn 5 túi cổ điển, khóa kéo mượt mà và đường xòe gấu tinh tế giúp che khuyết điểm bắp chân to và tôn dáng giày boots, loafer hoặc chunky sneaker. Dễ dàng biến hóa phong cách lãng tử cùng sơ mi hoa văn, áo thun graphic vintage hay áo blazer.",
    images: [
      "/images/products/pants-original076-lightblue-front.jpg",
      "/images/products/pants-original076-lightblue-back.jpg",
      "/images/products/pants-original076-darkindigo-front.jpg",
      "/images/products/pants-original076-darkindigo-back.jpg"
    ],
    sizes: ["28", "29", "30", "31", "32", "34"],
    colors: [
      { name: "Xanh Nhạt Wash", hex: "#9FB2C8", imageIndex: 0 },
      { name: "Xanh Đậm Indigo", hex: "#1E2838", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 153,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Ống Loe F3"
  },
  {
    id: 149,
    name: "Quần Jeans Baggy Ống Cong 3D Durabletex™ Đáy Hạ Thoải Mái Giải Phóng Đôi Chân Phom Siêu Rộng F5 - The Original 053 - Màu Xanh Đậm Indigo",
    category: "Quần",
    price: 490000,
    originalPrice: 690000,
    description: "Quần jeans nam baggy ống cong 3D cao cấp thuộc bộ sưu tập The Original 053 từ thương hiệu Aureus Fashion. Được phát triển trên nền chất liệu denim Durabletex™ cao cấp dày dặn, đanh mịn và sở hữu khả năng thoáng khí, chống bai dão vượt trội. Điểm nhấn đột phá là cấu trúc đáy hạ (Drop Crotch) giải phóng triệt để sự gò bó cho đôi chân, kết hợp các đường may cắt cúp 3D ống cong công thái học (3D Curved Ergonomic Seams) chạy dọc thân quần tạo nếp xếp phồng tự nhiên cực kỳ phá cách. Thiết kế túi xéo phía trước kiểu utility độc đáo kèm tab vải dệt điểm xuyết, túi sau bản lớn vuông vức và tag da cạp lưng sang trọng. Phom siêu rộng F5 (Ultra-Wide Baggy F5) chuẩn tinh thần thời trang đường phố và trượt ván đường phố (Skatewear), phối cực 'cháy' cùng áo thun oversize, hoodie boxy hoặc áo khoác denim.",
    images: [
      "/images/products/pants-original053-darkindigo-front.jpg",
      "/images/products/pants-original053-darkindigo-back.jpg",
      "/images/products/pants-original053-midblue-front.jpg",
      "/images/products/pants-original053-midblue-back.jpg"
    ],
    sizes: ["28", "29", "30", "31", "32", "34"],
    colors: [
      { name: "Xanh Đậm Indigo", hex: "#202A3D", imageIndex: 0 },
      { name: "Xanh Vừa Wash", hex: "#55749A", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 168,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Ống Cong 3D F5"
  },
  {
    id: 150,
    name: "Quần Jeans Baggy Ống Cong 3D Durabletex™ Đáy Hạ Thoải Mái Giải Phóng Đôi Chân Phom Siêu Rộng F5 - The Original 053 - Màu Xanh Vừa Wash",
    category: "Quần",
    price: 490000,
    originalPrice: 690000,
    description: "Quần jeans nam baggy ống cong 3D cao cấp thuộc bộ sưu tập The Original 053 từ thương hiệu Aureus Fashion. Tông màu xanh vừa wash loang tự nhiên (Medium Stone Blue Wash) mang phong cách Retro Y2K bụi bặm, phóng khoáng và tràn đầy năng lượng tuổi trẻ. Chất vải denim Durabletex™ được xử lý làm mềm chuyên sâu giúp sợi vải êm mát, không gây cọ xát khó chịu khi di chuyển. Thiết kế đáy hạ thoải mái kết hợp phom siêu rộng F5 (Ultra-Wide Baggy F5) với kỹ thuật rã rập ống cong 3D đa chiều giúp hack tỷ lệ cơ thể và che khuyết điểm chân tuyệt đối. Dễ dàng mix-match linh hoạt cùng áo thun graphic, áo len dệt kim, sơ mi flannel khoác ngoài và giày sneaker cổ thấp/cổ cao.",
    images: [
      "/images/products/pants-original053-midblue-front.jpg",
      "/images/products/pants-original053-midblue-back.jpg",
      "/images/products/pants-original053-darkindigo-front.jpg",
      "/images/products/pants-original053-darkindigo-back.jpg"
    ],
    sizes: ["28", "29", "30", "31", "32", "34"],
    colors: [
      { name: "Xanh Vừa Wash", hex: "#55749A", imageIndex: 0 },
      { name: "Xanh Đậm Indigo", hex: "#202A3D", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 157,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Ống Cong 3D F5"
  },
  {
    id: 151,
    name: "Quần Dài Kaki Chinos Vải Twill 245Gsm Co Giãn Đứng Phom Bền Bỉ Thoải Mái Phom Ôm Vừa F2 - Non Branded 032 - Màu Đen",
    category: "Quần",
    price: 420000,
    originalPrice: 590000,
    description: "Quần dài kaki chinos nam cao cấp thuộc bộ sưu tập Non Branded 032 từ thương hiệu Aureus Fashion. Được phát triển từ chất liệu vải Kaki Cotton dệt chéo Twill định lượng tiêu chuẩn 245Gsm, bề mặt vải đanh mịn, dày dặn, bền màu và chống xù lông vượt trội. Tích hợp sợi Spandex co giãn đàn hồi cao giúp người mặc dễ dàng đứng lên, ngồi xuống hay di chuyển linh hoạt suốt cả ngày mà không hề bị gò bó. Tông màu đen tuyền (Pitch Black) trang nhã, lịch lãm và chuẩn phong cách Smart Casual. Thiết kế cạp lưng đứng phom chỉn chu, khóa kéo kim loại chống trượt, túi xéo phía trước tiện lợi cùng túi mổ viền sau thanh lịch. Phom ôm vừa F2 (Slim Fit F2) tôn đôi chân thẳng tắp, dễ dàng phối cùng áo sơ mi công sở, áo polo hoặc áo thun casual.",
    images: [
      "/images/products/pants-nonbranded032-black-front.png",
      "/images/products/pants-nonbranded032-black-back.png",
      "/images/products/pants-nonbranded032-beige-front.png",
      "/images/products/pants-nonbranded032-beige-back.png",
      "/images/products/pants-nonbranded032-khaki-front.jpg",
      "/images/products/pants-nonbranded032-khaki-back.png",
      "/images/products/pants-nonbranded032-sand-front.jpg",
      "/images/products/pants-nonbranded032-sand-back.png",
      "/images/products/pants-nonbranded032-olive-front.jpg",
      "/images/products/pants-nonbranded032-olive-back.png",
      "/images/products/pants-nonbranded032-lightgrey-front.png",
      "/images/products/pants-nonbranded032-lightgrey-back.png"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Đen", hex: "#1C1C1E", imageIndex: 0 },
      { name: "Be Sáng", hex: "#EBE6D8", imageIndex: 2 },
      { name: "Vàng Khaki", hex: "#CAA870", imageIndex: 4 },
      { name: "Vàng Cát", hex: "#D9BD9E", imageIndex: 6 },
      { name: "Xanh Rêu Khaki", hex: "#6F6A57", imageIndex: 8 },
      { name: "Xám Sáng", hex: "#C5C7CA", imageIndex: 10 }
    ],
    rating: 5.0,
    reviews: 164,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Kaki Twill 245Gsm"
  },
  {
    id: 152,
    name: "Quần Dài Kaki Chinos Vải Twill 245Gsm Co Giãn Đứng Phom Bền Bỉ Thoải Mái Phom Ôm Vừa F2 - Non Branded 032 - Màu Be Sáng",
    category: "Quần",
    price: 420000,
    originalPrice: 590000,
    description: "Quần dài kaki chinos nam cao cấp thuộc bộ sưu tập Non Branded 032 từ thương hiệu Aureus Fashion. Gam màu be sáng (Light Beige / Cream Khaki) hiện đại, trẻ trung và mang hơi thở phong cách quý ông thanh lịch phong cách Old Money. Chất vải Kaki Twill 245Gsm đanh mịn, tản nhiệt tốt, thấm hút mồ hôi và giữ phom ly thẳng thớm sau nhiều lần giặt. Cấu trúc đường may đôi gia cố tỉ mỉ ở các vị trí chịu lực đảm bảo độ bền tối đa. Phom ôm vừa F2 (Slim Fit F2) thon gọn, thanh thoát, cực kỳ ăn ý khi kết hợp cùng áo thun trơn, sơ mi oxford, áo polo hay áo khoác blazer dạo phố.",
    images: [
      "/images/products/pants-nonbranded032-beige-front.png",
      "/images/products/pants-nonbranded032-beige-back.png",
      "/images/products/pants-nonbranded032-black-front.png",
      "/images/products/pants-nonbranded032-black-back.png",
      "/images/products/pants-nonbranded032-khaki-front.jpg",
      "/images/products/pants-nonbranded032-khaki-back.png",
      "/images/products/pants-nonbranded032-sand-front.jpg",
      "/images/products/pants-nonbranded032-sand-back.png",
      "/images/products/pants-nonbranded032-olive-front.jpg",
      "/images/products/pants-nonbranded032-olive-back.png",
      "/images/products/pants-nonbranded032-lightgrey-front.png",
      "/images/products/pants-nonbranded032-lightgrey-back.png"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Be Sáng", hex: "#EBE6D8", imageIndex: 0 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 2 },
      { name: "Vàng Khaki", hex: "#CAA870", imageIndex: 4 },
      { name: "Vàng Cát", hex: "#D9BD9E", imageIndex: 6 },
      { name: "Xanh Rêu Khaki", hex: "#6F6A57", imageIndex: 8 },
      { name: "Xám Sáng", hex: "#C5C7CA", imageIndex: 10 }
    ],
    rating: 4.9,
    reviews: 158,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Kaki Twill 245Gsm"
  },
  {
    id: 153,
    name: "Quần Dài Kaki Chinos Vải Twill 245Gsm Co Giãn Đứng Phom Bền Bỉ Thoải Mái Phom Ôm Vừa F2 - Non Branded 032 - Màu Vàng Khaki",
    category: "Quần",
    price: 420000,
    originalPrice: 590000,
    description: "Quần dài kaki chinos nam cao cấp thuộc bộ sưu tập Non Branded 032 từ thương hiệu Aureus Fashion. Tông màu vàng khaki (Classic Warm Khaki / Tan) kinh điển vượt thời gian, mang lại vẻ ngoài nam tính, phóng khoáng và đậm chất quý ông công sở hiện đại. Chất liệu vải Kaki Cotton dệt chéo Twill 245Gsm đanh mịn, bền bỉ, dày dặn vừa phải và tích hợp sợi thun co giãn thoải mái cho mọi vận động. Cạp quần thiết kế chuẩn mực giữ dáng thẳng thớm suốt ngày dài làm việc. Phom ôm vừa F2 (Slim Fit F2) tôn đôi chân thon gọn, kết hợp hoàn hảo cùng áo polo thể thao, áo thun trắng trơn hoặc áo sơ mi Oxford.",
    images: [
      "/images/products/pants-nonbranded032-khaki-front.jpg",
      "/images/products/pants-nonbranded032-khaki-back.png",
      "/images/products/pants-nonbranded032-sand-front.jpg",
      "/images/products/pants-nonbranded032-sand-back.png",
      "/images/products/pants-nonbranded032-black-front.png",
      "/images/products/pants-nonbranded032-black-back.png",
      "/images/products/pants-nonbranded032-beige-front.png",
      "/images/products/pants-nonbranded032-beige-back.png",
      "/images/products/pants-nonbranded032-olive-front.jpg",
      "/images/products/pants-nonbranded032-olive-back.png",
      "/images/products/pants-nonbranded032-lightgrey-front.png",
      "/images/products/pants-nonbranded032-lightgrey-back.png"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Vàng Khaki", hex: "#CAA870", imageIndex: 0 },
      { name: "Vàng Cát", hex: "#D9BD9E", imageIndex: 2 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 4 },
      { name: "Be Sáng", hex: "#EBE6D8", imageIndex: 6 },
      { name: "Xanh Rêu Khaki", hex: "#6F6A57", imageIndex: 8 },
      { name: "Xám Sáng", hex: "#C5C7CA", imageIndex: 10 }
    ],
    rating: 5.0,
    reviews: 172,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Kaki Twill 245Gsm"
  },
  {
    id: 154,
    name: "Quần Dài Kaki Chinos Vải Twill 245Gsm Co Giãn Đứng Phom Bền Bỉ Thoải Mái Phom Ôm Vừa F2 - Non Branded 032 - Màu Vàng Cát",
    category: "Quần",
    price: 420000,
    originalPrice: 590000,
    description: "Quần dài kaki chinos nam cao cấp thuộc bộ sưu tập Non Branded 032 từ thương hiệu Aureus Fashion. Gam màu vàng cát (Desert Sand / Light Sand Beige) nhã nhặn, tôn da và cực kỳ dễ phối đồ theo phong cách Quiet Luxury lẫn dạo phố cuối tuần. Công nghệ dệt chéo Twill 245Gsm đanh chắc giữ nếp ly thẳng tắp, chống xù lông và chống bai dão sau nhiều chu kỳ giặt. Thiết kế túi xéo sâu và túi mổ sau viền tinh tế, đường may gia cố đũng đôi chống bục rách bền bỉ. Phom ôm vừa F2 (Slim Fit F2) trẻ trung, kết hợp ăn ý cùng áo sơ mi họa tiết, polo dệt kim hoặc blazer thanh lịch.",
    images: [
      "/images/products/pants-nonbranded032-sand-front.jpg",
      "/images/products/pants-nonbranded032-sand-back.png",
      "/images/products/pants-nonbranded032-khaki-front.jpg",
      "/images/products/pants-nonbranded032-khaki-back.png",
      "/images/products/pants-nonbranded032-black-front.png",
      "/images/products/pants-nonbranded032-black-back.png",
      "/images/products/pants-nonbranded032-beige-front.png",
      "/images/products/pants-nonbranded032-beige-back.png",
      "/images/products/pants-nonbranded032-olive-front.jpg",
      "/images/products/pants-nonbranded032-olive-back.png",
      "/images/products/pants-nonbranded032-lightgrey-front.png",
      "/images/products/pants-nonbranded032-lightgrey-back.png"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Vàng Cát", hex: "#D9BD9E", imageIndex: 0 },
      { name: "Vàng Khaki", hex: "#CAA870", imageIndex: 2 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 4 },
      { name: "Be Sáng", hex: "#EBE6D8", imageIndex: 6 },
      { name: "Xanh Rêu Khaki", hex: "#6F6A57", imageIndex: 8 },
      { name: "Xám Sáng", hex: "#C5C7CA", imageIndex: 10 }
    ],
    rating: 4.9,
    reviews: 165,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Kaki Twill 245Gsm"
  },
  {
    id: 155,
    name: "Quần Dài Kaki Chinos Vải Twill 245Gsm Co Giãn Đứng Phom Bền Bỉ Thoải Mái Phom Ôm Vừa F2 - Non Branded 032 - Màu Xanh Rêu Khaki",
    category: "Quần",
    price: 420000,
    originalPrice: 590000,
    description: "Quần dài kaki chinos nam cao cấp thuộc bộ sưu tập Non Branded 032 từ thương hiệu Aureus Fashion. Tông màu xanh rêu khaki (Olive Green / Khaki Rêu) mang hơi thở quân đội pha lẫn nét hiện đại, thời thượng và cực kỳ nam tính. Được phát triển từ chất liệu vải Kaki Cotton dệt chéo Twill 245Gsm đanh mịn, bền bỉ, dày dặn vừa phải và tích hợp sợi thun Spandex co giãn thoải mái cho mọi vận động. Cạp quần thiết kế chuẩn mực giữ dáng thẳng thớm suốt ngày dài làm việc. Phom ôm vừa F2 (Slim Fit F2) tôn đôi chân thon gọn, kết hợp hoàn hảo cùng áo thun trắng, áo polo dệt kim hoặc áo sơ mi Oxford xắn tay.",
    images: [
      "/images/products/pants-nonbranded032-olive-front.jpg",
      "/images/products/pants-nonbranded032-olive-back.png",
      "/images/products/pants-nonbranded032-lightgrey-front.png",
      "/images/products/pants-nonbranded032-lightgrey-back.png",
      "/images/products/pants-nonbranded032-black-front.png",
      "/images/products/pants-nonbranded032-black-back.png",
      "/images/products/pants-nonbranded032-beige-front.png",
      "/images/products/pants-nonbranded032-beige-back.png",
      "/images/products/pants-nonbranded032-khaki-front.jpg",
      "/images/products/pants-nonbranded032-khaki-back.png",
      "/images/products/pants-nonbranded032-sand-front.jpg",
      "/images/products/pants-nonbranded032-sand-back.png"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Xanh Rêu Khaki", hex: "#6F6A57", imageIndex: 0 },
      { name: "Xám Sáng", hex: "#C5C7CA", imageIndex: 2 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 4 },
      { name: "Be Sáng", hex: "#EBE6D8", imageIndex: 6 },
      { name: "Vàng Khaki", hex: "#CAA870", imageIndex: 8 },
      { name: "Vàng Cát", hex: "#D9BD9E", imageIndex: 10 }
    ],
    rating: 5.0,
    reviews: 168,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Kaki Twill 245Gsm"
  },
  {
    id: 156,
    name: "Quần Dài Kaki Chinos Vải Twill 245Gsm Co Giãn Đứng Phom Bền Bỉ Thoải Mái Phom Ôm Vừa F2 - Non Branded 032 - Màu Xám Sáng",
    category: "Quần",
    price: 420000,
    originalPrice: 590000,
    description: "Quần dài kaki chinos nam cao cấp thuộc bộ sưu tập Non Branded 032 từ thương hiệu Aureus Fashion. Tông màu xám sáng (Light Grey / Silver Mist) trang nhã, thanh lịch và mang hơi thở phong cách quý ông Smart Casual đương đại. Chất vải Kaki Twill 245Gsm đanh mịn, tản nhiệt tốt, thấm hút mồ hôi và giữ phom ly thẳng thớm sau nhiều lần giặt. Cấu trúc đường may đôi gia cố tỉ mỉ ở các vị trí chịu lực đảm bảo độ bền tối đa. Phom ôm vừa F2 (Slim Fit F2) thon gọn, thanh thoát, cực kỳ ăn ý khi kết hợp cùng áo polo sẫm màu, áo sơ mi kẻ sọc, áo len mỏng hay blazer lịch sự.",
    images: [
      "/images/products/pants-nonbranded032-lightgrey-front.png",
      "/images/products/pants-nonbranded032-lightgrey-back.png",
      "/images/products/pants-nonbranded032-olive-front.jpg",
      "/images/products/pants-nonbranded032-olive-back.png",
      "/images/products/pants-nonbranded032-black-front.png",
      "/images/products/pants-nonbranded032-black-back.png",
      "/images/products/pants-nonbranded032-beige-front.png",
      "/images/products/pants-nonbranded032-beige-back.png",
      "/images/products/pants-nonbranded032-khaki-front.jpg",
      "/images/products/pants-nonbranded032-khaki-back.png",
      "/images/products/pants-nonbranded032-sand-front.jpg",
      "/images/products/pants-nonbranded032-sand-back.png"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Xám Sáng", hex: "#C5C7CA", imageIndex: 0 },
      { name: "Xanh Rêu Khaki", hex: "#6F6A57", imageIndex: 2 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 4 },
      { name: "Be Sáng", hex: "#EBE6D8", imageIndex: 6 },
      { name: "Vàng Khaki", hex: "#CAA870", imageIndex: 8 },
      { name: "Vàng Cát", hex: "#D9BD9E", imageIndex: 10 }
    ],
    rating: 4.9,
    reviews: 159,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Kaki Twill 245Gsm"
  },
  {
    id: 157,
    name: "Quần Dài Kaki Túi Hộp Cargo Durabletex™ 300Gsm Co Giãn Rập Gối Xếp Ly 3D Chịu Lực Phom Vừa F3 - The Worker 009 - Màu Xanh Rêu Đậm",
    category: "Quần",
    price: 490000,
    originalPrice: 690000,
    description: "Quần dài kaki túi hộp nam cao cấp phong cách Tactical Utility thuộc bộ sưu tập The Worker 009 từ thương hiệu Aureus Fashion. Được phát triển từ chất liệu vải Kaki Cotton công nghệ sợi Durabletex™ định lượng dày dặn 300Gsm đanh chắc, có khả năng chống mài mòn, chống trầy xước và hạn chế bám bụi vượt trội. Tích hợp sợi Spandex đàn hồi cao mang lại độ co giãn dễ chịu cho mọi chuyển động linh hoạt. Điểm nhấn đột phá là kỹ thuật rã rập gối xếp ly 3D công thái học (3D Articulated Knee Pleats) gia cố khả năng chịu lực, giúp người mặc dễ dàng gập gối, đứng lên ngồi xuống mà không lo bị căng tức hay bùng gối. Thiết kế hệ thống 6 túi đa dụng với 2 túi hộp cargo cỡ lớn bên hông có nắp đậy cài khuy nút bấm chắc chắn. Tông màu xanh rêu đậm (Dark Olive / Army Green) mang đậm khí chất mạnh mẽ, phong trần. Phom vừa F3 (Regular Fit F3) tôn vóc dáng khỏe khoắn, phối cực 'chất' cùng áo thun oversize, áo polo thể thao, áo sơ mi flannel hoặc áo khoác utility.",
    images: [
      "/images/products/pants-worker009-darkolive-front.jpg",
      "/images/products/pants-worker009-darkolive-back.jpg",
      "/images/products/pants-worker009-black-front.jpg",
      "/images/products/pants-worker009-black-back.jpg"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Xanh Rêu Đậm", hex: "#3A4035", imageIndex: 0 },
      { name: "Đen", hex: "#1E1E20", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 176,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Cargo 300Gsm F3"
  },
  {
    id: 158,
    name: "Quần Dài Kaki Túi Hộp Cargo Durabletex™ 300Gsm Co Giãn Rập Gối Xếp Ly 3D Chịu Lực Phom Vừa F3 - The Worker 009 - Màu Đen",
    category: "Quần",
    price: 490000,
    originalPrice: 690000,
    description: "Quần dài kaki túi hộp nam cao cấp phong cách Tactical Utility thuộc bộ sưu tập The Worker 009 từ thương hiệu Aureus Fashion. Tông màu đen tuyền nam tính (Tactical Pitch Black) sắc sảo, bí ẩn và cực kỳ dễ ứng dụng trong mọi phong cách hàng ngày từ Gorpcore, Techwear đến Streetwear. Chất vải Kaki Twill Durabletex™ 300Gsm cao cấp bền màu, bề mặt chải kỹ đanh mịn, thoáng khí và có độ co giãn nhẹ nhàng giúp vận động thoải mái tối đa. Cấu trúc rập gối xếp ly 3D chịu lực độc đáo giúp định hình ống quần luôn suông đứng và chống biến dạng form sau thời gian dài sử dụng. Trang bị đầy đủ túi hộp cargo nẹp đôi, cúc đúc hợp kim dập logo sắc nét và đỉa quần bản rộng chịu tải thắt lưng tốt. Phom vừa F3 (Regular Fit F3) tôn chiều cao và độ gọn gàng, hoàn hảo khi mix cùng hoodie boxy, áo thun streetwear, sơ mi cộc tay và giày sneaker chunky hoặc bốt da.",
    images: [
      "/images/products/pants-worker009-black-front.jpg",
      "/images/products/pants-worker009-black-back.jpg",
      "/images/products/pants-worker009-darkolive-front.jpg",
      "/images/products/pants-worker009-darkolive-back.jpg"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Đen", hex: "#1E1E20", imageIndex: 0 },
      { name: "Xanh Rêu Đậm", hex: "#3A4035", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 169,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Cargo 300Gsm F3"
  },
  {
    id: 159,
    name: "Quần Dài Jogger Thun Vải Bird Eye Mesh Thoáng Khí Co Giãn Nhiều Túi Tiện Lợi Phom Vừa F3 - Non Branded 007 - Màu Xanh Rêu",
    category: "Quần",
    price: 380000,
    originalPrice: 490000,
    description: "Quần dài jogger thun thể thao nam cao cấp thuộc bộ sưu tập Non Branded 007 từ thương hiệu Aureus Fashion. Được dệt từ chất liệu vải thun công nghệ Bird Eye Mesh (vải lưới mắt chim) cao cấp với hàng triệu lỗ thoáng khí vi mô giúp tản nhiệt tức thì, thoát ẩm và làm mát da vượt trội suốt ngày dài. Sợi thun co giãn đàn hồi 4 chiều mềm mại, chống nhăn và chống xù lông tuyệt đối, mang lại cảm giác nhẹ tênh không trọng lượng khi mặc. Thiết kế cạp thun co giãn êm ái tích hợp dây rút tùy chỉnh độ vừa vặn, kết hợp gấu bo thun jogger gọn gàng giúp tôn dáng chân và làm nổi bật giày thể thao. Cấu trúc nhiều túi tiện lợi (Multi-Pocket Utility) gồm 2 túi xéo bên hông sâu rộng an toàn cùng 1 túi mổ phía sau tiện ích. Tông màu xanh rêu (Moss Green / Olive) hiện đại, khỏe khoắn, phom vừa F3 (Regular Fit F3) linh hoạt tuyệt đối cho tập gym, chạy bộ, dạo phố hay mặc nhà hàng ngày.",
    images: [
      "/images/products/pants-nonbranded007-mossgreen-front.jpg",
      "/images/products/pants-nonbranded007-mossgreen-back.jpg",
      "/images/products/pants-nonbranded007-cream-front.png",
      "/images/products/pants-nonbranded007-cream-back.png",
      "/images/products/pants-nonbranded007-mocha-front.jpg",
      "/images/products/pants-nonbranded007-mocha-back.jpg",
      "/images/products/pants-nonbranded007-forestblack-front.png",
      "/images/products/pants-nonbranded007-forestblack-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Rêu", hex: "#595441", imageIndex: 0 },
      { name: "Trắng Kem", hex: "#EAE6DA", imageIndex: 2 },
      { name: "Nâu Mocha", hex: "#61524D", imageIndex: 4 },
      { name: "Xanh Rêu Đen", hex: "#232C28", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 152,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Bird Eye Mesh"
  },
  {
    id: 160,
    name: "Quần Dài Jogger Thun Vải Bird Eye Mesh Thoáng Khí Co Giãn Nhiều Túi Tiện Lợi Phom Vừa F3 - Non Branded 007 - Màu Trắng Kem",
    category: "Quần",
    price: 380000,
    originalPrice: 490000,
    description: "Quần dài jogger thun thể thao nam cao cấp thuộc bộ sưu tập Non Branded 007 từ thương hiệu Aureus Fashion. Gam màu trắng kem (Cream / Off-White) tinh tế, trẻ trung và chuẩn phong cách Athleisure Clean Fit thời thượng. Cấu trúc vải dệt lưới mắt chim Bird Eye Mesh siêu thoáng khí, chống tích nhiệt và mang lại cảm giác mát lạnh tức thì ngay khi chạm vào bề mặt vải. Tính năng co giãn đa chiều tạo sự tự do tối đa cho từng bước sải chân hay các bài tập thể lực cường độ cao. Thiết kế cạp chun kèm dây rút tiện lợi, hệ thống túi xéo sâu chống rơi vật dụng cá nhân cùng túi sau ốp viền chỉn chu. Phom vừa F3 (Regular Fit F3) tôn nét cơ bắp săn chắc, cực kỳ ăn ý khi phối cùng áo thun thể thao, áo tank top, áo polo pique hoặc áo khoác gió running.",
    images: [
      "/images/products/pants-nonbranded007-cream-front.png",
      "/images/products/pants-nonbranded007-cream-back.png",
      "/images/products/pants-nonbranded007-mossgreen-front.jpg",
      "/images/products/pants-nonbranded007-mossgreen-back.jpg",
      "/images/products/pants-nonbranded007-mocha-front.jpg",
      "/images/products/pants-nonbranded007-mocha-back.jpg",
      "/images/products/pants-nonbranded007-forestblack-front.png",
      "/images/products/pants-nonbranded007-forestblack-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng Kem", hex: "#EAE6DA", imageIndex: 0 },
      { name: "Xanh Rêu", hex: "#595441", imageIndex: 2 },
      { name: "Nâu Mocha", hex: "#61524D", imageIndex: 4 },
      { name: "Xanh Rêu Đen", hex: "#232C28", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 147,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Bird Eye Mesh"
  },
  {
    id: 161,
    name: "Quần Dài Jogger Thun Vải Bird Eye Mesh Thoáng Khí Co Giãn Nhiều Túi Tiện Lợi Phom Vừa F3 - Non Branded 007 - Màu Nâu Mocha",
    category: "Quần",
    price: 380000,
    originalPrice: 490000,
    description: "Quần dài jogger thun thể thao nam cao cấp thuộc bộ sưu tập Non Branded 007 từ thương hiệu Aureus Fashion. Tông màu nâu mocha (Mocha Taupe / Nâu Đất) trầm ấm, thời thượng và mang hơi thở phong cách dạo phố Vintage Athleisure. Chất vải dệt lưới mắt chim Bird Eye Mesh tản nhiệt làm mát chuyên sâu, bề mặt êm mịn không gây kích ứng da và có khả năng thoát ẩm cực nhanh khi cơ thể vận động nhiều. Cạp chun bản mềm ôm khít lưng bụng không tạo lằn đỏ, gấu bo thun jogger tạo độ thụng tự nhiên năng động. Hệ thống túi đa năng tiện lợi với 2 túi xéo và 1 túi ốp sau sâu rộng. Phom vừa F3 (Regular Fit F3) linh hoạt, dễ dàng phối cùng áo thun ringer, polo sọc hoặc áo hoodie zip.",
    images: [
      "/images/products/pants-nonbranded007-mocha-front.jpg",
      "/images/products/pants-nonbranded007-mocha-back.jpg",
      "/images/products/pants-nonbranded007-forestblack-front.png",
      "/images/products/pants-nonbranded007-forestblack-back.png",
      "/images/products/pants-nonbranded007-mossgreen-front.jpg",
      "/images/products/pants-nonbranded007-mossgreen-back.jpg",
      "/images/products/pants-nonbranded007-cream-front.png",
      "/images/products/pants-nonbranded007-cream-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Nâu Mocha", hex: "#61524D", imageIndex: 0 },
      { name: "Xanh Rêu Đen", hex: "#232C28", imageIndex: 2 },
      { name: "Xanh Rêu", hex: "#595441", imageIndex: 4 },
      { name: "Trắng Kem", hex: "#EAE6DA", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 158,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Bird Eye Mesh"
  },
  {
    id: 162,
    name: "Quần Dài Jogger Thun Vải Bird Eye Mesh Thoáng Khí Co Giãn Nhiều Túi Tiện Lợi Phom Vừa F3 - Non Branded 007 - Màu Xanh Rêu Đen",
    category: "Quần",
    price: 380000,
    originalPrice: 490000,
    description: "Quần dài jogger thun thể thao nam cao cấp thuộc bộ sưu tập Non Branded 007 từ thương hiệu Aureus Fashion. Tông màu xanh rêu đen (Deep Forest Black / Dark Pine) huyền bí, sắc sảo và cực kỳ tôn dáng chân. Ứng dụng công nghệ sợi thun dệt Bird Eye Mesh thoát khí đa chiều giúp cơ thể giải phóng mồ hôi nhanh chóng, giữ form quần phẳng phiu không nhăn nhàu sau khi giặt sấy. Thiết kế cạp lưng thun kèm dây rút tiện lợi, bo gấu cổ chân thể thao tôn nét khỏe khoắn cùng hệ thống nhiều túi tiện dụng an toàn. Phom vừa F3 (Regular Fit F3) linh hoạt, phối cực chuẩn cùng áo thun oversize, áo ba lỗ tập gym hay áo khoác dù thể thao.",
    images: [
      "/images/products/pants-nonbranded007-forestblack-front.png",
      "/images/products/pants-nonbranded007-forestblack-back.png",
      "/images/products/pants-nonbranded007-mocha-front.jpg",
      "/images/products/pants-nonbranded007-mocha-back.jpg",
      "/images/products/pants-nonbranded007-mossgreen-front.jpg",
      "/images/products/pants-nonbranded007-mossgreen-back.jpg",
      "/images/products/pants-nonbranded007-cream-front.png",
      "/images/products/pants-nonbranded007-cream-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Rêu Đen", hex: "#232C28", imageIndex: 0 },
      { name: "Nâu Mocha", hex: "#61524D", imageIndex: 2 },
      { name: "Xanh Rêu", hex: "#595441", imageIndex: 4 },
      { name: "Trắng Kem", hex: "#EAE6DA", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 149,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Bird Eye Mesh"
  },
  {
    id: 163,
    name: "Quần Dài Jogger Thể Thao Double Face 200Gsm Nhanh Khô Rã Đáy Kim Cương Đai Vắt Khăn Phom Vừa F3 - The Beginner 007 - Màu Xanh Thép",
    category: "Quần",
    price: 390000,
    originalPrice: 550000,
    description: "Quần dài jogger thể thao nam cao cấp thuộc bộ sưu tập The Beginner 007 từ thương hiệu Aureus Fashion. Được dệt từ chất liệu vải thể thao công nghệ Double Face (vải 2 mặt dệt kỹ thuật) định lượng 200Gsm siêu nhẹ, mặt ngoài đanh mịn kháng bụi bẩn, mặt trong thoáng khí hút ẩm nhanh QuickDry giữ cơ thể luôn khô ráo và mát mẻ trong mọi bài tập cường độ cao. Tích hợp sợi Spandex co giãn 4 chiều đàn hồi cực tốt, cho phép sải chân tối đa không vướng víu. Thiết kế đột phá với kỹ thuật may rã đáy kim cương công thái học (Diamond Gusset Crotch) triệt tiêu hoàn toàn cảm giác căng bó vùng đũng khi squat, nhảy hay chạy bộ. Cạp chun bản mềm tích hợp dây rút đầu bọc kim loại, đai vắt khăn thể thao tiện dụng (Towel Loop) ở sườn hông phải và túi sau khóa kéo ẩn an toàn bảo vệ tư trang. Đường line viền trắng chạy dọc sườn ngoài tạo điểm nhấn thể thao khỏe khoắn và kéo dài đôi chân. Tông màu xanh thép (Steel Blue / Xanh Xám) hiện đại, phom vừa F3 (Regular Fit F3) tôn dáng thể thao mạnh mẽ.",
    images: [
      "/images/products/pants-beginner007-steelblue-front.jpg",
      "/images/products/pants-beginner007-steelblue-back.jpg",
      "/images/products/pants-beginner007-lightgrey-front.jpg",
      "/images/products/pants-beginner007-lightgrey-back.jpg",
      "/images/products/pants-beginner007-black-front.png",
      "/images/products/pants-beginner007-black-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Thép", hex: "#566273", imageIndex: 0 },
      { name: "Xám Sáng", hex: "#949AA1", imageIndex: 2 },
      { name: "Đen", hex: "#1A1A1A", imageIndex: 4 }
    ],
    rating: 5.0,
    reviews: 163,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Đáy Kim Cương F3"
  },
  {
    id: 164,
    name: "Quần Dài Jogger Thể Thao Double Face 200Gsm Nhanh Khô Rã Đáy Kim Cương Đai Vắt Khăn Phom Vừa F3 - The Beginner 007 - Màu Xám Sáng",
    category: "Quần",
    price: 390000,
    originalPrice: 550000,
    description: "Quần dài jogger thể thao nam cao cấp thuộc bộ sưu tập The Beginner 007 từ thương hiệu Aureus Fashion. Tông màu xám sáng (Light Heather Grey / Xám Bạc) tinh tế, thời thượng và đậm chất phong cách Athleisure hiện đại. Chất vải công nghệ Double Face 200Gsm nhẹ tênh, tản nhiệt và thấm hút mồ hôi vượt trội, co giãn 4 chiều đa hướng giúp vận động mượt mà không giới hạn. Cấu trúc rã đáy kim cương (Diamond Gusset Crotch) chống cọ xát và hỗ trợ mở rộng biên độ chuyển động cho phần háng. Trang bị đầy đủ đai vắt khăn thể thao bên hông tiện ích cho runner hoặc gymer, túi bên sâu chống rơi điện thoại và túi sau khóa kéo ngang kín đáo. Gấu bo chun thun jogger ôm vừa vặn cổ chân, kết hợp đường kẻ viền sọc trắng tương phản nổi bật. Phom vừa F3 (Regular Fit F3) chuẩn athletic, phối cực đẹp cùng áo thun thể thao, áo ba lỗ tank top hoặc áo khoác gió.",
    images: [
      "/images/products/pants-beginner007-lightgrey-front.jpg",
      "/images/products/pants-beginner007-lightgrey-back.jpg",
      "/images/products/pants-beginner007-black-front.png",
      "/images/products/pants-beginner007-black-back.png",
      "/images/products/pants-beginner007-steelblue-front.jpg",
      "/images/products/pants-beginner007-steelblue-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Sáng", hex: "#949AA1", imageIndex: 0 },
      { name: "Đen", hex: "#1A1A1A", imageIndex: 2 },
      { name: "Xanh Thép", hex: "#566273", imageIndex: 4 }
    ],
    rating: 4.9,
    reviews: 156,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Đáy Kim Cương F3"
  },
  {
    id: 165,
    name: "Quần Dài Jogger Thể Thao Double Face 200Gsm Nhanh Khô Rã Đáy Kim Cương Đai Vắt Khăn Phom Vừa F3 - The Beginner 007 - Màu Đen",
    category: "Quần",
    price: 390000,
    originalPrice: 550000,
    description: "Quần dài jogger thể thao nam cao cấp thuộc bộ sưu tập The Beginner 007 từ thương hiệu Aureus Fashion. Tông màu đen tuyền nam tính (Athletic Black) phối đường line viền trắng sắc nét chạy dọc ống quần mang đậm hơi thở thể thao hiện đại và mạnh mẽ. Vải thun kỹ thuật Double Face 200Gsm dệt 2 mặt cao cấp mềm mịn như lụa, chống nhăn, tản nhiệt và khô ráo siêu tốc. Thiết kế đáy rã kim cương công thái học (Diamond Gusset Crotch) nâng đỡ chuyển động tối đa, đai vắt khăn thể thao tiện dụng ở cạp sườn hông phải và túi sau khóa kéo ẩn bảo mật an toàn. Bo gấu chun jogger thon gọn, phom vừa F3 (Regular Fit F3) tôn nét khỏe khoắn, phối hoàn hảo cùng áo thun tập gym, áo ba lỗ tank top hay hoodie thể thao.",
    images: [
      "/images/products/pants-beginner007-black-front.png",
      "/images/products/pants-beginner007-black-back.png",
      "/images/products/pants-beginner007-steelblue-front.jpg",
      "/images/products/pants-beginner007-steelblue-back.jpg",
      "/images/products/pants-beginner007-lightgrey-front.jpg",
      "/images/products/pants-beginner007-lightgrey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1A1A1A", imageIndex: 0 },
      { name: "Xanh Thép", hex: "#566273", imageIndex: 2 },
      { name: "Xám Sáng", hex: "#949AA1", imageIndex: 4 }
    ],
    rating: 5.0,
    reviews: 171,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Đáy Kim Cương F3"
  },
  {
    id: 166,
    name: "Quần Dài Jogger Mặc Nhà Airdry™ Siêu Nhẹ Thoáng Khí Đáy Relaxed Rise Thông Minh Phom Rộng F4 - The Homebody 006 - Màu Xám Tiêu Sáng",
    category: "Quần",
    price: 350000,
    originalPrice: 490000,
    description: "Quần dài mặc nhà nam cao cấp thuộc bộ sưu tập The Homebody 006 từ thương hiệu Aureus Fashion. Được phát triển từ chất liệu vải thun công nghệ Airdry™ siêu nhẹ (Featherlight Airdry™ Fabric), kết cấu sợi dệt thoáng khí tản nhiệt nhanh, bề mặt vi mô siêu mềm mịn không gây cọ xát hay kích ứng cho làn da. Điểm nhấn đột phá là thiết kế đáy hạ Relaxed Rise thông minh giúp giải phóng hoàn toàn sự gò bó cho phần hông và đáy chậu, mang lại cảm giác dễ chịu, thoải mái tuyệt đối khi ngồi làm việc tại nhà (Work from Home), nằm thư giãn, đọc sách hay đi ngủ. Cạp chun thun co giãn êm ái không gây hằn bụng, tích hợp dây rút mềm mại tùy chỉnh độ vừa vặn và 2 túi sườn sâu tiện lợi đựng điện thoại. Tông màu xám tiêu sáng (Light Heather Grey Melange) trang nhã, hiện đại. Thiết kế phom rộng F4 (Relaxed Fit F4) buông nhẹ tự nhiên, dễ dàng kết hợp cùng áo thun trơn, áo tank top hoặc áo thun tay dài mặc nhà.",
    images: [
      "/images/products/pants-homebody006-lightgrey-front.jpg",
      "/images/products/pants-homebody006-lightgrey-back.jpg",
      "/images/products/pants-homebody006-black-front.png",
      "/images/products/pants-homebody006-black-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Tiêu Sáng", hex: "#C5C7CA", imageIndex: 0 },
      { name: "Đen", hex: "#1C1C1E", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 167,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ F4"
  },
  {
    id: 167,
    name: "Quần Dài Jogger Mặc Nhà Airdry™ Siêu Nhẹ Thoáng Khí Đáy Relaxed Rise Thông Minh Phom Rộng F4 - The Homebody 006 - Màu Đen",
    category: "Quần",
    price: 350000,
    originalPrice: 490000,
    description: "Quần dài mặc nhà nam cao cấp thuộc bộ sưu tập The Homebody 006 từ thương hiệu Aureus Fashion. Tông màu đen tuyền kinh điển (Pitch Black) sạch sẽ, tinh tế và lịch sự, có thể tự tin mặc ở nhà, dạo bộ hay đi cà phê gần nhà mà vẫn giữ vẻ ngoài gọn gàng, phong cách. Chất vải Airdry™ siêu nhẹ thoáng khí, co giãn 4 chiều mềm mại tựa như làn da thứ hai, kháng nhăn và khô cực nhanh sau khi giặt. Cấu trúc đáy hạ Relaxed Rise công thái học chống kích chật, đường may phẳng êm ái kết hợp phom rộng F4 (Relaxed Fit F4) phóng khoáng mang lại sự tự do và thư thái tuyệt đối cho mọi khoảnh khắc nghỉ ngơi sau ngày dài làm việc căng thẳng.",
    images: [
      "/images/products/pants-homebody006-black-front.png",
      "/images/products/pants-homebody006-black-back.png",
      "/images/products/pants-homebody006-lightgrey-front.jpg",
      "/images/products/pants-homebody006-lightgrey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1C1C1E", imageIndex: 0 },
      { name: "Xám Tiêu Sáng", hex: "#C5C7CA", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 162,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ F4"
  },
  {
    id: 168,
    name: "Quần Dài Jogger Ống Rộng Vải Nhung Corduroy Durabletex™ Nhẹ Thoáng Ít Nhăn Phối Sườn Phom Rộng F4 - Seventy Seven 033 - Màu Xanh Rêu Đậm",
    category: "Quần",
    price: 460000,
    originalPrice: 650000,
    description: "Quần dài jogger ống rộng nam cao cấp thuộc bộ sưu tập Seventy Seven 033 từ thương hiệu Aureus Fashion. Được phát triển từ chất liệu vải nhung tăm tăm nhuyễn Corduroy ứng dụng công nghệ sợi dệt Durabletex™ siêu nhẹ, bề mặt óng ả sang trọng, tản nhiệt tốt, ít nhăn và giữ form ống thẳng tắp sau nhiều lần giặt sấy. Điểm nhấn nổi bật là dải viền sọc đôi phối màu trắng kem chạy dọc hai bên sườn ngoài (Contrast Side Stripes) mang đậm hơi thở thời trang Retro Track Pants thập niên 90 và tạo hiệu ứng thị giác hack dài đôi chân tuyệt đối. Thêu typography số '7.7' sắc sảo ở đùi trái khẳng định đẳng cấp thương hiệu. Cạp chun thun co giãn êm ái tích hợp dây rút thừng dệt kem vintage, kết hợp túi xéo sườn sâu rộng và túi ốp sau tiện lợi có đính nhãn may thương hiệu. Tông màu xanh rêu đậm (Dark Olive / Vintage Army Green) phong trần, phom rộng F4 (Relaxed Wide Leg F4) che khuyết điểm chân, phối cực 'chất' cùng áo thun oversize, áo sơ mi nhung tăm (Seventy Seven 065), hoodie boxy hay giày chunky sneaker.",
    images: [
      "/images/products/pants-seventyseven033-darkolive-front.jpg",
      "/images/products/pants-seventyseven033-darkolive-back.jpg",
      "/images/products/pants-seventyseven033-cacao-front.jpg",
      "/images/products/pants-seventyseven033-cacao-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Rêu Đậm", hex: "#373C33", imageIndex: 0 },
      { name: "Nâu Cacao", hex: "#5F4839", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 174,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Corduroy F4"
  },
  {
    id: 169,
    name: "Quần Dài Jogger Ống Rộng Vải Nhung Corduroy Durabletex™ Nhẹ Thoáng Ít Nhăn Phối Sườn Phom Rộng F4 - Seventy Seven 033 - Màu Nâu Cacao",
    category: "Quần",
    price: 460000,
    originalPrice: 650000,
    description: "Quần dài jogger ống rộng nam cao cấp thuộc bộ sưu tập Seventy Seven 033 từ thương hiệu Aureus Fashion. Tông màu nâu cacao (Cacao Brown / Mocha Vintage) ấm áp, hoài niệm và cực kỳ ăn nhập với xu hướng thời trang Thu Đông Streetwear. Chất vải nhung tăm Corduroy Durabletex™ đanh mịn, không bí bách, hạn chế xù xước và đem lại cảm giác êm mềm thư thái cho làn da. Đường phối sọc sườn màu kem tương phản tôn dáng người mặc cao ráo, thanh thoát. Thêu logo biểu tượng '7.7' tỉ mỉ ở đùi trước, cạp lưng thun dây rút bản to giữ phom chắc chắn. Phom rộng F4 (Relaxed Wide Leg F4) ống suông thẳng đứng phóng khoáng, dễ dàng mix-match cùng áo polo dệt kim, áo nỉ sweater, sơ mi flannel khoác ngoài hoặc bốt da cao cổ.",
    images: [
      "/images/products/pants-seventyseven033-cacao-front.jpg",
      "/images/products/pants-seventyseven033-cacao-back.jpg",
      "/images/products/pants-seventyseven033-darkolive-front.jpg",
      "/images/products/pants-seventyseven033-darkolive-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Nâu Cacao", hex: "#5F4839", imageIndex: 0 },
      { name: "Xanh Rêu Đậm", hex: "#373C33", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 168,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Corduroy F4"
  },
  {
    id: 170,
    name: "Quần Jogger Thun Scuba Cloudtouch™ Siêu Mịn Mềm Xốp Ít Nhăn Cắt Rập 3D Tôn Dáng Phom Vừa F3 - Non Branded 053 - Màu Xám Sáng",
    category: "Quần",
    price: 420000,
    originalPrice: 590000,
    description: "Quần dài jogger thun nam cao cấp thuộc bộ sưu tập Non Branded 053 từ thương hiệu Aureus Fashion. Được dệt từ chất liệu vải thun Scuba công nghệ độc quyền Cloudtouch™ cao cấp sở hữu cấu trúc đệm khí 3 lớp mềm xốp nhẹ tênh, bề mặt mịn màng êm ái tựa làn mây, co giãn 4 chiều linh hoạt và khả năng chống nhăn vượt trội giúp giữ form dáng đứng chuẩn suốt cả ngày. Kỹ thuật cắt rập 3D công thái học tôn dáng chân thon gọn, phom vừa F3 (Regular Tapered Fit F3) vừa vặn thanh lịch. Thiết kế tiện ích vượt trội với túi hộp sườn đa năng bên đùi trái có nút bấm thời thượng, túi sau mổ ngang tích hợp khóa kéo ẩn chống rơi đồ, cạp lưng thun co giãn êm ái tích hợp dây rút giấu gọn và bo gấu jogger ôm cổ chân tôn dáng giày sneaker. Tông màu xám sáng (Light Grey / Silver Mist) trẻ trung, hiện đại, dễ dàng phối cùng áo thun, hoodie, áo polo dệt kim hay áo khoác bomber.",
    images: [
      "/images/products/pants-nonbranded053-lightgrey-front.jpg",
      "/images/products/pants-nonbranded053-lightgrey-back.jpg",
      "/images/products/pants-nonbranded053-charcoal-front.jpg",
      "/images/products/pants-nonbranded053-charcoal-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Sáng", hex: "#C3C6CB", imageIndex: 0 },
      { name: "Xám Chì", hex: "#4A504E", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 158,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Cloudtouch™ F3"
  },
  {
    id: 171,
    name: "Quần Jogger Thun Scuba Cloudtouch™ Siêu Mịn Mềm Xốp Ít Nhăn Cắt Rập 3D Tôn Dáng Phom Vừa F3 - Non Branded 053 - Màu Xám Chì",
    category: "Quần",
    price: 420000,
    originalPrice: 590000,
    description: "Quần dài jogger thun nam cao cấp thuộc bộ sưu tập Non Branded 053 từ thương hiệu Aureus Fashion. Tông màu xám chì (Charcoal Grey / Slate Anthracite) trầm ấm, nam tính, đậm chất Modern Athleisure và Techwear. Chất liệu vải thun Scuba Cloudtouch™ mướt mịn, đanh chắc nhưng vô cùng mềm xốp, chống nhăn tự nhiên và cách nhiệt linh hoạt. Đường may cắt rập 3D tinh tế hỗ trợ tối đa mọi chuyển động chạy nhảy, tập luyện hay dạo phố. Trang bị túi hộp utility thời trang ở đùi trái, túi zip ngang sau hông tiện dụng, cạp thun co giãn và bo gấu thun ôm gọn mắt cá. Hoàn hảo khi kết hợp cùng áo thun oversize, áo tank top thể thao, áo nỉ sweater hay áo khoác gió năng động.",
    images: [
      "/images/products/pants-nonbranded053-charcoal-front.jpg",
      "/images/products/pants-nonbranded053-charcoal-back.jpg",
      "/images/products/pants-nonbranded053-lightgrey-front.jpg",
      "/images/products/pants-nonbranded053-lightgrey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Chì", hex: "#4A504E", imageIndex: 0 },
      { name: "Xám Sáng", hex: "#C3C6CB", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 145,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Cloudtouch™ F3"
  },
  {
    id: 172,
    name: "Quần Dài Lưng Thun Ống Siêu Rộng Vải Đầm Tay Thoáng Mát Xếp Nếp Phẳng Bụng Phom Siêu Rộng F5 - The No Style 246 - Màu Đen",
    category: "Quần",
    price: 390000,
    originalPrice: 560000,
    description: "Quần dài nam lưng thun ống siêu rộng thuộc bộ sưu tập The No Style 246 từ thương hiệu Aureus Fashion. Được phát triển từ chất vải dệt đầm tay cao cấp, rũ mềm tự nhiên, thoáng mát và chống nhăn nhàu vượt trội. Điểm nhấn đột phá là kỹ thuật xếp nếp ly chìm tinh tế trước bụng giúp che giấu vòng 2 hoàn hảo, tạo hiệu ứng phẳng bụng và tôn dáng chân thẳng tắp. Thiết kế phom siêu rộng F5 (Super Wide Leg Silhouette F5) mang đậm hơi thở thời trang Avant-Garde và Minimalist Streetwear Nhật Bản, mang lại sự phóng khoáng, tự do tối đa cho từng bước đi. Cạp lưng thun co giãn bản to êm ái, túi xéo hai bên sâu rộng tiện lợi cùng túi ốp vuông phía sau gọn gàng. Tông màu đen huyền bí (Midnight Black) kinh điển, cực kỳ ăn ý khi phối cùng áo thun oversize, áo sơ mi phom hộp F5, áo blazer rộng hay sandal streetwear.",
    images: [
      "/images/products/pants-thenostyle246-black-front.jpg",
      "/images/products/pants-thenostyle246-black-back.jpg",
      "/images/products/pants-thenostyle246-white-front.jpg",
      "/images/products/pants-thenostyle246-white-back.jpg",
      "/images/products/pants-thenostyle246-grey-front.jpg",
      "/images/products/pants-thenostyle246-grey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1E1E1E", imageIndex: 0 },
      { name: "Trắng", hex: "#F6F6F6", imageIndex: 2 },
      { name: "Xám Tiêu Sáng", hex: "#C5C7CA", imageIndex: 4 }
    ],
    rating: 5.0,
    reviews: 164,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Wide Leg F5"
  },
  {
    id: 173,
    name: "Quần Dài Lưng Thun Ống Siêu Rộng Vải Đầm Tay Thoáng Mát Xếp Nếp Phẳng Bụng Phom Siêu Rộng F5 - The No Style 246 - Màu Trắng",
    category: "Quần",
    price: 390000,
    originalPrice: 560000,
    description: "Quần dài nam lưng thun ống siêu rộng thuộc bộ sưu tập The No Style 246 từ thương hiệu Aureus Fashion. Tông màu trắng tinh khôi (Clean White) thanh lịch, thời thượng và mang đậm tinh thần City Boy hiện đại. Chất vải dệt đầm tay dày dặn vừa phải, không lộ bên trong, bề mặt mướt mịn rũ nhẹ cực sang và luôn giữ được độ thông thoáng mát mẻ suốt cả ngày. Kỹ thuật xếp nếp ly phẳng bụng hack tỷ lệ cơ thể, che khuyết điểm đùi to hay chân cong. Phom dáng siêu rộng F5 (Super Wide Leg F5) tạo chuyển động uyển chuyển, bay bổng. Cạp thun mềm mại không gây hằn bụng, túi sau tiện lợi. Phối hoàn hảo cùng áo thun ringer bo viền, sơ mi Cuba, áo len dệt kim mỏng hay giày da loaf/derby.",
    images: [
      "/images/products/pants-thenostyle246-white-front.jpg",
      "/images/products/pants-thenostyle246-white-back.jpg",
      "/images/products/pants-thenostyle246-black-front.jpg",
      "/images/products/pants-thenostyle246-black-back.jpg",
      "/images/products/pants-thenostyle246-grey-front.jpg",
      "/images/products/pants-thenostyle246-grey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng", hex: "#F6F6F6", imageIndex: 0 },
      { name: "Đen", hex: "#1E1E1E", imageIndex: 2 },
      { name: "Xám Tiêu Sáng", hex: "#C5C7CA", imageIndex: 4 }
    ],
    rating: 4.9,
    reviews: 152,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Wide Leg F5"
  },
  {
    id: 174,
    name: "Quần Dài Lưng Thun Ống Siêu Rộng Vải Đầm Tay Thoáng Mát Xếp Nếp Phẳng Bụng Phom Siêu Rộng F5 - The No Style 246 - Màu Xám Tiêu Sáng",
    category: "Quần",
    price: 390000,
    originalPrice: 560000,
    description: "Quần dài nam lưng thun ống siêu rộng thuộc bộ sưu tập The No Style 246 từ thương hiệu Aureus Fashion. Tông màu xám tiêu sáng (Heather Grey / Light Grey Melange) mang đậm phong cách Minimalist Athletic & City Boy năng động, cực kỳ tôn da và dễ mix-match. Vải dệt đầm tay dày dặn, độ rũ mềm tự nhiên, thoáng mát và co giãn nhẹ tạo cảm giác thư giãn dễ chịu cả ngày dài. Thiết kế xếp nếp ly chìm trước bụng tạo hiệu ứng phẳng bụng giấu eo tài tình, kết hợp phom siêu rộng F5 (Super Wide Leg F5) phóng khoáng, che khuyết điểm chân và hack chiều cao tối đa. Lưng thun co giãn thoải mái, túi hông xéo sâu cùng túi mổ vuông phía sau tiện dụng. Rất thích hợp khi phối cùng áo hoodie streetwear, áo thun phom hộp boxy, sơ mi oversize hay sneaker retro.",
    images: [
      "/images/products/pants-thenostyle246-grey-front.jpg",
      "/images/products/pants-thenostyle246-grey-back.jpg",
      "/images/products/pants-thenostyle246-black-front.jpg",
      "/images/products/pants-thenostyle246-black-back.jpg",
      "/images/products/pants-thenostyle246-white-front.jpg",
      "/images/products/pants-thenostyle246-white-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Tiêu Sáng", hex: "#C5C7CA", imageIndex: 0 },
      { name: "Đen", hex: "#1E1E1E", imageIndex: 2 },
      { name: "Trắng", hex: "#F6F6F6", imageIndex: 4 }
    ],
    rating: 4.9,
    reviews: 148,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Wide Leg F5"
  },
  {
    id: 175,
    name: "Quần Dài Lưng Thun Ống Cong Viền Line Cotton Dệt Kép Dày Dặn Đứng Dáng Phom Siêu Rộng F5 - The No Style 215 - Màu Đen Phối Cạp Xám",
    category: "Quần",
    price: 420000,
    originalPrice: 590000,
    description: "Quần dài nam lưng thun ống cong thuộc bộ sưu tập The No Style 215 từ thương hiệu Aureus Fashion. Được dệt từ chất liệu Cotton Dệt Kép (Double-Knit Interlock Cotton) cao cấp định lượng dày dặn, đanh mịn, đứng phom và chống bai xù sau nhiều lần giặt sấy. Thiết kế rập ống cong 3D (Curved Balloon Leg Silhouette) độc đáo kết hợp chi tiết xếp ly ly rút gấu tạo độ phồng nhẹ tự nhiên, hack dáng chân cong và tạo vẻ ngoài cực kỳ thời thượng. Điểm nhấn phối màu color-block ấn tượng với cạp chun thun xám tiêu tương phản kèm dây rút thể thao, dải viền line trắng chạy dọc hai bên sườn tạo hiệu ứng kéo dài đôi chân. Hai túi ốp vuông bản lớn phía trước vừa mang hơi thở Utility/Gorpcore vừa cực kỳ tiện dụng đựng đồ cá nhân, kèm 1 túi ốp phía sau. Phom siêu rộng F5 (Super Wide Leg F5) phóng khoáng, phối cực 'cháy' cùng áo thun oversize, hoodie boxy, áo polo dệt kim hay sneaker chunky.",
    images: [
      "/images/products/pants-thenostyle215-black-front.png",
      "/images/products/pants-thenostyle215-black-back.png",
      "/images/products/pants-thenostyle215-grey-front.jpg",
      "/images/products/pants-thenostyle215-grey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen Phối Cạp Xám", hex: "#1E1E1E", imageIndex: 0 },
      { name: "Xám Tiêu Phối Cạp Đen", hex: "#C5C7CA", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 168,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Curved F5"
  },
  {
    id: 176,
    name: "Quần Dài Lưng Thun Ống Cong Viền Line Cotton Dệt Kép Dày Dặn Đứng Dáng Phom Siêu Rộng F5 - The No Style 215 - Màu Xám Tiêu Phối Cạp Đen",
    category: "Quần",
    price: 420000,
    originalPrice: 590000,
    description: "Quần dài nam lưng thun ống cong thuộc bộ sưu tập The No Style 215 từ thương hiệu Aureus Fashion. Tông màu xám tiêu phối cạp đen (Heather Grey & Black Waistband) hiện đại, đậm chất Athleisure & Y2K Streetwear. Vải cotton dệt kép đanh chắc, mềm mát, giữ form dáng ống phồng cong chuẩn chỉnh suốt cả ngày. Chi tiết viền line đen nổi bật hai bên hông tạo đường nét thể thao thanh thoát. Thiết kế hai túi hộp ốp phía trước rộng rãi, cạp chun co giãn êm ái tích hợp dây rút dễ điều chỉnh và túi sau tiện dụng. Phom siêu rộng F5 (Super Wide Leg F5) mang lại sự tự do thoải mái tuyệt đối cho người mặc, dễ dàng mix cùng áo thun ringer bo viền, áo nỉ sweater hay áo khoác bóng chày bomber.",
    images: [
      "/images/products/pants-thenostyle215-grey-front.jpg",
      "/images/products/pants-thenostyle215-grey-back.jpg",
      "/images/products/pants-thenostyle215-black-front.png",
      "/images/products/pants-thenostyle215-black-back.png"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Tiêu Phối Cạp Đen", hex: "#C5C7CA", imageIndex: 0 },
      { name: "Đen Phối Cạp Xám", hex: "#1E1E1E", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 155,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Curved F5"
  },
  {
    id: 177,
    name: "Quần Tây Công Sở Casual Easycare™ Vải Twill Co Giãn Chống Nhăn Đứng Dáng Phom Ôm Vừa F2 - Non Branded 030 - Màu Đen",
    category: "Quần",
    price: 450000,
    originalPrice: 650000,
    description: "Quần tây nam công sở cao cấp thuộc bộ sưu tập Non Branded 030 từ thương hiệu Aureus Fashion. Được dệt từ chất liệu vải Twill dệt chéo cao cấp tích hợp công nghệ Easycare™ chống nhăn nhàu vượt trội, co giãn 4 chiều linh hoạt và giữ nếp ly ủi sắc nét suốt cả ngày dài làm việc. Đường may tinh xảo chuẩn phong cách may đo Sartorial, cạp quần chắc chắn có đỉa cài thắt lưng, túi xéo sườn sâu rộng cùng hai túi mổ sau có khuy cài lịch lãm. Phom ôm vừa F2 (Slim Fit F2) tôn đôi chân thon gọn, thanh thoát và chuẩn tỷ lệ cơ thể. Tông màu đen kinh điển (Classic Black) sang trọng, là item không thể thiếu trong tủ đồ của quý ông, phối hoàn hảo cùng áo sơ mi công sở (The Minimalist 017, Seventy Seven 052, Non Branded 060), áo blazer hay áo polo thanh lịch.",
    images: [
      "/images/products/pants-nonbranded030-black-front.png",
      "/images/products/pants-nonbranded030-black-back.png",
      "/images/products/pants-nonbranded030-beige-front.png",
      "/images/products/pants-nonbranded030-beige-back.png",
      "/images/products/pants-nonbranded030-khaki-front.jpg",
      "/images/products/pants-nonbranded030-khaki-back.jpg",
      "/images/products/pants-nonbranded030-navy-front.jpg",
      "/images/products/pants-nonbranded030-navy-back.jpg",
      "/images/products/pants-nonbranded030-grey-front.jpg",
      "/images/products/pants-nonbranded030-grey-back.jpg"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Đen", hex: "#1E1E1E", imageIndex: 0 },
      { name: "Be Sáng", hex: "#EAE6DC", imageIndex: 2 },
      { name: "Vàng Khaki", hex: "#D5BA98", imageIndex: 4 },
      { name: "Xanh Navy", hex: "#1F293E", imageIndex: 6 },
      { name: "Xám", hex: "#7E7C84", imageIndex: 8 }
    ],
    rating: 5.0,
    reviews: 176,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Easycare™ F2"
  },
  {
    id: 178,
    name: "Quần Tây Công Sở Casual Easycare™ Vải Twill Co Giãn Chống Nhăn Đứng Dáng Phom Ôm Vừa F2 - Non Branded 030 - Màu Be Sáng",
    category: "Quần",
    price: 450000,
    originalPrice: 650000,
    description: "Quần tây nam công sở cao cấp thuộc bộ sưu tập Non Branded 030 từ thương hiệu Aureus Fashion. Tông màu be sáng (Light Beige / Cream Tailored) hiện đại, tinh tế, mang lại diện mạo trẻ trung, thời thượng chuẩn phong cách Smart Casual châu Âu. Chất vải Twill công nghệ Easycare™ mềm mát, đanh mịn, hạn chế bám bụi bẩn và không bị nhăn gập khi ngồi làm việc hay lái xe nhiều giờ. Đường ly ủi thẳng tắp vĩnh viễn tạo hiệu ứng đôi chân dài miên man. Thiết kế cạp phẳng sang trọng, hai túi mổ sau cúc cài tỉ mỉ. Phom ôm vừa F2 (Slim Fit F2) tôn dáng tối đa, dễ dàng kết hợp cùng áo polo knit dệt kim, sơ mi trắng dài tay, áo thun trơn hay giày tây/loafer cao cấp.",
    images: [
      "/images/products/pants-nonbranded030-beige-front.png",
      "/images/products/pants-nonbranded030-beige-back.png",
      "/images/products/pants-nonbranded030-black-front.png",
      "/images/products/pants-nonbranded030-black-back.png",
      "/images/products/pants-nonbranded030-khaki-front.jpg",
      "/images/products/pants-nonbranded030-khaki-back.jpg",
      "/images/products/pants-nonbranded030-navy-front.jpg",
      "/images/products/pants-nonbranded030-navy-back.jpg",
      "/images/products/pants-nonbranded030-grey-front.jpg",
      "/images/products/pants-nonbranded030-grey-back.jpg"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Be Sáng", hex: "#EAE6DC", imageIndex: 0 },
      { name: "Đen", hex: "#1E1E1E", imageIndex: 2 },
      { name: "Vàng Khaki", hex: "#D5BA98", imageIndex: 4 },
      { name: "Xanh Navy", hex: "#1F293E", imageIndex: 6 },
      { name: "Xám", hex: "#7E7C84", imageIndex: 8 }
    ],
    rating: 4.9,
    reviews: 162,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Easycare™ F2"
  },
  {
    id: 179,
    name: "Quần Tây Công Sở Casual Easycare™ Vải Twill Co Giãn Chống Nhăn Đứng Dáng Phom Ôm Vừa F2 - Non Branded 030 - Màu Vàng Khaki",
    category: "Quần",
    price: 450000,
    originalPrice: 650000,
    description: "Quần tây nam công sở cao cấp thuộc bộ sưu tập Non Branded 030 từ thương hiệu Aureus Fashion. Tông màu vàng khaki (Classic Khaki / Sand Beige) ấm áp, phong độ, hoàn hảo cho phong cách Business Casual và Smart Dress cuối tuần. Chất vải Twill dệt chéo ứng dụng công nghệ Easycare™ hạn chế tối đa nhăn nhàu, vải có độ co giãn 4 chiều mềm mại giúp người mặc luôn thoải mái suốt ngày dài năng động. Đường ly ủi sắc nét giữ phom đứng dáng tinh tế, cạp đỉa sang trọng cùng hai túi sau khuy cài chuẩn mực. Phom ôm vừa F2 (Slim Fit F2) tôn vóc dáng cao ráo, rất hợp khi phối cùng áo sơ mi trắng, áo polo xanh navy hay áo len mỏng.",
    images: [
      "/images/products/pants-nonbranded030-khaki-front.jpg",
      "/images/products/pants-nonbranded030-khaki-back.jpg",
      "/images/products/pants-nonbranded030-navy-front.jpg",
      "/images/products/pants-nonbranded030-navy-back.jpg",
      "/images/products/pants-nonbranded030-black-front.png",
      "/images/products/pants-nonbranded030-black-back.png",
      "/images/products/pants-nonbranded030-beige-front.png",
      "/images/products/pants-nonbranded030-beige-back.png",
      "/images/products/pants-nonbranded030-grey-front.jpg",
      "/images/products/pants-nonbranded030-grey-back.jpg"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Vàng Khaki", hex: "#D5BA98", imageIndex: 0 },
      { name: "Xanh Navy", hex: "#1F293E", imageIndex: 2 },
      { name: "Đen", hex: "#1E1E1E", imageIndex: 4 },
      { name: "Be Sáng", hex: "#EAE6DC", imageIndex: 6 },
      { name: "Xám", hex: "#7E7C84", imageIndex: 8 }
    ],
    rating: 5.0,
    reviews: 158,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Easycare™ F2"
  },
  {
    id: 180,
    name: "Quần Tây Công Sở Casual Easycare™ Vải Twill Co Giãn Chống Nhăn Đứng Dáng Phom Ôm Vừa F2 - Non Branded 030 - Màu Xanh Navy",
    category: "Quần",
    price: 450000,
    originalPrice: 650000,
    description: "Quần tây nam công sở cao cấp thuộc bộ sưu tập Non Branded 030 từ thương hiệu Aureus Fashion. Tông màu xanh navy (Navy Blue / Xanh Than) lịch lãm, quyền lực và cực kỳ dễ kết hợp trang phục chốn văn phòng hay các buổi hội nghị trang trọng. Sợi vải Twill Easycare™ đanh mịn, thoáng khí, kháng nhăn tự nhiên và bền màu sau nhiều lần giặt sấy. Thiết kế nếp ly ủi thẳng tắp vĩnh viễn, túi xéo sườn tinh tế cùng túi mổ sau cúc cài cao cấp. Phom ôm vừa F2 (Slim Fit F2) tạo vẻ ngoài gọn gàng, đĩnh đạc, phối hoàn mỹ cùng áo blazer đồng điệu, áo sơ mi kẻ sọc nhí hay áo thun polo trơn.",
    images: [
      "/images/products/pants-nonbranded030-navy-front.jpg",
      "/images/products/pants-nonbranded030-navy-back.jpg",
      "/images/products/pants-nonbranded030-khaki-front.jpg",
      "/images/products/pants-nonbranded030-khaki-back.jpg",
      "/images/products/pants-nonbranded030-black-front.png",
      "/images/products/pants-nonbranded030-black-back.png",
      "/images/products/pants-nonbranded030-beige-front.png",
      "/images/products/pants-nonbranded030-beige-back.png",
      "/images/products/pants-nonbranded030-grey-front.jpg",
      "/images/products/pants-nonbranded030-grey-back.jpg"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Xanh Navy", hex: "#1F293E", imageIndex: 0 },
      { name: "Vàng Khaki", hex: "#D5BA98", imageIndex: 2 },
      { name: "Đen", hex: "#1E1E1E", imageIndex: 4 },
      { name: "Be Sáng", hex: "#EAE6DC", imageIndex: 6 },
      { name: "Xám", hex: "#7E7C84", imageIndex: 8 }
    ],
    rating: 4.9,
    reviews: 169,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Easycare™ F2"
  },
  {
    id: 181,
    name: "Quần Tây Công Sở Casual Easycare™ Vải Twill Co Giãn Chống Nhăn Đứng Dáng Phom Ôm Vừa F2 - Non Branded 030 - Màu Xám",
    category: "Quần",
    price: 450000,
    originalPrice: 650000,
    description: "Quần tây nam công sở cao cấp thuộc bộ sưu tập Non Branded 030 từ thương hiệu Aureus Fashion. Tông màu xám trung tính (Slate Grey / Medium Grey) kinh điển, chuẩn mực và tinh tế cho mọi môi trường làm việc chuyên nghiệp. Vải Twill dệt chéo tích hợp công nghệ Easycare™ chống nhăn nhàu vượt trội, co giãn 4 chiều mềm mại và giữ nếp ly ủi thẳng đứng hoàn hảo suốt cả ngày dài. Cạp quần may đo Sartorial đỉa thắt lưng chắc chắn, túi xéo hông tiện lợi và hai túi mổ sau khuy cài sang trọng. Phom ôm vừa F2 (Slim Fit F2) tôn vóc dáng thanh thoát, cực kỳ dễ phối cùng áo sơ mi trắng, xanh nhạt, áo polo dệt kim hay áo vest blazer.",
    images: [
      "/images/products/pants-nonbranded030-grey-front.jpg",
      "/images/products/pants-nonbranded030-grey-back.jpg",
      "/images/products/pants-nonbranded030-black-front.png",
      "/images/products/pants-nonbranded030-black-back.png",
      "/images/products/pants-nonbranded030-beige-front.png",
      "/images/products/pants-nonbranded030-beige-back.png",
      "/images/products/pants-nonbranded030-khaki-front.jpg",
      "/images/products/pants-nonbranded030-khaki-back.jpg",
      "/images/products/pants-nonbranded030-navy-front.jpg",
      "/images/products/pants-nonbranded030-navy-back.jpg"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Xám", hex: "#7E7C84", imageIndex: 0 },
      { name: "Đen", hex: "#1E1E1E", imageIndex: 2 },
      { name: "Be Sáng", hex: "#EAE6DC", imageIndex: 4 },
      { name: "Vàng Khaki", hex: "#D5BA98", imageIndex: 6 },
      { name: "Xanh Navy", hex: "#1F293E", imageIndex: 8 }
    ],
    rating: 4.9,
    reviews: 154,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Easycare™ F2"
  },
  {
    id: 182,
    name: "Quần Tây Casual Easycare™ Vải Rayon Blend Mềm Mại Tự Phục Hồi Nếp Phẳng Lưng Thun Phom Ôm Vừa F2 - Non Iron 001 - Màu Đen",
    category: "Quần",
    price: 450000,
    originalPrice: 650000,
    description: "Quần tây nam công sở cao cấp thuộc bộ sưu tập Non Iron 001 từ thương hiệu Aureus Fashion. Được phát triển từ chất liệu vải Rayon Blend tổng hợp cao cấp ứng dụng công nghệ Non-Iron Easycare™ thông minh với đặc tính tự phục hồi nếp phẳng sau khi giặt hoặc ngồi nhiều giờ, bề mặt vải mướt mịn tự nhiên, thoáng mát và co giãn nhẹ. Thiết kế cạp lưng thun linh hoạt (Smart Elastic Waistband): mặt trước phẳng phiu chỉn chu có đỉa cài thắt lưng, kết hợp hai bên hông co giãn êm ái giúp giải phóng vòng eo khi ngồi lâu hay sau bữa ăn. Đường ly ủi sắc nét vĩnh viễn tạo hiệu ứng kéo dài đôi chân, túi xéo hông tiện lợi và hai túi mổ sau tối giản. Phom ôm vừa F2 (Slim Fit F2) tôn vóc dáng gọn gàng, thanh lịch. Tông màu đen kinh điển (Classic Black) là lựa chọn chuẩn mực cho quý ông hiện đại, phối hoàn hảo cùng áo sơ mi công sở, áo polo hoặc blazer.",
    images: [
      "/images/products/pants-noniron001-black-front.png",
      "/images/products/pants-noniron001-black-back.png",
      "/images/products/pants-noniron001-oatmeal-front.jpg",
      "/images/products/pants-noniron001-oatmeal-back.jpg",
      "/images/products/pants-noniron001-taupe-front.jpg",
      "/images/products/pants-noniron001-taupe-back.jpg",
      "/images/products/pants-noniron001-iceblue-front.jpg",
      "/images/products/pants-noniron001-iceblue-back.jpg"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Đen", hex: "#1E1E1E", imageIndex: 0 },
      { name: "Be Yến Mạch", hex: "#D8D3C8", imageIndex: 2 },
      { name: "Nâu Khaki", hex: "#968774", imageIndex: 4 },
      { name: "Xanh Băng", hex: "#A9B2BC", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 172,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Non Iron F2"
  },
  {
    id: 183,
    name: "Quần Tây Casual Easycare™ Vải Rayon Blend Mềm Mại Tự Phục Hồi Nếp Phẳng Lưng Thun Phom Ôm Vừa F2 - Non Iron 001 - Màu Be Yến Mạch",
    category: "Quần",
    price: 450000,
    originalPrice: 650000,
    description: "Quần tây nam công sở cao cấp thuộc bộ sưu tập Non Iron 001 từ thương hiệu Aureus Fashion. Tông màu be yến mạch (Oatmeal Beige / Sand Mélange) mang sắc thái thanh lịch, hiện đại chuẩn phong cách Parisian & Smart Casual. Chất vải dệt sợi Rayon Blend rũ nhẹ, đanh mát, công nghệ tự phục hồi nếp phẳng giúp quần luôn giữ độ chỉn chu mà không cần là ủi phức tạp. Cạp lưng thun co giãn thông minh không gây lằn bụng, nếp ly ủi thẳng tắp tôn dáng chân dài và thon gọn. Thiết kế phom ôm vừa F2 (Slim Fit F2) hiện đại, phối cực kỳ ăn nhập cùng áo thun dệt kim knit, áo sơ mi cộc tay cổ trụ, sơ mi trắng dài tay hay giày loafer da lộn.",
    images: [
      "/images/products/pants-noniron001-oatmeal-front.jpg",
      "/images/products/pants-noniron001-oatmeal-back.jpg",
      "/images/products/pants-noniron001-black-front.png",
      "/images/products/pants-noniron001-black-back.png",
      "/images/products/pants-noniron001-taupe-front.jpg",
      "/images/products/pants-noniron001-taupe-back.jpg",
      "/images/products/pants-noniron001-iceblue-front.jpg",
      "/images/products/pants-noniron001-iceblue-back.jpg"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Be Yến Mạch", hex: "#D8D3C8", imageIndex: 0 },
      { name: "Đen", hex: "#1E1E1E", imageIndex: 2 },
      { name: "Nâu Khaki", hex: "#968774", imageIndex: 4 },
      { name: "Xanh Băng", hex: "#A9B2BC", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 158,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Non Iron F2"
  },
  {
    id: 184,
    name: "Quần Tây Casual Easycare™ Vải Rayon Blend Mềm Mại Tự Phục Hồi Nếp Phẳng Lưng Thun Phom Ôm Vừa F2 - Non Iron 001 - Màu Nâu Khaki",
    category: "Quần",
    price: 450000,
    originalPrice: 650000,
    description: "Quần tây nam công sở cao cấp thuộc bộ sưu tập Non Iron 001 từ thương hiệu Aureus Fashion. Tông màu nâu khaki (Taupe / Warm Earth) trầm ấm, thanh lịch và mang đậm phong cách Quiet Luxury cổ điển pha lẫn hiện đại. Được dệt từ chất liệu vải Rayon Blend tổng hợp cao cấp ứng dụng công nghệ Non-Iron Easycare™ đột phá với khả năng tự phục hồi nếp phẳng ngay sau khi giặt hoặc sau nhiều giờ ngồi làm việc. Thiết kế cạp lưng thun co giãn thông minh hai bên hông kết hợp mặt trước phẳng phiu chuẩn may đo Sartorial, nếp ly ép nhiệt thẳng tắp hack dáng chân dài. Phom dáng ôm vừa F2 (Slim Fit F2) tôn vóc dáng thon gọn, phối cực chuẩn cùng sơ mi trắng, sơ mi xanh pastel, áo polo knit dệt kim hay áo khoác blazer nâu.",
    images: [
      "/images/products/pants-noniron001-taupe-front.jpg",
      "/images/products/pants-noniron001-taupe-back.jpg",
      "/images/products/pants-noniron001-iceblue-front.jpg",
      "/images/products/pants-noniron001-iceblue-back.jpg",
      "/images/products/pants-noniron001-black-front.png",
      "/images/products/pants-noniron001-black-back.png",
      "/images/products/pants-noniron001-oatmeal-front.jpg",
      "/images/products/pants-noniron001-oatmeal-back.jpg"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Nâu Khaki", hex: "#968774", imageIndex: 0 },
      { name: "Xanh Băng", hex: "#A9B2BC", imageIndex: 2 },
      { name: "Đen", hex: "#1E1E1E", imageIndex: 4 },
      { name: "Be Yến Mạch", hex: "#D8D3C8", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 165,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Non Iron F2"
  },
  {
    id: 185,
    name: "Quần Tây Casual Easycare™ Vải Rayon Blend Mềm Mại Tự Phục Hồi Nếp Phẳng Lưng Thun Phom Ôm Vừa F2 - Non Iron 001 - Màu Xanh Băng",
    category: "Quần",
    price: 450000,
    originalPrice: 650000,
    description: "Quần tây nam công sở cao cấp thuộc bộ sưu tập Non Iron 001 từ thương hiệu Aureus Fashion. Tông màu xanh băng (Ice Blue / Frozen Steel) tươi mát, thời thượng và mang đến nguồn năng lượng tươi mới cho phong cách thời trang công sở thường nhật. Ứng dụng chất liệu vải Rayon Blend tổng hợp mềm mát rũ nhẹ kết hợp công nghệ Non-Iron Easycare™ thông minh tự làm phẳng nếp nhăn nhanh chóng mà không cần là ủi kỳ công. Thiết kế cạp lưng thun co giãn đàn hồi hai bên hông tạo sự thoải mái tối đa khi cử động và ngồi văn phòng, nếp ly ủi sắc nét vĩnh viễn tạo hiệu ứng đôi chân dài miên man. Phom ôm vừa F2 (Slim Fit F2) trẻ trung, dễ dàng mix&match cùng sơ mi trắng dài tay, áo thun polo hoặc giày tây/loafer thời trang.",
    images: [
      "/images/products/pants-noniron001-iceblue-front.jpg",
      "/images/products/pants-noniron001-iceblue-back.jpg",
      "/images/products/pants-noniron001-taupe-front.jpg",
      "/images/products/pants-noniron001-taupe-back.jpg",
      "/images/products/pants-noniron001-black-front.png",
      "/images/products/pants-noniron001-black-back.png",
      "/images/products/pants-noniron001-oatmeal-front.jpg",
      "/images/products/pants-noniron001-oatmeal-back.jpg"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Xanh Băng", hex: "#A9B2BC", imageIndex: 0 },
      { name: "Nâu Khaki", hex: "#968774", imageIndex: 2 },
      { name: "Đen", hex: "#1E1E1E", imageIndex: 4 },
      { name: "Be Yến Mạch", hex: "#D8D3C8", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 149,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Non Iron F2"
  },
  {
    id: 186,
    name: "Quần Tây Công Sở Easycare™ Xếp Ly Thoải Mái Giữ Ly Thẳng Đứng Ít Nhăn Phom Vừa F3 - The Ceo 033 - Màu Đen",
    category: "Quần",
    price: 460000,
    originalPrice: 680000,
    description: "Quần tây nam công sở cao cấp thuộc bộ sưu tập The Ceo 033 từ thương hiệu Aureus Fashion. Được chế tác từ chất liệu vải dệt thoi pha sợi cao cấp tích hợp công nghệ Easycare™ thông minh với ưu điểm chống nhăn nhàu vượt bậc, mặt vải đanh mịn thoáng khí và độ rũ tự nhiên chuẩn phong thái doanh nhân. Thiết kế xếp ly đôi mặt trước (Double Pleated Front) cổ điển giúp giải phóng tối đa không gian cử động vùng hông và đùi, đem lại cảm giác thoải mái tuyệt đối khi ngồi làm việc hay họp hành suốt ngày dài. Kỹ thuật ép nhiệt giữ ly vĩnh viễn (Permanent Sharp Crease) tạo nếp ly ủi thẳng đứng sắc nét tôn đôi chân thẳng tắp. Chi tiết cạp may đo Sartorial đỉa cài thắt lưng kèm vạt khuy cài mở rộng tinh tế, 2 túi xéo hông tiện dụng và 2 túi mổ sau cài khuy chỉn chu. Phom vừa F3 (Regular Fit F3) đĩnh đạc, phối hoàn hảo cùng áo sơ mi công sở, áo polo dệt kim hay áo blazer sang trọng.",
    images: [
      "/images/products/pants-theceo033-black-front.png",
      "/images/products/pants-theceo033-black-back.png",
      "/images/products/pants-theceo033-grey-front.jpg",
      "/images/products/pants-theceo033-grey-back.jpg"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Đen", hex: "#1E1E1E", imageIndex: 0 },
      { name: "Xám", hex: "#63666D", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 148,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Easycare™ F3"
  },
  {
    id: 187,
    name: "Quần Tây Công Sở Easycare™ Xếp Ly Thoải Mái Giữ Ly Thẳng Đứng Ít Nhăn Phom Vừa F3 - The Ceo 033 - Màu Xám",
    category: "Quần",
    price: 460000,
    originalPrice: 680000,
    description: "Quần tây nam công sở cao cấp thuộc bộ sưu tập The Ceo 033 từ thương hiệu Aureus Fashion. Tông màu xám ghi lịch lãm (Charcoal Slate Grey) mang đến diện mạo sang trọng, đĩnh đạc và chuẩn mực cho các quý ông văn phòng lẫn lãnh đạo hiện đại. Ứng dụng công nghệ vải Easycare™ cao cấp hạn chế nhăn tối đa, thoáng mát và co giãn nhẹ tạo sự linh hoạt khi di chuyển. Chi tiết xếp ly thoải mái mặt trước tạo độ phồng nhẹ tinh tế ở phần đùi trên giúp che khuyết điểm hoàn hảo, kết hợp đường nếp ly ủi sắc lẹm kéo dài tỉ lệ cơ thể. Đai cạp may đo cao cấp đính kèm vạt cài khuy giấu, túi mổ hậu khuy đính chắc chắn. Phom vừa F3 (Regular Fit F3) tôn phong thái chững chạc, dễ dàng kết hợp cùng áo sơ mi trắng, sơ mi xanh nhạt, áo len mỏng dệt kim hoặc áo vest/blazer đồng điệu.",
    images: [
      "/images/products/pants-theceo033-grey-front.jpg",
      "/images/products/pants-theceo033-grey-back.jpg",
      "/images/products/pants-theceo033-black-front.png",
      "/images/products/pants-theceo033-black-back.png"
    ],
    sizes: ["29", "30", "31", "32", "34", "36"],
    colors: [
      { name: "Xám", hex: "#63666D", imageIndex: 0 },
      { name: "Đen", hex: "#1E1E1E", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 136,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Easycare™ F3"
  },
  {
    id: 188,
    name: "Quần Short Lưng Thun CloudTouch™ Tự Phẳng Không Cần Ủi Đáy Thụng Vừa Vặn Phom Rộng F4 - Non Branded 066 - Màu Đen",
    category: "Quần",
    price: 320000,
    originalPrice: 480000,
    description: "Quần short thun nam cao cấp thuộc bộ sưu tập Non Branded 066 từ thương hiệu Aureus Fashion. Được phát triển trên nền chất liệu dệt thun cao cấp ứng dụng công nghệ CloudTouch™ thế hệ mới, mang lại bề mặt vải siêu mềm mịn màng êm ái tựa đám mây, đàn hồi co giãn đa chiều và đặc tính tự phục hồi phẳng phiu (Non-Iron) không cần là ủi sau khi giặt. Thiết kế đũng thụng vừa vặn (Comfort Drop Crotch) giải phóng áp lực vùng đùi và đũng quần, đem lại sự thoải mái tự do tuyệt đối khi vận động, tập thể thao hay mặc nhà dạo phố. Cạp lưng thun co giãn êm ái tích hợp đường may chần chỉ chắc chắn không gây lằn bụng, 2 túi mổ dọc bên hông sâu rộng tiện lợi và 2 túi ốp vuông khỏe khoắn phía sau. Phom rộng F4 (Relaxed Wide Fit F4) năng động, che khuyết điểm chân và tôn nét phóng khoáng. Tông màu đen tuyền nam tính kinh điển, dễ dàng mix&match cùng áo thun oversize, áo ba lỗ tank top, áo polo dệt kim hay hoodie không tay.",
    images: [
      "/images/products/shorts-nonbranded066-black-front.jpg",
      "/images/products/shorts-nonbranded066-black-back.jpg",
      "/images/products/shorts-nonbranded066-grey-front.jpg",
      "/images/products/shorts-nonbranded066-grey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1E1E1E", imageIndex: 0 },
      { name: "Xám Tiêu", hex: "#B8B9BD", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 156,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "CloudTouch™ F4"
  },
  {
    id: 189,
    name: "Quần Short Lưng Thun CloudTouch™ Tự Phẳng Không Cần Ủi Đáy Thụng Vừa Vặn Phom Rộng F4 - Non Branded 066 - Màu Xám Tiêu",
    category: "Quần",
    price: 320000,
    originalPrice: 480000,
    description: "Quần short thun nam cao cấp thuộc bộ sưu tập Non Branded 066 từ thương hiệu Aureus Fashion. Tông màu xám tiêu (Heather Grey Melange) trẻ trung, hiện đại và chuẩn tinh thần Athleisure đường phố. Ứng dụng công nghệ vải dệt CloudTouch™ xốp nhẹ, thấm hút mồ hôi và bay ẩm siêu tốc, giúp người mặc luôn cảm thấy mát mẻ dễ chịu trong mọi hoạt động mùa hè. Kỹ thuật cắt rập đáy thụng tinh tế kết hợp phom rộng F4 (Relaxed Fit F4) thời thượng, đem lại độ rũ tự nhiên mà không lo nhăn nhàu nhờ khả năng tự phẳng thông minh. Trang bị 2 túi xẻ sườn rộng rãi cùng 2 túi vuông bản lớn phía sau tiện dụng cất giữ đồ đạc. Hoàn hảo để diện đi tập gym, chạy bộ, dạo phố cuối tuần hoặc phối layer cùng áo thun streetwear, áo sơ mi cộc tay khoác ngoài và giày sneaker năng động.",
    images: [
      "/images/products/shorts-nonbranded066-grey-front.jpg",
      "/images/products/shorts-nonbranded066-grey-back.jpg",
      "/images/products/shorts-nonbranded066-black-front.jpg",
      "/images/products/shorts-nonbranded066-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Tiêu", hex: "#B8B9BD", imageIndex: 0 },
      { name: "Đen", hex: "#1E1E1E", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 142,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "CloudTouch™ F4"
  },
  {
    id: 190,
    name: "Quần Short Lưng Thun AirDry™ Xếp Ly Thanh Lịch Nới Rộng Cử Động Dài Qua Gối Phom Rộng F4 - The No Style 296 - Màu Trắng Kem",
    category: "Quần",
    price: 350000,
    originalPrice: 520000,
    description: "Quần short nam xếp ly phong cách City Boy & Sartorial Casual thuộc bộ sưu tập The No Style 296 từ thương hiệu Aureus Fashion. Được phát triển từ chất vải cao cấp ứng dụng công nghệ AirDry™ thoáng khí vượt bậc với khả năng tản nhiệt nhanh, nhẹ tênh và chống bết dính mồ hôi tối ưu trong những ngày hè oi ả. Thiết kế xếp ly đôi thanh lịch (Double Pleated Front) tạo độ phồng rũ tự nhiên, nới rộng tối đa không gian cử động vùng hông và đùi mang lại cảm giác thoải mái khi di chuyển. Lưng thun kết hợp thông minh (Smart Hybrid Waistband): mặt trước phẳng phiu chỉn chu có khuy cài và đỉa luồn thắt lưng, mặt sau may chun co giãn linh hoạt ôm gọn vòng eo. Chiều dài qua gối thời thượng (Over-the-knee Bermuda Length) cùng phom rộng F4 (Wide Fit F4) đứng dáng, che khuyết điểm chân hiệu quả. Tông màu trắng kem (Cream / Off-White) tinh tế, sang trọng, dễ dàng kết hợp cùng áo polo knit dệt kim, sơ mi tay ngắn phom hộp F5, áo thun trơn hay giày loafer/sneaker.",
    images: [
      "/images/products/shorts-thenostyle296-cream-front.jpg",
      "/images/products/shorts-thenostyle296-cream-back.jpg",
      "/images/products/shorts-thenostyle296-black-front.jpg",
      "/images/products/shorts-thenostyle296-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng Kem", hex: "#ECE6DB", imageIndex: 0 },
      { name: "Đen", hex: "#1E1E1E", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 158,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "AirDry™ F4"
  },
  {
    id: 191,
    name: "Quần Short Lưng Thun AirDry™ Xếp Ly Thanh Lịch Nới Rộng Cử Động Dài Qua Gối Phom Rộng F4 - The No Style 296 - Màu Đen",
    category: "Quần",
    price: 350000,
    originalPrice: 520000,
    description: "Quần short nam xếp ly phong cách City Boy & Sartorial Casual thuộc bộ sưu tập The No Style 296 từ thương hiệu Aureus Fashion. Tông màu đen kinh điển (Classic Black) mang lại vẻ ngoài nam tính, tối giản và cực kỳ đa dụng. Ứng dụng công nghệ sợi AirDry™ thông minh giúp bề mặt vải luôn khô thoáng, mát lạnh và mềm mại, hạn chế tối đa nếp nhăn. Điểm nhấn xếp ly kép mặt trước tinh tế mở rộng biên độ cử động, kết hợp chiều dài qua gối chuẩn mực và phom rộng F4 phóng khoáng giúp vóc dáng trông cao ráo, cân đối. Thiết kế cạp trước cài cúc sang trọng kết hợp đai lưng thun co giãn phía sau êm ái, 2 túi xéo sườn tiện dụng và 2 túi mổ cài cúc phía sau chỉn chu. Hoàn hảo để diện đi cà phê, du lịch nghỉ dưỡng hoặc dạo phố khi phối cùng áo sơ mi linen, áo thun boxy hoặc áo blazer ngắn tay.",
    images: [
      "/images/products/shorts-thenostyle296-black-front.jpg",
      "/images/products/shorts-thenostyle296-black-back.jpg",
      "/images/products/shorts-thenostyle296-cream-front.jpg",
      "/images/products/shorts-thenostyle296-cream-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1E1E1E", imageIndex: 0 },
      { name: "Trắng Kem", hex: "#ECE6DB", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 145,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "AirDry™ F4"
  },
  {
    id: 192,
    name: "Quần Đùi Lưng Thun Ống Rộng Vải Dệt Vân Nổi 280Gsm Giữ Phom Phẳng Lưng Chống Xoắn Phom Rộng F4 - The No Style 272 - Màu Xám Tiêu Sáng",
    category: "Quần",
    price: 340000,
    originalPrice: 490000,
    description: "Quần đùi thun nam ống rộng cao cấp phong cách Streetwear & Modern Casual thuộc bộ sưu tập The No Style 272 từ thương hiệu Aureus Fashion. Được dệt từ chất liệu vải Jacquard cao cấp định lượng dày dặn 280Gsm với kỹ thuật dệt vân nổi 3D họa tiết hình học đan xen độc bản, vừa tạo hiệu ứng thị giác sang trọng vừa giữ phom dáng đứng form và chống bai xù tuyệt hảo. Thiết kế bản lưng thun dệt nguyên khối công nghệ chống xoắn (Anti-twist Flat Elastic Waistband) giúp cạp quần luôn phẳng phiu, ôm êm ái vào thắt lưng mà không lo xoắn lộn chun khi giặt hay vận động. Điểm nhấn đường xếp ly nhẹ phía trước tạo độ rũ tự nhiên, giải phóng vùng cử động hông đùi. Trang bị 2 túi mổ xéo dọc hông sâu rộng và 1 túi ốp vuông phía sau bên phải. Phom rộng F4 (Wide Fit F4) năng động, thoáng mát tối đa. Tông màu xám tiêu sáng (Light Heather Grey) trẻ trung, dễ dàng phối cùng áo thun oversize, tank top thể thao, áo polo dệt kim hay áo khoác sơ mi.",
    images: [
      "/images/products/shorts-thenostyle272-grey-front.jpg",
      "/images/products/shorts-thenostyle272-grey-back.jpg",
      "/images/products/shorts-thenostyle272-black-front.jpg",
      "/images/products/shorts-thenostyle272-black-back.jpg",
      "/images/products/shorts-thenostyle272-brown-front.jpg",
      "/images/products/shorts-thenostyle272-brown-back.jpg",
      "/images/products/shorts-thenostyle272-cream-front.jpg",
      "/images/products/shorts-thenostyle272-cream-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Tiêu Sáng", hex: "#B8B9BD", imageIndex: 0 },
      { name: "Đen", hex: "#1E1E1E", imageIndex: 2 },
      { name: "Nâu Cacao", hex: "#5A453A", imageIndex: 4 },
      { name: "Trắng Kem", hex: "#ECE6DB", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 146,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Jacquard 280Gsm F4"
  },
  {
    id: 193,
    name: "Quần Đùi Lưng Thun Ống Rộng Vải Dệt Vân Nổi 280Gsm Giữ Phom Phẳng Lưng Chống Xoắn Phom Rộng F4 - The No Style 272 - Màu Đen",
    category: "Quần",
    price: 340000,
    originalPrice: 490000,
    description: "Quần đùi thun nam ống rộng cao cấp phong cách Streetwear & Modern Casual thuộc bộ sưu tập The No Style 272 từ thương hiệu Aureus Fashion. Tông màu đen tuyền (Jet Black) nam tính, mạnh mẽ và thời thượng trên nền cấu trúc vân nổi Jacquard 3D chìm tinh tế. Chất vải dệt đanh chắc định lượng 280Gsm mềm mại, co giãn đàn hồi và thấm hút mồ hôi tối ưu, đem lại trải nghiệm thoáng mát tuyệt vời cho mọi ngày hè năng động. Cấu trúc cạp lưng thun phẳng thông minh chống vặn xoắn tuyệt đối, cố định phom cạp đẹp mắt suốt quá trình sử dụng. Đường ly trước tạo nét chỉn chu pha lẫn phóng khoáng, kết hợp túi mổ sườn tiện lợi và túi ốp sau phong cách. Phom rộng F4 (Wide Fit F4) thời thượng, che khuyết điểm đùi to, cực kỳ ăn ý khi kết hợp cùng áo thun graphic, áo hoodie không tay hay sneaker chunky cá tính.",
    images: [
      "/images/products/shorts-thenostyle272-black-front.jpg",
      "/images/products/shorts-thenostyle272-black-back.jpg",
      "/images/products/shorts-thenostyle272-grey-front.jpg",
      "/images/products/shorts-thenostyle272-grey-back.jpg",
      "/images/products/shorts-thenostyle272-brown-front.jpg",
      "/images/products/shorts-thenostyle272-brown-back.jpg",
      "/images/products/shorts-thenostyle272-cream-front.jpg",
      "/images/products/shorts-thenostyle272-cream-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1E1E1E", imageIndex: 0 },
      { name: "Xám Tiêu Sáng", hex: "#B8B9BD", imageIndex: 2 },
      { name: "Nâu Cacao", hex: "#5A453A", imageIndex: 4 },
      { name: "Trắng Kem", hex: "#ECE6DB", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 152,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Jacquard 280Gsm F4"
  },
  {
    id: 194,
    name: "Quần Đùi Lưng Thun Ống Rộng Vải Dệt Vân Nổi 280Gsm Giữ Phom Phẳng Lưng Chống Xoắn Phom Rộng F4 - The No Style 272 - Màu Nâu Cacao",
    category: "Quần",
    price: 340000,
    originalPrice: 490000,
    description: "Quần đùi thun nam ống rộng cao cấp phong cách Streetwear & Modern Casual thuộc bộ sưu tập The No Style 272 từ thương hiệu Aureus Fashion. Tông màu nâu cacao (Mocha Brown / Cacao) ấm áp, độc đáo và cực kỳ tôn da, chuẩn xu hướng thời trang Earth Tone hiện đại. Nền vải dệt Jacquard 280Gsm dày dặn với cấu trúc vân dệt 3D hình học sắc sảo, đanh chắc đứng phom nhưng thoáng khí và mềm mát khi mặc. Thiết kế cạp chun phẳng thông minh chống xoắn vặn (Anti-twist Flat Elastic Waistband) ôm nhẹ lưng quần êm ái, đường ly trước tinh tế giải phóng không gian cử động hông đùi. Trang bị túi xéo sườn tiện dụng và túi ốp sau khỏe khoắn. Phom rộng F4 (Wide Fit F4) năng động, dễ dàng tạo nên các bản phối layering sành điệu cùng áo thun trắng/kem, áo polo dệt kim vintage hay sơ mi kẻ ca rô.",
    images: [
      "/images/products/shorts-thenostyle272-brown-front.jpg",
      "/images/products/shorts-thenostyle272-brown-back.jpg",
      "/images/products/shorts-thenostyle272-cream-front.jpg",
      "/images/products/shorts-thenostyle272-cream-back.jpg",
      "/images/products/shorts-thenostyle272-grey-front.jpg",
      "/images/products/shorts-thenostyle272-grey-back.jpg",
      "/images/products/shorts-thenostyle272-black-front.jpg",
      "/images/products/shorts-thenostyle272-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Nâu Cacao", hex: "#5A453A", imageIndex: 0 },
      { name: "Trắng Kem", hex: "#ECE6DB", imageIndex: 2 },
      { name: "Xám Tiêu Sáng", hex: "#B8B9BD", imageIndex: 4 },
      { name: "Đen", hex: "#1E1E1E", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 148,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Jacquard 280Gsm F4"
  },
  {
    id: 195,
    name: "Quần Đùi Lưng Thun Ống Rộng Vải Dệt Vân Nổi 280Gsm Giữ Phom Phẳng Lưng Chống Xoắn Phom Rộng F4 - The No Style 272 - Màu Trắng Kem",
    category: "Quần",
    price: 340000,
    originalPrice: 490000,
    description: "Quần đùi thun nam ống rộng cao cấp phong cách Streetwear & Modern Casual thuộc bộ sưu tập The No Style 272 từ thương hiệu Aureus Fashion. Tông màu trắng kem (Cream White / Sand Ivory) thanh lịch, sạch sẽ và mang lại cảm giác tươi mới tràn đầy năng lượng mùa hè. Sử dụng chất liệu vải Jacquard dệt vân nổi 3D cao cấp 280Gsm với kết cấu sợi đan dày dặn, không lộ bên trong, kháng bai dão và tự đứng phom tự nhiên. Chi tiết bản lưng thun dệt phẳng chống xoắn gập cạp quần độc quyền đem lại sự thoải mái tuyệt đối, kết hợp ly xếp nhẹ trước tạo độ rũ phóng khoáng. Trang bị 2 túi mổ dọc sâu rộng và 1 túi ốp vuông phía sau. Phom rộng F4 (Wide Fit F4) thời thượng, cực kỳ ăn khớp khi mix cùng áo thun màu pastel, áo sơ mi cộc tay dạo phố hay giày sneaker trắng năng động.",
    images: [
      "/images/products/shorts-thenostyle272-cream-front.jpg",
      "/images/products/shorts-thenostyle272-cream-back.jpg",
      "/images/products/shorts-thenostyle272-brown-front.jpg",
      "/images/products/shorts-thenostyle272-brown-back.jpg",
      "/images/products/shorts-thenostyle272-grey-front.jpg",
      "/images/products/shorts-thenostyle272-grey-back.jpg",
      "/images/products/shorts-thenostyle272-black-front.jpg",
      "/images/products/shorts-thenostyle272-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng Kem", hex: "#ECE6DB", imageIndex: 0 },
      { name: "Nâu Cacao", hex: "#5A453A", imageIndex: 2 },
      { name: "Xám Tiêu Sáng", hex: "#B8B9BD", imageIndex: 4 },
      { name: "Đen", hex: "#1E1E1E", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 139,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Jacquard 280Gsm F4"
  },
  {
    id: 196,
    name: "Quần Đùi Lưng Thun Vải Co Giãn Tự Phẳng Hạn Chế Nhăn Phối Túi Hộp 3D Lớn Phom Rộng F4 - The No Style 268 - Màu Trắng",
    category: "Quần",
    price: 340000,
    originalPrice: 490000,
    description: "Quần đùi túi hộp nam cao cấp phong cách Techwear & Urban Utility thuộc bộ sưu tập The No Style 268 từ thương hiệu Aureus Fashion. Được phát triển từ chất liệu vải dệt công nghệ cao co giãn 4 chiều linh hoạt kết hợp tính năng tự phẳng hạn chế nhăn nhàu vượt trội, giữ dáng quần luôn đứng phom và tinh tươm suốt cả ngày. Điểm nhấn nổi bật nằm ở thiết kế 2 túi hộp 3D bản lớn vạt nắp phía trước đùi cực kỳ thời thượng, mang đậm cá tính đường phố và tiện lợi cất giữ điện thoại, phụ kiện cá nhân. Thiết kế cạp lưng thun co giãn êm ái đàn hồi đa chiều không gây lằn thắt eo, kết hợp 2 túi mổ xéo dọc hông và 1 túi ốp vát góc phía sau tiện lợi. Phom rộng F4 (Wide Fit F4) thoải mái, năng động. Tông màu trắng tinh khôi (Bright White) nổi bật, dễ dàng phối cùng áo thun đen đối lập, áo tank top, áo sơ mi cộc tay khoác ngoài hay giày sneaker chunky.",
    images: [
      "/images/products/shorts-thenostyle268-white-front.jpg",
      "/images/products/shorts-thenostyle268-white-back.jpg",
      "/images/products/shorts-thenostyle268-black-front.jpg",
      "/images/products/shorts-thenostyle268-black-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 0 },
      { name: "Đen", hex: "#1E1E1E", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 154,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Cargo 3D F4"
  },
  {
    id: 197,
    name: "Quần Đùi Lưng Thun Vải Co Giãn Tự Phẳng Hạn Chế Nhăn Phối Túi Hộp 3D Lớn Phom Rộng F4 - The No Style 268 - Màu Đen",
    category: "Quần",
    price: 340000,
    originalPrice: 490000,
    description: "Quần đùi túi hộp nam cao cấp phong cách Techwear & Urban Utility thuộc bộ sưu tập The No Style 268 từ thương hiệu Aureus Fashion. Tông màu đen tuyền (Jet Black) mạnh mẽ, bụi bặm và bí ẩn, tôn trọn vẻ nam tính của các tín đồ thời trang đường phố. Chất liệu vải co giãn đàn hồi cao cấp kết hợp công nghệ tự phẳng thông minh chống nhăn xù, bề mặt đanh mịn mát rượi và nhanh khô. Thiết kế hai túi hộp 3D vạt nắp dập nổi lớn ở thân trước tạo điểm nhấn thị giác độc đáo và chuẩn phong cách Gorpcore hiện đại. Cạp chun co giãn ôm êm ái, túi xéo sườn sâu rộng cùng túi ốp sau vát góc sắc nét. Phom rộng F4 (Wide Fit F4) phóng khoáng, phối cực chuẩn cùng áo thun oversize, hoodie ngắn tay, áo khoác dù bomber hay phụ kiện mũ lưỡi trai.",
    images: [
      "/images/products/shorts-thenostyle268-black-front.jpg",
      "/images/products/shorts-thenostyle268-black-back.jpg",
      "/images/products/shorts-thenostyle268-white-front.jpg",
      "/images/products/shorts-thenostyle268-white-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Đen", hex: "#1E1E1E", imageIndex: 0 },
      { name: "Trắng", hex: "#FFFFFF", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 148,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Cargo 3D F4"
  },
  {
    id: 198,
    name: "Quần Short Kaki Ống Rộng Airdry™ Hiệu Ứng Linen Sọc Mịn Thoáng Mát Nhẹ Nhàng Phom Rộng F4 - The No Style 202 - Màu Sọc Xanh Biển",
    category: "Quần",
    price: 340000,
    originalPrice: 490000,
    description: "Quần short kaki nam phong cách Resort Chic & Coastal Summer thuộc bộ sưu tập The No Style 202 từ thương hiệu Aureus Fashion. Được phát triển từ chất liệu vải kaki cao cấp dệt xước mộc ứng dụng công nghệ Airdry™ tạo hiệu ứng bề mặt vân Linen đũi tự nhiên siêu mỏng nhẹ, tản nhiệt và bay ẩm siêu tốc, giữ cơ thể luôn mát mẻ dưới tiết trời nhiệt đới oi ả. Họa tiết sọc dọc thanh mảnh (Blue Pinstripes) phối xanh biển trên nền trắng tươi sáng mang lại diện mạo trẻ trung, phóng khoáng và hack dáng chân thon gọn. Thiết kế cạp lưng kết hợp thông minh (Hybrid Elastic Waistband): mặt trước phẳng phiu có đỉa cài thắt lưng, cúc cài và dây rút luồn tinh tế, mặt sau bo chun co giãn giải phóng áp lực vòng bụng. Trang bị 2 túi mổ sườn sâu rộng và 1 túi mổ ngang sau lưng. Phom rộng F4 (Wide Fit F4) độ dài ngang gối thoải mái, hoàn hảo khi kết hợp cùng áo polo knit dệt kim, sơ mi trắng linen, áo thun trơn hay giày xỏ lười loafer/sandal.",
    images: [
      "/images/products/shorts-thenostyle202-blue-front.jpg",
      "/images/products/shorts-thenostyle202-blue-back.jpg",
      "/images/products/shorts-thenostyle202-green-front.jpg",
      "/images/products/shorts-thenostyle202-green-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Sọc Xanh Biển", hex: "#4A7BB0", imageIndex: 0 },
      { name: "Sọc Xanh Rêu", hex: "#5A7A64", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 162,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Linen F4"
  },
  {
    id: 199,
    name: "Quần Short Kaki Ống Rộng Airdry™ Hiệu Ứng Linen Sọc Mịn Thoáng Mát Nhẹ Nhàng Phom Rộng F4 - The No Style 202 - Màu Sọc Xanh Rêu",
    category: "Quần",
    price: 340000,
    originalPrice: 490000,
    description: "Quần short kaki nam phong cách Resort Chic & Coastal Summer thuộc bộ sưu tập The No Style 202 từ thương hiệu Aureus Fashion. Tông màu sọc xanh rêu xô thơm (Sage Green Pinstripes) nhã nhặn, mang đậm hơi thở thời trang Parisian & Quiet Luxury thanh lịch. Chất vải kaki hiệu ứng sợi Linen tự nhiên công nghệ Airdry™ cực kỳ thoáng mát, đanh nhẹ nhưng không nhăn xù hay thô ráp, thân thiện với làn da. Thiết kế cạp trước có cúc cài và đỉa thắt lưng kèm dây rút tiện lợi, cạp sau thun co giãn êm ái linh hoạt. Cấu trúc túi mổ xéo hai bên hông cùng túi mổ sau tối giản. Phom rộng F4 (Wide Fit F4) suông rũ thoải mái, dễ dàng mix-match cùng áo sơ mi đũi cộc tay, áo thun trơn, dép cói hay giày sneaker tối giản cho những chuyến du lịch biển và dạo phố cuối tuần.",
    images: [
      "/images/products/shorts-thenostyle202-green-front.jpg",
      "/images/products/shorts-thenostyle202-green-back.jpg",
      "/images/products/shorts-thenostyle202-blue-front.jpg",
      "/images/products/shorts-thenostyle202-blue-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Sọc Xanh Rêu", hex: "#5A7A64", imageIndex: 0 },
      { name: "Sọc Xanh Biển", hex: "#4A7BB0", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 145,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Airdry™ Linen F4"
  },
  {
    id: 200,
    name: "Quần Short Thun Icevibes™ Chạm Mát Lạnh Đáy Gusset Chịu Lực Túi Zip Ẩn Phom Vừa F3 - The Minimalist 012 - Màu Nâu Xám",
    category: "Quần",
    price: 320000,
    originalPrice: 480000,
    description: "Quần short thun nam thể thao & thường nhật cao cấp thuộc bộ sưu tập The Minimalist 012 từ thương hiệu Aureus Fashion. Được phát triển từ chất liệu thun công nghệ Icevibes™ độc quyền với cảm giác mát lạnh tức thì khi chạm vào da (Instant Cool Touch), co giãn 4 chiều đàn hồi cực tốt, thoáng khí và kháng nhăn nhàu vượt trội. Điểm nhấn kỹ thuật đắt giá nằm ở chi tiết đệm đáy Gusset chịu lực (Reinforced Crotch Gusset) dạng hình thoi công thái học giúp triệt tiêu áp lực kéo căng vùng đáy quần, hỗ trợ tối đa khi chạy bộ, squat, tập gym hay ngồi lâu mà không lo bục rách. Thiết kế 2 túi mổ sườn tích hợp khóa kéo ẩn (Concealed Zip Pockets) chống rơi rớt điện thoại, ví tiền cùng 1 túi ốp vát góc sau tiện dụng. Cạp lưng thun co giãn êm ái kèm dây rút luồn tinh gọn. Phom vừa F3 (Regular Fit F3) tôn dáng thể thao săn chắc. Tông màu nâu xám (Taupe Grey / Dark Mocha Grey) thời thượng, dễ phối cùng áo thun ôm, áo ba lỗ tank top hay polo dệt kim.",
    images: [
      "/images/products/shorts-minimalist012-taupe-front.jpg",
      "/images/products/shorts-minimalist012-taupe-back.jpg",
      "/images/products/shorts-minimalist012-green-front.jpg",
      "/images/products/shorts-minimalist012-green-back.jpg",
      "/images/products/shorts-minimalist012-lightgrey-front.jpg",
      "/images/products/shorts-minimalist012-lightgrey-back.jpg",
      "/images/products/shorts-minimalist012-charcoal-front.jpg",
      "/images/products/shorts-minimalist012-charcoal-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Nâu Xám", hex: "#56514D", imageIndex: 0 },
      { name: "Xanh Rêu Đậm", hex: "#3D4E46", imageIndex: 2 },
      { name: "Xám Sáng", hex: "#8E9197", imageIndex: 4 },
      { name: "Xám Chì", hex: "#616469", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 168,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Icevibes™ F3"
  },
  {
    id: 201,
    name: "Quần Short Thun Icevibes™ Chạm Mát Lạnh Đáy Gusset Chịu Lực Túi Zip Ẩn Phom Vừa F3 - The Minimalist 012 - Màu Xanh Rêu Đậm",
    category: "Quần",
    price: 320000,
    originalPrice: 480000,
    description: "Quần short thun nam thể thao & thường nhật cao cấp thuộc bộ sưu tập The Minimalist 012 từ thương hiệu Aureus Fashion. Tông màu xanh rêu đậm (Forest Pine Green / Dark Olive) nam tính, phong trần và tràn đầy năng lượng dã ngoại Outdoor & Training. Chất liệu vải dệt sợi Icevibes™ giải nhiệt cơ thể thần tốc, bề mặt trơn mịn mát rượi, chống bết dính mồ hôi và nhanh khô siêu việt. Cấu trúc rập đáy Gusset công thái học tạo độ linh hoạt không giới hạn cho các chuyển động mạnh. Hai túi sườn khóa zip ẩn an toàn bảo vệ đồ đạc cá nhân trong mọi buổi tập luyện hay dạo phố, kết hợp túi sau tiện dụng và cạp thun dây rút bản êm không gây lằn bụng. Phom vừa F3 (Regular Fit F3) gọn gàng, độ dài ngang đùi tôn vóc dáng cao ráo, hoàn hảo khi mix cùng áo thun thể thao, áo hoodie mỏng hoặc giày running chuyên dụng.",
    images: [
      "/images/products/shorts-minimalist012-green-front.jpg",
      "/images/products/shorts-minimalist012-green-back.jpg",
      "/images/products/shorts-minimalist012-taupe-front.jpg",
      "/images/products/shorts-minimalist012-taupe-back.jpg",
      "/images/products/shorts-minimalist012-lightgrey-front.jpg",
      "/images/products/shorts-minimalist012-lightgrey-back.jpg",
      "/images/products/shorts-minimalist012-charcoal-front.jpg",
      "/images/products/shorts-minimalist012-charcoal-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xanh Rêu Đậm", hex: "#3D4E46", imageIndex: 0 },
      { name: "Nâu Xám", hex: "#56514D", imageIndex: 2 },
      { name: "Xám Sáng", hex: "#8E9197", imageIndex: 4 },
      { name: "Xám Chì", hex: "#616469", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 154,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Icevibes™ F3"
  },
  {
    id: 202,
    name: "Quần Short Thun Icevibes™ Chạm Mát Lạnh Đáy Gusset Chịu Lực Túi Zip Ẩn Phom Vừa F3 - The Minimalist 012 - Màu Xám Sáng",
    category: "Quần",
    price: 320000,
    originalPrice: 480000,
    description: "Quần short thun nam thể thao & thường nhật cao cấp thuộc bộ sưu tập The Minimalist 012 từ thương hiệu Aureus Fashion. Tông màu xám sáng (Light Mist Grey / Silver Heather) tươi trẻ, thanh lịch và mang tinh thần Athleisure hiện đại, dễ dàng phối hợp ăn ý với mọi trang phục mùa hè. Ứng dụng chất liệu thun sợi công nghệ Icevibes™ chạm mát lạnh tức thì, tản nhiệt nhanh và thấm hút mồ hôi tối ưu. Cấu trúc rập đệm đáy Gusset chịu lực công thái học giải phóng hoàn toàn sự gò bó, hỗ trợ chuyển động gập duỗi linh hoạt mà không lo bục rách. Thiết kế 2 túi mổ sườn khóa zip ẩn an toàn để chìa khóa, điện thoại cùng 1 túi sau tiện ích, lưng thun co giãn êm ái kèm dây rút tùy chỉnh. Phom vừa F3 (Regular Fit F3) tôn vóc dáng thể thao gọn gàng, hoàn hảo khi mix cùng áo thun trơn, áo tank top, polo dệt kim hay giày thể thao năng động.",
    images: [
      "/images/products/shorts-minimalist012-lightgrey-front.jpg",
      "/images/products/shorts-minimalist012-lightgrey-back.jpg",
      "/images/products/shorts-minimalist012-charcoal-front.jpg",
      "/images/products/shorts-minimalist012-charcoal-back.jpg",
      "/images/products/shorts-minimalist012-taupe-front.jpg",
      "/images/products/shorts-minimalist012-taupe-back.jpg",
      "/images/products/shorts-minimalist012-green-front.jpg",
      "/images/products/shorts-minimalist012-green-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Sáng", hex: "#8E9197", imageIndex: 0 },
      { name: "Xám Chì", hex: "#616469", imageIndex: 2 },
      { name: "Nâu Xám", hex: "#56514D", imageIndex: 4 },
      { name: "Xanh Rêu Đậm", hex: "#3D4E46", imageIndex: 6 }
    ],
    rating: 5.0,
    reviews: 160,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Icevibes™ F3"
  },
  {
    id: 203,
    name: "Quần Short Thun Icevibes™ Chạm Mát Lạnh Đáy Gusset Chịu Lực Túi Zip Ẩn Phom Vừa F3 - The Minimalist 012 - Màu Xám Chì",
    category: "Quần",
    price: 320000,
    originalPrice: 480000,
    description: "Quần short thun nam thể thao & thường nhật cao cấp thuộc bộ sưu tập The Minimalist 012 từ thương hiệu Aureus Fashion. Gam màu xám chì (Charcoal Grey / Slate Anthracite) trầm nam tính, mạnh mẽ và cực kỳ tôn dáng. Chất liệu vải dệt thun Icevibes™ co giãn 4 chiều mềm mượt, bề mặt mát lạnh sâu, kháng nhăn tự nhiên và bền bỉ qua nhiều chu kỳ giặt sấy. Điểm nhấn đắt giá ở chi tiết miếng đáp đáy Gusset chịu lực phân bổ lực kéo thông minh, mang lại sự an tâm tuyệt đối trong mọi buổi tập gym, chạy bộ hay vận động ngoài trời. Cặp túi sườn khóa kéo ẩn mượt mà bảo vệ tư trang an toàn, cạp lưng thun co giãn ôm khít êm ái cùng túi sau phong cách. Phom vừa F3 (Regular Fit F3) năng động, dễ dàng kết hợp cùng áo thun oversize, hoodie cộc tay hoặc giày sneaker thời trang.",
    images: [
      "/images/products/shorts-minimalist012-charcoal-front.jpg",
      "/images/products/shorts-minimalist012-charcoal-back.jpg",
      "/images/products/shorts-minimalist012-lightgrey-front.jpg",
      "/images/products/shorts-minimalist012-lightgrey-back.jpg",
      "/images/products/shorts-minimalist012-taupe-front.jpg",
      "/images/products/shorts-minimalist012-taupe-back.jpg",
      "/images/products/shorts-minimalist012-green-front.jpg",
      "/images/products/shorts-minimalist012-green-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Chì", hex: "#616469", imageIndex: 0 },
      { name: "Xám Sáng", hex: "#8E9197", imageIndex: 2 },
      { name: "Nâu Xám", hex: "#56514D", imageIndex: 4 },
      { name: "Xanh Rêu Đậm", hex: "#3D4E46", imageIndex: 6 }
    ],
    rating: 4.9,
    reviews: 147,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Icevibes™ F3"
  }
];

export const categories = ["Áo", "Quần", "Đầm", "Phụ kiện"];

export const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};

export default products;
