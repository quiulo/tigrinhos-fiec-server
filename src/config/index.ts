import express, { Request, Response } from 'express';
import cors from 'cors'
import morgan from 'morgan'

const app = express();

app.use(cors());
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'))
app.use(express.json())
//app.use(express.urlencoded());

type Pedido = {
    id: string
    nome: string
}

const pedidos: Pedido[] = [ { id: '323', nome: 'Abacaxi'}, { id: '325', nome: 'Pera'}];

app.get('/pedidos', (req: Request, res: Response) => {
    return res.status(200).json(pedidos);
})

app.get('/pedidos/:id', (req: Request, res: Response) => {
    //console.log(req.params.parametro);
    //res.status(200).send("Resposta do GET com parametros");
    const pedido = pedidos.find(p => p.id === req.params.id);
    if(pedido){
        return res.status(200).json(pedido);
    } 
    return res.status(404).end("Not found");
    
})

app.post('/pedidos', (req:Request, res: Response) => {
    const pedido = req.body;
    pedidos.push(req.body);
    return res.status(201).send("Pedido Adicionado");
})

app.put('/pedidos/:id', (req:Request, res:Response) => {
    const pedido = req.body;
    const index = pedidos.findIndex(p => p.id === req.params.id);
    if(index >= 0){
        pedidos.splice(index, 1, pedido);
        return res.status(200).end("Update OK");
    }
    return res.status(404).end("Not found");
})

app.delete('/pedidos/:id', (req:Request, res:Response) => {
    
    const index = pedidos.findIndex(p => p.id === req.params.id);
    if(index >= 0){
        pedidos.splice(index, 1);
        return res.status(200).end("Delete OK");
    }
    return res.status(404).end("Not found");
})

export default app;