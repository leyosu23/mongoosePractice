const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
    useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const kiwi = new Fruit({
    name: "kiwi",
    rating: 7,
    review: "Pretty solid as a fruit."
});

const orange = new Fruit({
    name: "orange",
    rating: 5,
    review: "Good fruit."
});

const banana = new Fruit({
    name: "banana",
    rating: 10,
    review: "Awesome fruit."
});


//fruit.save();

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("successfully saved");
//     }
// })


Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        //console.log(fruits);
        mongoose.connection.close();

        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });

    }
});


// const personSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//     name: "Tomas",
//     age: 27
// });

// person.save();