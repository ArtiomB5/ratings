import { IPTagProps } from "./PTag.props";
import styles from "./PTag.module.scss";
import classNames from "classnames";

export const PTag = ({
  size = "M",
  children,
  ...props
}: IPTagProps): JSX.Element => {
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
