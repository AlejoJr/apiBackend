import express from 'express'
import morgan from 'morgan'
import routerBank from './routes/bankRoutes'
import cors from 'cors'
// const express = require('express')
// const morgan = require('morgan')

const app = express()
const baseApi = '/api/v1'

app.set('port', process.env.PORT || 3001)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors()) // para permitir a cualquier origen que consulte la api

// EndPoints - Bank
app.use(`${baseApi}/`, (req, res) => {
  res.status(200).json({
    message: 'Bienvenido a la API'
  })
})
app.use(`${baseApi}/bank`, routerBank)

app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found'
  })
})

// module.exports = app
export default app
