import { IHTagProps } from "./HTag.props";
import styles from "./HTag.module.scss";
import classNames from "classnames";

export const HTag = ({ tag, children, ...props }: IHTagProps): JSX.Element => {
  const className = classNames({
    [styles["h1"]]: tag === "h1",
    [styles["h2"]]: tag === "h2",
    [styles["h3"]]: tag === "h3",
  });

  return <div className={className} {...props}>{children}</div>;
};
