const POKE_NAME = document.querySelector('.poke_name')
const POKE_NUM = document.querySelector('.poke_num')
const POKE_IMG = document.querySelector('.poke_img')
const CONTAINER_INPUT = document.querySelector('.container_input')
const INPUT = document.querySelector('.input_search')
const PRE_BTN = document.querySelector('.pre_btn')
const NEXT_BTN = document.querySelector('.next_btn')

let id_pokemon = 1

const show_pokemon = async(pokemon) => {
    POKE_NAME.innerHTML = 'Loading...'
    POKE_NUM.innerHTML = ''

    const JSON_POKE = await fetch_pokemon(pokemon)
    if(JSON_POKE){
        // POKE_IMG.src = JSON_POKE['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        POKE_IMG.src = JSON_POKE['sprites']['other']['showdown']['front_default']
        POKE_IMG.style.display = 'block'
        POKE_NAME.innerHTML = JSON_POKE.name
        POKE_NUM.innerHTML = JSON_POKE.id
        INPUT.value = ''
        id_pokemon = JSON_POKE.id
    }
    else{
        POKE_NAME.innerHTML = 'Not Founded'
        POKE_NUM.innerHTML = ''
        POKE_IMG.style.display = 'none'
    }
}

const fetch_pokemon = async(pokemon) => {
    let resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if(resposta.status === 200) {
        const INFO = resposta.json()
        return INFO
    }
}

CONTAINER_INPUT.addEventListener('submit', (event) => {
    event.preventDefault()
    let pokemon = INPUT.value.toLowerCase()
    show_pokemon(pokemon)
})

PRE_BTN.addEventListener('click', () => {
    if (id_pokemon > 1) {
        id_pokemon -= 1
        show_pokemon(id_pokemon)
    }
})

NEXT_BTN.addEventListener('click', () => {
    if (id_pokemon < 920) {
        id_pokemon += 1
        show_pokemon(id_pokemon)
    }
})

window.onload = show_pokemon(id_pokemon)