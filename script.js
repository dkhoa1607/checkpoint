const name = document.querySelector('.name');
const type = document.querySelector('.type');
const height = document.querySelector('.height');
const weight = document.querySelector('.weight');
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('change', (event) =>(
    fetch(`https://pokeapi.co/api/v2/pokemon/{id or name}/`)
    .then(Response => Response.json())
    .then((data) => {
        
    }

))