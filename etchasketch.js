color = "#fff";

$(document).ready(function() {

	createGrid();	

	// Change background color of div when mouseenters a .tile of #grid
	$('#grid').on('mouseenter', '.tile', function() {
		changeColor($(this), color);
	});

	// Empties all .tile from #grid and recreates
	$('button[name="reset_grid"').on('click', function(){
		emptyGrid();
		createGrid();
	});

	$('.tile').on('dblclick', function() {
		hideTile($(this));
	});

});




// Create default grid 
function createGrid() {

	var numTiles = +prompt('How many tiles per row? Enter a number between 0 and 64:');

	// Calculate square size
	var tileSize = (960 / numTiles) +"px";


	// Constructs grid by row (# for testing)
	for(var x = 1; x <= numTiles; x++) {
		
		for(var i = 1; i <= numTiles; i++) {

			$('#grid').append(

				$('<div class="tile">'+x+'</div>')
				)
			}
	}


	// Set .tile size
	$('.tile').css({'height': tileSize, 'width': tileSize});

}


// Destroy current grid
function emptyGrid() {
	$('#grid').empty();
}


// Change color of DOM object, input must be string
function changeColor(obj, color){
	obj.css('background-color', color);
}



// Set tile to hidden
function hideTile(tile) {
	tile.addClass('hidden');
}