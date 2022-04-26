import { Link } from "react-router-dom";
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import LoginForm from "../LoginForm";
import TextInput from "../TextInput";
export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div class="column">
        <LoginForm />
        <Form className={`${classes.Login}`}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <Button>
            <span>Submit now</span>
          </Button>
          <div className="info">
            Don't have an account? <Link to="/Signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
