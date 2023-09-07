const _container = document.querySelector('.container');

async function getData() {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=15&offset=0";
    const response = await fetch(URL);
    const data = await response.json();

    return Array.from(data.results);
}

async function getPokemonData(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function createCards() {
    const pokemonsData = await getData();

    pokemonsData.forEach(async (pokemon, index) => {
        const {id, name, weight, height, types, sprites} = await getPokemonData(pokemonsData[index].url);

        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <span class="pokemon-id">#${id}</span>
    
            <div class="pokemon-img">
                <img src="${sprites.other["official-artwork"]["front_default"]}" alt="Pokémon Image">
            </div>
    
            <span class="pokemon-name">${name}</span>
    
            <div class="pokemon-stats">
                <div class="weight">
                    <p>Weight</p>
                    <span>${weight}kg</span>
                </div>
    
                <div class="height">
                    <p>Height</p>
                    <span>${height}m</span>
                </div>
            </div>
            <p>Type: <span class="type">${types.length > 1? types[0].type.name + "/" + types[1].type.name : types[0].type.name}</span></p>
        `;

        _container.appendChild(card);
    })
}
createCards();