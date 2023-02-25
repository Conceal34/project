//express
const express = require("express");
const app = express();
// to point to the static files like the css and client side js
app.use(express.static(__dirname + "/public"));
// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// setting the template engine as ejs
app.set("view engine", "ejs");
// getting the qr code generator package
const qrCode = require("qrcode");


// directing to the home directory
app.get("/", function (req, res) {
    res.render("home", {});
})

// directing to the form
app.get("/qr-fill", function (req, res) {
    res.render("qr-fill", {});
})
// getting data from the form
app.post("/qr-fill", function (req, res) {
    const data = {
        name: body.req.name,
        description: body.req.description,
        // dummy url
        url: "https://www.google.com/",
    }
    stringedData = JSON.stringify(data);

    // generating the qr
    qrCode.toDataURL(stringedData, function (err, out) {
        if (err) res.send("error occured");
        // out is the link to the image generated
        res.render("/qr", { key: out }); //redirecting to the generated qr page
    })
    // add the data saved in const name, description, and QR to the database
})

// directing to the rating page
app.get("/qr-rating", function (req, res) {
    // get the info from the database
    // store the data  in respective variables
    const name = ;
    const description = ;
    const score = ;
    res.render("qr-rating", {key: name, key: description, key: score}); // showing the data using the template on the client side
})
// getting the rating from the audience
app.post("/qr-rating", function (req, res) {
    // rating is the rating given by a single user
    const rating = req.body.rating;
    // get the total of rating till now from database in the variable score
    const score = ;
    // store total response in responses
    let responses = ;
    responses++;
    // update responses in database
    let updatedTotal = score + rating;
    let average = (updatedTotal)/ responses;
    // store this in database or display it on client side

    res.redirect("/", {});
})

app.listen(3000, function () {
    console.log("working on 3000 port");
})