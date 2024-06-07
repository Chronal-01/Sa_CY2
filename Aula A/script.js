// Identificar elementos
const senha_elemento = document.getElementById('senha')
const copiar_elemento = document.getElementById('copiar')
const tamanho_elemento = document.getElementById('tamanho')
const maiuscula_elemento = document.getElementById('maiusculas')
const minuscula_elemento = document.getElementById('minusculas')
const numeros_elemento = document.getElementById('numeros')
const caracteres_elemento = document.getElementById('caracteres-especiais')
const gerar_senha_btn = document.querySelector('.submit')
const limpar_btn = document.querySelector('.reset')

 const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 const minusculas = 'abcdefghijklmnopqrstuvwxyz'
 const numeros = '123456789'
 const caracteres = '!@#$%&*_+-.,'


// Criar eventos
gerar_senha_btn.addEventListener('click', gerar_senha)
copiar_elemento.addEventListener('click', copiar)
limpar_btn.addEventListener('click', atualizar_pagina)


// Criar funções dos eventos
function gerar_senha()
{
    let tamanho_senha = tamanho_elemento.value
    if (tamanho_senha || tamanho_senha < 6)
    {
        tamanho_senha = 6
    }
    else if (tamanho_senha > 18)
    {
        tamanho_senha = 18
    }

    let senha = ''
    for (let i = senha.length; i<tamanho_senha; i++)
    {
        const letra_sorteada = sortear()
        senha += letra_sorteada
    }
    senha_elemento.innerText = senha
}

function sortear()
{
    const lista = []
    if (maiuscula_elemento.checked)
    {
        let sorteada = maiusculas[Math.floor(Math.random() * maiusculas.length)]
        lista.push(sorteada)
    }
    if (minuscula_elemento.checked)
    {
        let sorteada = minusculas[Math.floor(Math.random() * minusculas.length)]
        lista.push(sorteada)
    }
    if (numeros_elemento.checked)
    {
        let sorteada = numeros[Math.floor(Math.random() * numeros.length)]
        lista.push(sorteada)
    }
    if (caracteres_elemento.checked)
    {
        let sorteada = caracteres[Math.floor(Math.random() * caracteres.length)]
        lista.push(sorteada)
    }
    return lista[Math.floor(Math.random() * lista.length)]
}

function copiar() {
    const area_texto = document.createElement('textarea')
    const pw = senha_elemento.innerText

    if (!pw) {
        return
    }

    area_texto.value = pw
    document.body.appendChild(area_texto)
    area_texto.select()
    document.execCommand('copy')
    area_texto.remove()
    window.alert('Senha copiada com sucesso!!!')
}

function atualizar_pagina() {
    location.reload()
}