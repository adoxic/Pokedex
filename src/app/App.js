import Component from '../Components/Component.js';
import Header from '../Components/Header.js';
import PokemonList from '../Components/PokemonList.js';
import pokemon from '../../pokedex/pokedex-data.js';

class App extends Component {
    onRender(dom) {
        const header = new Header;
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
        
        const props = {
            pokemon: pokemon
        };

        const pokemonList = new PokemonList(props);
        const pokemonListDOM = pokemonList.renderDOM();

        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(pokemonListDOM);

    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
        
                <main>
                    <section class="options-section"></section>
                    <section class="list-section"></section>
                </main>
            </div>
        `;
    }
}

export default App;