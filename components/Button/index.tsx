import styles from "./Button.module.scss";
import classNames from "classnames";
import { IButtonProps } from "./Button.props";
import ArrowIcon from './arrow.svg';

export const Button = ({
  appearance,
  children,
  arrow = "none",
  handler,
  ...props
}: IButtonProps): JSX.Element => {
  const buttonClassName = classNames(styles.button, {
    [styles.primary]: appearance === "primary",
    [styles.ghost]: appearance === "ghost",
  });

  const arrowClassName = classNames(styles.arrow, {
    [styles.down]: arrow === "down",
  });

  return (
    <button onClick={handler} className={buttonClassName} {...props}>
      {children}
      {arrow !== "none" && (
        <span className={arrowClassName}>
          <img src={ArrowIcon} alt="" />
        </span>
      )}
    </button>
  );
};
