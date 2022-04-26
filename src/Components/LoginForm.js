import loginImage from "../assets/images/login.svg";
import classes from "../styles/Illustration.module.css";
export default function LoginForm() {
  return (
    <div className={classes.LoginForm}>
      <img src={loginImage} alt="Signup" />
    </div>
  );
}
