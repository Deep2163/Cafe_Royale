import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../css/user/login-reg.css";
import google_logo from "../../images/user/Google_logo.webp";
import login_side from "../../images/coffees/capuccino_png.png";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

function LoginReg() {
  const [loginForm, setShowForm] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigation = useNavigate();

  // Validation Schema
  const validationSchema = Yup.object({
    name : Yup.string().required("Required"),
    phonenumber : Yup.string().matches(/^\d{10}$/, "Must be 10 digits").required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
    agree: Yup.boolean().oneOf([true], "You must agree to the terms"),
  });

  const validationSchema1 = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    agree: Yup.boolean().oneOf([true], "You must agree to the terms"),
  });

  const handleLogin = async (values, resetForm) => {
    const email = values.email;
    const password = values.password;

    try {
      const res = await axios.post("http://localhost:3001/User/login", {
        email,
        password,
      });
      
      localStorage.setItem("user", res.data.oldUser._id);

      enqueueSnackbar("User Login successfully", { variant: "success" });
      resetForm();
      navigation("/");
    } catch (error) {
      console.log(error);
      if (error.status === 403) {
        enqueueSnackbar(error.response.data.message, { variant: "error" });
        resetForm();
      }
      if (error.status === 409) {
        enqueueSnackbar(error.response.data.message, { variant: "error" });
        resetForm();
      }
    }
  };

  const handleRegister = async (values, resetForm) => {
    const email = values.email;
    const password = values.password;
    const name = values.name;
    const phonenumber = values.phonenumber;

    try {
      const res = await axios.post("http://localhost:3001/User/create", {
        email,
        password,
        name,
        phonenumber
      });

      enqueueSnackbar("User Register successfully", { variant: "success" });
      resetForm();
      setShowForm(true);
    } catch (error) {
      console.log(error);
      if (error.status === 409) {
        enqueueSnackbar(error.response.data.message, { variant: "info" });
        setShowForm(true);
      } else {
        enqueueSnackbar("Servare Error", { variant: "error" });
      }
    }
  };

  return (
    <>
      {loginForm === true ? (
        <section className="login" id="login_form">
          <div className="container-fluid">
            <div className="row vh-100 justify-content-center align-items-center">
              <div className="col-md-6 order-md-1 order-2">
                <div className="d-flex">
                  <div className="login-form text-start mx-auto mt-md-5 mt-0">
                    <h2 className="fw-bold text-black mt-5 welcome_back fs-1 text-center">
                      Welcome back
                    </h2>
                    <h6 className="text-black text-center mb-3">
                      Please Enter Your Details
                    </h6>
                    <Formik
                      initialValues={{
                        email: "",
                        password: "",
                        agree: false,
                      }}
                      validationSchema={validationSchema1}
                      onSubmit={(values, { resetForm, setSubmitting }) => {
                        handleLogin(values, resetForm, setSubmitting);
                      }}
                    >
                      {({ isSubmitting, resetForm }) => (
                        <Form>
                          {/* <label className="fw-semibold mt-2">Email</label> */}
                          <Field
                            type="email"
                            name="email"
                            className="w-100 mt-1 px-3 rounded-pill"
                            placeholder="Email"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger"
                          />

                          {/* <label className="fw-semibold mt-2">Password</label> */}
                          <Field
                            type="password"
                            name="password"
                            className="w-100 mt-1 px-3 rounded-pill"
                            placeholder="Password"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger"
                          />

                          <div className="mt-2">
                            <Field
                              type="checkbox"
                              name="agree"
                              className="me-2"
                            />
                            <span className="text-black">Remember Me</span>
                          </div>
                          <ErrorMessage
                            name="agree"
                            component="div"
                            className="text-danger"
                          />

                          <button
                            type="submit"
                            className="mt-3 w-100 rounded-pill fw-semibold"
                            disabled={isSubmitting}
                          >
                            Login
                          </button>

                          <h6 className="mt-3 text-center text-black fs-5">
                            Don't have an Account&nbsp;
                            <span
                              className="forgot fs-5 pointer"
                              id="signup_link"
                              onClick={() => {
                                setShowForm(false);
                                // console.log(false);
                              }}
                            >
                              Sign Up
                            </span>
                          </h6>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-md-2 order-1 overflow-hidden">
                <img
                  src={login_side}
                  alt=""
                  srcset=""
                  className="side_img"
                  width={"100%"}
                />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="reg" id="signup_form">
          <div className="container-fluid ">
            <div className="row justify-content-center align-items-center vh-100">
              <div className="col-md-6 d-flex overflow-hidden justify-content-center align-items-center">
                <img
                  src={login_side}
                  alt=""
                  srcset=""
                  className="login_img login_img1"
                  width={"100%"}
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex">
                  <div className="login-form text-start mx-auto mt-md-5 mt-1">
                    <h2 className="fw-bold text-black welcome_back  fs-1 text-center">
                      Registration
                    </h2>
                    <h6 className="text-black font-light mb-3 text-center">
                      Please Enter All The Details
                    </h6>
                    <Formik
                      initialValues={{
                        email: "",
                        password: "",
                        confirmPassword: "",
                        agree: false,
                      }}
                      validationSchema={validationSchema}
                      onSubmit={(values, { resetForm }) => {
                        handleRegister(values, resetForm);
                      }}
                    >
                      {({ isSubmitting, resetForm }) => (
                        <Form>
                          {/* <label className="fw-semibold mt-2">Email</label> */}
                          <Field
                            type="name"
                            name="name"
                            className="w-100 mt-1 px-3 rounded-pill"
                            placeholder="Name"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-danger"
                          />
                           <Field
                            type="email"
                            name="email"
                            className="w-100 mt-1 px-3 rounded-pill"
                            placeholder="Email"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger"
                          />
                          <Field
                            type="phonenumber"
                            name="phonenumber"
                            className="w-100 mt-1 px-3 rounded-pill"
                            placeholder="Mobile +91"
                          />
                          <ErrorMessage
                            name="phonenumber"
                            component="div"
                            className="text-danger"
                          />

                          {/* <label className="fw-semibold mt-2">Password</label> */}
                          <Field
                            type="password"
                            name="password"
                            className="w-100 mt-1 px-3 rounded-pill"
                            placeholder="Password"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger"
                          />

                          {/* <label className="fw-semibold mt-2">
                            Confirm Password
                          </label> */}
                          <Field
                            type="password"
                            name="confirmPassword"
                            className="w-100 mt-1 px-3 rounded-pill"
                            placeholder="Confirm Password"
                          />
                          <ErrorMessage
                            name="confirmPassword"
                            component="div"
                            className="text-danger"
                          />

                          <div className="mt-2">
                            <Field
                              type="checkbox"
                              name="agree"
                              className="me-2"
                            />
                            <span className="text-black fs-6">
                              I agree with the
                            </span>
                            &nbsp;
                            <a
                              href="#terms"
                              className="fw-semibold forgot fs-6"
                            >
                              Terms and Conditions
                            </a>
                          </div>
                          <ErrorMessage
                            name="agree"
                            component="div"
                            className="text-danger"
                          />

                          <button
                            type="submit"
                            className="mt-3 w-100 rounded-pill fw-semibold"
                            disabled={isSubmitting}
                          >
                            Register
                          </button>

                          {/* <button
                            className="w-100 bg-white mt-2 border border-1 border-black rounded-pill text-black fw-semibold"
                            id="google_login"
                          >
                            <img
                              src={google_logo}
                              alt=""
                              srcset=""
                              width="20px"
                            />
                            Sign in with Google
                          </button> */}

                          <h6 className="mt-3 text-center fs-4 text-black">
                            Already Have an Account?&nbsp;
                            <span
                              className="fw-semibold fs-4 forgot pointer"
                              onClick={() => setShowForm(true)}
                            >
                              Login
                            </span>
                          </h6>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default LoginReg;
