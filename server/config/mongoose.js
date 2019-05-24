var mongoose = require('mongoose');
//var getDbConnection;

module.exports = {
    getDbConnection: function(){
        mongoose.connect('mongodb://localhost/basic_mongoose');
    }
}