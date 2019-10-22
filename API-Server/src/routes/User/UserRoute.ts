import express from 'express';
import { Users } from "../../models/models";
const router = express.Router();

router.get('/user', (req, res) => {

    Users.find({}).exec(function (errUser, resUser) {
        if (errUser) {
            return console.error(errUser)
        }
        return res.send(resUser)
    })

});

router.post('/user', (req, res) => {

    const saveUser = new Users({});

    // console.log(req.body)

    saveUser.firstName = req.body.firstName;
    saveUser.lastName = req.body.lastName;
    saveUser.discription = req.body.discription;

    saveUser.save((_err, _res) => {
        if (_err) {
            return console.error(_err)
        }
        return res.send(_res);
    });

})


export default router;