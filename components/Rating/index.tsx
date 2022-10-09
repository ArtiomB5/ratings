import { useEffect, useState } from "react";
import { IRatingProps } from "./Rating.props";
import styles from "./Rating.module.scss";
import classNames from "classnames";
import StarIcon from "./start.svg";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: IRatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    getRatingStarts(rating);
  }, [rating, hoverIndex]);

  const getStarClassName = (rating: number, index: number) =>
    classNames({
      [styles["star-ghost"]]: isEditable && setRating,
      [styles["star-filled"]]: index < rating || index <= Number(hoverIndex),
    });

  const getRatingStarts = (rating: number) => {
    setRatingArray(
      ratingArray.map((r: JSX.Element, i: number) =>
        isEditable && setRating ? (
          <span
            className={styles["star-wrapper"]}
            onClick={() => setRating(i + 1)}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            key={i}
          >
            <StarIcon className={getStarClassName(rating, i)} />
          </span>
        ) : (
          <span className={styles["star-wrapper"]} key={i}>
            <StarIcon className={getStarClassName(rating, i)} />
          </span>
        )
      )
    );
  };

  return <div className={styles.stars} {...props}>{ratingArray}</div>;
};
