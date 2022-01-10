var bgimg, ball,ballimg,player,playerimg

function preload() {
ballimg= loadAnimation("ball/b1.PNG","ball/b1.PNG","ball/b1.PNG","ball/b1.PNG")
ballmoveimg= loadAnimation("ball/b1.PNG","ball/b2.PNG","ball/b3.PNG","ball/b4.PNG","ball/b5.PNG","ball/b6.PNG","ball/b7.PNG","ball/b8.PNG","ball/b9.PNG","ball/b10.PNG","ball/b11.PNG","ball/b12.PNG")
playerimg= loadAnimation("run/r1.png","run/r2.png","run/r3.png","run/r4.png","run/r5.png","run/r6.png","run/r7.png","run/r8.png","run/r9.png","run/r10.png")
playerleftimg= loadAnimation("run/left/r1.png","run/left/r2.png","run/left/r3.png","run/left/r4.png","run/left/r5.png","run/left/r6.png","run/left/r7.png","run/left/r8.png","run/left/r9.png","run/left/r10.png")



}

function setup(){
createCanvas(windowWidth,windowHeight)
ball=createSprite(width/4,height-100)
ball.addAnimation("stop",ballimg)

ball.addAnimation("play",ballmoveimg)

ball.scale=0.5

player=createSprite(80,height-150)
player.addAnimation("right",playerimg)
player.addAnimation("left",playerleftimg)



}


function draw(){
background("yellow")


if(keyDown("Right_Arrow")){
   player.x +=5
   player.changeAnimation("right",playerimg)

}

if(keyDown("Left_Arrow")){
   player.x -= 5
   player.changeAnimation("left",playerleftimg)
}

if(player.isTouching(ball)){
   ball.changeAnimation("play",ballmoveimg)
ball.velocityX =5
}

if(player.x>width){
   player.x = 80
}

if(player.x<0){
   player.x = width-80
}
drawSprites()
if(ball.velocityX >0){
   ball.changeAnimation("play",ballmoveimg)

}
}