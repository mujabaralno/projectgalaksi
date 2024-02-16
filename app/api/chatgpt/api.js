const API_URL = process.env.NEXT_PUBLIC_CHATGPT_URL;
const API_KEY = process.env.NEXT_PUBLIC_CHATGPT_APIKEY;
const API_HOST = process.env.NEXT_PUBLIC_CHATGPT_HOST;

export const sendMessageToAPI = async ({ messages, systemPrompt, temperature, topK, topP, maxTokens, webAccess }) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST, 
    },
    body: JSON.stringify({
      messages,
      system_prompt: systemPrompt,
      temperature,
      top_k: topK,
      top_p: topP,
      max_tokens: maxTokens,
      web_access: webAccess,
    }),
  });

  if (!response.ok) {
    throw new Error('Gagal mengirim pesan');
  }

  const data = await response.json();
  return data.result;
};
