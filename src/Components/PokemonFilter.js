//import Component from './Component.js';
// import { getPokemonTypes } from './pokemon-api.js';
// import hashStorage from './hash-storage.js';
// STRETCH GOAL IN PROGRESS
// class PokemonFilter extends Component {

//     onRender() {
//         const onFilter = this.props.onFilter;
        
//         document.addEventListener('select', () => {

//             renderOptionsHTML
//             hashStorage.set({
//                 type: select,
//             });
//         });
        
//     }

//     renderHTML() {
//         async function loadPokemonTypes() {
//             hashStorage.remove('page');
//             hashStorage.remove('search');
//             const options = hashStorage.get();
//             console.log(options, 'filter');

//             const data = await getPokemonTypes(options);
          
//             const pokemonTest = data.results;
//             const pokemon = pokemonTest.results;
//             const types = getUniqueTypes(pokemon);
//             const optionsHTML = renderOptionsHTML(types);

//             return /*html*/`
    
//                 <select name="type">
//                     <option value="all">All Pokemon</option>
//                     ${optionsHTML}
//                 </select>
    
//             `;
//         }
//         return loadPokemonTypes();

//     }
// }

// function getUniqueTypes(pokemon) {
//     const types = [];
//     pokemon.forEach(onePokemon => {
//         console.log(onePokemon);
//         if(!types.includes(onePokemon.type_1)) {
//             types.push(onePokemon.type_1);
//         }
//     });
//     types.sort();
//     return types;
// }

// function renderOptionsHTML(types) {
//     const optionsArray = types.map(type => {
//         return /*html*/`
//             <option value="${type}">${type}</option>
//         `;
//     });
    
//     return optionsArray.join('');
// }

// export default PokemonFilter;