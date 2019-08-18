import Component from '../Components/Component.js';
import Header from '../Components/Header.js';
import PokemonList from '../Components/PokemonList.js';
//import pokemon from '../../pokedex/pokedex-data.js';
import FilterPokemon from '../Components/PokemonFilter.js';
import SearchPokemon from '../Components/SearchPokemon.js';
import getPokemonData from '../Components/pokemon-api.js';


class App extends Component {
    onRender(dom) {
        let props = {};
        let options = {
            page: 2
        };
        async function loadPokemon() {

            const data = await getPokemonData(options);
            console.log(data);
            const pokemonTest = data.results;
            const pokemon = pokemonTest.results;
            
            props = {
                pokemon: pokemon
            };
            
            const pokemonList = new PokemonList(props);
            const pokemonListDOM = pokemonList.renderDOM();
        
            const listSection = dom.querySelector('.list-section');
            listSection.appendChild(pokemonListDOM);
        
            const searchPokemon = new SearchPokemon();
            const searchPokemonDOM = searchPokemon.renderDOM();
            const searchSection = dom.querySelector('.search');
            searchSection.appendChild(searchPokemonDOM);

            const filteredPokemonProps = {
                pokemon: pokemon,
                onFilter: (pokeType) => {
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

            const optionsSection = dom.querySelector('.filter');
            optionsSection.appendChild(filteredPokemonDOM);
        }
        

        loadPokemon();
            
      
        const header = new Header;
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
            
            
        


    }

    renderHTML() {
        return /*html*/`
        <div>
        <!-- header goes here -->
                <div class="nav">
                    <form class="search">
                    </form>
                    <div class="sort">
                        <p>Filter Pokemon by Type</p>
                        <section class="filter">
                        </section>
                    </div>
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