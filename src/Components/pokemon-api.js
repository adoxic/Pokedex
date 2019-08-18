
async function getPokemonData(options) {  
    const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
    
    const page = options.page || 1;
    //const search = options.search;&search=${search || ''}
   
    const url = `${URL}?page=${page || 1}`;
   console.log(url);
    const response = await fetch(url);
    const results = await response.json();
    return {
        results: results
    };
}

export default getPokemonData;