const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost/role_auth";

const connectToMongo = async () => {
 mongoose.connect(mongoURI, await console.log("Connected to mongo Successful")
    );
}

connectToMongo();