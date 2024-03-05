import Pedido from "../../business/Pedido";
import PedidoService from "../PedidoService";

class PedidoServiceImpl implements PedidoService {
    readOne(id: string): Pedido | undefined {
        return new Pedido('321', 'aloha');
    }
    readAll(): Pedido[] {
        throw new Error("Method not implemented.");
    }
    create(pedido: Pedido): void {
        throw new Error("Method not implemented.");
    }
    update(pedido: Pedido, id: string): void {
        throw new Error("Method not implemented.");
    }
    delete(id: string): void {
        throw new Error("Method not implemented.");
    }
    
    
}

export default PedidoServiceImpl