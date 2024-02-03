const saveToLocalStorage = (getPokémon) => {
    let favorites = getLocalStorage();

    if(!favorites.includes(getPokémon)) {
        favorites.push(getPokémon);
    }
    localStorage.setItem("Favorites", JSON.stringify(favorites))
}

const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("Favorites");

    if(localStorageData == null){
        return [];
    }
    return JSON.parse(localStorageData);
}

const removeFromLocalStorage = (getPokémon) => {
    let favorites = getLocalStorage();

    let namedIndex = favorites.indexOf(getPokémon);

    favorites.splice(namedIndex, 1);

    localStorage.setItem("Favorites", JSON.stringify(favorites));
}

export {saveToLocalStorage, getLocalStorage, removeFromLocalStorage}