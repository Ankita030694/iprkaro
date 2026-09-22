const API_KEY = "AQ.Ab8RN6J5DmmVDbCwJY6Iyiqm8HGXXy300U19gLKDlJQfZ-X-EA";

async function testApi() {
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
    
    if (response.ok) {
      const data = await response.json();
      console.log("Success:", JSON.stringify(data.models.map(m => m.name)));
    } else {
      console.error("Error:", response.status, await response.text());
    }
  } catch (err) {
    console.error("Fetch error:", err);
  }
}

testApi();
