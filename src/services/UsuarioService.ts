import { Usuario } from "../business/Usuario";

export interface UsuarioService {
    criaUsuario(cpf: string, name: string, email: string) : Promise<Usuario>;
    listaUsuarios() : Promise<Usuario[]>;
    pegaUsuario(id: string) : Promise<Usuario | undefined>;
    deletaUsuario(id: string) : Promise<void>
}