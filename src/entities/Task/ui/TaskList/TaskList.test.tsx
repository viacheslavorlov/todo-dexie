import { render, screen } from '@testing-library/react';
import { TaskList } from './TaskList';

describe('TaskList', () => {
    const tasks = [
        { id: 1, title: 'Task 1', done: false },
        { id: 2, title: 'Task 2', done: true },
        { id: 3, title: 'Task 3', done: false }
    ];

    test('renders correctly', () => {
        render(<TaskList tasks={tasks} filter="all" />);
        expect(screen.getByTestId('task-list')).toBeInTheDocument();
        expect(screen.getAllByTestId('task')).toHaveLength(3);
    });

    test('renders only active tasks when filter is active', () => {
        render(<TaskList tasks={tasks} filter="active" />);
        expect(screen.getByTestId('task-list')).toBeInTheDocument();
        expect(screen.getAllByTestId('task')).toHaveLength(2);
    });

    test('renders only completed tasks when filter is completed', () => {
        render(<TaskList tasks={tasks} filter="completed" />);
        expect(screen.getByTestId('task-list')).toBeInTheDocument();
        expect(screen.getAllByTestId('task')).toHaveLength(1);
    });
});
