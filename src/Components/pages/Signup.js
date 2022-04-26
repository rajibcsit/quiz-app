import { Link } from "react-router-dom";
import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import TextInput from "../TextInput";
import Tllustration from "../Tllustration";
export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <Tllustration />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter Name" icon="person" />

          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <Checkbox text="I agree to the Terms &amp; Conditions" />
          <Button>
            <span>Submit now</span>
          </Button>
          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
