import {memo} from 'react';
import {classNames} from '../../../../shared/lib/classNames/classNames';
import {CheckBox} from '../../../../shared/ui/CheckBox/ui/CheckBox';
import {onTaskChange} from '../../model/onTaskChange';
import {TaskType} from '../../model/types/TaskTypes';
import cls from './Task.module.css';

interface TaskProps {
    className?: string;
    task: TaskType;
}

export const Task = memo((props: TaskProps) => {
    const {
        className, task
    } = props;

    const done = task.done ? cls.done : ''

    return (
        <div className={classNames(cls.Task, className)}>
            <CheckBox onChange={() => onTaskChange({...task, done: !task.done})} checked={task.done}/>
            <div className={classNames(className, done)}>{task.title}</div>
        </div>
    );
});
