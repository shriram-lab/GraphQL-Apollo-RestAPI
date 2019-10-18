"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserModelSchema_1 = __importDefault(require("./User/UserModelSchema"));
exports.Users = mongoose_1.default.model('Users', UserModelSchema_1.default);
//# sourceMappingURL=models.js.map