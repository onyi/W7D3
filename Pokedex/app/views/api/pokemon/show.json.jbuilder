# json.set! pokemon.id do
#     json.extract! pokemon, :id, :name
#     json.image_url asset_path(pokemon.image_url)
# end

json.set! :pokemon, @pokemon

# json.set! :items, @pokemon.items.each do |item|
#   json.set! item.id
# end

# json.set! :items, @pokemon.items do |item|
#   json.extract! item, :id, :name, :pokemon_id
# end

json.set! :items, @pokemon.items.each do |item|
  json.set! item.id, item
end