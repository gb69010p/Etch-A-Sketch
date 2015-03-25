bgcolor = "#000";

$(document).ready(function() {

	createGrid();	

	// Change background color of div when mouseenters a .tile of #grid
	$('#grid').on('mouseenter', '.tile', function() {
		randomBGColor();
		changeColor($(this), bgcolor);
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

// Determines number of tiles, creates grid, and resizes tiles to fit 960px
function createGrid() {

	var numTiles = prompt('How many tiles per row? Enter a number between 0 and 64:', '');

	// If user submits empty string or cancels prompt, size 16x16 grid
	if (numTiles === null || numTiles === "") {
		numTiles = 16;
	}

	// Calculate square size
	var tileSize = (960 / numTiles) +"px";

	var grid = $('#grid');
	var gridParent = grid.parent();
	var newTile = '<div class="tile"></div>';

	grid.detach();

	// Builds grid by row (# for testing)
	for (var x = 1; x <= numTiles; x++) {
		
		for (var i = 1; i <= numTiles; i++) {

			grid.append(newTile);

			}
	}
	gridParent.append(grid);

	// Set .tile size
	$('.tile').css({'height': tileSize, 'width': tileSize});

}


// Destroy current grid
function emptyGrid() {
	$('#grid').empty();
}


// Change color of DOM object, input must be string
function changeColor(obj, bgcolor){
	var currOpacity = +obj.css('opacity');
	var newOpacity = currOpacity + 0.1;

	obj.css('background-color', bgcolor);
	obj.css('opacity', newOpacity);
}

// Changes bgcolor to random color
function randomBGColor() {
	var r = Math.round(Math.random() * 255);
	var g = Math.round(Math.random() * 255);
	var b = Math.round(Math.random() * 255);
	bgcolor = 'rgb('+r+','+g+','+b+')';
}


// Set tile to hidden
function hideTile(tile) {
	tile.addClass('hidden');
}