//Searching data in mongoDB
db.items.find() //Returns all items

db.items.find({price: 21000}) //Returns the items with price 21000

db.items.find({price: {$gte: 25000}}) //Returns the items with price greater than or equal to 25000

db.items.find({rating: {$gt: 4.5} , price: {$lt: 25000}}) //Multiple checkings(And object)

db.items.find({ 
    $or:[
        {rating: {$gt: 4.5}} , 
        {price: {$lt: 25000}}
    ]
}) //Or operation

db.items.find({rating: {$gt: 3.5}}, {rating: 1}) //Here '1' means only returns ratings

db.items.find({rating: {$gt: 3.5}}, {rating: 1 , price: 1}) //Returns price and rating