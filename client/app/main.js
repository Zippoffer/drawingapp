'use strict'


angular
	.module('drawingApp', ['ngRoute'])
	.config($routeProvider =>
		$routeProvider
			.when('/', {
				controller: 'MainCtrl',
				templateUrl: 'partials/main.html'
			})
			.when('/canvi', {
				controller: 'DrawCtrl',
				templateUrl: 'partials/canvi.html'
			})
		)



	.controller('MainCtrl', function ($scope, $http) {
		$http
			.get('/api/title')
			.then(({data: {title}}) => {
				$scope.title = title
			})
	})

// drawingboard stuff \\
													
  .controller('DrawCtrl', function ($scope, $http) {

			console.log('canvas', canvas)
			let board = new DrawingBoard.Board('canvas',{
					background: "#ffffff",
		    color: "#000000",
		    size: 1,
		controls: [
	        { Size: { type: "range" } },
	        { Navigation: { back: true, forward: true } },
	        'DrawingMode',
	        'Color',
	        // 'Download',

    ],
    webStorage: 'local'

			})

			// var downloadControl = new DrawingBoard.Control.Download(board).addToBoard();
			// var colorPicker = new DrawingBoard.Control.Color(board).addToBoard();
			console.log('board',board)
		
			
			console.log('boardimg',board.getImg())

// drawingboard stuff \\

    $scope.sendCanvi = () => {
      const canvi = {
      	Object:      	$scope.id,
        draw: 				$scope.draw,
        
      }

      $http
        .post('/api/canvis', canvi)
        .then(() =>  $scope.canvis.push(canvi))
        .catch(console.error)
    }

	    $http
	      .get('/api/canvis')
	      .then(({ data: { canvis }}) =>
	        $scope.canvis = canvis
	      )
	   
			$scope.remove = (canviId, index) => { 
				$http
				.post('/api/remove', {canviId})
				.then(() => $scope.canvis.splice(index, 1))
				console.log(canviId)    
			}


  })
























































// canvas stuff \\

// var e = new function canvasLayer(location, id) {
// let canvas = $('#canvas')
// // let canvas = document.getElementById('#canvas')

//     this.width = $(window).width();
//     this.height = $(window).height();
//     this.element = document.createElement('canvas');
//     $(this.element)
//        .attr('id', id)
//        .text('unsupported browser')
//        .width(this.width)
//        .height(this.height)
//        .appendTo(location);

//     this.context = this.element.getContext("2d");
// // }

// // var context = canvas.get[0].getContext("2d");
// // let context = canvas.getContext('2d')
// let context = this.context//canvas.getContext('2d')
// let radius = 5;
// let dragging = false;
// context.lineWidth = radius*2

// let putPoint = (e)=>{
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


// let engage = (e)=>{
// 	dragging = true
// 	putPoint(e)
// 	// console.log('e',e)
// }

// let disengage = ()=>{
// 	dragging = false
// 	context.beginPath()
// }

// $(engage).mousedown(function(e) {
//   console.log('mousedown')
//   // console.log('e',e)
// // console.log('this', this)
// });

// $( putPoint).click(function(e) {
//   $( "#canvas" ).mousemove();
// });

// $( disengage ).mouseup(function() {
//   console.log('mouseup')
// });


// let testing = $('#canvas');
// console.log("testing",testing);

// $('#canvas').click(function() {
//   console.log("I was clicked!");
// });

// }



// };
// canvasLayer()

// window.onLoad()

// $( "#canvas" ).bind({
//   click: function() {
//     dragging = true
// 	putPoint(e)
//   }
















































// 'use strict'


// angular
// 	.module('drawingApp', ['ngRoute'])
// 	.config($routeProvider =>
// 		$routeProvider
// 			.when('/', {
// 				controller: 'MainCtrl',
// 				templateUrl: 'partials/main.html'
// 			})
// 			.when('/list', {
// 				controller: 'DrawCtrl',
// 				templateUrl: 'partials/list.html'
// 			})
// 		)



// 	.controller('MainCtrl', function ($scope, $http) {
// 		$http
// 			.get('/api/title')
// 			.then(({data: {title}}) => {
// 				$scope.title = title
// 			})
// 	})


													
//   .controller('DrawCtrl', function ($scope, $http) {
//     $scope.sendList = () => {
//       const list = {
//       	Object:      $scope.id,
//         job: 				 $scope.job,
//         description: $scope.description,
        
//       }

//       $http
//         .post('/api/lists', list)
//         .then(() =>  $scope.lists.push(list))
//         .catch(console.error)
//     }

// 	    $http
// 	      .get('/api/lists')
// 	      .then(({ data: { lists }}) =>
// 	        $scope.lists = lists
// 	      )
	   
// 			$scope.remove = (listId, index) => { 
// 				$http
// 				.post('/api/remove', {listId})
// 				.then(() => $scope.lists.splice(index, 1))
// 				console.log(listId)    
// 			}

//   })
// // canvas stuff
// //  			canvas = document.getElementById('canvas')
// // const context = canvas.getContext('2d')

// // const radius = 5;
// // const dragging = false;
// // context.lineWidth = radius*2
// // const putPoint = (e)=>{
// // 	if(dragging){
// // 	context.lineTo(e.offsetX, e.offsetY)
// // 	context.stroke()
// // 	context.beginPath()
// // 	context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2)
// // 	context.fill()
// // 	context.beginPath()
// // 	context.moveTo(e.offsetX, e.offsetY)
// // 	}
// // }

// // const engage = (e)=>{
// // 	dragging = true
// // 	putPoint(e)
// // }
// // const disengage = ()=>{
// // 	dragging = false
// // 	context.beginPath()
// // }

// // canvas.addEventListener('mousedown', engage)
// // canvas.addEventListener('mousemove', putPoint)
// // canvas.addEventListener('mouseup', disengage)




