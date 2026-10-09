import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword, signOut, auth, db } from "../firebase/firebaseConfig";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
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
    const namePattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    } else if (!namePattern.test(formData.name.trim())) {
      newErrors.name = "Enter your first and last name";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.password === "") {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.confirmPassword === "") {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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
      const email = formData.email.trim().toLowerCase();

      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        formData.password
      );

      await addDoc(collection(db, "users"), {
        uid: result.user.uid,
        name: formData.name.trim(),
        email: email
      });

      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log(error);

      if (error.code === "auth/email-already-in-use") {
        setErrors({
          general: "This email is already registered"
        });
      } else {
        setErrors({
          general: "Could not create account. Please try again."
        });
      }
    }
  }

  return (
    <>
      <Header user={null} />

      <div className="min-h-[600px] flex justify-center items-center p-6">
        <div className="w-full max-w-lg border border-blue-300 p-8 bg-white">
          <h2 className="text-2xl font-bold text-center text-blue-500 mb-8">
            Create a DEV@Deakin Account
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block font-bold mb-2">Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2"
                placeholder="First and last name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block font-bold mb-2">Email*</label>
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
              <label className="block font-bold mb-2">Password*</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2"
                placeholder="Create a password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            <div>
              <label className="block font-bold mb-2">Confirm password*</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>

            {errors.general && (
              <p className="text-red-500 text-sm">{errors.general}</p>
            )}

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 hover:bg-blue-600"
            >
              Create
            </button>
          </form>

          <p className="text-center mt-6">
            Already have an account? {" "}
            <Link to="/login" className="text-blue-500 font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Signup;
