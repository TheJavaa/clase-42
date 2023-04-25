let name = 'pepe';
let age = 25;
let price = '$99.90';
let favSeries = ['Dark', 'Mr Robot', 'Castlevania'];
let favMovies = [
	{
		name: 'Back to the future',
		release: 1985,
		protagonists: ['Michael Fox', 'Christopher Lloyd']
	},
	{
		name: 'Scream',
		release: 1996,
		protagonists: ['Neve Campbell', 'Courteney Cox']
	}
];

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Price: ${price}`);
console.log(`Favorite series: ${favSeries}`);

favMovies.forEach(movie => {
	console.log(`Movie name: ${movie.name}`);
	console.log(`Release: ${movie.release}`);
	console.log(`Protagonists: ${movie.protagonists}`);
});

age += 1;
console.log(`Age: ${age}`);

favSeries.push('Breaking Bad');
console.log(`Favorite series: ${favSeries}`);
