async function searchCharacter(url) {
    return fetch(`https://cors.eu.org/https://rickandmortyapi.com/api/character/?${url}`, { 
        method: 'GET',
        mode: 'cors'
    }).then( 
        response => response.json())
}

export default searchCharacter;