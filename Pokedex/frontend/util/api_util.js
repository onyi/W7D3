export const fetchAllPokemon = () => (
  $.ajax({
    url: '/api/pokemon/index',
    dataType: 'json',
    method: 'get'
  })
);