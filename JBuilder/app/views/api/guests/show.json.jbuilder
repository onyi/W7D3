json.partial! "api/guests/guest", guest: @guest

json.gifts @guest.gifts, partial: "api/gifts/gifts", as: :gift


## index of all this guests gifts

# json.extract! @guest, :id, :name, :age, :favorite_color