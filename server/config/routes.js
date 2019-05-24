var ProductController = require("../controllers/ProductController");
module.exports = function(app){

// this route will be triggered if any of the routes above did not match
app.post('/new', function(req, res){
  ProductController.createProduct(req, res);
}); 

app.get('/products', function(req, res){
  ProductController.getProducts(req, res);
});


app.post('/edit', function(req, res){
  ProductController.editProduct(req, res);
});

app.post('/delete', function(req, res){
  ProductController.deleteProduct(req, res);
});
/*
app.get('/author', function(req, res){
  AuthorController.getAuthor(req, res);
});*/

}