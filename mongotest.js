var MongoClient = require('mongodb').MongoClient;

// Connect to the db (labelled 'yes')
MongoClient.connect("mongodb://localhost:27017/yes", function (err, db) {

    db.collection('Persons', function (err, collection) {

   collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
   collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
   collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });

         collection.find().toArray(function(err, items) {
            if(err) throw err;
            console.log(items);
        });

    });

});
