import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContexts";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);

      await login(emailRef.current.value, passwordRef.current.value);

      navigate("/");
    } catch {
      setError("Failed to login");
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
      <h1 className="createAccount-header">Login</h1>
      {error && <p>{error}</p>}
      <form className="createAccount-form" onSubmit={handleSubmit}>
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

        <button disabled={loading} type="submit" className="createAccount-btn">
          Log In
        </button>
      </form>
      <p>
        Need an account? <Link to="/createAccount"> Create an Account </Link>
      </p>
    </div>
  );
};

export default Login;
