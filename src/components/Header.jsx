import { Link, useNavigate } from "react-router-dom";
import { auth, signOut } from "../firebase/firebaseConfig";

function Header({ user, setUser }) {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header className="border-b border-gray-300 bg-white">
      <nav className="flex items-center gap-4 p-3">
        <Link to="/" className="font-bold text-sm whitespace-nowrap">
          DEV@Deakin
        </Link>

        <input
          type="text"
          placeholder="Search..."
          className="flex-1 border border-gray-300 px-3 py-1 text-sm"
        />

        <button type="button" className="bg-gray-200 px-4 py-1 text-sm">
          Post
        </button>

        {user ? (
          <button
            type="button"
            onClick={handleLogout}
            className="bg-gray-200 px-4 py-1 text-sm"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="bg-gray-200 px-4 py-1 text-sm">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
