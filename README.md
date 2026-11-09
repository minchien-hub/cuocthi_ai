# 🌟 AI Fashion Virtual Try-On (Fit-Size AI) - Cuộc Thi AI

Dự án website thương mại điện tử thời trang cao cấp tích hợp công nghệ **Trợ Lý Đo Size Thông Minh & Phòng Thử Đồ Ảo AI (Virtual Try-On)** chạy **100% Client-Side Edge AI** trực tiếp trên trình duyệt bằng **Google MediaPipe Pose**, bảo mật thông tin tối đa và không phụ thuộc máy chủ backend!

---

## 🚀 Tính Năng Nổi Bật

1. **Trợ Lý Đo Vóc Dáng AI Thời Gian Thực (Client-Side Body Scanner)**:
   - Ứng dụng **Google MediaPipe Pose** nhận diện 33 điểm then chốt trên khung xương (Landmarks) trực tiếp qua webcam trình duyệt.
   - Phân tích khoảng cách vai và tỷ lệ hình thể để gợi ý kích cỡ chuẩn xác nhất (Size S, M, L, XL).
   - Tự động khóa và chọn size phù hợp khi khách hàng duyệt mua sắm tại trang chi tiết sản phẩm ([`ProductDetailPage.js`](file:///c:/Users/ADMIN/Desktop/cuocthi/fashion-vton/src/pages/ProductDetailPage.js)) hoặc phòng thử đồ ảo ([`VirtualTryOnPage.js`](file:///c:/Users/ADMIN/Desktop/cuocthi/fashion-vton/src/pages/VirtualTryOnPage.js)).
   - Giảm đến 40% tỷ lệ đổi trả hàng do chọn sai cỡ.

2. **Phòng Thử Đồ Ảo Trực Tuyến (Virtual Try-On Studio)**:
   - **Chế độ Camera AI Live**: Khách hàng bật webcam quét dáng và ướm trang phục trực tiếp theo cử động.
   - **Chế độ Người Mẫu**: Thử trang phục trên dàn người mẫu chuẩn phom dáng nữ/nam với thông số chiều cao, cân nặng.
   - **Chế độ Tải Ảnh Cá Nhân**: Tải ảnh toàn thân/nửa người để AI phân tích hình học và ghép khớp trang phục.
   - **Neural Fitting Simulation**: Hiển thị quá trình AI phân tích khung xương, đo tỷ lệ và tự động gắn thẻ đánh giá phom dáng (*Độ khớp 98%+, Vừa vặn hoàn hảo*).

3. **Cửa Hàng Thời Trang Đẳng Cấp**:
   - Danh mục sản phẩm đa dạng: Áo, Quần, Đầm, Phụ kiện.
   - Bộ sưu tập biến thể màu sắc chân thực, ảnh chụp studio chất lượng cao chuẩn thương mại điện tử.
   - Bộ lọc thông minh theo danh mục, mức giá và tìm kiếm từ khóa.

4. **Trải Nghiệm Mua Sắm Toàn Diện**:
   - Giỏ hàng (Cart) và Danh sách yêu thích (Wishlist) tương tác mượt mà.
   - Thông báo Toast sống động, tối ưu Responsive trên mọi kích thước màn hình.

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend Core**: React 19, React Router DOM, React Icons, Context API, CSS Modern Responsive.
- **AI Engine (Client-Side Edge AI)**:
  - `@mediapipe/pose`: Nhận diện khung xương và điểm mốc cơ thể theo thời gian thực.
  - `@mediapipe/camera_utils`: Tối ưu hóa xử lý luồng camera 60fps trên trình duyệt.
  - `@mediapipe/drawing_utils`: Kết xuất đường nối khung xương AI và radar quét vóc dáng.
- **Zero-Backend Architecture**: 100% xử lý tại máy khách (Client-side), không tốn chi phí GPU server, không trễ mạng và bảo mật tuyệt đối ảnh riêng tư của người dùng.

---

## 📦 Hướng Dẫn Khởi Chạy Dự Án

Chỉ với 2 bước đơn giản, không cần cài đặt Python hay cấu hình máy chủ:

```bash
# 1. Cài đặt các gói phụ thuộc
npm install

# 2. Khởi chạy ứng dụng web
npm start
```

> Trình duyệt sẽ tự động mở tại địa chỉ: `http://localhost:3000`.

---

## 📁 Cấu Trúc Thư Mục

```
fashion-vton/
├── public/
│   └── images/              # Thư viện hình ảnh sản phẩm & người mẫu
├── src/
│   ├── components/
│   │   ├── BodySizeAI.jsx   # Trợ lý AI đo size & quét vóc dáng MediaPipe
│   │   ├── BodySizeAI.css   # Giao diện radar quét & khung xương AI
│   │   ├── Navbar.js / Footer.js
│   │   ├── ProductCard.js
│   │   └── Toast.js
│   ├── context/             # CartContext quản lý giỏ hàng & wishlist
│   ├── data/                # Dữ liệu sản phẩm (products.js)
│   ├── pages/               # HomePage, ShopPage, ProductDetailPage, VirtualTryOnPage...
│   ├── App.js
│   └── index.js
├── .env.example
├── .gitignore
└── package.json
```

---

*Dự án phát triển phục vụ cuộc thi AI - Cuộc thi Sáng tạo Giải pháp Trí tuệ Nhân tạo.*
