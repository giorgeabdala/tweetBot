require('dotenv').config();
const fetch = require("node-fetch");


// Recuperar a senha da API
//const apiKey = process.env.OPENAI_API_KEY;
const apiKey = process.env.OPENAI_API_KEY;
const endpoint = "https://api.openai.com/v1/completions";

// Função para se conectar à API do chat GPT
async function fetchGPTChat(input) {
  input = "Uma frase curta para responder o seguinte tweeter(responda no mesmmo idioma que o tweeter foi escrito): " + input;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + apiKey
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: input,
      max_tokens: 200
    })
  });

  if (!response.ok) {
    throw new Error("Falha ao se conectar à API do chat GPT" + response.statusText);
  }

   const data = await response.json();
   const reply = data.choices[0].text;
   return reply.replace(/{|}/g, '');

}


module.exports = { fetchGPTChat };