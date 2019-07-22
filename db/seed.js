const db = require('../models');


// const pokemonList = require('./pokemon.json');
// const badgeList = require('./badges.json');
// const trainerList = require('./trainers.json')

// // removes all pokemon and adds new ones from pokemon.json
// db.Pokemon.remove({}, () => {
// 	pokemonList.forEach(pokemon => {
// 		db.Pokemon.create(pokemon, (error, createdPokemon) => {
// 			if (error) return console.log(error);
// 			console.log(createdPokemon);
// 		});
// 	});
// });

// // removes all badges and adds new ones from badge.json
// db.Badge.remove({}, () => {
// 	badgeList.forEach(badge => {
// 		db.Badge.create(badge, (error, createdBadge) => {
// 			if (error) return console.log(error);
// 			console.log(createdBadge);
// 		});
// 	});
// });

// db.Trainer.remove({}, () => {
// 	trainerList.forEach(trainer => {
// 		db.Trainer.create(trainer, (error, createdTrainer) => {
// 			if (error) return console.log(error);
// 			console.log(createdTrainer);
// 		});
// 	});
// });