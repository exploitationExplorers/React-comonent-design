// src/components/Button/index.tsx
import { IButtonProps } from './interface';
import classnames from 'classnames';
import './index.css';

const Button = ({
    disabled = false,
    size = 'small',
    ...props
}: IButtonProps) => {
    const {
        label,
        onClick,
        children,
        className: customClassName,
        ...rest
    } = props;
    const cls = classnames([customClassName, 'btn-default', `btn-${size}`]);
    return (
        <button className={cls} onClick={onClick} disabled={disabled} {...rest}>
            {children || label}
        </button>
    );
};

export default Button;
