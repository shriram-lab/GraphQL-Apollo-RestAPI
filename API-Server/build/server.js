"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const UserRoute_1 = __importDefault(require("./routes/User/UserRoute"));
mongoose_1.default.connect('mongodb://localhost:27017/local', (_err, _res) => {
    if (_err) {
        return console.error(_err);
    }
    return console.log(`Database connected succssfully`);
});
const app = express_1.default();
const port = 3000;
app.use('/', UserRoute_1.default);
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=server.js.map