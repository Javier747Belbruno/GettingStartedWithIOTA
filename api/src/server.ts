import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import userRoute from './routes/user';
import iotaRoute from './routes/iota';
import logEndPoints from './middleware/logEndPoints';


// Check where this line goes in the other project.
//const dotenv = require("dotenv").config();


const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());

// A dummy middleware to test logging.
app.use(logEndPoints);

// Routes
userRoute(app);
iotaRoute(app);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log('Application listening at Http://localhost:' + PORT);
});

