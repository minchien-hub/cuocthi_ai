import { client } from "@gradio/client";

/**
 * Chuyển đổi URL ảnh (hoặc blob URL, relative path) thành File/Blob để gửi lên API Gradio
 */
export const urlToFileOrBlob = async (input, filename = "image.jpg") => {
  if (input instanceof File || input instanceof Blob) {
    return input;
  }
  try {
    const response = await fetch(input);
    const blob = await response.blob();
    return new File([blob], filename, { type: blob.type || "image/jpeg" });
  } catch (err) {
    console.error("Lỗi chuyển đổi ảnh sang Blob:", err);
    return input;
  }
};

/**
 * Tự động chuyển category sản phẩm sang định dạng của FASHN VTON:
 * - "tops" (Áo, Blazer, Croptop,...)
 * - "bottoms" (Quần, Chân váy,...)
 * - "one-pieces" (Đầm, Váy liền, Jumpsuit,...)
 */
export const mapCategoryToVton = (category) => {
  const cat = (category || "").toLowerCase();
  if (cat.includes("quần") || cat.includes("pants") || cat.includes("jean") || cat.includes("chân váy")) {
    return "bottoms";
  }
  if (cat.includes("đầm") || cat.includes("váy") || cat.includes("dress") || cat.includes("jumpsuit")) {
    return "one-pieces";
  }
  return "tops";
};

/**
 * Gọi trực tiếp tới Hugging Face Space của FASHN VTON 1.5
 * @param {File|Blob|string} personImage - File ảnh người hoặc URL
 * @param {File|Blob|string} garmentImage - File ảnh trang phục hoặc URL
 * @param {string} category - Loại trang phục ('tops' | 'bottoms' | 'one-pieces')
 * @param {string} [hfToken] - (Tùy chọn) Hugging Face Token nếu cần ưu tiên tốc độ / bypass queue
 * @returns {Promise<string>} URL của ảnh sau khi đã ghép đồ AI hoàn tất
 */
export const handleAITryOn = async (personImage, garmentImage, category = "tops", hfToken = "") => {
  try {
    console.log("🚀 Đang kết nối tới Hugging Face Space (fashn-ai/fashn-vton-1.5)...");
    
    // Chuẩn bị file
    const personFile = await urlToFileOrBlob(personImage, "person.jpg");
    const garmentFile = await urlToFileOrBlob(garmentImage, "garment.jpg");
    const vtonCategory = mapCategoryToVton(category);

    const clientOptions = hfToken ? { hf_token: hfToken } : {};
    const app = await client("fashn-ai/fashn-vton-1.5", clientOptions);

    console.log(`📤 Đang gửi ảnh lên FASHN VTON (Category: ${vtonCategory})...`);
    
    // Gọi endpoint /try_on
    const result = await app.predict("/try_on", [
      personFile,       // Person Image
      garmentFile,      // Garment Image
      vtonCategory,     // Category: "tops" | "bottoms" | "one-pieces"
      "model",          // Garment Photo Type: "model" | "flat-lay"
      35,               // Sampling Steps (35 bước để cân bằng tốc độ & độ nét cao)
      1.5,              // Guidance Scale
      42,               // Seed
      true              // Segmentation Free
    ]);

    console.log("✅ Kết quả FASHN AI trả về:", result);

    // Bóc tách URL ảnh kết quả từ data trả về của Gradio
    const outputData = result?.data?.[0];
    const outputUrl = outputData?.url || (typeof outputData === "string" ? outputData : null);

    if (!outputUrl) {
      throw new Error("Không nhận diện được URL ảnh trong kết quả trả về từ FASHN AI.");
    }

    return outputUrl;
  } catch (error) {
    console.error("❌ Lỗi gọi FASHN AI API:", error);
    throw error;
  }
};

