const mongoose=require('mongoose');

const DatabaseScheme = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true }
}, { versionKey: "true" });

module.exports = mongoose.model('tasks', DatabaseScheme);