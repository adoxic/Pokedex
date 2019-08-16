import Header from '../src/Components/Header.js';
// import pokemon from '../pokedex/pokedex-data.js';
import PokemonItem from '../src/Components/PokemonItem.js';

const test = QUnit.test;

QUnit.module('Render Pokemon');

test('renders header', assert => {
    
    const expected = /*html*/`<header><h1>Explore Pokemon!</h1></header>`;

    // act
    
    const header = new Header;
    const html = header.renderHTML();
    // assert
    assert.deepEqual(html, expected);
});

test('renders pokemon item', assert => {
    
    const expected = /*html*/`
    <li>
    <div class="pokemon">
        <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt="pikachu">
        <div class="name-type">
            <p>pikachu</p>
            <p>electric</p>
            <p class="hidden">NA</p>
            <p>Base total: 320</p>
            <p>Best Stat: speed</p>
        </div>
    </div>
</li>
    `;

    // act
    
    const pokemon = new PokemonItem;
    const html = pokemon.renderHTML();

    // assert
    assert.htmlEqual(html, expected);
});