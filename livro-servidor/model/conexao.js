const banco = require('mongoose');
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

main().catch(err => console.log(err)); 

async function main() {
  await banco.connect('mongodb://localhost:27017/livraria', options);
  console.log("Conexão Estabelecida");
};

module.exports = banco;