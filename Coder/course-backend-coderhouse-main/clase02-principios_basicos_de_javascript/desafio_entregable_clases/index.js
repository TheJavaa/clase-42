class Usuario {
	constructor(nombre, apellido, libros = [], mascotas = []) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.libros = libros;
		this.mascotas = mascotas;
	}
	getFullName = () => `${this.nombre} ${this.apellido}`;
	addMascota = mascota => {
		this.mascotas.push(mascota);
	};
	countMascotas = () => this.mascotas.length;
	addBook = (nombre, autor) => this.libros.push({ nombre, autor });
	getBookNames = () => this.libros.map(libro => libro.nombre);
}

const usuario = new Usuario(
	'Eric',
	'Cartman',
	[
		{ nombre: 'El señor de las moscas', autor: 'William Golding' },
		{ nombre: 'Fundacion', autor: 'Isaac Asimov' }
	],
	['perro', 'gato']
);

console.log(usuario.getFullName());
console.log(usuario.countMascotas());

usuario.addBook('Mindhunter', 'John Douglas');

console.log(usuario.getBookNames());
