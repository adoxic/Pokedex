import Component from './Component.js';

class PokemonFilter extends Component {

    onRender(select) {
        const onFilter = this.props.onFilter;
        
        select.addEventListener('input', () => {

            onFilter(select.value);
        });
    }

    renderHTML() {
        const pokemon = this.props.pokemon;
        const types = getUniqueTypes(pokemon);
        const optionsHTML = renderOptionsHTML(types);

        return /*html*/`

            <select name="type">
                <option value="all">All Pokemon</option>
                ${optionsHTML}
            </select>

        `;
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