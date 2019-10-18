import mongoose from 'mongoose';
import UserModelSchema from "./User/UserModelSchema";

export const Users = mongoose.model('Users', UserModelSchema);