// Import everything from express and assign it to the express variable
import * as express from 'express'

// Import WelcomeController from controllers entry point
import { AppController } from './app'

console.log('WeStage Hackday with Zengularity!')

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number = process.env.PORT || 3000;

// Mount the WelcomeController at the /welcome route
app.use('/app', AppController);

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
