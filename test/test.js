const main = require('../main.js');

main({
     "operation":"insert",
     "schema":"dev",
     "table":"dog",
     "records": [
       {
         "name":"Harper",
         "breed":"Mutt",
         "id":"1",
         "age":5

       },
       {
         "name":"Penny",
         "breed":"Mutt",
         "id":"3",
         "age":5

       }
     ]

     });