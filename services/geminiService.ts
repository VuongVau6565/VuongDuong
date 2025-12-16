import { GoogleGenAI } from "@google/genai";

export const generateLovePoem = async (): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API Key not found, returning fallback poem.");
      return "Dẫu có sai lầm, anh vẫn thương,\nXin lỗi em nhé, chớ vấn vương.\nTừ nay thay đổi, lòng son sắt,\nYêu em trọn kiếp, mãi chung đường.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Using a lighter model for quick text generation
    const model = 'gemini-2.5-flash';
    
    const prompt = `
      Hãy viết một bài thơ 4 câu ngắn gọn, lãng mạn và chân thành bằng tiếng Việt.
      Bối cảnh: Người bạn trai xin lỗi bạn gái vì đã vô tâm, dỗi hờn vô cớ và hứa sẽ trưởng thành hơn.
      Bài thơ cần vần điệu, cảm động để cô ấy tha thứ.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "Anh xin lỗi, anh yêu em nhiều lắm.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Dẫu có sai lầm, anh vẫn thương,\nXin lỗi em nhé, chớ vấn vương.\nTừ nay thay đổi, lòng son sắt,\nYêu em trọn kiếp, mãi chung đường.";
  }
};
