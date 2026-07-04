import express from 'express';
import bodyParser from 'body-parser';
import category from './category.js';
var app = express();

app.use(express.urlencoded({ 'extended': true }));
app.use(bodyParser.json());
// here we define routes for all the api.
const CATEGORY = "/category";
/*
    localhost:5000/category
    or 
    localhost:5000/category/50
    or 
    localhost:5000/category/50/name
*/
app.post(CATEGORY,(request,response) => category.insert(request,response));
app.put(CATEGORY,(request,response) => category.update(request,response));
app.delete(CATEGORY,(request,response) => category.delete(request,response));
app.get(CATEGORY,(request,response) => category.select(request,response));



// run app on port no 5000
app.listen(5000);
console.log('ready to accept request')