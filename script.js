let canvas = document.getElementById("Cobra");
let context = canvas.getContext("2d");
let box = 32;

let cobra = [];
cobra[0] = {
	x: 8 * box,
	y: 8 * box
}

let directions = "right";


function criarBG(){
	context.fillStyle = "lightgreen";
	context.fillRect(0, 0, 16 * box, 16 * box)
}

function criarCobrinha (){
	for(i=0; i<cobra.length; i++){
		context.fillStyle = "green";
		context.fillRect(cobra[i].x, cobra[i].y, 16 * box,  box)
	}
}

function iniciarJogo() {
	criarBG
	criarCobrinha();

	let cobraX = cobra[0].x;
	let cobraY = cobra[0].y;

	if (directions == "right") cobraX += box;
	if (directions == "left") cobraX -= box;
	if (directions == "up") cobraY -= box;
	if (directions == "down") cobraY += box; 

	//retirar ultimo elemento do array
	cobra.pop();
	let newhead = {
		x: cobraX,
		y: cobraY
	}

	cobra.push(newhead);
}

let jogo = setInterval(iniciarJogo, 100);

