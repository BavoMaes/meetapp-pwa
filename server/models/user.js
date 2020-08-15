const mongoose = require('mongoose');
const queries = require('./queries');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    employer: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const userModel = mongoose.model('User', userSchema);

const createUser = async (document) => {
    return await queries.create(userModel, document)
};
const findUserById = async (document) => {
    return await queries.findById(userModel, document)
};
const updateUser = async (document) => {
    return await queries.update(userModel, document)
};
const deleteUser = async (document) => {
    return await queries.delete(userModel, document)
};

module.exports = {
    model: userModel,
    create: createUser,
    findById: findUserById,
    update: updateUser,
    delete: deleteUser
}