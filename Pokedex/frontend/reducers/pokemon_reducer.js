import { RECIEVE_ALL_POKEMON } from "../actions/pokemon_actions";
import { selectAllPokemon } from "./selectors";



const pokemonReducer = (state = {}, action) => {
  let nextState = {};
  Object.freeze(state);
  switch (action.type) {
    case RECIEVE_ALL_POKEMON:
      nextState = selectAllPokemon(state)      
      // Object.values(action.pokemon).forEach( pokemon => {
      //   nextState[pokemon.id] = pokemon;
      // });
      return nextState;
    default:
      return state;
  }
};

export default pokemonReducer;