import axios from 'axios';

function generateJoke() {
  axios
    .get('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
    })
    .then((res) => {
      document.getElementById('joke').textContent = res.data.joke;
    })
    .catch((err) => console.error(err));
}

export { generateJoke };
