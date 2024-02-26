import express, { Request, Response } from 'express';
import cors from 'cors'
import morgan from 'morgan'

const app = express();

app.use(cors());
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'))
app.use(express.json())
app.use(express.urlencoded());

app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Resposta do GET");
})

app.get('/:parametro', (req: Request, res: Response) => {
    console.log(req.params.parametro);
    res.status(200).send("Resposta do GET com parametros");
})

app.get('/query/custom', (req: Request, res: Response) => {
    console.log(req.query.nome);
    res.status(200).send("Resposta do GET com query");
})

app.post('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.status(200).send("Resposta do POST com json");
})

export default app;