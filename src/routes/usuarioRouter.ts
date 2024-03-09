import { Router } from "express";
import { UsuarioServiceImpl } from "../services/impl/UsuarioServiceImpl";
import { UsuarioController } from "../controllers/UsuarioController";

const userService = new UsuarioServiceImpl();
const usuarioController = new UsuarioController(userService);

const usuarioRouter = Router();
usuarioRouter.get('/', usuarioController.listaUsuarios);
usuarioRouter.get('/:id', usuarioController.pegaUsuario);
usuarioRouter.post('/', usuarioController.criaUsuario);
usuarioRouter.delete('/:id', usuarioController.deletaUsuario);

export default usuarioRouter;