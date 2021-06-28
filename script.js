let canvas = document.getElementById("Cobra");
let context = canvas.getContext("2d");
let box = 32;

let cobra = [];
cobra[0] = {
	x: 8 * box,
	y: 8 * box
}

let directions = "right";

let food = {
	x: math.floor(Math.random() * 15 +1) * box,
	y: math.floor(Math.random() * 15 +1) * box
}


function criarBG(){
	context.fillStyle = "lightgreen";
	context.fillRect(food.x, food.y, box, box);
}

function criarCobrinha (){
	for(i=0; i<cobra.length; i++){
		context.fillStyle = "green";
		context.fillRect(cobra[i].x, cobra[i].y, 16 * box,  box)
	}
}

//funcao criar desenho
function drawFood {
	context.fillStyle = "red";
	context.fillRect(food.x, food.y, 16 * box, box)
}

//criando eventos de clique
document.addEventListener("keydown", update);

function update(event) {
	// setendo direções  
	if (event.keyCode == 37 && directions != "right") directions = "left";
	if (event.keyCode == 38 && directions != "down") directions = "up";
	if (event.keyCode == 39 && directions != "left") directions = "right";
	if (event.keyCode == 40 && directions != "up") directions = "down"; 
}


function iniciarJogo() {

	//atribuir ultimo valor - directions 
	if(cobra[0] .x > 15 * box && directions == "right") cobra[0] .x=0;
	if(cobra[0] .x < 0 && directions == "left") cobra[0] .x=16 * box; 
    if(cobra[0].y > 15 * box && direction == "down") cobra[0].y = 0;
    if(cobra[0].y < 0 && direction == 'up') cobra[0].y = 16 * box;

	
	criarBG
	criarCobrinha();
	drawFood();

	let cobraX = cobra[0].x;
	let cobraY = cobra[0].y;

	if (directions == "right") cobraX += box;
	if (directions == "left") cobraX -= box;
	if (directions == "up") cobraY -= box;
	if (directions == "down") cobraY += box; 

	//gerar comida
	if(cobraX != food.x || cobraY != food.y) {
		cobra.pop();
	}else{
		food.x = Math.floor(Math.random() * 15 +1) * box; //recebendo posição aleatoria
        food.y = Math.floor(Math.random() * 15 +1) * box;
	}

	//retirar ultimo elemento do array
	cobra.pop();
	let newhead = {
		x: cobraX,
		y: cobraY
	}

	cobra.push(newhead);
}

let jogo = setInterval(iniciarJogo, 100);

