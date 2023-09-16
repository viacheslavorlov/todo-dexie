import Dexie, { Table } from 'dexie';
import {TaskType} from '../entities/Task/model/types/TaskTypes';


export class MySubClassedDexie extends Dexie {
    todos!: Table<TaskType>;

    constructor() {
        super('todos');
        this.version(1).stores({
            todos: '++id, title, done' // Primary key and indexed props
        });
    }
}

export const db = new MySubClassedDexie();
