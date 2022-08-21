const API = 'https://rickandmortyapi.com/api/character';
const imgContainer1 =  document.getElementById('hero-img1');
const imgContainer2 =  document.getElementById('hero-img2');
const imgContainer3 =  document.getElementById('hero-img3');
imgContainer1.alt = "rickImg";

const setImg = (imagenContainer, url) => {
    imagenContainer.src = url
}

fetch(`${API}/1`)
    .then(response => {
        if (response.ok){
            return response.json();
        } else {
            return Promise.reject(response);
        }
    })
    .then(data =>  {
        setImg(imgContainer1, data.image);
        return fetch(`${API}/2`);
    })
    .then(response => {
        if (response.ok){
            return response.json();
        } else {
            return Promise.reject(response);
        }
    })
    .then(data => {
        setImg(imgContainer2, data.image)
        return fetch(`${API}/3`)
    })
    .then(response => {
        if (response.ok){
            return response.json();
        } else {
            return Promise.reject(response);
        }
    })
    .then(data => {
        setImg(imgContainer3, data.image)
    });




