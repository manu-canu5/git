let results = [
    {name: "aka", count: 500, color:"green"},
    {name: "book", count: 400, color:"red"},
    {name: "no comment", count: 300, color:"purple"},
    {name: "unsatisfied", count: 200, color:"bleu"}
]
const canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
function draw(){
    ctx.fillStyle = "cyan"
    ctx.fillRect(20,10,150,100);
    ctx.moveTo(20,6)
    ctx.lineTo(100,50)
    ctx.stroke()
}
draw();
// function circle(){
//     ctx.fillStyle = "pink"
//     ctx.arc(400,250,200,0,Math.PI*2,false);
//     ctx.fill()
// }
// circle();