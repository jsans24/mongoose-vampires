const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/vampires';

// connect to MongoDB (local)
// first argument is the connection string
// second argument is config object
mongoose.connect(connectionString, {
  useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB successfully connected...');
});

mongoose.connection.on('error', (error) => {
    console.log(`MongoDB connection error: ${error}`);
});

module.exports = {
    Vampire: require('./Vampire'),
};

