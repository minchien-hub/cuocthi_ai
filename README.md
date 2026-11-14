# 🌟 Aureus Fashion - AI Fashion Virtual Try-On & Smart Size Recommendation (Fit-Size AI)

> **Dự án website thương mại điện tử thời trang cao cấp tích hợp hệ sinh thái Trí Tuệ Nhân Tạo (AI) toàn diện:** Phòng Thử Đồ Ảo AI (Virtual Try-On), Trợ Lý Quét Vóc Dáng AI Đo Size Thời Gian Thực (Google MediaPipe Edge AI), Trợ Lý Phong Cách Thông Minh (Aureus AI Stylist Chatbot) và Kho Hàng 100+ Sản Phẩm Thời Trang Cao Cấp.

---

## 🎯 Giới Thiệu Dự Án

Trong ngành thương mại điện tử thời trang, **chọn sai kích cỡ (size)** và **không thể hình dung trang phục khi mặc lên người** là hai nguyên nhân lớn nhất khiến tỷ lệ hủy đơn và đổi trả hàng lên tới 30% - 40%. 

**Aureus Fashion (Fit-Size AI)** ra đời nhằm giải quyết triệt để vấn đề này bằng cách kết hợp sức mạnh của **Edge AI (Trí tuệ nhân tạo biên trên thiết bị người dùng)** và **Generative AI (Trí tuệ nhân tạo tạo sinh)** để mang lại trải nghiệm mua sắm trực tuyến chân thực, bảo mật và thông minh vượt bậc:
- **100% Client-Side Edge AI**: Quét vóc dáng và nhận diện chuyển động cơ thể bằng Google MediaPipe trực tiếp trên trình duyệt, không gửi video/hình ảnh cá nhân lên máy chủ, bảo mật quyền riêng tư tối đa và độ trễ 0ms.
- **AI Virtual Try-On**: Thử đồ ảo đa chế độ từ Live Camera, dàn người mẫu chuẩn phom dáng đến công nghệ ghép đồ AI thế hệ mới (Diffusion VTON).
- **Aureus AI Stylist**: Trợ lý AI tư vấn phối đồ và chọn size chuẩn xác theo chiều cao, cân nặng 24/7.
- **100 Sản Phẩm Thời Trang Cao Cấp**: Đầy đủ bộ sưu tập với thông số kỹ thuật chi tiết, bộ chọn màu swatch tương tác trực quan và ảnh chụp studio đa góc.

---

## 🚀 4 Trụ Cột Tính Năng Đột Phá

### 1. 📏 Trợ Lý AI Đo Vóc Dáng & Khóa Size Thông Minh (BodySize AI - Edge AI)
* **Nhận diện 33 điểm mốc hình thể (MediaPipe Pose 33 Landmarks)**: Quét và định vị chính xác khung xương vai, ngực, eo, hông và chiều cao người dùng theo thời gian thực qua webcam.
* **Tự động đo & Khóa size chuẩn**: Phân tích tỷ lệ hình thể để đưa ra đề xuất size chuẩn xác nhất (S, M, L, XL, XXL) với độ tin cậy hiển thị trực quan.
* **Tích hợp đồng bộ**: Tự động liên kết kích thước đo được vào trang chi tiết sản phẩm ([`ProductDetailPage.js`](file:///c:/Users/ADMIN/Desktop/cuocthi/fashion-vton/src/pages/ProductDetailPage.js)) và phòng thử đồ ảo ([`VirtualTryOnPage.js`](file:///c:/Users/ADMIN/Desktop/cuocthi/fashion-vton/src/pages/VirtualTryOnPage.js)).
* **Không phụ thuộc server**: Xử lý 100% bằng JavaScript/WebAssembly trên máy khách, đạt tốc độ 60 FPS mượt mà và bảo vệ tuyệt đối hình ảnh riêng tư.

### 2. 👗 Phòng Thử Đồ Ảo AI Đa Chế Độ (Virtual Try-On Studio)
* **Chế độ 1: Live Camera AI (Webcam trực tiếp)**: Người dùng bật camera, AI quét dáng và ướm trang phục theo chuyển động cơ thể trong thời gian thực.
* **Chế độ 2: Người Mẫu Studio (Fashion Model Presets)**: Thử trang phục trực tiếp trên dàn người mẫu nam/nữ đa dạng chiều cao, cân nặng và phom dáng chuẩn.
* **Chế độ 3: Ghép Đồ AI Tạo Sinh (Cloud Neural VTON - Gradio / WeShop AI / Fashn AI)**: Tải ảnh toàn thân cá nhân và ảnh trang phục từ cửa hàng, hệ thống AI tự động phân tích hình học, xử lý ánh sáng và nếp gấp vải để tạo ra bức ảnh mặc thử chân thực chuẩn studio thời trang.
* **Neural Fitting Simulation**: Hiển thị bảng phân tích độ khớp trang phục với cơ thể (*Match Score 98%+, Đánh giá độ vừa vặn vai, ngực, tà áo*).

### 3. 🤖 Trợ Lý Thời Trang Trí Tuệ Nhân Tạo (Aureus AI Stylist Chatbot)
* **Tư vấn size chuyên sâu**: Phân tích chiều cao, cân nặng và phom dáng khách hàng mong muốn (Phom ôm vừa F2, Phom vừa F3, Phom rộng F4, Phom hộp F5) để gợi ý size chuẩn từng milimet.
* **Hiểu sâu 100 sản phẩm**: Nắm vững thông tin về công nghệ vải (Pique 250Gsm, Linen Rayon Blend, Cotton Compact, Double-Face Knit, Denim DurableTex™, ColorLock™, Icevibes™, Flexfit™).
* **Gợi ý phối đồ (Outfit Styling)**: Đưa ra lời khuyên mix & match thời thượng theo nhiều phong cách: *Athletic Luxury, Quiet Luxury & Resort Wear, 90s Streetwear, Clean Fit, Parisian Retro, Smart-Casual*.

### 4. 🛍️ Nền Tảng Thương Mại Điện Tử Hiện Đại & 100 Sản Phẩm Thời Trang
* **Kho hàng 100 sản phẩm cao cấp**: Đa dạng các dòng Áo Polo, Áo Thun, Áo Ba Lỗ Tank Top, Áo Dệt Kim, Quần Jeans Baggy, Đầm dự tiệc và Phụ kiện.
* **Bộ chọn màu tương hỗ (Cross-Linked Color Swatches)**: Mỗi sản phẩm hỗ trợ đổi màu linh hoạt, tự động cập nhật bộ ảnh đa góc nhìn tương ứng (ảnh mặt trước & mặt sau studio chất lượng cao).
* **Bộ lọc thông minh**: Lọc nhanh theo danh mục, khoảng giá, sắp xếp linh hoạt và tìm kiếm từ khóa thời gian thực.
* **Trải nghiệm mua sắm mượt mà**: Giỏ hàng (Cart) và Danh sách yêu thích (Wishlist) tương tác với Context API, thông báo Toast sống động, tối ưu Responsive 100% trên thiết bị di động, tablet và desktop.

---

## 🛠️ Ngăn Xếp Công Nghệ (Tech Stack)

| Thành phần | Công nghệ / Thư viện | Vai trò |
| :--- | :--- | :--- |
| **Frontend Core** | **React 19**, React DOM 19 | Xây dựng giao diện người dùng component-based hiện đại |
| **Routing & State** | **React Router DOM v7**, Context API | Điều hướng đa trang và quản lý trạng thái giỏ hàng / yêu thích |
| **Vision & Edge AI** | **@mediapipe/pose**, camera_utils, drawing_utils | Nhận diện khung xương 33 điểm mốc, đo kích thước vóc dáng Client-Side |
| **Generative AI VTON**| **@gradio/client**, WeShop AI / Fashn AI Services | Kết nối mô hình AI Diffusion tạo sinh hình ảnh mặc thử đồ ảo |
| **Chatbot AI** | **OpenRouter / Gemini AI Integration** | Trợ lý ngôn ngữ tự nhiên tư vấn size và phối đồ thời trang |
| **Icons & UI** | **React Icons** (FontAwesome, Material Icons) | Bộ biểu tượng giao diện thương mại điện tử chuyên nghiệp |
| **Build & Tooling** | **React Scripts 5**, Webpack, Babel | Biên dịch mã nguồn, tối ưu bundle và triển khai sản phẩm |

---

## 📁 Cấu Trúc Mã Nguồn Dự Án

```
fashion-vton/
├── public/
│   ├── images/
│   │   ├── products/              # Kho ảnh sản phẩm studio đa góc (mặt trước/mặt sau)
│   │   └── models/                # Dàn ảnh người mẫu chuẩn phom dáng
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AiStylistChatbot.jsx   # Trợ lý AI Stylist tư vấn size & phối đồ
│   │   ├── AiStylistChatbot.css   # Giao diện widget chat AI nổi bật
│   │   ├── BodySizeAI.jsx         # Trợ lý AI MediaPipe đo size qua camera/ảnh
│   │   ├── BodySizeAI.css         # Hiệu ứng radar quét & khung xương AI
│   │   ├── VirtualTryOnApi.jsx    # Module thử đồ ảo kết nối AI VTON Cloud API
│   │   ├── VirtualTryOnApi.css    # Giao diện tải ảnh & so sánh kết quả VTON
│   │   ├── Navbar.js / Navbar.css # Thanh điều hướng chính & giỏ hàng
│   │   ├── Footer.js / Footer.css # Chân trang thông tin thương hiệu
│   │   ├── ProductCard.js         # Thẻ hiển thị sản phẩm & nút Thử Đồ Nhanh
│   │   ├── ScrollToTop.js         # Tự động cuộn đầu trang khi chuyển view
│   │   └── Toast.js / Toast.css   # Hệ thống thông báo thông minh
│   ├── context/
│   │   └── CartContext.js         # Quản lý giỏ hàng & danh sách yêu thích
│   ├── data/
│   │   └── products.js            # Cơ sở dữ liệu 100 sản phẩm thời trang đầy đủ
│   ├── pages/
│   │   ├── HomePage.js            # Trang chủ: Banner, danh mục, sản phẩm hot
│   │   ├── ShopPage.js            # Trang cửa hàng: Bộ lọc, tìm kiếm, sắp xếp
│   │   ├── ProductDetailPage.js   # Chi tiết sản phẩm: Gallery, swatch, chọn size AI
│   │   ├── VirtualTryOnPage.js    # Phòng thử đồ ảo AI đa chế độ
│   │   ├── CartPage.js            # Trang giỏ hàng, áp mã ưu đãi, tính tổng
│   │   ├── WishlistPage.js        # Trang danh sách sản phẩm yêu thích
│   │   ├── AboutPage.js           # Trang giới thiệu thương hiệu Aureus Fashion
│   │   └── ContactPage.js         # Trang liên hệ, hỗ trợ khách hàng, bản đồ
│   ├── services/
│   │   ├── fashnAiService.js      # Dịch vụ tích hợp Fashn.ai VTON API
│   │   └── weShopAiService.js     # Dịch vụ tích hợp WeShop AI VTON API
│   ├── App.js                     # Root component & định tuyến URL
│   └── index.js                   # Điểm khởi chạy ứng dụng React
├── .env.example                   # Mẫu cấu hình biến môi trường
├── package.json                   # Cấu hình gói và kịch bản khởi chạy
└── README.md                      # Tài liệu hướng dẫn & giới thiệu dự án
```

---

## ⚡ Hướng Dẫn Cài Đặt & Khởi Chạy

Dự án được tối ưu hóa cao, có thể khởi chạy nhanh chóng trên mọi hệ điều hành (Windows, macOS, Linux):

### 1. Yêu cầu tiên quyết
- **Node.js** phiên bản `>= 16.x` (khuyên dùng LTS 18.x hoặc 20.x).
- Trình quản lý gói **npm** hoặc **yarn**.

### 2. Cài đặt các gói phụ thuộc
```bash
npm install
```

### 3. Cấu hình biến môi trường (Tùy chọn)
Tạo tệp `.env` tại thư mục gốc từ mẫu `.env.example`:
```bash
cp .env.example .env
```
*(Nếu muốn kết nối mô hình ngôn ngữ lớn cho AI Stylist, bạn có thể điền API Key vào `.env`)*.

### 4. Khởi chạy môi trường phát triển (Development)
```bash
npm start
```
Ứng dụng sẽ tự động mở trên trình duyệt tại: **`http://localhost:3000`**.

### 5. Biên dịch sản phẩm (Production Build)
```bash
npm run build
```
Thư mục `build/` đã được tối ưu hóa nén dung lượng, sẵn sàng triển khai trên bất kỳ dịch vụ hosting nào (Vercel, Netlify, Cloudflare Pages, Firebase Hosting).

---

## 💡 Giá Trị Thực Tiễn & Tiềm Năng Ứng Dụng

| Khía cạnh | Giá trị mang lại |
| :--- | :--- |
| **Đối với Khách hàng** | Tự tin 100% khi chọn kích cỡ, nhìn thấy trước hình ảnh trang phục trên vóc dáng của mình, nhận tư vấn phong cách tức thì mà không cần đến cửa hàng vật lý. |
| **Đối với Doanh nghiệp Thời trang** | Giảm thiểu đến 40% chi phí xử lý đổi trả hàng; tăng tỷ lệ chuyển đổi đơn hàng (CR) thêm 25% nhờ trải nghiệm mua sắm trực quan, hấp dẫn. |
| **Đột phá Công nghệ** | Sự kết hợp hài hòa giữa **Client-Side Edge AI** (chi phí vận hành 0 đồng, tốc độ tức thì, an toàn dữ liệu) và **Cloud Generative AI** (chất lượng thị giác đỉnh cao chuẩn studio). |

---

## 🏆 Đơn Vị Phát Triển
* **Dự án dự thi:** Cuộc thi Sáng tạo Giải pháp Trí Tuệ Nhân Tạo (AI Competition).
* **Thương hiệu thời trang demo:** Aureus Fashion.
* **Bản quyền:** © 2026 Aureus Fashion - Fit-Size AI Team. Mọi quyền được bảo lưu.
