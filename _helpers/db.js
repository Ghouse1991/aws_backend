const config = require('config.json');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);

// const uri = process.env.MONGODB_URI;
// mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology: true}
// );

// const connection = mongoose.connection;
// connection.once('open',()=>{
//     console.log("Mongo DB database connection opened successfully");
// });

mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};