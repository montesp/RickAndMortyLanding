const API = 'https://rickandmortyapi.com/api/character/1';
const 


function fetchAPIImage(API){
    fetch(API)
        .then(response => response.json())
        .then(data =>  console.log(data));
}

fetchAPI(API);

