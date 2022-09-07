import React from "react";
import styles from "./CourseStyles.module.css";
import VisualizePercent from "./VisualizePercent";
function StudentFeedback() {
  const x = 43;
  return (
    <div className={styles.studentFeedback}>
      <h3>Student Feedback</h3>
      <div className="d-flex ">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className={styles.instructorRating}>4.4</div>
          <div className={styles.instructorRatingStars}>⭐⭐⭐⭐⭐</div>
          <div className={styles.instructorRatingWord}>Course Rating</div>
        </div>
        <div className={styles.visualizePercentage}>
          <VisualizePercent percent="43" />
          <VisualizePercent percent="37" />
          <VisualizePercent percent="16" />
          <VisualizePercent percent="3" />
          <VisualizePercent percent="2" />
        </div>
        <div>
          <div className="me-3">⭐⭐⭐⭐⭐</div>
          <div className="me-3">⭐⭐⭐⭐✨</div>
          <div className="me-3">⭐⭐⭐✨✨</div>
          <div className="me-3">⭐⭐✨✨✨</div>
          <div className="me-3">⭐✨✨✨✨</div>
        </div>
        <div>
          <div>43%</div>
          <div>37%</div>
          <div>16%</div>
          <div>3%</div>
          <div>2%</div>
        </div>
      </div>
    </div>
  );
}

export default StudentFeedback;
