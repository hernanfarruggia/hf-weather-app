function getLocalStorage () {
    return JSON.parse(window.localStorage.getItem('searchList')) || [];
}

function setLocalStorage (value) {
    let searchList = getLocalStorage() || [];

    if (!Array.isArray(value)) {
        if (searchList.includes(value)) return;
    
        if (searchList.length === 5) {
            searchList = searchList.slice(1,5);
        }
    
        searchList.push(value);
    } else {
        searchList = value;
    }

    window.localStorage.setItem('searchList', JSON.stringify(searchList));
}

export default {
    get: getLocalStorage,
    set: setLocalStorage
};