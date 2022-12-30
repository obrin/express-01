import * as express from 'express'

const createRouter = (router: express.Router) => {
  router.get('/health', (_: express.Request, res: express.Response) => {
    return res.send('OK V2')
  })

  return router
}

export default createRouter
