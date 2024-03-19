const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  const numeroDaPagina = Math.floor(Math.random() * 10) + 1;
  const url = `https://www.pensador.com/populares/${numeroDaPagina}/`;
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const citacoesElementos = $('.thought-card p.frase');
  const autoresElementos = $('.thought-card div span.author-name');

  const indiceAleatorio = Math.floor(Math.random() * citacoesElementos.length);

  const citacaoElemento = citacoesElementos.eq(indiceAleatorio);
  const autorElemento = autoresElementos.eq(indiceAleatorio);

  const citacao = citacaoElemento.text();
  const autor = autorElemento.text();

  res.json({ citacao, autor });
};