import Component from './Component.js';

class PokemonItem extends Component {

    renderHTML() {
        const onePokemon = this.props.onePokemon;
        const bestStat = this.sortStats(onePokemon);
        return /*html*/`
    <li>
        <div class="onePokemon">
            <img src="${onePokemon.url_image}" alt="${onePokemon.pokemon}">
            <div class="name-type">
                <p>${onePokemon.pokemon}</p>
                <p>${onePokemon.type_1}</p>
                <p class="hidden">${onePokemon.type_2}</p>
                <p>Base total: ${onePokemon.special_attack + onePokemon.special_defense + onePokemon.attack + onePokemon.defense + onePokemon.speed + onePokemon.hp}</p>
                <p>Best Stat: ${bestStat}</p>
            </div>
        </div>
</li>
    `;
    }

    sortStats(onePokemon) {
        
        //check if SA is highest
        if(onePokemon.special_attack > onePokemon.special_defense && onePokemon.special_attack > onePokemon.attack && onePokemon.special_attack > onePokemon.speed && onePokemon.special_attack > onePokemon.defense && onePokemon.special_attack > onePokemon.hp) {
            return 'special attack';
        }
        //check if SD is highest
        if(onePokemon.special_defense > onePokemon.attack && onePokemon.special_defense > onePokemon.speed && onePokemon.special_defense > onePokemon.defense && onePokemon.special_defense > onePokemon.hp) {
            return 'special defense';
        }
        //check if Attack is highest
        if(onePokemon.attack > onePokemon.speed && onePokemon.attack > onePokemon.defense && onePokemon.attack > onePokemon.hp) {
            return 'attack';
        }
        //check if Speed is highest
        if(onePokemon.speed > onePokemon.defense && onePokemon.speed > onePokemon.hp) {
            return 'speed';
        }
        //check if Defense is highest else HP is highest
        if(onePokemon.defense > onePokemon.hp) {
            return 'defense';
        } else {
            return 'hp';
        }
    }
    

}


export default PokemonItem;