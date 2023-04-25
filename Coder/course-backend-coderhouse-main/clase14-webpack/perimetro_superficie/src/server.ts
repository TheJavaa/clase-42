import Perimetro from './perimetro';
import Superficie from './superficie';
import express from 'express';

const app = express();
app.use(express.json());

const perimetro = new Perimetro();
const superficie = new Superficie();

app.get('/perimetrocuadrado', (req, res) => {
	const { side } = req.body;
	const result = perimetro.perimetroCuadrado(side);
	console.log({ result });
	res.json({
		type: 'Perímetro',
		shape: 'Cuadrado',
		parameters: `Lado: ${side}`,
		result: `El perímetro del cuadrado es ${result}`
	});
});

app.get('/perimetrorectangulo', (req, res) => {
	const { length, width } = req.body;
	const result = perimetro.perimetroRectangulo(length, width);
	res.json({
		type: 'Perímetro',
		shape: 'Rectángulo',
		parameters: `Longitud: ${length} - Ancho: ${width}`,
		result: `El perímetro del rectángulo es ${result}`
	});
});

app.get('/perimetrocirculo', (req, res) => {
	const { diameter } = req.body;
	const result = perimetro.perimetroCirculo(diameter);
	res.json({
		type: 'Perímetro',
		shape: 'Círculo',
		parameters: `Diametro: ${diameter}`,
		result: `El perímetro del círculo es ${result.toFixed(2)}`
	});
});

app.get('/superficiecuadrado', (req, res) => {
	const { side } = req.body;
	const result = superficie.superficieCuadrado(side);
	res.json({
		type: 'Superficie',
		shape: 'Cuadrado',
		parameters: `Lado: ${side}`,
		result: `La superficie del cuadrado es ${result}`
	});
});

app.get('/superficierectangulo', (req, res) => {
	const { length, width } = req.body;
	const result = superficie.superficieRectangulo(length, width);
	res.json({
		type: 'Superficie',
		shape: 'Rectángulo',
		parameters: `Longitud: ${length} - Ancho: ${width}`,
		result: `La superficie del rectángulo es ${result}`
	});
});

app.get('/superficiecirculo', (req, res) => {
	const { radius } = req.body;
	const result = superficie.superficieCirculo(radius);
	res.json({
		type: 'Superficie',
		shape: 'Círculo',
		parameters: `Radio: ${radius}`,
		result: `La superficie del círculo es ${result.toFixed(2)}`
	});
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
