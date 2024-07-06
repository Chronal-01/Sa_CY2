const CITY = document.querySelector('#input_city')
const BUTTON = document.querySelector('button')
const RESULT = document.querySelector('#result')
const RESULT2 = document.querySelector('#result2')


BUTTON.addEventListener('click', get_weather)


async function get_weather()
{
    const API_KEY = 'e82252527048047f45c32776acc06ba9'
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY.value}&units=metric&appid=${API_KEY}`

    try {
        const response = await fetch(API_URL)
        if (!response.ok) {
            throw new Error('Cidade não encontrada')
        }
        else {
            const dados = await response.json()
            const temp = dados.main.temp
            const temp_max = dados.main.temp_max
            const temp_min = dados.main.temp_min
            const feels_like = dados.main.feels_like
            const humidity = dados.main.humidity

            RESULT.textContent = `Temp: ${temp}°C  Max: ${temp_max}°C  Min: ${temp_min}°C`
            RESULT2.textContent = `Sens: ${feels_like}  Umid: ${humidity}%`
        }
    }
    catch(error) {
        console.log(error)
    }
}