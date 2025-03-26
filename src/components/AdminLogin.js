import React, { useState } from "react";
import "../css/admin-login.css";
import google_logo from "../images/user/Google_logo.webp";
import login_side from "../images/coffees/cup_in_hand_square.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleLogin = async (values, resetForm) => {
    const email = values.email;
    const password = values.password;

    try {
      const res = await axios.post("http://localhost:3001/admin/login", {
        email,
        password,
      });

      console.log(res.data.admin._id);

      localStorage.setItem('admin', res.data.admin._id)
      
      enqueueSnackbar("Admin Login successfully", { variant: "success" });
      navigate("/admin");
      resetForm();
    } catch (error) {
      console.log(error);
      if (error.status === 403) {
        enqueueSnackbar(error.response.data.message, { variant: "error" });
      }
      if (error.status === 409) {
        enqueueSnackbar(error.response.data.message, { variant: "error" });
      }
    }
  };

  return (
    <>
      <section className="admin_login" id="admin_login_sec">
        <div className="container-fluid position-relative">
          <div className="row form_popup ">
            <div className="col-md-6 col-12 order-md-1 order-2 d-flex aligin-items-center justify-content-center">
              <div className="admin_login_form text-start ">
                <h2 className="fw-bold text-black  welcome_back fs-1 text-center">
                  Welcome Admin
                </h2>
                <h6 className="text-black text-center">
                  Please Enter Your Credentials
                </h6>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={Yup.object({
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Required"),
                    password: Yup.string().required("Required"),
                  })}
                  onSubmit={(values, resetForm) => handleLogin(values, resetForm)}
                >
                  {({ handleChange, values }) => (
                    <Form>
                      {/* <label className="fw-semibold mt-2">
                          Email address
                        </label>
                        <br /> */}
                      <Field
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="admin_email"
                        className="w-100 mt-2 px-3 inputs rounded"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                      {/* <br /> */}
                      {/* <label className="fw-semibold mt-2">Password</label> */}
                      {/* <br /> */}
                      <Field
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="admin_pass"
                        className="w-100 mt-2 px-3 inputs rounded"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                      <br />
                      <Field
                        type="checkbox"
                        name="remember"
                        id="remember_checkbox"
                        className="forgot fs-6"
                      />
                      <label htmlFor="remember_checkbox" className="text-black">
                        &nbsp;Remember Me
                      </label>
                      &nbsp;&nbsp;
                      <span>
                        <a href="#we" className="fw-semibold forgot fs-6">
                          Forgot Password
                        </a>
                      </span>
                      <br />
                      <button
                        type="submit"
                        id="login_sumbit"
                        className="mt-3 w-100 mb-4 rounded fw-semibold"
                      >
                        Sign in
                      </button>
                      {/* <button
                          type="button"
                          className="w-100 bg-white border border-1 border-black rounded text-black fw-semibold"
                          id="google_login"
                        >
                          <img
                            src={google_logo}
                            alt="Google Logo"
                            width="20px"
                          />{" "}
                          Sign in with Google
                        </button> */}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-md-6 c0l-12 order-md-2 order-1 d-flex align-items-center justify-content-center rounded-end admin_side">
              <img
                src={login_side}
                alt=""
                srcSet=""
                className="m-auto  rounded"
                width={"100%"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminLogin;
