import React from "react";
import ReactDOM from "react-dom";
import {requestAllPokemon} from "./actions/pokemon_actions";
import * as APIUtil from "./util/api_util";
import { configureStore } from "./store/store";
import {selectAllPokemon} from "./reducers/selectors"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  window.requestAllPokemon = requestAllPokemon
  window.fetchAllPokemon = APIUtil.fetchAllPokemon
  let store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon;
  ReactDOM.render(<h1>Pokedex!!!!</h1>, root)
}
);