const express = require('express');
const userModel = require('../model/Users');
const app = express();

// route to user

app.get('/user', async (req, res) => {
    const user = await userModel.find({});
    try {
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/user', async (req, res) => {
    const user = new userModel(req.body);

    try {
        await user.save((err) => {
            if(err) {
                // error handler goes here
                console.log(err.errors['username'].message)
                console.log(err.errors['email'].message)
                console.log(err.errors['zip'].message)
                console.log(err.errors['phone'].message)
                res.send(err)
            } else {
                res.send(user);
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = app
