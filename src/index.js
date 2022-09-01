const API = 'https://rickandmortyapi.com/api/character';
const heroContainer = null || document.getElementById('hero-carrusel');
const mainContainer = document.getElementById('characters-carrusel');

const setImg = (imagenContainer, url) => {
    imagenContainer.src = url
}

async function fetchData(api){
    const response = await fetch(api);

    if (response.ok){
        const data = await response.json();
        return data;
    } else {
        return Promise.reject(response);
    }
}


const heroImagesContainerView = async (images, container) => {
    let view = "";
    for (let index = 0; index < images.length; index++) {
        // if(index == 0){
        //     view += `
        //     <img class="carrusel-hero__image carrusel-hero__image--selected" src="${images[index]}" alt="">
        // `;
        // } else {
        //     view += `
        //     <img class="carrusel-hero__image" src="${images[index]}" alt="">
        // `;
            view += `
            <img class="carrusel-hero__image" src="${images[index]}" alt="">
            `;
    } 
    container.innerHTML = view;

}


const mainCharacterImageContainer = async (images, container) => {
    let view = "";
    for (let index = 0; index < images.length; index++) {
        view += `
            <img class="carrusel-character__image" src="${images[index]}" alt="">
        `;
        // container.insertAdjacentHTML('afterbegin', view);
        container.innerHTML = view;

    }
}



(async () => {
    try {
        let images = []
        for (let i = 1; i < 5; i++) {
            data = await fetchData(`${API}/${i}`);
            images.push(data.image)
        }
        await heroImagesContainerView(images, heroContainer)

        images = []
        for (let i = 4; i < 13; i++) {
            data = await fetchData(`${API}/${i}`);
            images.push(data.image)
        }
        await mainCharacterImageContainer(images, mainContainer);
    

    } catch (err) {
        console.log(err)
    }
})();

