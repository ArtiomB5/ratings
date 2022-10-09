import { ITagProps } from "./Tag.props";
import styles from "./Tag.module.scss";
import classNames from "classnames";

export const Tag = ({
  size = "M",
  color = "gray",
  href,
  children,
  ...props
}: ITagProps): JSX.Element => {
  const className = classNames(styles.tag, {
    [styles["m-size"]]: size === "M",
    [styles["l-size"]]: size === "L",
    [styles["primary-color"]]: color === "primary",
    [styles["gray-color"]]: color === "gray",
    [styles["green-color"]]: color === "green",
    [styles["red-color"]]: color === "red",
    [styles["gray-light-color"]]: color === "gray-light",
  });

  return (
    <div className={className} {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
