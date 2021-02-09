var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser('23423234jkljdklfjk!#@')); // 이 값이 key값이 됨

var products = { // 객체
    1: {title: 'The history of web 1'},
    2: {title: 'The next web'}
};
app.get('/products', function(req, res){
    var output='';
    for(var name in products) {
        output += `
        <li>
            <a href="/cart/${name}">${products[name].title}
        </li>`
        //console.log(products[name].title);
    }
    res.send(`
    <h1>Products</h1>
    <ul>${output}</ul>
    <a href="/cart">Cart</a>`);
});
/*
cart = {
    1:1 (제품 아이디 : 담긴 수량),
    2:1
}
*/
app.get('/cart/:id', function(req, res){
    var id = req.params.id;
    if (req.cookies.cart) {
        var cart = req.cookies.cart; // 값이 있으면 존재하는 값 그대로 사용
    } else { 
        var cart = {}; // 비어있는 최초의 객체가 쿠키로 셋팅
    }
    if(!cart[id]) {
        cart[id] = 0;
    }
    cart[id] = parseInt(cart[id])+1;
    res.cookie('cart', cart);
    res.redirect('/cart');
});

app.get('/cart', function(req, res){
    var cart = req.cookies.cart;
    if(!cart) {
        res.send('Empty!');
    } else{
        var output='';
        for(var id in cart) {
            output += `<li>${products[id].title} (${cart[id]})</li>` 
        }
    }
    res.send(`
    <h1>Cart</h1>
    <ul>${output}</li>
    <a href = "/products">Products List</a>`);
});

app.get('/count', function(req, res){
    if(req.signedCookies.count)
        var count = parseInt(req.signedCookies.count);
    else {
        var count = 0;
    } 
    count = count +1;
    res.cookie('count', count, {signed:true});
    res.send('count : '+req.cookies.count);
});
app.listen(3000, function(){
    console.log('Connected 3000 port');
});