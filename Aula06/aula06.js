const Cartao1 = {
    nome: 'Raphael Silva',
    saldo: 50000,
};

const Cartao2 = Cartao1;

console.log(Cartao1);
console.log(Cartao2);

//crie Três tipos diferentes de Baroaveos Tipo Referênciais, onde obtenha além do nome e saldo, informações como Banco, agencia e conta e seja alimentado por uma nova variável.

const banco1 = {
    nome: 'Victor Martins',
    saldo: 5000,
    banco: 'Itau',
    agencia: 7648,
    conta: 145742,
};

console.log(banco1);

const banco2 = {
    nome: 'Thiana Santos',
    saldo: 1000000,
    banco: 'Caixa',
    agencia: 1485,
    conta: 254682,
};

console.log(banco2);

const banco3 = {
    nome: 'Manoel Gomes',
    saldo: 84622220,
    banco: 'Bradesco',
    agencia: 8147,
    conta: 254728,
};

console.log(banco3)