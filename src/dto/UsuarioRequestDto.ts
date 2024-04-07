import { z } from "zod"

/*export class UsuarioRequestDto {
    cpf: string
    name: string
    email: string
}*/

const UsuarioRequestDtoValidation = z.object({
    email: z.string().email(),
    name: z.string().min(3),
    cpf: z.string().regex(/[0-9]{9}-[0-9]{2}/g),
    idade: z.coerce.number()
})

export const UsuarioRequestDtoParams = z.object({
    id: z.string()
})

type UsuarioRequestDto = z.infer<typeof UsuarioRequestDtoValidation>
export { UsuarioRequestDto, UsuarioRequestDtoValidation}