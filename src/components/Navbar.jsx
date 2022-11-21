import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat app</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <span>Hohn</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
