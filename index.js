const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/testar', async (req, res) => {
  const { card } = req.body;

  if (!card) {
    return res.status(400).json({ erro: 'Cartão não informado' });
  }

  // Simula um teste de cartão (exemplo)
  const aprovado = card.startsWith('4854');
  const mensagem = aprovado ? 'Aprovado' : 'Recusado';

  return res.json({
    status: mensagem,
    cartao: card
  });
});

app.get('/', (req, res) => {
  res.send('API Testador Online');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
