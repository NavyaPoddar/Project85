canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
//Create a reference for canvas 

greencar_width=75;
greencar_height=100;
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

greencar_xposition=5;
greencar_yposition=225;
function add() {
	background_img= new Image();
	background_img.onload= uploadbackground;
	background_img.src= background_image;

	greencar_img= new Image();
	greencar_img.onload= uploadgreencar;
	greencar_img.src= greencar_image;
	//upload car, and background images on the canvas.
}

function uploadbackground() {
	ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
	//Define function ‘uploadBackground’
}

function uploadgreencar() {
	ctx.drawImage(greencar_img,greencar_xposition,greencar_yposition,greencar_width,greencar_height);
	//Define function ‘uploadgreencar’.	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_yposition>0){
		greencar_yposition=greencar_yposition-10;
		uploadbackground();
		uploadgreencar();
	}
	//Define function to move the car upward
}

function down()
{
	if(greencar_yposition<400){
		greencar_yposition=greencar_yposition+10;
		uploadbackground();
		uploadgreencar();
	}
	//Define function to move the car downward
}

function left()
{
	if(greencar_xposition>0){
		greencar_xposition=greencar_xposition-10;
		uploadbackground();
		uploadgreencar();
	}
	//Define function to move the car left side
}

function right()
{
	if(greencar_xposition<800){
		greencar_xposition=greencar_xposition+10;
		uploadbackground();
		uploadgreencar();
	}
	//Define function to move the car right side
}
