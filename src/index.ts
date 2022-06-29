import { generateJoke } from './generateJoke'

import './styles/main.scss'

import laughing from './assets/laughing.svg'

const laughImg = document.getElementById('laughImg') as HTMLImageElement
laughImg.src = laughing

const jokeBtn = document.getElementById('jokeBtn') as HTMLElement
jokeBtn.addEventListener('click', generateJoke)

generateJoke()
