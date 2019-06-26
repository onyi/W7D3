@pokemon.each do |pokemon|
  json.partial! 'api/pokemon/show', pokemon: pokemon
end
