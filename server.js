const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoute = require('./routes/shop'); //inject code from shop.js
const adminRoute = require('./routes/admin');
const errorPage = require('./controllers/404');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(userRoute);
app.use('/admin', adminRoute);

//app.get('admin/add-product', function(req, res){
//    res.sendFile(path.join(__dirname, 'views', 'add-product.html'));
//});

//app.use(function(req, res, next){
//    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
//});

app.use(errorPage.getErrorPage);

app.listen(3000, ()=> {
    console.log("Server is running on Port 3000.");
});