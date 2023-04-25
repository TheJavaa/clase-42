# PERÍMETRO Y SUPERFICIE

-   Crear un proyecto basado en Webpack y Typescript que implemente un servidor node express cuyo punto de entrada será server.ts.
-   Se implementará una clase llamada Perimetro que contenga tres métodos estáticos para calcular el perímetro de un cuadrado, un rectángulo y un círculo. Esta clase se guardará en un archivo llamado perimetro.ts
-   En otro archivo llamado superficie.ts se implementará una clase llamada Superficie que contenga tres métodos estáticos para calcular la superficie de las mismas tres figuras.
-   Los dos módulos se importarán en server.js.
-   Realizar los endpoints get que permitan recibir las peticiones de cálculo con los parámetros correspondientes. La respuesta será en formato objeto y representará el tipo de cálculo, la figura, los parámetros de entrada y el resultado.
-   Implementar el tipado en todas las clases y funciones del servidor.
-   Probar con el navegador ó cliente http todas las posibles variantes.

<br />

---

---

<br />

Inicializar proyecto  
`npm init`

Instalar las dependencias de desarrollo
`npm i -D typescript ts-loader webpack webpack-cli webpack-node-externals `

Instalar dependencias del proyecto  
`npm i express @types/express`

Crear el archivo `tsconfig.json` con el comando  
`./node_modules/.bin/tsc --init`

Crear el archivo `webpack.config.js` y agregarle

```javascript
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	mode: 'production',
	entry: './src/index.ts',
	target: 'node',
	externals: [nodeExternals()],

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.tsx?/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	}
};
```

Agregar al `package.json`

```javascript
"main": "dist/main.js",
"scripts": {
   "build": "webpack",
   "start": "node ."
```
