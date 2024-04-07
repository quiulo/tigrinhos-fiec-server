import { Router } from "express";
import { UsuarioServiceImpl } from "../services/impl/UsuarioServiceImpl";
import { UsuarioController } from "../controllers/UsuarioController";
import { UsuarioRepositorio } from "../business/repositories/UsuarioRepositorio";



const usuarioRouter = Router();

const userRepo = new UsuarioRepositorio();
const userService = new UsuarioServiceImpl(userRepo);
const usuarioController = new UsuarioController(userService);
usuarioRouter.get('/', usuarioController.listaUsuarios);
usuarioRouter.get('/:id', usuarioController.pegaUsuario);
usuarioRouter.post('/', usuarioController.criaUsuario);
usuarioRouter.delete('/:id', usuarioController.deletaUsuario);


export default usuarioRouter;