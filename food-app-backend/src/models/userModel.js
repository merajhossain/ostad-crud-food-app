const mongoose=require('mongoose');

const DatabaseScheme = mongoose.Schema({
    email: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true }
}, { versionKey: 'true' });

module.exports = mongoose.model('users', DatabaseScheme);
