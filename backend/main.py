import os
import replicate
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from dotenv import load_dotenv

# Tải biến môi trường từ .env (thư mục backend hoặc thư mục gốc)
load_dotenv()
load_dotenv(dotenv_path="../.env")

if not os.environ.get("REPLICATE_API_TOKEN"):
    print("Lưu ý: Chưa tìm thấy REPLICATE_API_TOKEN trong file .env hoặc biến môi trường.")

app = FastAPI(title="Fit-Size AI Backend")

# ... (giữ nguyên các phần code còn lại bên dưới)

# Cấp quyền CORS để ReactJS gọi API không bị lỗi
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Định nghĩa cấu trúc dữ liệu gửi từ Frontend lên
class VTONRequest(BaseModel):
    human_image_url: str
    garment_image_url: str
    category: str = "upper_body" # upper_body, lower_body, hoặc dresses

@app.post("/api/vton")
async def try_on(request: VTONRequest):
    try:
        print(f"Đang xử lý ảnh người: {request.human_image_url}")
        print(f"Đang xử lý ảnh áo: {request.garment_image_url}")
        
        # Gọi mô hình IDM-VTON trên Replicate thông qua API token đã cấu hình trong .env
        output = replicate.run(
            "yisol/idm-vton:c871bb9b046607b680449ecbae55fd8c6d945e0a1948644bf2361b3d021d3ff4",
            input={
                "human_image": request.human_image_url,
                "garment_image": request.garment_image_url,
                "garment_des": "a piece of clothing",
                "category": request.category,
                "num_inference_steps": 30,
                "guidance_scale": 2.0
            }
        )
        
        # Lấy URL ảnh kết quả trả về từ Replicate
        result_url = output if isinstance(output, str) else output[0]
        
        return {
            "status": "success",
            "result_image": result_url
        }

    except Exception as e:
        print(f"Lỗi AI: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)