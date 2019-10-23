import express from 'express';
import { Users } from "../../models/models";
const router = express.Router();

router.get('/user', (req, res) => {

    Users.find({ isDelete: false }).exec(function (errUser, resUser) {
        if (errUser) {
            return res.send(errUser)
        }
        return res.send(resUser)
    })

});

router.post('/user', (req, res) => {

    const saveUser = new Users({});

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

router.delete('/user/:id', (req, res) => {
    Users.findOne({ _id: req.params.id }).exec((delerr, delres) => {
        if (delerr) {
            return res.send(delerr);
        } else {
            const deleteUser = new Users(delres);

            deleteUser.isDelete = true;
            deleteUser.save((_errDel, _resDel) => {

                if (_errDel) {
                    return res.send(_errDel);
                }
                return res.send(_resDel);
            })
        }

    });
})

export default router;