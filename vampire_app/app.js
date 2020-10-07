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
  // db.Vampire.create(newVampires, (err, newVampirelist) => {
  //   if (err) console.log(err);
  //   console.log(newVampirelist);
  //   process.exit();
  // });
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// db.Vampire.find({gender: 'f'}, (err, femaleVampires) => {
//   if (err) console.log(err);
//   console.log(femaleVampires);
//   process.exit();
// });
// db.Vampire.find({victims: {$gt: 500}}, (err, killingVampires) => {
//   if (err) console.log(err);
//   console.log(killingVampires);
//   process.exit();
// });
// db.Vampire.find({victims: {$lte: 150}}, (err, harmlessVampires) => {
//   if (err) console.log(err);
//   console.log(harmlessVampires);
//   process.exit();
// });
// db.Vampire.find({victims: {$ne: 210234}}, (err, vampires) => {
//   if (err) console.log(err);
//   console.log(vampires);
//   process.exit();
// });
// db.Vampire.find({victims: {$gt: 150, $lt: 500}}, (err, vampires) => {
//   if (err) console.log(err);
//   console.log(vampires);
//   process.exit();
// });
/////////////////////////////////////////////////
// ### Select by exists or does not exist
// db.Vampire.find({title: {$exists: true}}, (err, vampires) => {
  // if (err) console.log(err);
  // console.log(vampires);
  // process.exit();
// });
// db.Vampire.find({victims: {$exists: false}}, (err, vampires) => {
//   if (err) console.log(err);
//   console.log(vampires);
//   process.exit();
// });
// db.Vampire.find({title: {$exists: true}, victims: {$exists: false}}, (err, vampires) => {
//   if (err) console.log(err);
//   console.log(vampires);
//   process.exit();
// });
// db.Vampire.find({victims: {$exists: true, $gt: 1000}}, (err, vampires) => {
//   if (err) console.log(err);
//   console.log(vampires);
//   process.exit();
// });

/////////////////////////////////////////////////
// ### Select with OR
// db.Vampire.find({
//   $or: [{location: 'New York, New York, US'},
//   {location: 'New Orleans, Louisiana, US'}],
// }, 
//   (err, vampires) => {
//   if (err) console.log(err);
//   console.log(vampires);
//   process.exit();
// });
// db.Vampire.find({
//   $or: [{loves: 'brooding'},
//   {loves: 'being tragic'}],
// }, 
//   (err, vampires) => {
//   if (err) console.log(err);
//   console.log(vampires);
//   process.exit();
// });
// db.Vampire.find({
//   $or: [{victims: {$gt: 1000}},
//   {loves: 'marshmallows'}],
// }, 
//   (err, vampires) => {
//   if (err) console.log(err);
//   console.log(vampires);
//   process.exit();
// });
// db.Vampire.find({
//   $or: [{hair_color: 'red'},
//   {eye_color: 'green'}],
// }, 
//   (err, vampires) => {
//   if (err) console.log(err);
//   console.log(vampires);
//   process.exit();
// });


/////////////////////////////////////////////////
//### Select objects that match one of several values
// db.Vampire.find({
//   $or: [{loves: 'shirtsleeves'},
//   {loves: 'frilly collars'}],
// }, 
//   (err, vampires) => {
//   if (err) console.log(err);
//   console.log(vampires);
//   process.exit();
// });
// db.Vampire.find({loves: 'brooding'}, (err, vampires) => {
  //   if (err) console.log(err);
  //   console.log(vampires);
  //   process.exit();
  // });
// db.Vampire.find({
//   $or: [{loves: 'appearing innocent'},
//   {loves: 'trickery'},
//   {loves: 'lurking in rotting mansions'},
//   {loves: 'R&B music'},],
// }, 
//   (err, vampires) => {
//   if (err) console.log(err);
//   console.log(vampires);
//   process.exit();
// });
// db.Vampire.find({
//   loves: {$in: 'fancy cloaks', $nin: 'top hats', $nin: 'virgin blood'},
// }, 
//   (err, vampires) => {
//   if (err) console.log(err);
//   console.log(vampires);
//   process.exit();
// });

/////////////////////////////////////////////////
//### Negative Selection
// db.Vampire.find({
//   loves: 'ribbons', eye_color: {$nin: 'brown'}
// }, 
//   (err, vampires) => {
//   if (err) console.log(err);
//   console.log(vampires);
//   process.exit();
// });
// db.Vampire.find({location: {$nin: 'Rome'}}, (err, vampires) => {
//   if (err) console.log(err);
//   console.log(vampires);
//   process.exit();
// });
// db.Vampire.find({loves: {$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}}, (err, vampires) => {
  //   if (err) console.log(err);
  //   console.log(vampires);
  //   process.exit();
// });
// db.Vampire.find({victims: {$not: {$gt: 200}}}, 
//   (err, vampires) => {
//   if (err) console.log(err);
//   console.log(vampires);
//   process.exit();
// });
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
