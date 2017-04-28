// Import only what we need from express
import { Router, Request, Response } from 'express'
import { search } from './search'

// Assign router to the express.Router() instance
const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
  res.render('index')
});

router.get('/search/:artistName', (req: Request, res: Response) => {
  search(req.params.artistName)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send(err))
});

router.get('/advancedSearch', (req: Request, res: Response) => {
  res.render('index')
});

export const AppController: Router = router
