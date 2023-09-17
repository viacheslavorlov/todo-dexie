import {useLiveQuery} from 'dexie-react-hooks';
import {memo, ReducerWithoutAction, useReducer} from 'react';
import {db} from '../../../db';
import {FilterTasks, FilterType} from '../../../entities/FilterTasks/ui/FilterTasks';
import {TaskList} from '../../../entities/Task';
import {CreateNewTask} from '../../../features/CreateNewTask';
import {classNames} from '../../../shared/lib/classNames/classNames';
import cls from './TaskPage.module.css';

interface TaskPageProps {
    className?: string;
}

type ActionType = {
    type: 'CHANGE_FILTER';
    payload: FilterType;
};

export interface StateInterface {
    filter: FilterType;
}


const initialState: StateInterface = {
    filter: 'all'
};

function filterReducer(state: StateInterface, action: ActionType) {
    switch (action.type) {
        case 'CHANGE_FILTER':
            return {filter: action.payload};
        default:
            return state;
    }
}

const init = (): StateInterface => ({filter: 'all'});

export const TaskPage = memo((props: TaskPageProps) => {
    const {
        className
    } = props;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const [
        state,
        dispatch
    ] = useReducer<
            (state: StateInterface, action: ActionType) => StateInterface,
            ReducerWithoutAction<StateInterface>,
            () => StateInterface
        >(filterReducer, initialState, init);

    const tasks = useLiveQuery(() => db.todos?.toArray());

    return (
        <div data-testid={'main-page'} className={classNames(cls.TaskPage, className)}>
            <h1 className={cls.title}>todos</h1>
            <CreateNewTask/>
            {tasks?.length ? (
                    <>
                        <TaskList filter={state.filter} tasks={tasks}/>
                        <FilterTasks state={state} tasksCount={tasks?.length} dispatch={dispatch}/>
                    </>
                )
                : <h1 data-testid={'no-tasks'}>Нет задач</h1>}
        </div>
    );
});
