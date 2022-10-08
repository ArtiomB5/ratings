import styles from './Button.module.scss';
import classNames from 'classnames';
import { IButtonProps } from './Button.props';

export const Button = ({ appearance, children, handler, ...props }: IButtonProps): JSX.Element => {
    const className = classNames(styles.button, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      });

    return <button onClick={handler} className={className} {...props}>{children}</button>;
};
