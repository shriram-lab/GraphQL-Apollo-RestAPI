import express from 'express';
import mongoose from 'mongoose';
import UserRoutes from './routes/User/UserRoute';

mongoose.connect('mongodb://localhost:27017/local', (_err, _res) => {
    if (_err) {
        return console.error(_err);
    }
    return console.log(`Database connected succssfully`)
});

const app = express();
const port = 3000;

app.use('/', UserRoutes);

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});