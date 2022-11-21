import Add from "../assets/addAvatar.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const handleSumbit = (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat app</span>
        <span className="title">Register</span>
        <form onSubmit={handleSumbit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <label htmlFor="file-input">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
            <input id="file-input" type="file" />
          </label>
          <button>Sign up</button>
        </form>
        <p>You have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
