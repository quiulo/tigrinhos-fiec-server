import express, { Request, Response } from 'express';
import cors from 'cors'
import morgan from 'morgan'
import usuarioRouter from '../routes/usuarioRouter';



const app = express();

app.use(cors());
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'))
app.use(express.json())
app.use('/usuarios', usuarioRouter);


export default app;