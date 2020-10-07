// 1. Require Mongoose
const mongoose = require('mongoose')
// 2. Require your Model
const Vampire = require('./models/Vampire')
// 3. Require your extra data source
const populateVampires = require('./populateVampires')
// 4. Connect your database
const db = require('./models')
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.
const newVampires =[
  {
    name: 'Count von Count',
    hair_color: 'black',
    eye_color: 'black',
    dob: new Date(1972, 11, 13, 2, 30),
    loves: ['counting','34,969'],
    location: 'Sessamee Street, New York City, New York, US',
    gender: 'm',
    victims: 0
  },{
    name: 'Selene',
    dob: new Date(1383, 1, 1, 0, 0),
    hair_color: 'dark brown',
    eye_color: 'hazel',
    loves: ['Eve', 'Michael Corvin'],
    location: 'Hungary',
    gender: 'f',
    victims: 4
  },{
    name: 'Mavis',
    dob: new Date(1894, 9, 28, 22, 10),
    hair_color: 'brown',
    eye_color: 'brown',
    loves: ['virgin blood', 'fancy cloaks','frilly collars'],
    gender: 'f',
    victims: 12
  },{
    name: 'Alucard',
    hair_color: 'black',
    eye_color: 'red',
    location: 'London, UK',
    gender: 'm',
    victims: 8321
  },
];
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// db.Vampire.create(populateVampires, (err, vampirelist) => {
//   if (err) console.log(err);
//   console.log(vampirelist);
//   process.exit();
// });
// ### Add some new vampire data
  db.Vampire.create(newVampires, (err, newVampirelist) => {
    if (err) console.log(err);
    console.log(newVampirelist);
    process.exit();
  });

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
