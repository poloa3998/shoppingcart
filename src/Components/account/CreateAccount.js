import "./createAccount.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContexts";
import { FaWindows } from "react-icons/fa";

const CreateAccount = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);

      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        usernameRef.current.value
      );
      navigate("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setLoading(false);
    }
    return () => {
      setLoading(true);
    };
  }, []);
  return (
    <div className="wrapper">
      <h1 className="createAccount-header">Join the BookClub</h1>

      {error && <p>{error}</p>}
      <form className="createAccount-form" onSubmit={handleSubmit}>
        <label className="username">
          Username:
          <input
            className="createAccount-Input"
            type="text"
            name="username"
            ref={usernameRef}
          />
        </label>
        <label className="email">
          Email:
          <input
            className="createAccount-Input"
            type="text"
            name="email"
            ref={emailRef}
          />
        </label>
        <label className="password">
          Password:
          <input
            className="createAccount-Input"
            type="password"
            name="password"
            autoComplete="on"
            ref={passwordRef}
          />
        </label>
        <label className="confirm-Password">
          Confirm Password:
          <input
            className="createAccount-Input"
            type="password"
            name="confirm-Password"
            autoComplete="off"
            ref={passwordConfirmRef}
          />
        </label>
        <button disabled={loading} type="submit" className="createAccount-btn">
          Create Account
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login"> Log In</Link>{" "}
      </p>
    </div>
  );
};

export default CreateAccount;
