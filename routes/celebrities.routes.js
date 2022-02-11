// 1. IMPORTACIONES
const express			= require("express")
const router			= express.Router()

const celebritiesController = require("./../controllers/celebritiesController")

//2. RUTAS

//Celebrities

router.get("/create", celebritiesController.Create)
router.post("/create", celebritiesController.createForm)