import Component from './Component.js';

class SearchPokemon extends Component {
    renderHTML() {
        return /*html*/`
        <div>
            <input type="text">
            <input type="submit" value="Submit">
        </div>
        `;
    }
}

export default SearchPokemon;