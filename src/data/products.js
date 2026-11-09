const products = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
    name: "Quần Jeans Ống Rộng",
    category: "Quần",
    price: 680000,
    originalPrice: 680000,
    description: "Quần jeans ống rộng phong cách Y2K, chất denim dày dặn co giãn nhẹ. Cạp cao ôm eo tôn dáng, phối đồ đa dạng.",
    images: [
      "/images/products/jeans-1.jpg",
      "/images/products/jeans-2.jpg",
      "/images/products/jeans-3.jpg"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Xanh đậm", hex: "#1a3a5c", imageIndex: 0 },
      { name: "Xám", hex: "#7a7d81", imageIndex: 1 },
      { name: "Đen", hex: "#1a1a1a", imageIndex: 2 }
    ],
    rating: 4.4,
    reviews: 178,
    inStock: true,
    isNew: false,
    isSale: false,
    badge: ""
  },
  {
    id: 8,
    name: "Khăn Choàng Cashmere",
    category: "Phụ kiện",
    price: 1500000,
    originalPrice: 1900000,
    description: "Khăn choàng cashmere cao cấp nhập khẩu, mềm mại và ấm áp. Tua rua tinh tế, phụ kiện không thể thiếu cho phong cách mùa đông thượng lưu.",
    images: [
      "/images/products/scarf-1.jpg",
      "/images/products/scarf-2.jpg",
      "/images/products/scarf-3.jpg"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Camel", hex: "#C19A6B", imageIndex: 0 },
      { name: "Xám", hex: "#808080", imageIndex: 1 },
      { name: "Đỏ đô", hex: "#8B0000", imageIndex: 2 }
    ],
    rating: 4.9,
    reviews: 45,
    inStock: true,
    isNew: false,
    isSale: true,
    badge: "Sale -21%"
  },
  {
    id: 9,
    name: "Áo Khoác Dạ Dáng Dài",
    category: "Áo",
    price: 2800000,
    originalPrice: 3500000,
    description: "Áo khoác dạ dáng dài phong cách Hàn Quốc, chất liệu dạ wool pha cao cấp. Giữ ấm tuyệt vời, cổ ve rộng và đai thắt eo tôn dáng hoàn hảo.",
    images: [
      "/images/products/coat-1.jpg",
      "/images/products/coat-2.jpg",
      "/images/products/coat-3.jpg"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Camel", hex: "#C19A6B", imageIndex: 0 },
      { name: "Đen", hex: "#1a1a1a", imageIndex: 1 },
      { name: "Xám", hex: "#808080", imageIndex: 2 }
    ],
    rating: 4.7,
    reviews: 112,
    inStock: true,
    isNew: true,
    isSale: true,
    badge: "Sale -20%"
  },
  {
    id: 10,
    name: "Đầm Maxi Boho",
    category: "Đầm",
    price: 980000,
    originalPrice: 980000,
    description: "Đầm maxi phong cách bohemian tự do, chất liệu cotton mềm mại thoáng mát. Họa tiết ethnic độc đáo, phù hợp cho du lịch và dạo phố biển.",
    images: [
      "/images/products/maxi-1.jpg",
      "/images/products/maxi-2.jpg",
      "/images/products/maxi-3.jpg"
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Nâu đất", hex: "#8B6914", imageIndex: 0 },
      { name: "Vàng bơ", hex: "#F3E5AB", imageIndex: 1 },
      { name: "Hồng đất", hex: "#B87373", imageIndex: 2 }
    ],
    rating: 4.3,
    reviews: 76,
    inStock: true,
    isNew: false,
    isSale: false,
    badge: ""
  },
  {
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
  }
];

export const categories = ["Áo", "Quần", "Đầm", "Phụ kiện"];

export const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};

export default products;
