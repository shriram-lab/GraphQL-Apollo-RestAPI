"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = require("../../models/models");
const router = express_1.default.Router();
router.get('/user', (req, res) => {
    models_1.Users.find({}).exec(function (errUser, resUser) {
        if (errUser) {
            return console.error(errUser);
        }
        return res.send(resUser);
    });
});
router.post('/user', (req, res) => {
    const saveUser = new models_1.Users({});
    saveUser.firstName = "Shri";
    saveUser.lastName = "k";
    saveUser.save((_err, _res) => {
        if (_err) {
            return console.error(_err);
        }
        return res.send(_res);
    });
});
exports.default = router;
//# sourceMappingURL=UserRoute.js.map