// Comentário

/*
Comentário de várias linhas
*/

/*
! TIPOS DE DADOS

- Número: int, float, NaN (Not a Number)
- Texto: string
- Boolean: true, flase
- Vazio: null
- Indefinido: undefined 
*/

/*
! CONVERTER TIPOS

var = 4
de num para string
var.toString()

de string para num
parseInt(var)
parseFloat(var)
*/

/*
! OPERADORES
+ Adição
- Subtração
* Multiplicação
/ Divisão
% Resto de Divisão
** Potenciação
*/

/*
! OPERADORES RELACIONAIS
< - Menor que
> - Maior que
<= - Menor ou igual
>= - Maior ou igual
== (= =) - Igualdade
=== (= = =) - Igualdade de tipos e valor
!= (! =) - Diferente
*/

/*
! OPERADORES LÓGICOS
! - não
&& - e
|| - ou
*/

/*
! VARIÁVEIS
var   -   Pode mudar
let   -   Não pode mudar o tipo
const -   Não pode mudar
*/

/*
! OUTROS DADOS
Array  -  Lista
Object -  Dicionário
Json   -  JavaScript Object Notation {chave : valor}
*/

/*
! FUNÇÕES
function nome_da_função (parâmetros)
{
    comandos
}
*/

/*
! CONDICIONAIS

if (condiçao a)
{
    Plano A
}
else if (condição b)
{
    Plano B
}
else
{
    Plano C
}
*/

/*
! ESTRUTURA DE REPETIÇÃO

for i in range(10)

for (let i = 1; i < 11; i++)

*/

// let x = 5
// let y = 3

// let soma = x + y

// window.alert(soma)
// document.write('<h1>' + soma + '</h1>')
// document.write(soma)
// document.write(`<h1> ${soma} </h1>`)
// console.log(soma)

// var resposta = window.prompt('Digite um número')
// if (resposta % 2 == 0)
// {
//     document.write('Esse número é par')
// }
// else
// {
//     document.write('Esse número é ímpar')
// }

// let num1 = parseInt(window.prompt('Digite um número'))
// let num2 = parseInt(window.prompt('Digite outro número'))
// let soma = num1 + num2
// document.write('A soma dos números é ' + soma)

let num = parseInt(window.prompt('Digite um número'))

for (let i = 1; i < 11; i++)
{
    document.write(`${num} x ${i} = ${num * i}<br>`)
}