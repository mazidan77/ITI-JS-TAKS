var red = document.getElementById("red")
var green = document.getElementById("green")
var blue = document.getElementById("blue")
var p =document.getElementById("p")
var p2 =document.getElementById("p2")

var redLabel=document.getElementById("redlabel")
var greenLabel=document.getElementById("greenlabel")
var blueLabel=document.getElementById("bluelabel")

red.oninput = function(){
   
    p.style.color=`rgb(${red.value}, ${green.value}, ${blue.value})`
    redLabel.innerHTML=`${red.value}`
}
green.oninput = function(){
   
    p.style.color=`rgb(${red.value}, ${green.value}, ${blue.value})`
    greenLabel.innerHTML=`${green.value}`
}
blue.oninput = function(){
    
    p.style.color=`rgb(${red.value}, ${green.value}, ${blue.value})`
    blueLabel.innerHTML=`${blue.value}`
}

////task2

var video =document.getElementById("video")
var videoRange=document.getElementById("videoRange")
var volume = document.getElementById("volume")
var p3 = document.getElementById("p3")
var speed = document.getElementById("speed")

function play(){
    video.play()
    videoRange.setAttribute("max",parseInt((Math.round(video.duration))))
   
}
function stop(){
    video.pause()

}
 
function mute() {

    if(video.muted==false){
        video.muted=true 
        volume.value=0
    }
    else{
        video.muted=false
        volume.value=0.5
    }
    
}

function slow() {
  
   video.playbackRate=0.5
   speed.value=0.5
}
function normal() {
  
    video.playbackRate=1
    speed.value=1
}
function fast() {
    video.playbackRate=1.5
    speed.value=1.5
}

function fullScreen() {
  
    video.requestFullscreen()
 }

volume.oninput=function(){
    video.volume=volume.value
}

speed.oninput=function(){
    video.playbackRate=speed.value

}


videoRange.oninput=function(){
   video.currentTime=videoRange.value
}
function count() {
    p3.innerHTML= `${((video.currentTime)).toFixed()} / ${(video.duration).toFixed() }`
    videoRange.value=((video.currentTime)).toFixed()
   
}
setInterval( count, 100);




