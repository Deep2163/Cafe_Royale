import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import * as Yup from "yup";
import { Formik } from "formik";
import { enqueueSnackbar } from "notistack";

function AdminProfile() {
  const [showNewPass, setNewShowPass] = useState(false);
  const [showCurPass, setCurShowPass] = useState(false);
  const [admin, setAdmin] = useState({});
  const [emailChanged, setEmailChanged] = useState(false);

  const fetchAdmin = () => {
    const adminId = localStorage.getItem("admin");
    if (!adminId) {
      alert("Invalid user session. Please log in again.");
      return;
    }

    axios
      .get(`http://localhost:3001/admin/get/${adminId}`)
      .then((res) => {
        setAdmin(res.data.admin);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate = (values, resetForm) => {
    const adminId = localStorage.getItem("admin");
    if (!adminId) {
      alert("Invalid user session. Please log in again.");
      return;
    }

    const payload = {};
    if (values.email && values.email !== admin.email) {
      payload.email = values.email;
    }

    if (values.currentPassword && values.newPassword) {
      payload.currentPassword = values.currentPassword;
      payload.newPassword = values.newPassword;
    }

    if (Object.keys(payload).length === 0) {
      enqueueSnackbar("No changes detected", { variant: "info" });
      return;
    }

    axios
      .put(`http://localhost:3001/admin/update/${adminId}`, payload)
      .then((res) => {
        resetForm();
        fetchAdmin();
        setEmailChanged(false);
        enqueueSnackbar("Updated successfully", { variant: "success" });
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar(err?.response?.data?.message || "Something went wrong", {
          variant: "error",
        });
      });
  };

  useEffect(() => {
    fetchAdmin();
  }, []);

  return (
    <Container fluid className="d-flex justify-content-center align-items-cente py-5">
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={4} className="p-4 w-75">
          <Card className="shadow-lg rounded-4 p-4">
            <Card.Body>
              <h3 className="text-center mb-4">Manage Details</h3>

              <Formik
                enableReinitialize
                initialValues={{
                  email: admin.email || "",
                  currentPassword: "",
                  newPassword: "",
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string().email("Invalid email"),
                  currentPassword: Yup.string(),
                  newPassword: Yup.string().test(
                    "passwords-valid",
                    "Both current and new passwords are required to change password",
                    function (value) {
                      const { currentPassword, newPassword } = this.parent;
                      const isChangingPassword = currentPassword || newPassword;
                      const bothFilled = currentPassword && newPassword;
                      return !isChangingPassword || bothFilled;
                    }
                  ),
                })}
                onSubmit={(values, { resetForm }) => {
                  handleUpdate(values, resetForm);
                }}
              >
                {({ errors, touched, getFieldProps, handleSubmit, values }) => (
                  <form onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div className="d-flex mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        {...getFieldProps("email")}
                        onChange={(e) => {
                          getFieldProps("email").onChange(e);
                          setEmailChanged(e.target.value !== admin.email);
                        }}
                      />
                    </div>
                    {errors.email && touched.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}

                    {/* Show Update Email Button */}
                    {emailChanged && (
                      <Button
                        className="my-3 w-100"
                        onClick={() => {
                          handleUpdate({ email: values.email }, () => {});
                        }}
                      >
                        Update Email
                      </Button>
                    )}

                    {/* Current Password Input */}
                    <div className="d-flex mb-3">
                      <input
                        type={showCurPass ? "text" : "password"}
                        className="form-control"
                        placeholder="Current Password"
                        {...getFieldProps("currentPassword")}
                      />
                      <div className="my-auto ms-2">
                        {showCurPass ? (
                          <FaRegEyeSlash
                            className="fs-2"
                            onClick={() => setCurShowPass(false)}
                          />
                        ) : (
                          <FaRegEye
                            className="fs-2"
                            onClick={() => setCurShowPass(true)}
                          />
                        )}
                      </div>
                    </div>
                    {errors.currentPassword && touched.currentPassword && (
                      <div className="text-danger">{errors.currentPassword}</div>
                    )}

                    {/* New Password Input */}
                    <div className="d-flex mb-3">
                      <input
                        type={showNewPass ? "text" : "password"}
                        className="form-control"
                        placeholder="New Password"
                        {...getFieldProps("newPassword")}
                      />
                      <div className="my-auto ms-2">
                        {showNewPass ? (
                          <FaRegEyeSlash
                            className="fs-2"
                            onClick={() => setNewShowPass(false)}
                          />
                        ) : (
                          <FaRegEye
                            className="fs-2"
                            onClick={() => setNewShowPass(true)}
                          />
                        )}
                      </div>
                    </div>
                    {errors.newPassword && touched.newPassword && (
                      <div className="text-danger">{errors.newPassword}</div>
                    )}

                    {/* Update Password Button */}
                    {(values.currentPassword && values.newPassword) && (
                      <Button type="submit" className="my-3 w-100">
                        Update Password
                      </Button>
                    )}
                  </form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminProfile;

