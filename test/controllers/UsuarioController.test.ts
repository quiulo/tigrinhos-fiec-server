import { Request, Response } from "express";
import { UsuarioRepositorio } from "../../src/business/repositories/UsuarioRepositorio";
import { UsuarioController } from "../../src/controllers/UsuarioController"
import { UsuarioService } from "../../src/services/UsuarioService";
import { Usuario } from "../../src/business/entities/Usuario";

describe('UsuarioController criaUsuario', () => { 

    let usuarioController: UsuarioController;
    let usuarioService: UsuarioService;
    let res = {} as unknown as Response;

    beforeEach(() => {
        
        res.json = jest.fn();
        res.status = jest.fn(() => res); // chained
        res.end = jest.fn();
        usuarioService = {
            criaUsuario : jest.fn(),
            listaUsuarios: jest.fn(),
            deletaUsuario: jest.fn(),
            pegaUsuario: jest.fn()
        };
    })

    test("criacao de usuario com parametro errado", async () => {
        
        usuarioController = new UsuarioController(usuarioService);

        const req = {
            body: {
                name: "Teste"
            }
        } as unknown as Request;
        const res = {} as unknown as Response;

        res.json = jest.fn();
        res.status = jest.fn(() => res); // chained
        res.end = jest.fn();


        await usuarioController.criaUsuario(req, res )
        expect(res.status).toHaveBeenCalledWith(400); // 400 erro de validacao
    })

    test("criacao de usuario com apenas o cpf incorreto", async () => {
        
        usuarioController = new UsuarioController(usuarioService);

        const req = {
            body: {
                name: "Teste",
                email: "joana@mail.com",
                cpf: "5555",
                idade: 20
            }
        } as unknown as Request;
       


        await usuarioController.criaUsuario(req, res )
        expect(res.status).toHaveBeenCalledWith(400); // 400 erro de validacao
    })

    test("criacao de usuario correta", async () => {
        usuarioService.criaUsuario = async () => 
        { return Promise.resolve(new Usuario()) },
           
      
        usuarioController = new UsuarioController(usuarioService);

 
        const req = {
            body: {
                email:"test@mail.com",
                name: "Teste",
                cpf: "258784862-22",
                idade: 26
            }
        } as unknown as Request;
        

        await usuarioController.criaUsuario(req, res )
        expect(res.status).toHaveBeenCalledWith(201); // 201 codigo de criacao
    })


 })

 describe('UsuarioController encontra Usuario', () => { 
    let usuarioController: UsuarioController;
    let usuarioService: UsuarioService;
    let res = {} as unknown as Response;

    beforeEach(() => {
        
        res.json = jest.fn();
        res.status = jest.fn(() => res); // chained
        res.end = jest.fn();
        usuarioService = {
            criaUsuario : jest.fn(),
            listaUsuarios: jest.fn(),
            deletaUsuario: jest.fn(),
            pegaUsuario: jest.fn()
        };
    })

    test("pega um usuario existente", async () => {
        usuarioService.pegaUsuario = async (id) => { return Promise.resolve(new Usuario()) },

        usuarioController = new UsuarioController(usuarioService);

        const req = {
            params: {
                id: "1234"
            }
        } as unknown as Request;
        

        await usuarioController.pegaUsuario(req, res )
        expect(res.status).toHaveBeenCalledWith(200);

    })

    test("pegausuario nao existente", async () => {
        usuarioService.pegaUsuario = async (id) => { return Promise.resolve(undefined) },

        usuarioController = new UsuarioController(usuarioService);

        const req = {
            params: {
                id: "1234"
            }
        } as unknown as Request;
        
        await usuarioController.pegaUsuario(req, res )
        expect(res.status).toHaveBeenCalledWith(404);

    })

 })
