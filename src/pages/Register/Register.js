import "./Register.css";

function Register() {
  return (
    <div className="register">
      <span className="registerTitle">REGISTER</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" placeholder="Username" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </form>
    </div>
  );
}

export default Register;
