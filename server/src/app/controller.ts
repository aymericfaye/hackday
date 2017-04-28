// Import only what we need from express
import { Router, Request, Response } from 'express'

// Assign router to the express.Router() instance
const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
  res.render('index')
});

router.get('/search', (req: Request, res: Response) => {
  res.render('index')
});

router.get('/advancedSearch', (req: Request, res: Response) => {
  res.render('index')
});

export const AppController: Router = router
