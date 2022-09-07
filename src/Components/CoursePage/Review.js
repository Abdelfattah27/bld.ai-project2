import React, { useState } from "react";
import styles from "./CourseStyles.module.css";
import DisLikeIcon from "./DisLikeIcon";
import DisLikeIconFill from "./DisLikeIconFill";
import LikeIcon from "./LikeIcon";
import LikeIconFill from "./LikeIconFill";

function Review() {
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
  const name = "Ahmed Ghally";
  return (
    <div className={styles.review}>
      {isTheirPhot ? (
        <img src="hamada.com" alt="Review by hamada" />
      ) : (
        <span className={styles.reviewerImg}>AH</span>
      )}
      <div>
        <p className={styles.reviewerName}>Ahmed Mia A.</p>
        <p className={styles.reviewStars}>
          ⭐⭐⭐⭐⭐ <span className={styles.reviewDate}>2 months ago</span>
        </p>
        <p className={styles.comment}>
          perfect course with many of project to improve my skill in every
          section. vary detail explanation and easy to understand with
          animation. Thank you Angela & team
        </p>
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
