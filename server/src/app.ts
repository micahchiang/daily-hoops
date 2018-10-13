import * as cors from 'cors';
import * as bodyparser from 'body-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as request from 'request';

class App {
  public express;

  constructor() {
    this.express = express();
    this.loadRoutes();
    this.loadMiddleware();
  }

  private loadRoutes() {
    const router = express.Router();
    router.use(cors());
    router.get('/', (req, res) => {
      res.send('hello world');
    });
    router.get('/games', (req, res) => {
      let options = {
        method: 'GET',
        url:
          'https://data.nba.com/data/5s/v2015/json/mobile_teams/nba/2018/scores/00_todays_scores.json'
      };
      request(options, function(error, response, body) {
        if (error) throw new Error(error);
        res.send(body);
      });
    });
    this.express.use('/', router);
  }

  private loadMiddleware() {
    let options = {
      origin: '*'
    };
    this.express.use(cors(options));
    this.express.use(bodyparser.json());
    this.express.use(bodyparser.urlencoded({ extended: true }));
    this.express.use(logger('dev'));
  }
}

export default new App().express;
