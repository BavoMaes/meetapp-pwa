const mongoose = require('mongoose');

const atlasUser = encodeURIComponent(process.env.MONGO_ATLAS_USER);
const atlasPassword = encodeURIComponent(process.env.MONGO_ATLAS_PASSWORD);

const initializeDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${atlasUser}:${atlasPassword}@meetapp-y4kxu.gcp.mongodb.net/test?retryWrites=true&w=majority`, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            }
        );

        mongoose.Promise = global.Promise;
    } catch (error) {
        throw error
    }
}
    

module.exports = {
    init: initializeDatabase
}
