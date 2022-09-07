import React from "react";
import styles from "./CourseStyles.module.css";

function PreviewCourseLayout() {
  return (
    <div className={styles.coursePreviewContainer}>
      <img
        className={styles.previewImage}
        src="https://imgv3.fotor.com/images/homepage-feature-card/Fotor-AI-photo-enhancement-tool.jpg"
        alt="Preview this Course"
      />
      <h1 className={styles.coursePrice}>E£679.99</h1>
      <button className={styles.addToCart}>Add To card</button>
      <button className={styles.buyNow}>Buy now</button>
      <p className={styles.coursePros}>30-Day Money-Back Guarantee</p>
      <h3 className={styles.courseContains}>THis Course includes</h3>
      <ul className={styles.courseContaint}>
        <li>14 hours on-demand video</li>
        <li>1 article</li>
        <li>3 downloadable resources</li>
        <li>Full lifetime access</li>
        <li>Access on mobile and TV</li>
        <li>Certificate of completion</li>
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
  );
}

export default PreviewCourseLayout;
