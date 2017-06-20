var strings = [
	'Linjera',
	'Ax till limpa',
	'Sufflera',
	'Kortsluta',
	'Skruva på',
	'Fordom',
	'"Såhär"',
	'Approchera',
	'Speaking partner',
	'GGD',
	'Microprocess',
	'Makroprocess',
	'Prelle',
	'Konsensus',
	'"Jag säger så här"',
	'Managera'
];

$(document).ready(function() {

	$('.bingo-card').on('click', function() {
		$(this).toggleClass('bingo');
	});

	addToRandom(strings);

});

function addToRandom(array) {

	for (var i = 0; i < $('.bingo-card').length; i++) {
		var rand = Math.floor(Math.random() * strings.length)
		$('.bingo-card:nth-of-type('+(i+1)+') .content').text(strings.splice(rand, 1));
	}
}