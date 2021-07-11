//Updating data in mongoDB

db.items.updateOne({name: "Apple 30s"}, {$set: {price: 2}}) //Update the only or the first item with name Apple 30s
//Take two things 1.Filter statement 2.The operation

db.items.updateMany({rating: 4.5}, {$set: {rating: 4.7}}) //Update all the items with price rating 4.5 to rating 4.7