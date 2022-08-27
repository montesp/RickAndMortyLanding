const API = 'https://rickandmortyapi.com/api/character';

const mainCharacters = {
    mainCharacter1: document.getElementById('hero-img1'),
    mainCharacter2: document.getElementById('hero-img2'),
    mainCharacter3: document.getElementById('hero-img3'),

}

const characters = {
    character1: document.getElementById('characters-img1'),
    character2: document.getElementById('characters-img2'),
    character3: document.getElementById('characters-img3'),
    character4: document.getElementById('characters-img4'),
    character5: document.getElementById('characters-img5'),
    character6: document.getElementById('characters-img6'),
}

// const imgContainer1 =  document.getElementById('hero-img1');
// const imgContainer2 =  document.getElementById('hero-img2');
// const imgContainer3 =  document.getElementById('hero-img3');
// imgContainer1.alt = "rickImg";
console.log(mainCharacters)


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
        setImg(mainCharacters.mainCharacter1, data.image);
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
        setImg(mainCharacters.mainCharacter2, data.image)
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
        setImg(mainCharacters.mainCharacter3, data.image)
    })
    .catch(error => console.error(error));

fetch(`${API}/4`)
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(data => {
        setImg(characters.character1, data.image)
        return fetch(`${API}/5`)
    })
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(data => {
        setImg(characters.character2, data.image)
        return fetch(`${API}/6`)
    })
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(data => {
        setImg(characters.character3, data.image)
        return fetch(`${API}/7`)
    })
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(data => {
        setImg(characters.character4, data.image)
        return fetch(`${API}/8`)
    })
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(data => {
        setImg(characters.character5, data.image)
        return fetch(`${API}/9`)
    })
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(data => {
        setImg(characters.character6, data.image)
    })
    .catch(error => console.error(error));



