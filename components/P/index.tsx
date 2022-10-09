import { IPProps } from "./P.props";
import styles from "./P.module.scss";
import classNames from "classnames";

export const P = ({
  size = "M",
  children,
  ...props
}: IPProps): JSX.Element => {
  const className = classNames(styles.paragraph, {
    [styles["l-size"]]: size === "L",
    [styles["m-size"]]: size === "M",
    [styles["s-size"]]: size === "S",
  });

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};
