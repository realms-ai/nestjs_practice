import { ValidationPipe } from '@nestjs/common'
// Cookie session have some settings that don't work nicely with current tsconfig setup
const cookieSession = require('cookie-session')

export const setupApp = (app: any) => {
  app.use(cookieSession({
    keys: ['cookieKeys'], // Go for strong keys to encrypt cookies data
  }))
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true // Strong Parameters listing to allow defined parameters in a request
    })
  )
}