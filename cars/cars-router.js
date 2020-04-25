const express = require("express")
const db = require('../data/config')

// const knex = require("knex")

// const db = knex({
// 	client: "sqlite3",
// 	useNullAsDefault: true,
// 	connection: {
// 		filename: "./data/produce.db3",
// 	},
// })

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		const cars = await db("cars")
		
		res.json(cars)
	} catch(err) {
		next(err)
	}
}) //working

router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params
		const car = await db("cars").where({ id }).first()
		
		res.json(car)
	} catch(err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {
		const carData = req.body
		const [id] = await db("cars").insert(carData)
		const newcar = await db("cars").where({ id })

		res.status(201).json(newcar)
	} catch(err) {
		next(err)
	}
})//working

module.exports = router