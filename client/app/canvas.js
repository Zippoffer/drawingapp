



// // window.onLoad=function(){
// //     var canvas=document.getElementById('canvas');
        
// const canvas = $('#canvas')
// console.log('canvas',canvas)


// // };

// var o = new function canvasLayer(location, id) {
// console.log('1')
// console.log('this', this)
//     this.width = $(window).width();
//     this.height = $(window).height();
//     this.element = document.createElement('canvas');
// console.log('2')
//     $(this.element)
//        .attr('id', id)
//        .text('unsupported browser')
//        .width(this.width)
//        .height(this.height)
//        .appendTo(location);

//     this.context = this.element.getContext("2d");
// // }

// console.log('3')
// const context = this.context//canvas.getContext('2d')
// const radius = 5;
// const dragging = false;
// context.lineWidth = radius*2

// const putPoint = (e)=>{
// 	if(dragging){
// 	context.lineTo(e.offsetX, e.offsetY)
// 	context.stroke()
// 	context.beginPath()
// 	context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2)
// 	context.fill()
// 	context.beginPath()
// 	context.moveTo(e.offsetX, e.offsetY)
// 	}
// }

// console.log('context',context)
// console.log('4')

// const engage = (e)=>{
// 	dragging = true
// 	putPoint(e)
// 	console.log('e',e)
// }

// const disengage = ()=>{
// 	dragging = false
// 	context.beginPath()
// }

// $( "#canvas").mousedown(function(engage) {
//   console.log('mousedown')
// });

// $( "#canvas" ).click(function(putPoint) {
//   $( "#canvas" ).mousemove();
// });

// $( "#canvas" ).mouseup(function(disengage) {
//   console.log('mouseup')
// });

// // console.log('canvas',canvas)
// // canvas.addEventListener('mousedown', engage)
// // canvas.addEventListener('mousemove', putPoint)
// // canvas.addEventListener('mouseup', disengage)
// // console.log('5')
// }

