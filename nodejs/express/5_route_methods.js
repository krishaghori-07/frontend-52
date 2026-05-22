var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//define middleware
app.use(express.urlencoded({ 'extended': true }));
app.use(bodyParser.json());
var list = [
    { 'name': 'Ram', 'mobile': 1234567890 },
    { 'name': 'Laxman', 'mobile': 1122334455 },
    { 'name': 'Bharat', 'mobile': 6677889900 },
];

//get contact
app.get("/contact", function (request, response) {
    response.json(list);
});
//used to insert new contact in list 
app.post("/contact", function (request, response) {
    var name = request.body.name;
    var mobile = request.body.mobile;
    //create object
    var person = { 'name': name, 'mobile': mobile };
    //object insert into list 
    list.push(person);
    response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'contact inserted' }])
});
//used to update existing contact in list 
// input: name, mobile 
app.put("/contact", function (request, response) {
    var name = request.body.name;
    var mobile = request.body.mobile;
    var isUpdate = false;
    updatedList = list.filter((item) => {
        if (item.name === name) {
            item.mobile = mobile;
            isUpdate = true;
        }
        return item;
    });
    if (isUpdate === true) {
        list = updatedList;
        response.send([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'contact updated' }]);
    }
    else {
        response.send([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'contact not found' }]);
    }

});

//used to delete existing contact in list 
// input: name (Bharat)
app.delete("/contact", function (request, response) {
    var name = request.body.name;
    var filteredList = list.filter((item) => {
        if (name != item.name)
            return item
    });
    if (list.length === filteredList.length) {
        response.send([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'contact not found' }]);
    }
    else {
        list = filteredList;
        response.send([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'contact deleted' }]);
    }

});

app.listen(5000);
console.log('ready to accept request.');
