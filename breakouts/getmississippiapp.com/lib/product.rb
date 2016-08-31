class Product
  attr_accessor(:item_name, :title, :description, :image)

  def initialize(item_name, title, description, image)
    @item_name = item_name
    @title = title
    @description = description
    @image = image
  end
end
