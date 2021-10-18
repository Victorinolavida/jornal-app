import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import { starRegisterWithEmailPasswordName } from "../../actions/auth";

export default function RegisterScreen() {
  const dispatch = useDispatch();

  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "victor",
    email: "email@mail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("formuladrio correcto");
      dispatch(starRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length <= 2) {
      // console.log("Name is require");
      dispatch(setError("Name is require"));
      return false;
    }
    if (!validator.isEmail(email)) {
      // console.log("email is not valid");
      dispatch(setError("email is not valid"));

      return false;
    }

    if (password !== password2 || password < 5) {
      // console.log(
      // "password should be at least 6 caracters and mach wich other"
      // );
      dispatch(
        setError("password should be at least 6 caracters and mach each other")
      );

      return false;
    }
    dispatch(removeError());

    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          value={name}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          value={email}
          onChange={handleInputChange}
          autoComplete="off"
        />

        {/* <input
          type="password"
          placeholder="Password"
          name="pasword"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        /> */}
        <input
          type="password"
          placeholder="password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />
      </form>
      <button
        className="btn btn-primary btn-block mb-5"
        type="submit"
        onClick={handleRegister}
      >
        Register
      </button>
      <hr />

      <Link className="link mt-5" to="/auth/login">
        Already register?
      </Link>
    </>
  );
}
