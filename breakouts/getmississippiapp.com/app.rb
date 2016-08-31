require "sinatra"
require "sinatra/reloader" if development?

require_relative "lib/product.rb"


# Ghetto database
products = [
  Product.new("hemp", "Hemp", "Great tasting Hemp Hearts have a slightly nutty taste, similar to a sunflower seed or pine nut.", "http://static1.squarespace.com/static/53bdd66be4b0817cc87aaf13/t/53e6bc99e4b09aec91758466/1407630502058/Hemp.jpg?format=1500w"),
  Product.new("moonshine", "Moonshine", "Now here’s a volume you can really drink to!  Something’s brewing in these pages, and it’s moonshine—a word that evokes fascination, curiosity, and a warm sense of nostalgia.", "http://moonshinerecipe.org/wp-content/uploads/2014/01/MoonshineJug.jpg"),
  Product.new("fried-chicken", "Fried Chicken", "Fried chicken is comfort food at its finest. Served alongside a biscuit, atop waffles, or just on its own, fried chicken is one of the most universally loved foods around.", "http://www4.theoakkroom.com/wp-content/uploads/2015/03/fried-chicken.jpg"),
  Product.new("shotgun", "Shotgun", "Beretta® designed the A300 Outlander® Semi-Auto Shotgun, coated with TrueTimber® DRT™ Camo, specifically for waterfowl hunting. The TrueTimber DRT (Dead Right There) coating reduces corrosion inherent to goose and duck hunting conditions, and blends in with swamps and wetlands with a brown/gray contrast, yet has enough hazy yellow coloration for cattails and CRP fields.", "http://www.benelliusa.com/sites/default/files/styles/firearm_1004/public/originals/product-firearms/828u-nickel-silo_1.png?itok=OVJQ0pQk"),
  Product.new("pizza", "Nizar's Pizza", "Nizar's famous imaginary perfect pizza.", "https://media.giphy.com/media/LX3Q9vcjwhKYE/giphy.gif"),
  Product.new("flip-flops", "Fancy Flip Flops", "Fancy designer flip flops.", "https://cache.net-a-porter.com/images/products/607338/607338_fr_xl.jpg")
]


get "/" do
  @products_array = products

  erb :home
end


get "/products/new" do
  erb :new_product
end

post "/products" do
  new_product = Product.new(params[:item_name], params[:title], params[:description], params[:image])
  products.push( new_product )

  redirect to("/products/#{new_product.item_name}")
end


get "/products/:item" do
  found_product = nil

  products.each do |the_product|
    if the_product.item_name == params[:item]
      found_product = the_product
    end
  end

  if found_product == nil
    status 404
    @item = params[:item]
    @products_array = products

    erb :product_not_found

  else
    @title = found_product.title
    @description = found_product.description
    @image = found_product.image

    erb :product
  end
end
