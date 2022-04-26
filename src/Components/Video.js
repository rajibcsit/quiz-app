import image from "../assets/images/1.png";
import classes from "../styles/Video.module.css";
export default function Video() {
  return (
    <a href="quiz.html">
      <div className={classes.video}>
        <img src={image} alt="video title" />
        <p>#53 Basic PHP to OOP to Laravel</p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
}
