


var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d")


var grd= context.createLinearGradient(200,0,200,200)
grd.addColorStop(0,"#32bbef")
grd.addColorStop(1,"white")
context.fillStyle=grd
context.fillRect(50,50,400,200)


var grd2= context.createLinearGradient(200,200,200,400)

grd2.addColorStop(0,"white")
grd2.addColorStop(1,"#76d21c")
context.fillStyle=grd2
context.fillRect(50,230,400,200)
var grd3= context.createLinearGradient(0,0,0,450)
grd3.addColorStop(0,"black")
grd3.addColorStop(1,"white")


context.beginPath()
context.moveTo(150,200)
context.lineTo(350,200)
context.strokeStyle="black"

context.stroke()
context.beginPath()
context.moveTo(350,200)
context.lineTo(350,300)
context.strokeStyle=grd3
context.stroke()
context.beginPath()
context.moveTo(150,200)
context.lineTo(150,300)
context.strokeStyle=grd3
context.stroke()

