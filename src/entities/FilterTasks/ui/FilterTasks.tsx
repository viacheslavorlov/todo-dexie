import {StateInterface} from '../../../pages/TaskPage/ui/TaskPage';
import {classNames} from '../../../shared/lib/classNames/classNames';
import {deleteCompletedTasks} from '../model/deleteCompletedTasks';
import cls from './FilterTasks.module.css';

export type FilterType = 'all' | 'active' | 'completed';

interface FilterTasksProps {
    className?: string;
    tasksCount: number;
    state: StateInterface;
    dispatch: (obj: {type: string, payload: FilterType}) => void;
}

export const FilterTasks = (props: FilterTasksProps) => {
    const {className, tasksCount, dispatch, state} = props;

    return (
        <div className={classNames(cls.FilterTasks, className)}>
            <div className={cls.taskCount}>{tasksCount} items left</div>
            <div className={cls.buttonWrapper}>
                <button
                    className={classNames(cls.btn, state.filter === 'all' ? cls.active : '')}
                    onClick={() => dispatch({type: 'CHANGE_FILTER', payload: 'all'})}
                >
                    All
                </button>
                <button
                    className={classNames(cls.btn, state.filter === 'active' ? cls.active : '')}
                    onClick={() => dispatch({type: 'CHANGE_FILTER', payload: 'active'})}
                >
                    Active
                </button>
                <button
                    className={classNames(cls.btn, state.filter === 'completed' ? cls.active : '')}
                    onClick={() => dispatch({type: 'CHANGE_FILTER', payload: 'completed'})}
                >
                    Completed
                </button>
            </div>
            <button onClick={deleteCompletedTasks} className={cls.btn}>Clear completed</button>
        </div>
    );
};


