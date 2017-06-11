/**
 * Created by savio on 11/06/2017.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://easify:easify123@ds121192.mlab.com:21192/easify');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var UserSchema = mongoose.Schema({
    name : {required:true, type:String},
    role : {required:true, type:String}
});

var UserModel = mongoose.model ("UserModel", UserSchema);

app.listen(3000, function () {
    console.log('Started serving Easify Academic...');
});

app.get("/rest/user", function (res) {
    UserModel.find(function (err, users) {
        if (err) return console.error(err);
        res.json(users);
    })
});

app.post("/rest/user", function (req,res) {
    var post = req.body;
    console.log('Posting user...');
    var user = new UserModel(post);
    user.save(function (err) {
        if (err)
            console.error(err);
        else
            console.log('User saved!')
    })
    res.json(user);
});

