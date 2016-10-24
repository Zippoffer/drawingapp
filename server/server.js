'use strict'
const {json} = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const canvas = require('canvas')
const {use} = require('browserify')



const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/drawing'
const app = express()
const PORT = process.env.PORT || 3000



app.use(express.static('client'))
app.use(json())


app.get('/api/title', (req, res) => {
	res.json({title: 'Drawrings'})
})

const Canvi = mongoose.model('canvi', {
	draw: {},
	
})


app.get('/api/canvis', (req, res, err) =>
	Canvi
		.find()
		.then(canvis => res.json({ canvis }))
		.catch(err)
	)

app.post('/api/canvis', (req, res, err)=> {
	const canvi = req.body
		Canvi
		.create(canvi)
		.then(canvi => res.json({ canvi }))
		.catch(err)
})
	app.post('/api/remove', function (req, res, err) {
		console.log(req.body)
	Canvi
		.remove({_id: req.body.canviId})
		.then((data) => res.json({data}))
		.catch(err)
	});

mongoose.Promise = Promise

mongoose.connect(MONGODB_URL, ()=>
	app.listen(PORT, () => console.log(`listening on port: ${PORT}`))
)























































// 'use strict'
// const {json} = require('body-parser')
// const express = require('express')
// const mongoose = require('mongoose')
// const canvas = require('canvas')
// // const $ = require('jquery')



// const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/drawing'
// const app = express()
// const PORT = process.env.PORT || 3000



// // canvas = `${'#canvas'}`

//  			canvas = document.getElementById('canvas')
// const context = canvas.getContext('2d')

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

// const engage = (e)=>{
// 	dragging = true
// 	putPoint(e)
// }
// const disengage = ()=>{
// 	dragging = false
// 	context.beginPath()
// }

// canvas.addEventListener('mousedown', engage)
// canvas.addEventListener('mousemove', putPoint)
// canvas.addEventListener('mouseup', disengage)

// // canvas stuff







// app.use(express.static('client'))
// app.use(json())


// app.get('/api/title', (req, res) => {
// 	res.json({title: 'Drawrings'})
// })

// const List = mongoose.model('list', {
// 	job: String,
// 	description: String,
// })


// app.get('/api/lists', (req, res, err) =>
// 	List
// 		.find()
// 		.then(lists => res.json({ lists }))
// 		.catch(err)
// 	)

// app.post('/api/lists', (req, res, err)=> {
// 	const list = req.body
// 		List
// 		.create(list)
// 		.then(list => res.json({ list }))
// 		.catch(err)
// })

// 	app.post('/api/remove', function (req, res, err) {
// 		console.log(req.body)
// 	List
// 		.remove({_id: req.body.listId})
// 		.then((data) => res.json({data}))
// 		.catch(err)
// 	});

// mongoose.Promise = Promise

// mongoose.connect(MONGODB_URL, ()=>
// 	app.listen(PORT, () => console.log(`listening on port: ${PORT}`))
// )
