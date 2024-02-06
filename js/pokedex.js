const listaPokemon = document.querySelector("#listaPokemon");
const botonesTipo = document.querySelectorAll(".btn-header");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => verPokemon(data))
}

function verPokemon(poke) {

    let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');

    let pokeId = poke.id.toString();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }


    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <p class="pokemonNumID">#${pokeId}</p>
        <div class="imagenPokemon">
            <img src="${poke.sprites.other["dream_world"].front_default}" alt="${poke.name}">
        </div>
        <div class="dataPokemon">
            <div class="contenedorNombre">
                <p class="pokemonId">#${pokeId}</p>
                <h2 class="nombrePokemon">${poke.name}</h2>
            </div>
            <div class="tipoPokemon">
                ${tipos}
            </div>
            <div class="pokemonTamaño">
                <p class="tamaño">${poke.height}m</p>
                <p class="tamaño">${poke.weight}kg</p>
            </div>
        </div>
    `;
    listaPokemon.append(div);
}

botonesTipo.forEach(boton => boton.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id;

    listaPokemon.innerHTML = "";

    for (let i = 1; i <= 151; i++) {
        fetch(URL + i)
            .then((response) => response.json())
            .then(data => {

                if(botonId === "ver-todos") {
                    verPokemon(data);
                } else {
                    const tipos = data.types.map(type => type.type.name);
                    if (tipos.some(tipo => tipo.includes(botonId))) {
                        ver-Pokemon(data);
                    }
                }

            })
    }
}))