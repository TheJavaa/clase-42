class Contador {
	constructor(nombre) {
		this.nombre = nombre;
		this.cuentaIndividual = 0;
	}
	static cuentaGlobal = 0;
	obtenerResponsable() {
		return `Nombre del responsable: ${this.nombre}`;
	}
	obtenerCuentaIndividual() {
		return `Cuenta individual de ${this.nombre}: ${this.cuentaIndividual}`;
	}
	obtenerCuentaGlobal() {
		return `Cuenta global: ${Contador.cuentaGlobal}`;
	}
	contar() {
		this.cuentaIndividual++;
		Contador.cuentaGlobal++;
	}
}

const contador1 = new Contador('Stan');
const contador2 = new Contador('Kyle');

console.log(contador1.obtenerResponsable());
console.log(contador1.obtenerCuentaIndividual());

contador1.contar();

console.log(contador1.obtenerCuentaIndividual());
console.log(contador1.obtenerCuentaGlobal());

console.log(contador2.obtenerResponsable());
console.log(contador2.obtenerCuentaIndividual());

contador2.contar();
contador2.contar();

console.log(contador2.obtenerCuentaIndividual());
console.log(contador2.obtenerCuentaGlobal());
