const fs = require('fs'); // Para ler arquivos
const path = require('path'); // Para manipular caminhos de arquivos

describe('Teste de Página HTML', () => {

  let htmlContent;

  beforeAll(() => {
    // Lê o conteúdo do arquivo HTML
    const filePath = path.join(__dirname, '..','src', 'index.html');
    htmlContent = fs.readFileSync(filePath, 'utf-8'); // Lê o conteúdo do arquivo HTML
  });

  test('Verifica se o título h1 está presente com o texto correto', () => {
    expect(htmlContent).toMatch(/<h1>Olá, Mundo!<\/h1>/); // Verifica se o título h1 existe e contém o texto correto
  });

  test('Verifica se o parágrafo está presente com o texto correto', () => {
    expect(htmlContent).toMatch(/<p>Esta é uma página HTML simples criada para testes.<\/p>/); // Verifica se o parágrafo contém o texto esperado
  });

});
