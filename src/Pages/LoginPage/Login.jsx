import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="welcome-text">Welcome back!</h1>

        <div className="social-login">
  <button className="social-button google">
    <i className="fab fa-google"></i> 
  </button>
  <button className="social-button apple">
    <i className="fab fa-apple"></i> 
  </button>
  <button className="social-button facebook">
    <i className="fab fa-facebook"></i> 
  </button>
  <button className="social-button wechat">
    <i className="fab fa-weixin"></i> 
  </button>
</div>


        <div className="separator">
          <span>OR</span>
        </div>

        <form className="login-form">
          <input
            type="email"
            placeholder="Enter your email address"
            className="form-input"
          />
          <input
            type="password"
            placeholder="Enter a password"
            className="form-input"
          />

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-button">
            Log in
          </button>
        </form>

        <div className="signup">
          Dont have an account? <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
