import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IRatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean;
  setRating?: (rating: number) => void;
  rating: number;
}
