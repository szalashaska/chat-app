import { signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../firebase";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const { photoURL, displayName } = currentUser;

  return (
    <div className="navbar">
      <span className="logo">Chat app</span>
      <div className="user">
        <img src={photoURL} alt="" />
        <span>{displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
