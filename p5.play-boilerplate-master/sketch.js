var bow 
var arrow, arrowHead
var bg
var target,target1,target2,target3
var point
var gameState= 1
var last_score
var time=0
function preload(){

bowImage=loadImage("assets/images.png")
arenaImage=loadImage("assets/arena.jpg")
arrowImage=loadImage("assets/NicePng_archery-png_385791.png")
targetImage=loadImage("assets/pngwing.com.png")
hitSound=loadSound("assets/hit.mp3")
targetGroup= createGroup()
target1Group= createGroup()
target2Group= createGroup()
target3Group=createGroup()
arrowGroup=createGroup()
score=0 
}

function setup() {
  createCanvas(1500,900);
  
  bow=createSprite(200,600,10,10)
  bow.rotation=40
  bow.addImage(bowImage)

  count=setInterval(end, 20000)
  
  updateCount()
}


function draw() {
  background(arenaImage); 
  fill('red')
  textSize(60)
  text("TARGET PRACTICE",width-1050,200)
  
  if (gameState===1){
    bow.y = mouseY
    
    Target();
    
    textSize(30)
    fill('white')
    text("Time:"+time, 50, 50)
    if(arrowHead!==undefined && target !==undefined){
      for (a=0;a <arrowGroup.length; a++){
        for (i=0; i< targetGroup.length; i++){
          if(arrowGroup[a].isTouching(targetGroup[i])){
            //what should happen now?
            //targetshougldisapre
            targetGroup[i].destroy()
            score++
            hitSound.play()
          }
        }   
      }
    
    } 
    if(arrowHead!==undefined && target1 !==undefined){
      for (a=0;a <arrowGroup.length; a++){
      for (j=0; j< target1Group.length; j++){
        if(arrowGroup[a].isTouching(target1Group[j])){
          //what should happen now?
          //targetshougldisapre
          target1Group[j].destroy()
          score++
          hitSound.play()
        }
      }
    }
    }
    if(arrowHead!==undefined && target2 !==undefined){
      for (a=0;a <arrowGroup.length; a++){
      for (k=0; k< target2Group.length; k++){
        if(arrowGroup[a].isTouching(target2Group[k])){
          //what should happen now?
          //targetshougldisapre
          target2Group[k].destroy()
          score++
          hitSound.play()
        }
      }
    }
    }
    if(arrowHead!==undefined && target3 !==undefined){
      for (a=0;a <arrowGroup.length; a++){
      for (l=0; l< target3Group.length; l++){
        if(arrowGroup[a].isTouching(target3Group[l])){
            //what should happen now?
            //targetshougldisapre
            target3Group[l].destroy()
            score++
            hitSound.play()
        }
      }
    }
    }
    drawSprites();
    textSize(24)
    fill('white')
    text("Score: "+score, width-200, 50)

  }
  if (gameState===0){
    score=0
    textSize(50)
    fill('red')
    text("Final score:"+last_score,width-700, 450)
    text("Press R to restart", width-700, 500)
    if (keyDown ('r')){
      gameState= 1
    }
  }
}

function updateCount() {
  time = time + 1;
  
  duration=setTimeout(updateCount, 1000);
 }

function end(){
  gameState=0
  clearInterval(count)
  last_score=score
  clearTimeout(duration)
  time=0
  updateCount()
}

 function keyPressed(){
  
  if(keyCode === 65){
    if(frameCount% 5 === 0){
    arrow=createSprite(200,bow.y,10,10)
    
    arrow.addImage(arrowImage)
   arrow.scale=.1
   arrow.rotation=46
    arrow.velocityX=20
    arrow.lifetime=200
    arrowHead=createSprite(200, bow.y, 5,5)
    arrowHead.x= arrow.x +((arrow.width/10)-27)
    arrowHead.lifetime=200
    arrowHead.invisible=false
    arrowHead.shapeColor='red'
    arrowHead.velocityX=arrow.velocityX
    arrowGroup.add(arrowHead)
    }
  }
  
}
function Target(){
  if(frameCount % 200 ===0 ){
  target=createSprite(550,10,100,100)
  target.addImage(targetImage)
  target.scale=.05
  target.lifetime=1000
  target.velocityY=10
  targetGroup.add(target)
  
  }
  if(frameCount % 150 === 0){
  target1=createSprite(850,10,100,100)
  target1.addImage(targetImage)
  target1.scale=.05
  target1.lifetime=200
  target1.velocityY=15
  target1Group.add(target1)
  }
if(frameCount % 190 === 0){
  target3=createSprite(1150,10,100,100)
  target3.addImage(targetImage)
  target3.scale=.05
  target3.lifetime=200
  target3.velocityY=5
  target3Group.add(target3)
}
if(frameCount % 60 === 0){
  target2=createSprite(1450,10,100,100)
  target2.addImage(targetImage)
  target2.scale=.03
  target2.lifetime=200
  target2.velocityY=20
  target2Group.add(target2)
  console.log(target2Group.length)

}
}

