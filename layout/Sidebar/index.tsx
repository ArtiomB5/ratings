import { IHProps } from "./H.props";
import styles from "./H.module.scss";
import classNames from "classnames";

export const HTag = ({ tag, children, ...props }: IHProps): JSX.Element => {
  const className = classNames({
    [styles["h1"]]: tag === "h1",
    [styles["h2"]]: tag === "h2",
    [styles["h3"]]: tag === "h3",
  });

  return <div className={className} {...props}>{children}</div>;
};
