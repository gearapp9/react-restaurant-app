import { ReactComponent as GoogleLogo } from "../../assets/google-icon.svg";
import "./sign.css";
import { useContext } from "react";
import { HeaderContext } from "../../contexts/HeaderContext";
import {
  signWithGoogle,
  getUserDoc,
} from "../../utils/firebase/firebase-utils";
export const SignIn = () => {
  const { changeHeader } = useContext(HeaderContext);
  changeHeader("sign-in");
  const loguser = async () => {
    const response = await signWithGoogle();
    await getUserDoc(response.user);
  };
  return (
    <section className="sign-in-page sign-page">
      <div className="container">
        <div className="sign-content">
          <h2>Write your email and password</h2>

          <button onClick={loguser}>click</button>
          <form>
            <input type="email" required placeholder="Enter your email" />
            <input type="password" required placeholder="Enter your password" />
            <button type="submit">Sign in</button>
          </form>
          <div className="sign-in-options">or</div>
          <div className="google-sign-in">
            <GoogleLogo />
            <p>Continue with Google</p>
          </div>
          <div className="disclaimer">
            <p>
              By sign in you agree that we will use your data in how ever we'd
              like to
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
