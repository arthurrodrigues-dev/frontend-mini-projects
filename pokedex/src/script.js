const _cards = Array.from(document.querySelectorAll('.card'));
const _pokemonImages = Array.from(document.querySelectorAll('.pokemon-img'))

async function getData() {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0";
    const response = await fetch(URL);
    const data = await response.json();

    return data.results;
}

async function getPokemonData(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function createCards() {
    const generalData = await getData();

    _cards.forEach(async (_card, index) => {
        const pokemonData = await getPokemonData(generalData[index].url);
        const {sprites} = pokemonData;

        _pokemonImages[index].children[0].setAttribute('src', sprites.other["official-artwork"]["front_default"])
    })

    // console.log(generalData);
    // _pokemonImages.setAttribute('src', sprites.other["official-artwork"]["front_default"]);
}

createCards();