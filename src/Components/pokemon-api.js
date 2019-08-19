
async function getPokemonData(options) {  
    const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
    
    const page = options.page || 1;
    const search = options.search;
   
    const url = `${URL}?page=${page || 1}&pokemon=${search || ''}`;

    const response = await fetch(url);
    const results = await response.json();
    return {
        results: results,
        count: page,
    };
}

export default getPokemonData;