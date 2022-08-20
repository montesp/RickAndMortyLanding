const API = 'https://rickandmortyapi.com/api/character/1';
const imgContainer1 =  document.getElementById('hero-img1');
const imgContainer2 =  document.getElementById('hero-img2');
const imgContainer3 =  document.getElementById('hero-img3');
imgContainer1.alt = "rickImg";

const setImg = (imagenContainer, url) => {
    imagenContainer.src = url
}

fetch(API)
    .then(response => response.json())
    .then(data =>  {
        console.log(data.image)
        // rickImg = data
        setImg(imgContainer1, data.image)
    });



