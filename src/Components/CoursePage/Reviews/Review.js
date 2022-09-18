import React, { useState } from "react";
import StarIconFill from "../../Icons/StarIconFill";
import styles from "../CourseStyles.module.css";
import DisLikeIcon from "../../Icons/DisLikeIcon";
import DisLikeIconFill from "../../Icons/DisLikeIconFill";
import LikeIcon from "../../Icons/LikeIcon";
import LikeIconFill from "../../Icons/LikeIconFill";

function Review({ data }) {
  const [isTheirPhot, setPhoto] = useState(false);
  const [isLiked, setLiked] = useState(false);
  const [isDisLiked, setDisLiked] = useState(false);
  let name = data.name
    .split(" ")
    .reduce((prev, ele) => prev + ele.substring(0, 1), "")
    .toUpperCase();
  if (name.length > 2) {
    name = name[0] + name[name.length - 1];
  } else if (name.length < 2) {
    name += " ";
  }
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
        <div className={styles.reviewerImg}>{name}</div>
      )}
      <div>
        <p className={styles.reviewerName}>{data.name}</p>
        <p className={styles.reviewStars}>
          {[...Array(parseInt(data.rate))].map((e, i) => (
            <StarIconFill key={i} />
          ))}

          <span className={styles.reviewDate}>{}</span>
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
