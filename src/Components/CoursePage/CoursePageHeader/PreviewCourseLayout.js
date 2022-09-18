import React, { useState } from "react";
import DownloadIcon from "../../Icons/DownloadIcon";
import HeartIcon from "../../Icons/HeartIcon";
import HeartIconEmpty from "../../Icons/HeartIconEmpty";
import InfinityIcon from "../../Icons/InfinityIcon";
import MobilePhone from "../../Icons/MobilePhone";
import PlayVideosIcon from "../../Icons/PlayVideosIcon";
import WinningCupIcon from "../../Icons/WinningCupIcon";
import styles from "../CourseStyles.module.css";

function PreviewCourseLayout({ data }) {
  const [loved, setLoved] = useState(false);
  return (
    // <div className={styles.coursePreviewContainer}>
    //   <div className={styles.sidebarWrapper}>
    <>
      <div className={styles.sidebarImage}>
        <img
          className={styles.previewImage}
          src={data.Image}
          alt="Preview this Course"
        />
      </div>
      <div className={styles.sidebarContainer}>
        <h1 className={styles.coursePrice}>{data.price}</h1>
        <div className={styles.addToCartContainer}>
          <button className={styles.addToCart}>Add To card</button>
          <div
            className={styles.lovedContainer}
            onClick={() => setLoved(!loved)}
          >
            {loved ? <HeartIcon /> : <HeartIconEmpty />}
          </div>
        </div>
        <button className={styles.buyNow}>Buy now</button>
        <p className={styles.coursePros}>
          {data.moneyBack}-Day Money-Back Guarantee
        </p>
        <h3 className={styles.courseContains}>This Course includes</h3>
        <ul className={styles.courseContaint}>
          <li>
            <PlayVideosIcon /> {data.article} hours on-demand video
          </li>
          <li>
            {" "}
            <DownloadIcon /> {data.downloads} downloadable resources
          </li>
          <li>
            {" "}
            <InfinityIcon /> {data.lifeTimeAccess}
          </li>
          <li>
            {" "}
            <MobilePhone /> {data.Access}
          </li>
          <li>
            {" "}
            <WinningCupIcon /> {data.certification}
          </li>
        </ul>
        <div className={styles.courseLinks}>
          <a href="www.google.com">Share</a>
          <a href="www.google.com">Gift this course</a>
          <a href="www.google.com">Apply Coupon</a>
        </div>

        <h2 className={styles.options}>Training 5 or more people?</h2>
        <p className={styles.udemyBusinessDescription}>
          Get your team access to 17,000+ top Udemy courses anytime, anywhere.
        </p>
        <button className={styles.tryUdemyBusiness}>Try Udemy Business</button>
      </div>
    </>
    //   </div>
    // </div>
  );
}

export default PreviewCourseLayout;
