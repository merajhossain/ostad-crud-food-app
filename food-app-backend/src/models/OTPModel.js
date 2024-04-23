const mongoose=require('mongoose');

const DatabaseScheme = mongoose.Schema({
    email: { type: String, required: true },
    otp: { type: String, required: true },
    status: { type: String, required: true }
}, { versionKey: true });

module.exports = mongoose.model('otps', DatabaseScheme);