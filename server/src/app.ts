import * as express from 'express';
import * as bodyparser from 'body-parser';
import * as logger from 'morgan';

class App {

    public express;

    constructor() {
        this.express = express();
        this.loadRoutes();
        this.loadMiddleware()
    }

    private loadRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.send('hello world');
        });
        this.express.use('/', router);
    }

    private loadMiddleware() {
        this.express.use(bodyparser.json());
        this.express.use(bodyparser.urlencoded({extended: true}));
        this.express.use(logger('dev'));
    }
}

export default new App().express;


