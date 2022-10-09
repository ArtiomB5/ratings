import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface IPTagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "S" | "M" | "L";
  children: ReactNode;
}
