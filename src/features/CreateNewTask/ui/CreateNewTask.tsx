import {memo, useEffect, useRef} from 'react';
import {db} from '../../../db';
import {classNames} from '../../../shared/lib/classNames/classNames';
import {Input} from '../../../shared/ui/Input/Input';
import cls from './CreateNewTask.module.css';

interface CreateNewTaskProps {
    className?: string;
}

export const CreateNewTask = memo((props: CreateNewTaskProps) => {
    const {
        className
    } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);

    async function createNewTask(e: KeyboardEvent | MouseEvent, title: string) {
        if (title) {
            if (e instanceof KeyboardEvent && e.code === 'Enter' || e instanceof MouseEvent) {
                try {
                    await db.todos.add({
                        id: Date.now(),
                        done: false,
                        title: title
                    });
                } catch (e) {
                    console.log(e);
                }
            }
        }
    }

    useEffect(() => {
        if (inputRef.current) {
            const handleKeyDown = (e: KeyboardEvent) =>
                createNewTask(e, inputRef.current!.value);

            inputRef.current?.addEventListener!('keydown', handleKeyDown);

            return () => {
                inputRef.current!.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, []);

    return (
        <div className={classNames(cls.CreateNewTask, className)}>
            <Input
                placeholder={'Что нужно сделать?'}
                ref={inputRef}
            />
            <button
                className={cls.button}
                onClick={(event) => createNewTask(event, inputRef.current?.value)}
            >
                Добавить
            </button>
        </div>
    );
});
