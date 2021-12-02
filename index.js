const express = require('express');
const mongoose = require("mongoose");

const app = express();
const ejs = require('ejs');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static("views"));
const uri = process.env.MONGODB_URI;
mongoose
    .connect(
        ' mongodb+srv://albertdb:albertdb449@cluster0.wyknk.mongodb.net/sampletest?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
        }
    )
    .then(() => console.log('mongodb conected'))
    .catch(err => console.log(err));


const UsersSchema = new mongoose.Schema({
    imgname: {
        type: String,
        required: true,
    }
});


const Users = mongoose.model('Users', UsersSchema);

app.get('/addDefaultImages', (req, res) => {
   const arr = [{ imgname: '3.jpg' },{ imgname: '4.jpg' },{ imgname: '5.jpg' }];
Users.insertMany(arr, function(err, users) {
    // Users.create({
    //     imgname:'4.jpg',
    // })
    if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
            
})
        .then(user => res.send(user))
        .catch(err => res.send(err));

});
// const Users = mongoose.model('Users', UsersSchema);

app.get('/', (req, res) => {
    Users.find({}, function (err, users) {
        res.render('index', {
            imageslist: users
        })
    })
})

// const { DB_CONNECTION_STRING } = process.env

// mongoose.connect(DB_CONNECTION_STRING)
// const db = mongoose.connection




app.listen(PORT, () => {
    console.log('server has been started...')
})