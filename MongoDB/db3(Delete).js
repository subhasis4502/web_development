//Deleting data in mongoDB

db.items.deleteOne({price: 22000}) //Delete the only or the first item with price 22000

db.items.deleteMany({price: 22000}) //Delete all the items with price 22000