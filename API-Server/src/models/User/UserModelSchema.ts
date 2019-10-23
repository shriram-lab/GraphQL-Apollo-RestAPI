import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
    firstName: String,
    lastName: String,
    discription: String,
    isDelete:{
        type:Boolean,
        default:false
    }
});

export default UserModelSchema;