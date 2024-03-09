import { Request, Response } from "express";
import { UsuarioService } from "../services/UsuarioService";

export class UsuarioController {

    usuarioService: UsuarioService;

    constructor(usuarioService: UsuarioService) {
        this.usuarioService = usuarioService;
    }

    criaUsuario = async (req: Request, res: Response) => {
        try {
            const { cpf, name, email } = req.body;
            const usuarioNovo = await this.usuarioService.criaUsuario(cpf, name, email);
            return res.status(201).json(usuarioNovo);
        } catch (err) {
            return res.status(500).end('Nao pode criar usuario')
        }
    }

    listaUsuarios = async (req: Request, res: Response) => {
        const usuarios = await this.usuarioService.listaUsuarios();
        return res.json(usuarios);
    }

    pegaUsuario = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const usuario = await this.usuarioService.pegaUsuario(id);
            return res.json(usuario);
        } catch (err) {
            return res.status(404).end("User Not found")
        }
    }

    deletaUsuario = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await this.usuarioService.deletaUsuario(id);
            return res.status(200).end("Usuario removido");
        } catch (err) {
            return res.status(404).end("User Not found")
        }
    }

}