import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface ITagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "M" | "L";
  color?: "primary" | "gray" | "green" | "red" | "gray-light";
  href?: string;
  children: ReactNode;
}
