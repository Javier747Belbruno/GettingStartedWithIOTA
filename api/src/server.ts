import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import userRoute from './routes/user';
import iotaRoute from './routes/iota';
import logEndPoints from './middleware/logEndPoints';


const app = express();

// middlewares
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(logEndPoints);

// routes
userRoute(app);
iotaRoute(app);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log('Application listening at Http://localhost:' + PORT);
});

