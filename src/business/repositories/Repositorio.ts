export interface Repositorio<T, U> {
    find() : Promise<T[]>
    findById(id: U): Promise<T | undefined>
    removeById(id: U) : Promise<void>
    save(t: T) : Promise<T>

}