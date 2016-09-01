# app.rb

require_relative("lib/animal.rb")


dymitri = Animal.new("Dymitri", "Huff...")
dymitri.make_noise
dymitri.shout


chewie = Animal.new("Chewie", "Woof")
chewie.make_noise
chewie.shout
