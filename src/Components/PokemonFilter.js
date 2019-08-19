import Component from './Component.js';
import getPokemonData from './pokemon-api.js';
import hashStorage from './hash-storage.js';

class PokemonFilter extends Component {

    onRender(select) {
        const onFilter = this.props.onFilter;
        
        select.addEventListener('input', () => {

            onFilter(select.value);
        });
    }

    async renderHTML() {
        async function loadPokemonTypes() {
            

            const data = await getPokemonData(options);
          
            const pokemonTest = data.results;
            const pokemon = pokemonTest.results;
            const types = getUniqueTypes(pokemon);
            const optionsHTML = renderOptionsHTML(types);

            return /*html*/`
    
                <select name="type">
                    <option value="all">All Pokemon</option>
                    ${optionsHTML}
                </select>
    
            `;
        }
        const htmlResult = await loadPokemonTypes();
        console.log(htmlResult, 'htmlResult');
        return htmlResult;

    }
}

function getUniqueTypes(pokemon) {
    const types = [];
    pokemon.forEach(onePokemon => {
        if(!types.includes(onePokemon.type_1)) {
            types.push(onePokemon.type_1);
        }
    });
    types.sort();
    return types;
}

function renderOptionsHTML(types) {
    const optionsArray = types.map(type => {
        return /*html*/`
            <option value="${type}">${type}</option>
        `;
    });
    
    return optionsArray.join('');
}

export default PokemonFilter;