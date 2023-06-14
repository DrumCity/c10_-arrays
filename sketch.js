var marks=[30,40,50,60,70];
function setup() 
{
  createCanvas(400,400);
  score_average();
}


function score_average(){

  var sum = marks[0]+marks[1]+marks[2]+marks[3]+marks[4];
  var score_avg = sum/marks.length;
  console.log(score_average);
}
function draw() 
{
background(51);
 

}
