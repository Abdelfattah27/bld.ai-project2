import React, { useState } from "react";
import HeartIcon from "../../Icons/HeartIcon";
import HeartIconEmpty from "../../Icons/HeartIconEmpty";
import styles from "../CourseStyles.module.css";

function HeadeRest({ data }) {
  const [loved, setLoved] = useState(false);
  return (
    <div className={styles.headeRest}>
      <h1 className={styles.coursePrice}>{data.price}</h1>
      <div className={styles.addToCartContainer}>
        <button className={styles.addToCart}>Add To card</button>
        <div className={styles.lovedContainer} onClick={() => setLoved(!loved)}>
          {loved ? <HeartIcon /> : <HeartIconEmpty />}
        </div>
      </div>
      <p className={styles.coursePros}>
        {data.moneyBack}-Day Money-Back Guarantee
      </p>
      <div className={styles.courseLinksHeader}>
        <a href="www.google.com">Share</a>
        <a href="www.google.com">Gift this course</a>
        <a href="www.google.com">Apply Coupon</a>
      </div>
    </div>
  );
}

export default HeadeRest;
