require('dotenv').config();
const fetch = require("node-fetch");


// Recuperar a senha da API
//const apiKey = process.env.OPENAI_API_KEY;
const apiKey = process.env.OPENAI_API_KEY;
const endpoint = "https://api.openai.com/v1/completions";

// Função para se conectar à API do chat GPT
async function fetchGPTChat(input) {
  input = "Diga algo para eu escrever como resposta para esse twetter, responda na mesma lingua que o twetter foi escrito: " + input;

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
  return reply;
}


module.exports = { fetchGPTChat };