import * as express from 'express'
import * as path from 'path'

import { AppController } from './app'

console.log('WeStage Hackday with Zengularity!')


const app: express.Application = express()
const port: number = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(path.resolve(), 'src/views'))
app.use(express.static(path.join(__dirname + 'public')));
app.use('/', AppController);

app.listen(port, err => {
  if (err) {
    console.log(err)
  } else {
    console.log(`Listening at http://localhost:${port}/`);
  }
});
