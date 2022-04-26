import { rm } from "fs/promises"
import { join } from 'path'
import { getConnection } from "typeorm"

global.afterAll(async () => {
  try{
    // Removing db after all tests are run
    await rm(join(__dirname, '..', 'test.sqlite'))
  } catch(err) {}
})

// global.afterEach(async() => {
//   const conn = getConnection()
//   await conn.close()
// })