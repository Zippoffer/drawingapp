'use strict'


angular
	.module('drawingApp', ['ngRoute'])
	.config($routeProvider =>
		$routeProvider
			// .when('/', {
			// 	controller: 'MainCtrl',
			// 	templateUrl: 'partials/main.html'
			// })
			.when('/', {
				controller: 'DrawCtrl',
				templateUrl: 'partials/canvi.html'
			})
			.when('/pic', {
				controller: 'ShowCtrl',
				templateUrl: 'partials/pic.html'
			})
		)

	// .controller('MainCtrl', function ($scope, $http) {
	// 	$http
	// 		.get('/api/title')
	// 		.then(({data: {title}}) => {
	// 			$scope.title = title
	// 		})
	// })


//////////showCtrl\\\\\\\\\\\\\
 .controller('ShowCtrl', function($scope, $http, $routeParams){
 	$scope.seePics = (canviId, index) => {
 		
 		$http
			.get('/api/pics')
			.then(({data: {pics}}) => {
				$scope.pics = pics
				console.log('pics', pics)
			})
 		}
 		$scope.seePics()
 
 		$scope.remove = (picId, index) => { 
				$http
				.post('/api/remove', {picId})
				.then(() => $scope.pics.splice(index, 1))
				console.log('picId',picId) 
				console.log('index', index)   
			}
 })
///////////showCtrl\\\\\\\\\\\\\\\


// drawingboard stuff \\
													
  .controller('DrawCtrl', function ($scope, $http) {

			// console.log('canvas', canvas)
			let board = new DrawingBoard.Board('canvas',{
				background: "#FAE5D3",
		    color: "#000000",
		    size: 1,
				controls: [
			        { Size: { type: "range" } },
			        { Navigation: { back: true, forward: true } },
			        'DrawingMode',
			        'Color',
		    ],
		    webStorage: 'local'

			})

// drawingboard stuff \\

    $scope.sendCanvi = (canviId, index) => {

			const img = board.getImg()
			const imgInput = (board.blankCanvas === img) ? '' : img;
      const canvi = {

      	Object:      	$scope.id,
        draw: 				imgInput,        
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
	   
  })
 

