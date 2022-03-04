
import express from 'express';
import cors from 'cors';
import userRoute from './routes/user';

// Check where this line goes in the other project.
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

userRoute(app);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('Application listening at Http://localhost:' + PORT);
});

