const _container = document.querySelector('.container');

async function getData() {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0";
    const response = await fetch(URL);
    const data = await response.json();

    return Array.from(data.results);
}

async function getPokemonData(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

function createCard() {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
        <span class="pokemon-id"></span>

        <div class="pokemon-img">
            <img src="" alt="Pokémon Image">
        </div>

        <span class="pokemon-name"></span>

        <div class="pokemon-stats">
            <div class="weight">
                <p>Weight</p>
                <span></span>
            </div>

            <div class="height">
                <p>Height</p>
                <span></span>
            </div>
        </div>
        <p>Type: <span class="type"></span></p>
    `;

    return card;
}

async function fillCardsData() {
    const pokemonsData = await getData();
    console.log(pokemonsData);

    pokemonsData.forEach(async (pokemon, index) => {
        const _card = createCard();
        const _id = _card.querySelector('.pokemon-id');
        const _image = _card.querySelector('.pokemon-img').children[0];
        const _name = _card.querySelector('.pokemon-name');
        const _weight = _card.querySelector('.weight').children[1];
        const _height = _card.querySelector('.height').children[1];
        const _type = _card.querySelector('.type');
       
        const {id, name, weight, height, types, sprites} = await getPokemonData(pokemonsData[index].url);


        _id.textContent = `#${id}`
        _image.setAttribute('src', sprites.other["official-artwork"]["front_default"]);
        _name.textContent = name;
        _weight.textContent = `${weight}kg`;
        _height.textContent = `${height}m`;

        
        _container.appendChild(_card);
        
    })

    // _cards.forEach(async (_card, index) => {
    //     const pokemonData = await getPokemonData(generalData[index].url);
    //     const {sprites} = pokemonData;

    //     _pokemonImages[index].children[0].setAttribute('src', sprites.other["official-artwork"]["front_default"])
    // })
}

fillCardsData();