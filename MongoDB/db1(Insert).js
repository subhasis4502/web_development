//Inserting data in database

use subhasisCart

//Inserting one item
db.items.insertOne({name: "Samsung 30s", price: 22000, rating: 4.5, qty:233, sold: 98})

//Inserting many items
db.items.insertMany([{name: "Oppo 30s", price: 25000, rating: 4.3, qty:400, sold: 198}, {name: "Redmi 30s", price: 21000, rating: 4.7, qty:333, sold: 112}, {name: "Apple 30s", price: 49000, rating: 4.5, qty:20, sold: 10}])