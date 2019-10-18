import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
    firstName: String,
    lastName: String
});

export default UserModelSchema;