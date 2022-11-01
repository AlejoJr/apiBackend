import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import routerStudent from './routes/studentRoutes'
import routerNote from './routes/noteRoutes'
import routerSubject from './routes/subjectRoutes'

// const express = require('express')
// const morgan = require('morgan')

const app = express()
const baseApi = '/api/v1'

app.set('port', process.env.PORT || 3001)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors()) // para permitir a cualquier origen que consulte la api

// EndPoints - Students
app.use(`${baseApi}/students`, routerStudent)
app.use(`${baseApi}/notes`, routerNote)
app.use(`${baseApi}/subjects`, routerSubject)

app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found'
  })
})

// module.exports = app
export default app
