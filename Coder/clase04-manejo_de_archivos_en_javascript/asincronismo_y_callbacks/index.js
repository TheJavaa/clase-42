const mostrarLetras = (string, interval, cb) => {
	let letter = 0;
	const renderLetters = setInterval(() => {
		if (letter < string.length) {
			console.log(string[letter]);
			letter++;
		} else {
			clearInterval(renderLetters);
			cb();
		}
	}, interval);
};

const fin = () => console.log('terminé');

mostrarLetras('¡Hola!', 0, fin);
mostrarLetras('¡Hola!', 250, fin);
mostrarLetras('¡Hola!', 500, fin);
