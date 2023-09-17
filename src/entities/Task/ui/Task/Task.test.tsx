import { render, screen, fireEvent } from '@testing-library/react';
import { Task } from './Task';


describe('Task', () => {
    const task = {
        id: 1,
        title: 'Task 1',
        done: false,
    };

    test('renders correctly', () => {
        const onTaskChange = jest.fn();
        render(<Task onChange={onTaskChange} task={task} />);
        expect(screen.getByTestId('task')).toBeInTheDocument();
        expect(screen.getByText('Task 1')).toBeInTheDocument();
    });

    test('calls onTaskChange when CheckBox is clicked', () => {
        const onTaskChange = jest.fn();
        render(<Task task={task}  onChange={onTaskChange}/>);
        const checkBox = screen.getByTestId('checkbox');

        fireEvent.click(checkBox);
        expect(checkBox).toBeInTheDocument();

        expect(onTaskChange).toHaveBeenCalled();
    });
});
