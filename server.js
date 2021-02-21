const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/UsersRoute');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://dbAdmin:2oonies4me@cluster0.6dh71.mongodb.net/exercise_4?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(usersRouter);

app.listen(3000, () => { console.log('Server is currently running...')});