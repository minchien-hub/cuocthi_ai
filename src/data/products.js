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
      "/images/products/polo-cloudtouch061-grey-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Nâu Cà Phê", hex: "#54483F", imageIndex: 0 },
      { name: "Xám Khói Sáng", hex: "#ACB0B6", imageIndex: 2 }
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
      "/images/products/polo-cloudtouch061-brown-back.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Xám Khói Sáng", hex: "#ACB0B6", imageIndex: 0 },
      { name: "Nâu Cà Phê", hex: "#54483F", imageIndex: 2 }
    ],
    rating: 5.0,
    reviews: 152,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "CloudTouch™ F2"
  }
];

export const categories = ["Áo", "Quần", "Đầm", "Phụ kiện"];

export const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};

export default products;
