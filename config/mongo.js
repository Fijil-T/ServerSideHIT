const mongoose = require('mongoose');
const User = require('../models/user')


const user = new User({
    id: 1231234,
    first_name: 'moshe',
    last_name: 'israeli',
    birthday: new Date('January 10, 1990'),
});

async function createUser(user) {
    const currentUser = await User.findOne({id: user.id})
    if (currentUser === null ) {
        const newUser = User.create(user)
        return newUser;
    }
}

const connectDB = async () => {
    try {
        const url = process.env.DATABASE_URL;
        console.log(url);
        mongoose.set("strictQuery",false);
        const connection = await mongoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        createUser(user);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;