const request = require('request');

function callGeminiAPI(prompt) {
  return new Promise((resolve, reject) => {
    const apiUrl = `https://metoushela-api-rest.onrender.com/api/deepseek-r1-distill-llama-70b?query=${encodeURIComponent(prompt)}&userId=40`;
    
    request(apiUrl, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        try {
          const responseBody = JSON.parse(body);
          resolve(responseBody.response);
        } catch (parseError) {
          reject(parseError);
        }
      }
    });
  });
}

module.exports = { callGeminiAPI };
