let stringTemplate = `String Template usada para ${1 + 1}`;
console.log(stringTemplate);

let aspasSimples = 'Estamos criando uma String com aspas simples';
// String em resumo são textos que podem ser utilizados no JavaScript
// E para utiliza-lo podemos usar aspas simples, duplas ou String template

let aspasDuplas = "Exemplo de aspas duplas";

let templateLiteral = `String interpolarion embedding expression like ${1 + 1}`;
// Essa é uma String Template, basicamente usamos em casos que há necessidade de realizar uma ação aritimédica (Como  no exemplo) ou quando guardamos váriaveis dentro dela

// Veja abaixo abaixo exemplo de como e quando usar as crases
let nome = 'Raphael';

// Números usados sem aspas (simples ou duplas)
let idade = 22;

let mensagem = `Olá meu nome é ${nome} e tenho ${idade} anos`;

// Ele que vai imprimir nossa mensagem na tela

console.log(mensagem);

let primeiroNome = 'Raphael';
let ultimoNome = 'Silva';
let nomeCompleto = primeiroNome + ' ' + ultimoNome;
// Usando o +

let nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`;
// Usando template literal

console.log(nomeCompletoTemplate);

//C:\Users\DB\Documents\Mochila js\Mochila-js> node --version para ver se o node js esta instalado na maquina e a versão

const variavelNova = 'Valor deste variável é 20';

console.log(variavelNova)



