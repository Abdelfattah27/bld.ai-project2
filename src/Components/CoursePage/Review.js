import React, { useState } from "react";
import styles from "./CourseStyles.module.css";
import DisLikeIcon from "./DisLikeIcon";
import DisLikeIconFill from "./DisLikeIconFill";
import LikeIcon from "./LikeIcon";
import LikeIconFill from "./LikeIconFill";

function Review({ data }) {
  console.log();
  const [isTheirPhot, setPhoto] = useState(false);
  const [isLiked, setLiked] = useState(false);
  const [isDisLiked, setDisLiked] = useState(false);
  const toggleLike = () => {
    if (isDisLiked && !isLiked) {
      setDisLiked(false);
      setLiked(true);
    } else setLiked(!isLiked);
  };
  const toggleDisLike = () => {
    if (!isDisLiked && isLiked) {
      setDisLiked(true);
      setLiked(false);
    } else setDisLiked(!isDisLiked);
  };
  return (
    <div className={styles.review}>
      {data.img ? (
        <img className={styles.reviewerImage} src={data.img} alt={data.name} />
      ) : (
        <span className={styles.reviewerImg}>
          {data.name
            .split(" ")
            .reduce((prev, ele) => prev + ele.substring(0, 1), "")
            .toUpperCase()}
        </span>
      )}
      <div>
        <p className={styles.reviewerName}>{data.name}</p>
        <p className={styles.reviewStars}>
          ⭐⭐⭐⭐⭐ <span className={styles.reviewDate}>{}</span>
        </p>
        <p className={styles.comment}>{data.comment}</p>
        <p className={styles.readerOpinion}>
          {isLiked || isDisLiked
            ? "Thank you for your feedback"
            : "Was this review helpful?"}
        </p>
        <div className={styles.reactBtn}>
          <button onClick={toggleLike} className={styles.likeBtn}>
            {isLiked ? <LikeIconFill /> : <LikeIcon />}
          </button>
          <button onClick={toggleDisLike} className={styles.likeBtn}>
            {isDisLiked ? <DisLikeIconFill /> : <DisLikeIcon />}
          </button>
          <span className={styles.reportReview}>Report</span>
        </div>
      </div>
    </div>
  );
}

export default Review;
