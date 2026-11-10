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
 * Tự động chuyển category sản phẩm sang định dạng của VTON:
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
 * Gọi ngầm API Virtual Try-On từ Hugging Face Spaces (Ưu tiên WeShopAI, dự phòng FASHN AI)
 * @param {File|Blob|string} personImage - File ảnh người hoặc URL
 * @param {File|Blob|string} garmentImage - File ảnh trang phục hoặc URL
 * @param {string} category - Loại trang phục ('tops' | 'bottoms' | 'one-pieces')
 * @param {string} [hfToken] - (Tùy chọn) Hugging Face Token nếu cần ưu tiên tốc độ / bypass queue
 * @returns {Promise<string>} URL của ảnh sau khi đã ghép đồ AI hoàn tất
 */
export const handleAITryOn = async (personImage, garmentImage, category = "tops", hfToken = "") => {
  // Chuẩn bị file
  const personFile = await urlToFileOrBlob(personImage, "person.jpg");
  const garmentFile = await urlToFileOrBlob(garmentImage, "garment.jpg");
  const vtonCategory = mapCategoryToVton(category);
  const clientOptions = hfToken ? { hf_token: hfToken } : {};

  // 1. Ưu tiên gọi API WeShopAI VTON từ Hugging Face
  try {
    console.log("🚀 [1/2] Đang thử kết nối WeShopAI VTON (weshopai/weshopai-virtual-try-on)...");
    const weShopApp = await client("weshopai/weshopai-virtual-try-on", clientOptions);
    console.log("📤 Đang gửi ảnh lên WeShopAI...");
    const result = await weShopApp.predict("/generate_image", [
      personFile,
      garmentFile
    ]);
    console.log("✅ WeShopAI trả về:", result);
    const outputData = result?.data?.[0];
    const outputUrl = outputData?.url || (typeof outputData === "string" ? outputData : null);
    if (outputUrl) return outputUrl;
  } catch (weShopErr) {
    console.warn("⚠️ WeShopAI Space đang bận hoặc giới hạn kết nối, tự động chuyển sang FASHN AI VTON 1.5:", weShopErr.message);
  }

  // 2. Dự phòng sang FASHN AI VTON 1.5
  try {
    console.log("🚀 [2/2] Đang kết nối FASHN AI VTON 1.5 (fashn-ai/fashn-vton-1.5)...");
    const fashnApp = await client("fashn-ai/fashn-vton-1.5", clientOptions);
    console.log(`📤 Đang gửi ảnh lên FASHN VTON (Category: ${vtonCategory})...`);
    const result = await fashnApp.predict("/try_on", [
      personFile,       // Person Image
      garmentFile,      // Garment Image
      vtonCategory,     // Category: "tops" | "bottoms" | "one-pieces"
      "model",          // Garment Photo Type: "model" | "flat-lay"
      35,               // Sampling Steps
      1.5,              // Guidance Scale
      42,               // Seed
      true              // Segmentation Free
    ]);
    console.log("✅ FASHN AI trả về:", result);
    const outputData = result?.data?.[0];
    const outputUrl = outputData?.url || (typeof outputData === "string" ? outputData : null);
    if (outputUrl) return outputUrl;
  } catch (fashnErr) {
    console.warn("⚠️ FASHN AI cũng đang bận:", fashnErr.message);
    throw fashnErr;
  }

  throw new Error("Không nhận diện được ảnh kết quả từ AI API.");
};
