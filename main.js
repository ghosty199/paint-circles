var radius=10




canvas=document.getElementById("myCanvas")
ctx=canvas.getContext('2d')
color="red"
var lastpositionofx,lastpositionofy;
var mouseevent=""
canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e){
   
   
    mouseevent="mousedown"
    
}
canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(e){
    currentpositionofx=e.clientX - canvas.offsetLeft;
    currentpositionofy=e.clientY - canvas.offsetTop;
    if (mouseevent=="mousedown") {
        
    
    ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.moveTo(lastpositionofx,lastpositionofy)
ctx.lineTo(currentpositionofx,currentpositionofy)
ctx.arc(currentpositionofx, currentpositionofy,radius,0,2*Math.PI)
ctx.stroke()
    }
lastpositionofx=currentpositionofx
lastpositionofy=currentpositionofy

}
canvas.addEventListener("mouseleave", my_mouseleave)


function my_mouseleave(){
    mouseevent="mouseleave"
}
canvas.addEventListener("mouseup", my_mouseup)

function my_mouseup(){
    mouseevent="mouseup"
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}