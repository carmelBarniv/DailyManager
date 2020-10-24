import express from 'express';
import cors from 'cors';
import routers from './api/Routers/mainRouter.js';
import config from './Common/Config/config.js';
import './Subscribers/index.js';


const app = express();
  
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });

app.use(cors(config.app.corsOptions));

app.use(routers);

app.get('/sainitys',async(req, res) =>{
  res.status(200).send();
})

const server = app.listen(config.app.port, () => console.log(`Listening on port ${config.app.port}...`));
