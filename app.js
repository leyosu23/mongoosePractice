const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
    useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "no name specified"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const kiwi = new Fruit({
//     name: "kiwi",
//     rating: 7,
//     review: "Pretty solid as a fruit."
// });

// const orange = new Fruit({
//     name: "orange",
//     rating: 5,
//     review: "Good fruit."
// });

const peach = new Fruit({
    rating: 10,
    review: "Yummy peach."
});


//peach.save();

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("successfully saved");
//     }
// })


// Fruit.find(function (err, fruits) {
//     if (err) {
//         console.log(err);
//     } else {
//         //console.log(fruits);
//         mongoose.connection.close();

//         fruits.forEach(function (fruit) {
//             console.log(fruit.name);
//         });

//     }
// });



const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
    name: "pineapple",
    rating: 7,
    review: "Great pineapple."
});

//pineapple.save();

const person = new Person({
    name: "John",
    age: 29,
    favouriteFruit: pineapple
});

//person.save();


Person.updateOne({
    name: "Tomas"
}, {
    favouriteFruit: peach
}, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully updated favourite Fruit for Thoman");
    }
})

// Fruit.updateOne({
//     _id: "6180b3a88bf61e30bdf83f53"
// }, {
//     name: "Mango"
// }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated");
//     }
// })

// Fruit.deleteOne({
//     _id: "6180b3a88bf61e30bdf83f53"
// }, {
//     name: "Mango"
// }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted");
//     }
// })