const gerador = {};

gerador.palavrasChave = {
	num: [
		'um',
		'dois',
		'dez',
		'Um',
		'Dois',
		'Dez',
		'1',
		'2',
		'10',
		'01',
		'02'
	],
	finais: [
		'like e',
		'like eu',
		'like aqui',
		'fav e',
		'fav eu',
		'fav aqui'
	]
};

gerador.gerarTextoBuscado = (vetorVazio) => {
	gerador.palavrasChave.num.forEach(
		num => {
			gerador.palavrasChave.finais.forEach(
				final => {
					vetorVazio.push(num + ' ' + final);
				}
			);
		}
	);
	return vetorVazio;
};

module.exports = gerador;
