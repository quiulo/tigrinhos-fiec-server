import { Usuario } from "../business/entities/Usuario";
import { UsuarioRequestDto } from "../dto/UsuarioRequestDto";

export interface UsuarioService {
    criaUsuario(usuarioRequestDto: UsuarioRequestDto) : Promise<Usuario>;
    listaUsuarios() : Promise<Usuario[]>;
    pegaUsuario(id: string) : Promise<Usuario | undefined>;
    deletaUsuario(id: string) : Promise<void>
}