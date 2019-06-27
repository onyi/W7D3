import * as APIUtil from "../util/api_util"

export const RECIEVE_ALL_POKEMON = "RECIEVE_ALL_POKEMON";

export const receiveAllPokemon = (pokemon) => ({
  type: RECIEVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);


