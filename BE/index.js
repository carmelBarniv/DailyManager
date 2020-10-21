const express = require('express');
const cors = require("cors")
const soldierRouter = require("./Routers/Soldier");
const taskRouter = require("./Routers/Task");
const groupRouter = require("./Routers/Group");
const dailyRouter = require("./Routers/Daily");

var corsOptions = {
    origin: [
            "http://localHost:3001"
            // "http://192.168.1.100:3000",
            // "http://localHost:3000"
        ],
        optionsSuccessStatus: 200
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
