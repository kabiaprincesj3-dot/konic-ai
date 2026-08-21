// KONIC AI - AI Router Function
// Handles routing requests securely to AI providers (e.g., Google Gemini)

export async function routeAIRequest(apiKey, prompt, systemInstruction = "") {
  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ],
        systemInstruction: systemInstruction ? { parts: [{ text: systemInstruction }] } : undefined
      })
    });

    if (!response.ok) {
      throw new Error(`AI Provider Error: ${response.statusText}`);
    }

    const data = await response.json();
    const aiResponseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
    
    return {
      success: true,
      response: aiResponseText
    };
  } catch (error) {
    console.error("KONIC AI Router Error:", error);
    return {
      success: false,
      error: error.message
    };
  }
}
