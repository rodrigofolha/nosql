//Comando padrão
db.movieDetails.aggregate(
	[
		{$match: {}},
		{$group: {_id: "$year", total: {$sum: "$runtime"}}}
	]
)

//Filtrando alguns registros
db.movieDetails.aggregate(
	[
		{$match: {year: {$gt: 1989}}},
		{$group: {_id: "$year", total: {$sum: "$runtime"}}}
	]
)

//Ordenando os resultados
db.movieDetails.aggregate(
	[
		{$match: {year: {$gt: 1989}}},
		{$group: {_id: "$year", total: {$sum: "$runtime"}}},
		{$sort: {_id: -1}}
	]
)

//Agrupando por múltiplos campos
db.movieDetails.aggregate(
	[
		{$match: {year: {$gt: 1989}}},
		{$group: {_id: {ano: "$year", generos: "$genres"}, media_tempo: {$avg: "$runtime"}}},
		{$sort: {"_id.ano": -1, "_id.generos": 1}},
	]
)

//Por fim, podemos realizar um novo filtro sobre os resultados da agregação
db.movieDetails.aggregate(
	[
		{$match: {year: {$gt: 1989}}},
		{$group: {_id: {ano: "$year", generos: "$genres"}, media_tempo: {$avg: "$runtime"}}},
		{$sort: {"_id.ano": -1, "_id.generos": 1}},
		{$match: {media_tempo: {$ne: null}}}
	]
)

//Respostas dos exercícios:
db.movieDetails.aggregate(
	[
		{$match: {year: {$gte: 2010}}},
		{$group: {_id: "$genres", media_imdb: {$avg: "$imdb.rating"}}},
		{$sort: {"media_imdb": -1}},
	]
)


db.movieDetails.aggregate(
	[
		{$group: {_id: "$director", premios: {$sum: "$awards.wins"}}},
		{$sort: {"premios": -1}},
	]
)


db.movieDetails.aggregate(
	[
		{$group: {_id: "$year", media_tempo: {$avg: "$runtime"}}},
		{$match: {media_tempo: {$gt: 110}}},
		{$sort: {_id: -1}}
	]
)
