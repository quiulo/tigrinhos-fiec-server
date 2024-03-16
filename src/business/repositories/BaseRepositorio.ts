import { v4 } from "uuid";
import { Base } from "../entities/Base";
import { Repositorio } from "./Repositorio";

export abstract class BaseRepositorio<T extends Base> implements Repositorio<Base, string> {

    private baseList: T[]

    constructor(baseList: T[]){
        this.baseList = baseList;
    }

    find(): Promise<T[]> {
        return Promise.resolve(this.baseList);
    }
    findById(id: string): Promise<T | undefined> {
        return Promise.resolve(this.baseList.find(u => u.id === id));
    }
    removeById(id: string): Promise<void> {
        const idx = this.baseList.findIndex(u => u.id === id)
        if(idx >= 0) {
            this.baseList.splice(idx, 1);
        }
        return Promise.resolve();
    }
    save(t: T): Promise<T> {
        if(!t.id){
            t.id = v4();
            this.baseList.push(t);
        } else {
            const idx = this.baseList.findIndex(u => u.id === t.id);
            this.baseList.splice(idx, 1, t);
        }        
        return Promise.resolve(t);
    }

}