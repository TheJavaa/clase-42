const mostrarLista = lista => {
	if (lista) return lista;
	if (!lista) return 'Lista vacía';
};

console.log(mostrarLista());
console.log(mostrarLista(['dato1', 'dato2', 'dato3']));

(function (lista) {
	if (lista) return console.log(lista);
	if (!lista) return console.log('Lista vacía');
})([1, 2, 3]);

(function (lista) {
	if (lista) return console.log(lista);
	if (!lista) return console.log('Lista vacía');
})();

const crearMultiplicador = num1 => {
	return (function (num2) {
		return num1 * num2;
	})(5);
};

const duplicar = num => {
	return num ** 2;
};

const triplicar = num => {
	return num ** 3;
};

console.log(crearMultiplicador(3));

console.log(duplicar(crearMultiplicador(3)));
console.log(triplicar(crearMultiplicador(3)));

console.log(duplicar(crearMultiplicador(2)));
console.log(triplicar(crearMultiplicador(2)));
