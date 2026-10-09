import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "../firebase/firebaseConfig";
import { auth } from "../firebase/firebaseConfig";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Login({ setUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

    setErrors({});
  }

  function validateForm() {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.password === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        formData.email.trim().toLowerCase(),
        formData.password
      );

      setUser(result.user);
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrors({
        general: "Incorrect email or password"
      });
    }
  }

  return (
    <>
      <Header user={null} />

      <div className="min-h-[500px] flex justify-center items-center p-6">
        <div className="w-full max-w-md border border-blue-300 p-8 bg-white">
          <h2 className="text-2xl font-bold text-center text-blue-500 mb-8">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block font-bold mb-2">Your email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block font-bold mb-2">Your password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {errors.general && (
              <p className="text-red-500 text-sm">{errors.general}</p>
            )}

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 hover:bg-blue-600"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-6">
            Don't have an account? {" "}
            <Link to="/signup" className="text-blue-500 font-bold">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
