import { client } from "@gradio/client";

/**
 * Chuyển đổi URL ảnh (hoặc blob URL, relative path) thành File/Blob
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
 * Gọi trực tiếp API WeShop AI Virtual Try-On
 * Chỉ duy nhất 1 tầng gọi tới WeShop AI, nếu lỗi hoặc quá tải sẽ ném lỗi để hiển thị thông báo.
 * @param {File|Blob|string} personImage - Ảnh người dùng tải lên
 * @param {File|Blob|string} garmentImage - Ảnh trang phục
 * @param {string} [apiKey] - WeShop OpenAPI Key (tùy chọn nếu gọi qua OpenAPI)
 * @returns {Promise<string>} URL của bức ảnh kết quả thử đồ ảo
 */
export const callWeShopAiTryOn = async (personImage, garmentImage, apiKey = process.env.REACT_APP_WESHOP_API_KEY) => {
  const personFile = await urlToFileOrBlob(personImage, "person.jpg");
  const garmentFile = await urlToFileOrBlob(garmentImage, "garment.jpg");

  // 1. Nếu có API Key OpenAPI của WeShop AI
  if (apiKey && apiKey !== "<APIKey>" && !apiKey.includes("APIKey")) {
    console.log("🚀 Đang kết nối WeShop AI OpenAPI (https://openapi.weshop.ai)...");
    try {
      const response = await fetch("https://openapi.weshop.ai/openapi/agent/runs", {
        method: "POST",
        headers: {
          "Authorization": apiKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          agent: "virtualtryon",
          version: "v1.0",
          inputs: {
            model_image: personImage,
            garment_image: garmentImage
          },
          parameters: {
            engine: "weshopPro"
          }
        })
      });

      const resData = await response.json();
      console.log("WeShop OpenAPI Response:", resData);

      // Nếu có executionId, tiến hành poll kết quả
      const executionId = resData?.meta?.executionId || resData?.data?.executionId;
      if (executionId) {
        let attempts = 0;
        while (attempts < 20) {
          await new Promise((r) => setTimeout(r, 2000));
          const checkRes = await fetch(`https://openapi.weshop.ai/openapi/agent/runs/${executionId}`, {
            headers: { "Authorization": apiKey }
          });
          const checkData = await checkRes.json();
          if (checkData?.data?.output_image || checkData?.data?.result) {
            return checkData.data.output_image || checkData.data.result;
          }
          if (checkData?.status === "FAILED") {
            throw new Error(checkData?.error?.message || "Xử lý WeShop thất bại.");
          }
          attempts++;
        }
      }

      if (resData?.data?.output_image || resData?.data?.result) {
        return resData.data.output_image || resData.data.result;
      }
    } catch (openApiErr) {
      console.warn("Lỗi kết nối WeShop OpenAPI:", openApiErr);
      throw openApiErr;
    }
  }

  // 2. Gọi qua WeShop AI Virtual Try-On API trên Hugging Face
  console.log("🚀 Đang kết nối tới WeShop AI Virtual Try-On...");
  let app;
  try {
    app = await client("https://weshopai-weshopai-virtual-try-on.hf.space");
  } catch (directErr) {
    console.warn("Thử kết nối qua Space ID fallback:", directErr);
    app = await client("WeShopAI/WeShopAI-Virtual-Try-On");
  }

  console.log("📤 Đang gửi ảnh lên WeShop AI xử lý thử đồ (Garment: Bước 1, Person: Bước 2)...");
  let result;
  try {
    // Theo cấu trúc của WeShopAI:
    // Param 1 (Main Image): Ảnh trang phục (garmentFile)
    // Param 2 (Background reference image): Ảnh người mẫu (personFile)
    result = await app.predict("/generate_image", [
      garmentFile,
      personFile
    ]);
  } catch (epErr) {
    console.warn("Endpoint /generate_image lỗi, thử gọi /predict:", epErr);
    result = await app.predict("/predict", [
      garmentFile,
      personFile
    ]);
  }

  console.log("✅ Kết quả WeShop AI trả về:", result);

  const outputData = result?.data?.[0];
  const outputUrl = outputData?.url || (typeof outputData === "string" ? outputData : null);

  if (!outputUrl) {
    throw new Error("Không nhận được ảnh kết quả từ WeShop AI.");
  }

  return outputUrl;
};

