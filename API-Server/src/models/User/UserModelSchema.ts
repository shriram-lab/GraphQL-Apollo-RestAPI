import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
    firstName: String,
    lastName: String,
    discription: String
});

export default UserModelSchema;