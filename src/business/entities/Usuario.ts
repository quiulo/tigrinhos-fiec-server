import { Base } from "./Base"

export class Usuario extends Base {
    cpf: string
    name: string
    email: string
    idade: number
    createdAt: Date
    updateAt: Date
}