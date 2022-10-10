use example
db.example.insertMany( [
   { "_id": 1, "results": [ { "product": "abc", "score": 10 },
                            { "product": "xyz", "score": 5 } ] },
                            
   { "_id": 2, "results": [ { "product": "abc", "score": 8 },
                            { "product": "xyz", "score": 7 } ] },
                            
   { "_id": 3, "results": [ { "product": "abc", "score": 7 },
                            { "product": "xyz", "score": 8 } ] },
                            
   { "_id": 4, "results": [ { "product": "abc", "score": 7 },
                            { "product": "def", "score": 8 } ] }
] );



Vamos revisar o que aprendemos, retorne os documentos que tenham algum produto que seja "xyz"
db.example.find({'results.product': 'xyz'});

Agora retorne os documentos que tenham algum produto que não seja "xyz"

db.example.find( {'results.product': {$ne: 'xyz'}}); ERRADO
db.example.find({'results': {$elemMatch: {'product': {$ne: 'xyz'}}}}); CORRETO


Retorne os documentos que contenham o produto xyz, com a pontuação maior ou igual a 8.


db.example.find({'results.product': 'xyz', 'results.score' : {$gte: 8}}); ERRADO
db.example.find({ 'results': { $elemMatch: { 'product': "xyz", 'score': { $gte: 8 } } } }); CORRETO

