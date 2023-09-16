import {db} from '../../../db';
import {TaskType} from './types/TaskTypes';

export const onTaskChange = async (item: TaskType) => {
    await db.todos.put(item);
}
