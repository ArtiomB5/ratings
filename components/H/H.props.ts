import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface IHProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
}
