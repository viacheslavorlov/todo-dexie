import {db} from '../../../db';

export const deleteCompletedTasks = async () => {
    await db.todos.filter(item => item.done).delete();
};
