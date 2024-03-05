import Pedido from "../business/Pedido";

interface PedidoService {
    create(pedido: Pedido): void;
    update(pedido: Pedido, id: string): void;
    delete(id: string): void;
    readOne(id: string): Pedido | undefined;
    readAll(): Pedido[];
}

export default PedidoService;