require_relative("lib/color_counter.rb")


color_array = ["indigo", "teal", "lilac", "teal", "periwinkle", "black", "periwinkle", "baby blue", "teal"]

p color_array

the_counting_machine = ColorCounter.new

p the_counting_machine.count_colors("indigo", color_array) == 1
p the_counting_machine.count_colors("periwinkle", color_array) == 2
p the_counting_machine.count_colors("teal", color_array) == 3

p the_counting_machine.count_colors("green", color_array) == 0
p the_counting_machine.count_colors("navy blue", color_array) == 0
