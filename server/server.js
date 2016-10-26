'use strict'
const {json} = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
// const canvas = require('canvas')
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
	draw: String,
})

app.get('/api/pics', (req, res, err) => {
	// console.log('error', res)
	Canvi
		.find()
		// .then(pics => console.log(pics))
		.then(pics => res.json({pics}))
		.catch(err)
})

app.post('/api/pics', (req, res,err) => {
	// console.log(err)
	const pic = req.body
	Canvi
	.create(pic)
	.then(pic => res.json({pic}))
	.catch(err)	
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
		// console.log(req.body)
	Canvi
		.remove({_id: req.body.picId})
		.then((data) => res.json({data}))
		.catch(err)
	});



mongoose.Promise = Promise

mongoose.connect(MONGODB_URL, ()=>
	app.listen(PORT, () => console.log(`listening on port: ${PORT}`))
)

