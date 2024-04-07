import { v4 } from "uuid";
import { MyDB } from "../../db/MyDB";
import { Usuario } from "../entities/Usuario";
import { Repositorio } from "./Repositorio";
import { BaseRepositorio } from "./BaseRepositorio";

export class UsuarioRepositorio extends BaseRepositorio<Usuario> {
    
    constructor(){
        super(MyDB.usuarios)
    }

}