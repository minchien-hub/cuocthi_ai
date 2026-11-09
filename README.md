# 🌟 AI Fashion Virtual Try-On (Fit-Size AI) - Cuộc Thi AI

Dự án website thương mại điện tử thời trang cao cấp tích hợp công nghệ **Thử Đồ Ảo AI (Virtual Try-On - VTON)** tiên tiến, cho phép khách hàng trực tiếp phối và thử trang phục trên người mẫu hoặc ảnh cá nhân theo thời gian thực trước khi mua sắm.

---

## 🚀 Tính Năng Nổi Bật

1. **Phòng Thử Đồ Ảo AI (Virtual Try-On)**:
   - Tích hợp mô hình AI **IDM-VTON** hiện đại thông qua FastAPI backend.
   - Thử đồ trên dàn người mẫu chuẩn hoặc upload ảnh cá nhân.
   - Tự động bóc tách phom dáng trang phục, xử lý ánh sáng và nếp gấp chân thực.
2. **Cửa Hàng Thời Trang Đẳng Cấp**:
   - Danh mục sản phẩm đa dạng: Áo, Quần, Đầm, Phụ kiện.
   - Bộ sưu tập biến thể màu sắc chân thực, ảnh chụp studio chất lượng cao.
   - Bộ lọc thông minh theo danh mục, mức giá và tìm kiếm từ khóa.
3. **Trải Nghiệm Mua Sắm Toàn Diện**:
   - Giỏ hàng (Cart) và Danh sách yêu thích (Wishlist) tương tác mượt mà.
   - Thông báo Toast sống động, tối ưu Responsive trên mọi kích thước màn hình.

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend**: React 18, React Router DOM, React Icons, Context API, CSS Modern Responsive.
- **Backend**: Python 3.10+, FastAPI, Uvicorn, Pydantic, Python-Dotenv.
- **AI Core**: IDM-VTON (Diffusion-based Virtual Try-On Model via Replicate).

---

## 📦 Hướng Dẫn Khởi Chạy Dự Án

### 1. Khởi động Backend (FastAPI AI Server)

```bash
# 1. Chuyển vào thư mục backend
cd backend

# 2. Cài đặt các thư viện cần thiết
pip install -r requirements.txt

# 3. Cấu hình file .env
# Tạo file .env từ .env.example và điền REPLICATE_API_TOKEN của bạn:
cp ../.env.example .env

# 4. Chạy máy chủ FastAPI
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```
> Máy chủ API sẽ chạy tại: `http://localhost:8000` (Swagger UI: `http://localhost:8000/docs`).

### 2. Khởi động Frontend (React App)

Mở một terminal mới tại thư mục gốc của dự án:

```bash
# 1. Cài đặt các gói phụ thuộc
npm install

# 2. Khởi chạy ứng dụng web
npm start
```
> Trang web sẽ tự động mở tại: `http://localhost:3000`.

---

## 📁 Cấu Trúc Thư Mục

```
fashion-vton/
├── backend/
│   ├── main.py              # FastAPI server tích hợp IDM-VTON
│   └── requirements.txt     # Danh sách thư viện Python
├── public/
│   └── images/              # Thư viện hình ảnh sản phẩm & người mẫu
├── src/
│   ├── components/          # Navbar, Footer, ProductCard, Toast...
│   ├── context/             # CartContext quản lý giỏ hàng & wishlist
│   ├── data/                # Dữ liệu sản phẩm (products.js)
│   ├── pages/               # HomePage, ShopPage, ProductDetailPage, VirtualTryOnPage...
│   ├── App.js
│   └── index.js
├── .env.example             # Mẫu cấu hình biến môi trường
├── .gitignore
└── package.json
```

---

*Dự án phát triển phục vụ cuộc thi AI - Cuộc thi Sáng tạo Giải pháp Trí tuệ Nhân tạo.*
