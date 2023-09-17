import {memo} from 'react';
import {classNames} from '../../../lib/classNames/classNames';
import cls from './CheckBox.module.css';

interface CheckBoxProps {
    className?: string;
    checked: boolean;
    onChange: () => void
}

export const CheckBox = memo((props: CheckBoxProps) => {
    const {
        className, checked, onChange
    } = props;

    const onChangeHandler = () => {
        onChange()
    }

    return (
        <label className={classNames(cls.CustomCheckbox, className)}>
            <input data-testid={'checkbox'} onChange={onChangeHandler} type="checkbox" checked={checked}/>
            <span className={cls.checkmark}></span>
        </label>
    );
});
