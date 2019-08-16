import Component from '../Components/Component.js';
import Header from '../Components/Header.js';
import PokemonList from '../Components/PokemonList.js';
import pokemon from '../../pokedex/pokedex-data.js';
import FilterPokemon from '../Components/PokemonFilter.js';


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

        const filteredPokemonProps = {
            pokemon: pokemon,
            onFilter: (pokeType) => {
                console.log(pokeType);
                let filteredPokemon;
                if(pokeType === 'all') {
                    filteredPokemon = pokemon;
                }
                else {
                    filteredPokemon = pokemon.filter(onePokemon => {
                        return onePokemon.type_1 === pokeType;
                    });
                }

                const updateProps = { pokemon: filteredPokemon };
                pokemonList.update(updateProps);

            }
        };
        
        const filteredPokemon = new FilterPokemon(filteredPokemonProps);
    
        const filteredPokemonDOM = filteredPokemon.renderDOM();

        const optionsSection = dom.querySelector('.nav');
        optionsSection.appendChild(filteredPokemonDOM);


    }

    renderHTML() {
        return /*html*/`
        <div>
        <!-- header goes here -->
                <div class="sort">
                    <p>Filter Pokemon by Type</p>
                    <section class="nav">
                    </section>
                </div>
                <main>
                    <section class="options-section"></section>
                    <section class="list-section"></section>
                </main>
            </div>
        `;
    }
}

export default App;