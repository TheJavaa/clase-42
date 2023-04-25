const fs = require('fs');

const readFile = async () => {
	try {
		const data = await fs.promises.readFile(
			'../lectura_y_escritura_de_archivos/info.txt',
			'utf-8'
		);
		const info = JSON.parse(JSON.parse(data));

		console.log(info);

		info.author = 'Coderhouse';

		await fs.promises.writeFile(
			'package.json.coder',
			JSON.stringify(info, null, 2)
		);
	} catch (err) {
		console.log(err);
	}
};

readFile();
