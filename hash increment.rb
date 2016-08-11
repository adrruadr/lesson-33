hh = {}

loop do

print "Enter product id: "
id = gets.chomp

print "Enter amount (how much items you want to order): "
n = gets.chomp.to_i

x = hh[id].to_i #read has value (0 if does not exists)
x = x + n # increased by n
hh[id] = x # set has value

puts hh.inspect
puts '---------------'

end