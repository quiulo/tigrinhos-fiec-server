import { v4 } from "uuid";
import { Usuario } from "../../business/Usuario";
import { MyDB } from "../../db/MyDB";
import { UsuarioService } from "../UsuarioService";
import { UsuarioRequestDto } from "../../dto/UsuarioRequestDto";


export class UsuarioServiceImpl implements UsuarioService {

    usuarioRepositorio: Usuario[];

    constructor() {
        this.usuarioRepositorio = MyDB.usuarios;
    }

    criaUsuario(usuarioRequestDto: UsuarioRequestDto): Promise<Usuario> {
        const {cpf, name, email} = usuarioRequestDto;
        const usuarioNovo = new Usuario();
        usuarioNovo.cpf = cpf;
        usuarioNovo.email = email;
        usuarioNovo.name = name;
        usuarioNovo.createdAt = new Date();
        usuarioNovo.updateAt = new Date();

        // crio o ID dinamicamente
        usuarioNovo.id = v4();
        this.usuarioRepositorio.push(usuarioNovo);

        return Promise.resolve(usuarioNovo);

    }
    listaUsuarios(): Promise<Usuario[]> {
        const usuarios = this.usuarioRepositorio;
        return Promise.resolve(usuarios);
    }
    async pegaUsuario(id: string): Promise<Usuario | undefined> {
        const index = await this.checaUsuarioPorId(id);
        return Promise.resolve(this.usuarioRepositorio.at(index));
    }
    async deletaUsuario(id: string): Promise<void> {
        const index = await this.checaUsuarioPorId(id);
        this.usuarioRepositorio.splice(index, 1);
        return Promise.resolve();
    }

    private checaUsuarioPorId(id: string) : Promise<number>{
        const index  = this.usuarioRepositorio.findIndex(u => u.id === id);
        if(index < 0){
            return Promise.reject("User not found");
        }
        return Promise.resolve(index);
    }
    
}