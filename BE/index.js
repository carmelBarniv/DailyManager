import express from 'express';
import cors from 'cors';
import soldierRouter from './Controllers/Soldier.js';
import taskRouter from './Controllers/Task.js';
import groupRouter from './Controllers/Group.js';
import dailyRouter from './Controllers/Daily.js';

var corsOptions = {
    origin: [
            "http://192.168.1.100:3000",
            "http://localHost:3000",
            "http://localHost:3001"
        ]
  }
  
const app = express();
  
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });

app.use(cors(corsOptions));

app.use("/soldier",soldierRouter);
app.use("/task",taskRouter);
app.use("/group",groupRouter);
app.use("/daily",dailyRouter);

app.get('/sainitys',async(req, res) =>{
  res.status(200).send();
})

let server = app.listen(3000, () => console.log('Listening on port 3000...'));
