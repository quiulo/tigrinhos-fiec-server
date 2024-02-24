import dotenv from 'dotenv'
import http from 'http';

const nomeApp = ["Tigrinhos Fiec 2024"]

let x = '5';

//dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
dotenv.config({ path: `.env.local` })

console.log(`${nomeApp} vai rodar na porta ${process.env.PORT}`);

const server = http.createServer( (req: http.IncomingMessage, res: http.ServerResponse) => {
    
    if(req.method === 'GET'){
        if(req.url === '/users'){
            res.end("Resposta para o GET no recurso users");
        } else {
            res.end("Resposta para o GET na raiz")
        }
        
    } else if(req.method === 'POST'){
        res.end("Resposta para o POST")
    }else if(req.method === 'PUT'){
        res.end("Resposta para o PUT")
    } else {
        res.end("Resposta para o DELETE")
    }
    


} );

server.listen(process.env.PORT, () => "Servidor Inicializado");