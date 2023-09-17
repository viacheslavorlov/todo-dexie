import { render, screen, fireEvent } from '@testing-library/react';
import {FilterTasks, FilterType} from './FilterTasks';

const state: {filter: FilterType} = { filter: 'all' };
const tasksCount = 5;
const dispatch = jest.fn();

describe('FilterTasks', () => {
    test('renders correctly', async () => {
        render(<FilterTasks tasksCount={tasksCount} dispatch={dispatch} state={state} />);
        const itemsLeft = await screen.getByText(`${tasksCount} items left`)
        await expect(itemsLeft).toBeInTheDocument();
        expect(screen.getByText('All')).toBeInTheDocument();
        expect(screen.getByText('Active')).toBeInTheDocument();
        expect(screen.getByText('Completed')).toBeInTheDocument();
        expect(screen.getByText('Clear completed')).toBeInTheDocument();
    });

    test('calls dispatch with correct payload when filter button is clicked', () => {
        render(<FilterTasks tasksCount={tasksCount} dispatch={dispatch} state={state} />);

        fireEvent.click(screen.getByText('Active'));
        expect(dispatch).toHaveBeenCalledWith({ type: 'CHANGE_FILTER', payload: 'active' });

        fireEvent.click(screen.getByText('Completed'));
        expect(dispatch).toHaveBeenCalledWith({ type: 'CHANGE_FILTER', payload: 'completed' });
    });

});
