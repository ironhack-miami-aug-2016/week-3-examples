# lib/color_counter.rb

class ColorCounter
  def count_colors(the_color, color_array)
    count = 0

    color_array.each do |temp_color|
      if temp_color == the_color
        count += 1
      end
    end

    count
  end
end
