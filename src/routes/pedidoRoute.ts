import { Router } from "express";
import PedidoController from "../controllers/PedidoController";
import PedidoServiceImpl from "../services/impl/PedidoServiceImpl";

const pedidoRouter = Router();
const pedidoController: PedidoController = new PedidoController(new PedidoServiceImpl());


pedidoRouter.get('/:id', pedidoController.getOneProduct.bind(pedidoController));

export default pedidoRouter;