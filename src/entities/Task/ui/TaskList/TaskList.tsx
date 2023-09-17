import {memo} from 'react';
import {FilterType} from '../../../FilterTasks/ui/FilterTasks';
import {classNames} from '../../../../shared/lib/classNames/classNames';
import {onTaskChange} from '../../model/onTaskChange';
import {TaskType} from '../../model/types/TaskTypes';
import {Task} from '../Task/Task';
import cls from './TaskList.module.css';

interface TaskListProps {
    className?: string;
    tasks: TaskType[];
    filter: FilterType;
}

export const TaskList = memo((props: TaskListProps) => {
    const {
        className, tasks, filter
    } = props;

    const filterTasks = (task: TaskType, filterType: FilterType) => {
        switch (filterType) {
            case 'all':
                return true;
            case 'active':
                return !task.done;
            case 'completed':
                return task.done;
            default:
                console.log(task);
        }
    };

    return (
        <div data-testid={'task-list'} className={classNames(cls.TaskList, className)}>
            {tasks
                .filter(item => filterTasks(item, filter))
                .map(task => <Task onChange={onTaskChange} key={task.id} task={task}/>)}
        </div>
    );
});
