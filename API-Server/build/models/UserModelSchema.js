"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.schema;
const UserModelSchema = new schema({
    firstName: String,
    lastName: String
});
exports.default = UserModelSchema;
//# sourceMappingURL=UserModelSchema.js.map