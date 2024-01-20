import express from 'express'
import cors from 'cors'
import UserRoute from './routers/UserRoute.js'
// import router from './routers/UserRoute';

const app = express();

// midleware
app.use(cors());
app.use(express.json());
app.use(UserRoute);
// app.use(router);

app.listen(5000, () => console.log('server up and running...'))
