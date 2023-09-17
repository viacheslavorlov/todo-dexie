import {memo} from 'react';
import {classNames} from '../../../../shared/lib/classNames/classNames';
import {CheckBox} from '../../../../shared/ui/CheckBox/ui/CheckBox';
import {TaskType} from '../../model/types/TaskTypes';
import cls from './Task.module.css';

interface TaskProps {
    className?: string;
    task: TaskType;
    onChange: (task: TaskType) => void;
}

export const Task = memo((props: TaskProps) => {
    const {
        className, task, onChange
    } = props;

    const handleCheckboxChange = () => {
        const updatedTask = { ...task, done: !task.done };
        onChange(updatedTask);
    };

    const done = task.done ? cls.done : ''

    return (
        <div data-testid="task" className={classNames(cls.Task, className)}>
            <CheckBox onChange={handleCheckboxChange} checked={task.done}/>
            <div className={classNames(className, done)}>{task.title}</div>
        </div>
    );
});
