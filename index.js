const path = require('path');
const fs = require('fs');
const csv = require('csvtojson');

const inputFilePath = path.join(__dirname, 'ToConvert', 'customer-data.csv');
const outputFilePath = path.join(__dirname, 'Converted', 'converted-data.json');

const convertToJson = async () => {
	const stringObjectArray = await csv().fromFile(inputFilePath);

	fs.writeFile(outputFilePath, JSON.stringify(stringObjectArray), (err) => {
		if (err) throw err;
		console.log('File converted!');
	});
}

convertToJson()