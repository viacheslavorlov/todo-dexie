import { forwardRef, InputHTMLAttributes } from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import cls from './Input.module.css';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { type = 'text', className, ...additionalArgs } = props;

    return (
        <input
            data-testid={'input'}
            ref={ref}
            type={type}
            className={classNames(cls.Input, className)}
            {...additionalArgs}
        />
    );
});
