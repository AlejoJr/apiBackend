// Main Api File

import app from './app'

const main = () => {
  const port = app.get('port')
  app.listen(port)

  console.log(`Server running in port: ${port}`)
}

main()
