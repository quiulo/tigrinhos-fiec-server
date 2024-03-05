import { Request, Response } from "express";
import PedidoService from "../services/PedidoService";

class PedidoController {

    pedidoService: PedidoService;

    constructor(pedidoService: PedidoService){
        this.pedidoService = pedidoService;
    }


    public getOneProduct(req: Request, res: Response){
        const id = req.params.id;
        try{
            parseInt(id);
            const pedido = this.pedidoService.readOne(id);
            if(pedido){
                return res.status(200).json(pedido);
            } else {
                return res.status(404).end('Pedido nao encontrado');
            }
        } catch(err){
            console.log(err);
            return res.status(500).end('Houve algum erro');
        }
    }
}

export default PedidoController;