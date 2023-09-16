import {useLiveQuery} from 'dexie-react-hooks';
import {memo} from 'react';
import {db} from '../../db';
import {TaskType} from '../../entities/Task/model/types/TaskTypes';
import {CreateNewTask} from '../../features/CreateNewTask';
import {classNames} from '../../shared/lib/classNames/classNames';
import {TaskList} from '../../entities/Task';
import cls from './TaskPage.module.css';

interface TaskPageProps {
    className?: string;
}

const fakeTasks: TaskType[] = [
    {
        title: 'Task1', done: true, id: 1
    },
    {
        title: 'Task2', done: false, id: 2
    },
    {
        title: 'Task3', done: false, id: 3
    },
    {
        title: 'Task4', done: true, id: 4
    }
];

export const TaskPage = memo((props: TaskPageProps) => {
    const {
        className
    } = props;

    const tasks = useLiveQuery(() => db.todos?.toArray()) || fakeTasks

    return (
        <div className={classNames(cls.TaskPage, className)}>
            <h1 className={cls.title}>todos</h1>
            <CreateNewTask/>
            {tasks?.length ? <TaskList tasks={tasks}/> : <h1>Нет задач</h1>}
        </div>
    );
});
