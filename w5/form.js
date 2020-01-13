var express = require('express');
var bodyParser = require('body-parser');
var form = require('express-form');
var field = form.field;
var app = express();

app.use(bodyParser())
var f = form(
    field("name").trim().required().is(/^[a-z]+$/),
    field("surname").trim().required().is(/^[0-9]+$/),
    field("subject").trim().required().is(/^[0-9]+$/),
    field("1").trim().is(/^[0-9]/),
    field("2").trim().is(/^[0-9]/),
    field("3").trim().is(/^[0-9]/),
    field("4").trim().is(/^[0-9]/),
    field("5").trim().is(/^[0-9]/),
    field("6").trim().is(/^[0-9]/),
    field("7").trim().is(/^[0-9]/),
    field("8").trim().is(/^[0-9]/),
    field("9").trim().is(/^[0-9]/),
    field("10").trim().is(/^[0-9]/));

app.get('/', );
app.post('/', f, (req, res) => {
    if(!req.form.isValid) {
        console.log(req.form.errors);
    } else {
        console.log('valid');
    }
});

app.listen(3000);