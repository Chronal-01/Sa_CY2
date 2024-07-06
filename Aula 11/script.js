let dias_n = document.getElementById('dias_n')
let horas_n = document.getElementById('horas_n')
let minutos_n = document.getElementById('minutos_n')
let segundos_n = document.getElementById('segundos_n')

let aniversario = '23 January 2025'

function contagem()
{
    const hoje = new Date()
    const aniversario_convertido = new Date(aniversario)
    const total_segundos = (aniversario_convertido - hoje) / 1000
    const segundos = Math.floor(total_segundos) % 60
    const minutos = Math.floor(total_segundos / 60) % 60
    const horas = Math.floor(total_segundos / 3600) % 24
    const dias = Math.floor(total_segundos / 3600 / 24)

    dias_n.innerText = formatar(dias)
    horas_n.innerText = formatar(horas)
    minutos_n.innerText = formatar(minutos)
    segundos_n.innerText = formatar(segundos)
    
    console.log(dias, horas, minutos, segundos)
}

contagem()

setInterval(contagem, 999)

function formatar(tempo)
{
    if (tempo < 10) {
        return `0${tempo}`
    }
    else
    {
        return tempo
    }
}