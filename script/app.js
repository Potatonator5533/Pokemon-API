import { saveToLocalStorage, getLocalStorage, removeFromLocalStorage } from "./localStorage.js";

//Html links
let search = document.getElementById("simple-search");
let randomPokémon = document.getElementById("randomPokémon");
let getFavorites = document.getElementById("getFavorites");
let pokémonName = document.getElementById("pokémonName");
let saveToFavorites = document.getElementById("saveToFavorites");
let type1 = document.getElementById("type1");
let type2 = document.getElementById("type2");
let pokémonImg = document.getElementById("pokémonImg");
let pokémonNumber = document.getElementById("pokémonNumber");
let pokémonLocation = document.getElementById("pokémonLocation");
let moves = document.getElementById("moves");
let abilites = document.getElementById("abilites");
let evolutionLine = document.getElementById("evolutionLine");

//Main API call
const PokémonAPI = async (pokémon) => {
    const promise = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokémon);
    const data = await promise.json();
    console.log(data);
    return data;
}

//To call an API inside another API
const PokémonAPIAPI = async (api) => {
    const promise = await fetch(api);
    const data = await promise.json();
    return data;
}

//Typings
function Typing(check, pokémon) {
    if (pokémon.types[0].type.name === "bug") {
        type1.src = ("../assets/bug.png");
    } else if (pokémon.types[0].type.name === "dark") {
        type1.src = ("../assets/dark.png");
    } else if (pokémon.types[0].type.name === "dragon") {
        type1.src = ("../assets/dragon.png");
    } else if (pokémon.types[0].type.name === "electric") {
        type1.src = ("../assets/electric.png");
    } else if (pokémon.types[0].type.name === "fairy") {
        type1.src = ("../assets/fairy.png");
    } else if (pokémon.types[0].type.name === "fighting") {
        type1.src = ("../assets/fighting.png");
    } else if (pokémon.types[0].type.name === "fire") {
        type1.src = ("../assets/fire.png");
    } else if (pokémon.types[0].type.name === "flying") {
        type1.src = ("../assets/flying.png");
    } else if (pokémon.types[0].type.name === "ghost") {
        type1.src = ("../assets/ghost.png");
    } else if (pokémon.types[0].type.name === "grass") {
        type1.src = ("../assets/grass.png");
    } else if (pokémon.types[0].type.name === "ground") {
        type1.src = ("../assets/ground.png");
    } else if (pokémon.types[0].type.name === "ice") {
        type1.src = ("../assets/ice.png");
    } else if (pokémon.types[0].type.name === "normal") {
        type1.src = ("../assets/normal.png");
    } else if (pokémon.types[0].type.name === "psychic") {
        type1.src = ("../assets/psychic.png");
    } else if (pokémon.types[0].type.name === "poison") {
        type1.src = ("../assets/poison.png");
    } else if (pokémon.types[0].type.name === "rock") {
        type1.src = ("../assets/rock.png");
    } else if (pokémon.types[0].type.name === "steel") {
        type1.src = ("../assets/steel.png");
    } else if (pokémon.types[0].type.name === "water") {
        type1.src = ("../assets/water.png");
    } else {
        type1.src = ("../assets/empty.png");
    }
    if (check) {
        if (pokémon.types[1].type.name === "bug") {
            type2.src = ("../assets/bug.png");
        } else if (pokémon.types[1].type.name === "dark") {
            type2.src = ("../assets/dark.png");
        } else if (pokémon.types[1].type.name === "dragon") {
            type2.src = ("../assets/dragon.png");
        } else if (pokémon.types[1].type.name === "electric") {
            type2.src = ("../assets/electric.png");
        } else if (pokémon.types[1].type.name === "fairy") {
            type2.src = ("../assets/fairy.png");
        } else if (pokémon.types[1].type.name === "fighting") {
            type2.src = ("../assets/fighting.png");
        } else if (pokémon.types[1].type.name === "fire") {
            type2.src = ("../assets/fire.png");
        } else if (pokémon.types[1].type.name === "flying") {
            type2.src = ("../assets/flying.png");
        } else if (pokémon.types[1].type.name === "ghost") {
            type2.src = ("../assets/ghost.png");
        } else if (pokémon.types[1].type.name === "grass") {
            type2.src = ("../assets/grass.png");
        } else if (pokémon.types[1].type.name === "ground") {
            type2.src = ("../assets/ground.png");
        } else if (pokémon.types[1].type.name === "ice") {
            type2.src = ("../assets/ice.png");
        } else if (pokémon.types[1].type.name === "normal") {
            type2.src = ("../assets/normal.png");
        } else if (pokémon.types[1].type.name === "psychic") {
            type2.src = ("../assets/psychic.png");
        } else if (pokémon.types[1].type.name === "poison") {
            type2.src = ("../assets/poison.png");
        } else if (pokémon.types[1].type.name === "rock") {
            type2.src = ("../assets/rock.png");
        } else if (pokémon.types[1].type.name === "steel") {
            type2.src = ("../assets/steel.png");
        } else if (pokémon.types[1].type.name === "water") {
            type2.src = ("../assets/water.png");
        }
    } else {
        type2.src = ("../assets/empty.png");
    }
}

//Main function
async function LoadPokémon(pokémon) {
    pokémonName.textContent = pokémon.species.name.toUpperCase();

    let fav = getLocalStorage();
    if (fav.includes(pokémon.species.name)) {
        saveToFavorites.src = ("../assets/Favorite.png");
    } else {
        saveToFavorites.src = ("../assets/NotFavorite.png");
    }
    


    if (pokémon.types.length === 2) {
        Typing(true, pokémon);
    } else {
        Typing(false, pokémon);
    }


    pokémonImg.src = pokémon.sprites.front_default;


    pokémonNumber.textContent = "#" + pokémon.id;


    var encounters = await PokémonAPIAPI(pokémon.location_area_encounters);
    if (encounters.length === 0) {
        pokémonLocation.textContent = "A Location: N/A";
    } else {
        pokémonLocation.textContent = ("A Location: " + encounters[0].location_area.name).replaceAll("-", " ");
    }


    let totalMoves = ["Moves: "];
    for (let i = 0; i < pokémon.moves.length; i++) {
        totalMoves.push(pokémon.moves[i].move.name);
        
    }
    totalMoves = totalMoves.join(", ");
    totalMoves = totalMoves.replace(", ", " ");
    totalMoves = totalMoves.replaceAll("-", " ");
    moves.textContent = totalMoves;


    let totalAbilites = ["Abilites: "];
    for (let i = 0; i < pokémon.abilities.length; i++) {
        totalAbilites.push(pokémon.abilities[i].ability.name);
    }
    totalAbilites = totalAbilites.join(", ");
    totalAbilites = totalAbilites.replace(", ", " ");
    totalAbilites = totalAbilites.replaceAll("-", " ");
    abilites.textContent = totalAbilites;


    var evolution = await PokémonAPIAPI(pokémon.species.url);
    var evolutionChain = await PokémonAPIAPI(evolution.evolution_chain.url);
    console.log(evolutionChain);


    const chain = evolutionChain.chain;

    let species = [chain.species.name];

    let toCheck = [chain];

    while (toCheck.length) {
        species.push(" => ");
        let nextEvolutions = [];
        for (let evolution of toCheck) {
            if (evolution.evolves_to) {
                for (let evo of evolution.evolves_to) {
                    species.push(", ");
                    species.push(evo.species.name);
                    nextEvolutions.push(evo);
                }
            }
        }
        toCheck = nextEvolutions;
    }
    let evoLine = species.join("");

    if (species.length === 2) {
        evoLine = "N/A";
    } else {
        evoLine = evoLine.replaceAll(" => , ", " => ");
        evoLine = evoLine.substring(0, evoLine.length - 4);
    }
    evolutionLine.textContent = "Evolution Line: " + evoLine;
}

//Get favorites button
getFavorites.addEventListener('click', () => {
    let favorites = getLocalStorage();

    getFavoritesDiv.textContent = "";

    favorites.map(pokéName => {
        let p = document.createElement('p');

        p.textContent = pokéName;
        p.className = "text-lg font-medium text-gray-900 dark:text-white";

        let button = document.createElement('button');
        button.type = "button";
        button.textContent = "X";
        button.classList.add(
            "text-gray-400",
            "bg-transparent",
            "hover:bg-gray-200",
            "hover:text-gray-900",
            "rounded-lg",
            "text-sm",
            "w-8",
            "h-8",
            "justify-end",
            "dark:hover:bg-gray-600",
            "dark:hover:text-white"
            )
        button.addEventListener('click', () => {
            removeFromLocalStorage(pokéName);
            p.remove();
            saveToFavorites.src = ("../assets/NotFavorite.png");
        })
        p.append(button);
        getFavoritesDiv.append(p);
    })
})


let getPokémon;
//Initial Pokémon search
search.addEventListener('keydown', async (event) => {
    if (event.key === "Enter") {
        let PokémonLc = event.target.value;
        PokémonLc = PokémonLc.toLowerCase();
        getPokémon = await PokémonAPI(PokémonLc);
        if (getPokémon.id < 650) {
            LoadPokémon(getPokémon);
        }
    }
})

//Get a random Pokémon
randomPokémon.addEventListener('click', async () => {
    let randomMon = Math.floor(Math.random() * (650 - 0 + 1)) + 0;
    getPokémon = await PokémonAPI(randomMon);
    LoadPokémon(getPokémon);
})

//Save Pokémon to favorites
saveToFavorites.addEventListener('click', () => {
    saveToLocalStorage(getPokémon.name);
    saveToFavorites.src = ("../assets/Favorite.png");
})
