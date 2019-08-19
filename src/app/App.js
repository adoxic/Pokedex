import Component from '../Components/Component.js';
import Header from '../Components/Header.js';
import PokemonList from '../Components/PokemonList.js';
//import pokemon from '../../pokedex/pokedex-data.js';
//import PokemonFilter from '../Components/PokemonFilter.js';
import SearchPokemon from '../Components/SearchPokemon.js';
import getPokemonData from '../Components/pokemon-api.js';
import Paging from '../Components/Paging.js';
import hashStorage from '../Components/hash-storage.js';

class App extends Component {
    onRender(dom) {
        const pokemonList = new PokemonList({ pokemon: [] });
        const pokemonListDOM = pokemonList.renderDOM();
        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(pokemonListDOM);
        
        const paging = new Paging();
        const pagingDOM = paging.renderDOM();
        listSection.appendChild(pagingDOM);

        const searchPokemon = new SearchPokemon();
        const searchPokemonDOM = searchPokemon.renderDOM();
        const searchSection = dom.querySelector('.search');
        
        searchSection.appendChild(searchPokemonDOM);
        
        async function loadPokemon() {
            const options = hashStorage.get();
            const data = await getPokemonData(options);
            
            const pokemonTest = data.results;
            const total = data.results;
            const totalCount = total.count;

            const pokemon = pokemonTest.results;
            
            pokemonList.update({ pokemon: pokemon });
            
            paging.update({ 
                totalCount: totalCount,
                currentPage: +options.page
            });
        
            // const filteredPokemon = new PokemonFilter();
            // const filteredPokemonDOM = filteredPokemon.renderDOM();

            // const optionsSection = dom.querySelector('.filter');
            // optionsSection.appendChild(filteredPokemonDOM);
        }
        
        
        loadPokemon();
        
        window.addEventListener('hashchange', () => {
            loadPokemon();
        });
      
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