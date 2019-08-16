import Component from './Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {
    
    onRender(dom) {
        const pokemon = this.props.pokemon;
        
        pokemon.forEach(onePokemon => {
            const props = { onePokemon: onePokemon };
            
            const pokemonItem = new PokemonItem(props);
            const pokemonItemDOM = pokemonItem.renderDOM();
            dom.appendChild(pokemonItemDOM);
        });
    }

    renderHTML() { 
        return /*html*/ `
        <ul class="all-pokemon">
        </ul>
        `;
    }


    
}

export default PokemonList;