import express from 'express';
import mongoose from 'mongoose';
import UserRoutes from './routes/User/UserRoute';
import bodyParser from 'body-parser';


mongoose.connect('mongodb://localhost:27017/local', (_err, _res) => {
    if (_err) {
        return console.error(_err);
    }
    return console.log(`Database connected succssfully`)
});

const app = express();
const port = 4500;

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/', UserRoutes);

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});