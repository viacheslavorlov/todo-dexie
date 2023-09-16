import {classNames} from '../../../../shared/lib/classNames/classNames';
import {TaskType} from '../../model/types/TaskTypes';
import {Task} from '../Task/Task';
import cls from './TaskList.module.css';
import {memo} from 'react';

interface TaskListProps {
    className?: string;
    tasks: TaskType[];
}

export const TaskList = memo((props: TaskListProps) => {
    const {
        className, tasks
    } = props;

    return (
        <div className={classNames(cls.TaskList, className)}>
            {tasks.map(task => <Task key={task.id} task={task}/>)}
        </div>
    );
});
