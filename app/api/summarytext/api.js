const API_URL = process.env.NEXT_PUBLIC_SUMMARY_TEXT_URL;
const API_KEY = process.env.NEXT_PUBLIC_SUMMARY_TEXT_APIKEY;
const API_HOST = process.env.NEXT_PUBLIC_SUMMARY_TEXT_HOST;

if (!API_URL || !API_KEY || !API_HOST) {
  throw new Error('Pastikan semua variabel lingkungan tersedia.');
}

export const sendMessageToAPIText = async ({userInput}) => {
  try {
    const response = await fetch(`${API_URL}/summarize?url=${userInput}&length=3`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Gagal mengirim pesan. Status: ${response.status}, Pesan: ${errorData.message}`);
    }

    const data = await response.json();
    return data.summary;
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    throw error; 
  }
};
