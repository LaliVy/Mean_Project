var Product = require("../models/products");
module.exports = {

createProduct: function(req, res){
  console.log('Adding product to the database.', req.body);
  var new_product = new Product(req.body);
  new_product.save(function(err, data) {
    if(err) {
      console.log('-----------------');
      console.log('-----------------');
      console.log('something went wrong while creating product');
      res.json({error:err.errors});
    } 
    else { 
      console.log('successfully added product to the database.');
      res.json({data: data});
    }
    
  })
},

editProduct: function(req, res){
  Product.findByIdAndUpdate(req.body._id, req.body, function(err) {
    if(err) {
      console.log('something went wrong while editing product');
      return handleError(err);
    } 
  }); 
},

deleteProduct: function(req, res){
  console.log('deleting the product.', req.body);
  //console.log('editing id.', req.body._id);
  Product.findOneAndDelete({_id: req.body._id}, function(err) {
    if(err) {
      console.log('something went wrong while deleted Product');
      return handleError(err);
    } 
  }); 
},

getProducts: function (req, res){
  Product.find({}, function(err, allProducts) {
  if(err) {
    console.log('something went wrong while retrieving Products');
    return handleError(err);
  } 
  else { 
    res.json({products: allProducts});
  }
})
},

/*getAuthorById: function(req, res){
  Author.findById(req.params.id, function(err, selectedAuthor) {   
    if(err) {
      console.log('something went wrong while retrieving Author');
      return handleError(err);
    } 
    else { 
      res.json({author: selectedAuthor});
    }
  }*/

/*createRating: function(req, res){
  //Get the parent first i.e cake by id;
  Cake.findById(req.params.cake_id, function(err, cake) {
    if(err) {
      console.log('something went wrong finding the cake');
      res.json(err);
    } 
    else{
      cake.ratings.push(req.body);
      cake.save(function (err) {
        if (err) return handleError(err)
        console.log('Successfully added rating to cake!');
      });
    }
  })
},*/
}





