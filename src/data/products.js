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
  }
];

export const categories = ["Áo"];

export const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id)) || products[0];
};

export default products;
