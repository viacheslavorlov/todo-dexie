
import { memo, useEffect, useRef, KeyboardEvent } from 'react';
import { db } from '../../../db';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Input } from '../../../shared/ui/Input';
import cls from './CreateNewTask.module.css';

interface CreateNewTaskProps {
    className?: string;
}

export const CreateNewTask = memo((props: CreateNewTaskProps) => {
    const { className } = props;
    const inputRef = useRef<HTMLInputElement | null>(null);

    async function createNewTask(e: KeyboardEvent<HTMLInputElement>) {
        if (e.target instanceof HTMLInputElement) {
            const title = e.target.value;
            if (title) {
                if (e.code === 'Enter') {
                    try {
                        await db.todos.add({
                            id: Date.now(),
                            done: false,
                            title: title,
                        });
                    } catch (e) {
                        console.log(e);
                    }
                    e.target.value = '';
                }
            }
        }
    }

    async function createNewTaskByButton(title: string | undefined) {
        if (title) {
            try {
                await db.todos.add({
                    id: Date.now(),
                    done: false,
                    title: title,
                });
            } catch (e) {
                console.log(e);
            }
            inputRef.current!.value = '';
        }
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => createNewTask(e);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        inputRef.current!.addEventListener('keydown', handleKeyDown);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        return () => {// @ts-ignore
            inputRef.current!.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className={classNames(cls.CreateNewTask, className)}>
            <Input
                placeholder={'Whats need to be done?'}
                ref={inputRef}
                className={cls.input}
            />
            <button
                data-testid={'create-button'}
                className={cls.button}
                onClick={() => createNewTaskByButton(inputRef.current?.value)}
            >
                Create
            </button>
        </div>
    );
});
