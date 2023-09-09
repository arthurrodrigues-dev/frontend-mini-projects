const _container = document.querySelector('.container');

async function getData() {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";
    const response = await fetch(URL);
    const data = await response.json();

    return Array.from(data.results);
}

async function createCards() {
    const pokemonsData = await getData();
    const urls = pokemonsData.map((data) => data.url)

    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const pokemons = await Promise.all(responses.map((response) => response.json()))

    pokemons.forEach((pokemon) => {
        const card = document.createElement('div');
        card.classList.add('card')
        card.innerHTML = `
            <span class="pokemon-id">#${pokemon.id}</span>

            <div class="pokemon-img">
                <img src="${pokemon.sprites.other["official-artwork"]["front_default"]}" alt="Pokémon Image">
            </div>

            <span class="pokemon-name">${pokemon.name}</span>

            <div class="pokemon-stats">
                <div class="weight">
                    <p>Weight</p>
                    <span>${pokemon.weight / 10}kg</span>
                </div>

                <div class="height">
                    <p>Height</p>
                    <span>${pokemon.height / 10}m</span>
                </div>
            </div>
            <p>Type: <span class="type">${pokemon.types.length > 1? pokemon.types[0].type.name + "/" + pokemon.types[1].type.name : pokemon.types[0].type.name}</span></p>
        `;

        _container.appendChild(card);
    })
}
createCards();