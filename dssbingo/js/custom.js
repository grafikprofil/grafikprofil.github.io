var rows = [];
var cols = [];

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
	'"Precis så"',
	'Managera'
];

$(document).ready(function() {

	$('.bingo-card').on('click', function() {
		
		var thisRow = $(this).data('row');
		var thisCol = $(this).data('col');

		$(this).toggleClass('bingo');
		
		rows.push(thisRow);
		cols.push(thisCol);

		checkBingo(rows);
		checkBingo(cols);	

	});

	addToRandom(strings);

});

function addToRandom(array) {

	for (var i = 0; i < $('.bingo-card').length; i++) {
		var rand = Math.floor(Math.random() * strings.length)
		$('.bingo-card:nth-of-type('+(i+1)+') .content').text(strings.splice(rand, 1));
	}
}

function checkBingo(array) {

	var counts = {};

	jQuery.each(array, function(key,value) {
		if (!counts.hasOwnProperty(value)) {
			counts[value] = 1;
		} else {
			counts[value]++;
			if(counts[value] == 4) {
				alert('BINGO!');
			}
		}

	});

	counts = {};

}