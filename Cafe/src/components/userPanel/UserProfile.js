import React, { useState, useEffect } from "react";
import "../../css/admin-profile.css";
import profile_pic from "../../images/profile_picture/profile_pic.jpg";
import { Button, Modal, Form } from "react-bootstrap";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import * as Yup from "yup";
import { Formik } from "formik";
import { enqueueSnackbar } from "notistack";


function UserProfile() {
  const [showCurPass, setCurShowPass] = useState(false);
  const [showNewPass, setNewShowPass] = useState(false);
  const [showConPass, setConShowPass] = useState(false);

  const [user, setUser] = useState({});
  const [editUser, setEditUser] = useState({
    name: "",
    phonenumber: "",
    email: ""
  });

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const fetchUser = () => {
    const userId = localStorage.getItem("user");
    if (!userId) {
      alert("Invalid user session. Please log in again.");
      return;
    }

    axios
      .get("http://localhost:3001/User/get/" + userId)
      .then((response) => {
        const data = response.data.user;
        setUser(data);
        setEditUser({
          name: data.name || "",
          phonenumber: data.phonenumber || "",
          email: data.email || ""
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:3001/User/update/${user._id}`, editUser)
      .then((res) => {
        fetchUser();
        handleClose();
      })
      .catch((err) => console.log(err));
  };

  const handlePasswordChange = (values, resetForm) => {
    const currentPassword = values.currentPassword;
    const newPassword = values.newPassword;
    
    axios
      .put(`http://localhost:3001/User/update/${user._id}`, { currentPassword, newPassword })
      .then((res) => {
        fetchUser();
        resetForm();
        enqueueSnackbar("Password Updated successfully", { variant: "success" });
      })
      .catch((err) => {
        console.log(err);
        resetForm(false);
        enqueueSnackbar(err.response.data.message, { variant: "error" });
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {/* Edit Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={editUser.name}
                onChange={(e) =>
                  setEditUser({ ...editUser, name: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                value={editUser.phonenumber}
                onChange={(e) =>
                  setEditUser({ ...editUser, phonenumber: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={editUser.email}
                onChange={(e) =>
                  setEditUser({ ...editUser, email: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Main Profile Section */}
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <h1 className="fs-2 text-center profile_heading">Cafe Royale</h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 col-12 profile_pic">
            <h1 className="change_pic my-3">Change Profile Picture</h1>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img
                src={profile_pic}
                alt=""
                width={"20%"}
                className="rounded-circle my-3"
              />
              <div className="d-flex flex-wrap w-75 flex-column justify-content-start align-items-start">
                <h3>
                  <b>Name: </b> {user.name}
                </h3>
                <h3>
                  <b>Mobile: </b> {user.phonenumber}
                </h3>
                <h3>
                  <b>Email: </b> {user.email}
                </h3>
              </div>
              <Button className="my-3" onClick={handleShow}>
                Change Now
              </Button>
            </div>
          </div>

          <div className="col-md-6 col-12 profile_pic">
            <h1 className="change_pic my-3">Change Password</h1>
            <div className="w-75 mx-auto mt-3">
              <Formik
                initialValues={{
                  currentPassword: "",
                  newPassword: "",
                  confirmPassword: "",
                }}
                validationSchema={Yup.object().shape({
                  currentPassword: Yup.string().required("Required"),
                  newPassword: Yup.string().required("Required"),
                  confirmPassword: Yup.string()
                    .oneOf([Yup.ref("newPassword"), null], "Password must match")
                    .required("Required"),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  handlePasswordChange(values, setSubmitting);
                  resetForm();
                }}
              >
                {({ errors, touched, getFieldProps, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <label>Current Password</label>
                    <div className="d-flex">
                      <input
                        type={showCurPass ? "text" : "password"}
                        className="profile_inputs ps-3"
                        {...getFieldProps("currentPassword")}
                      />
                      <div className="my-auto">
                        {showCurPass ? (
                          <FaRegEyeSlash
                            className="pass_show mx-1  fs-2"
                            onClick={() => setCurShowPass(false)}
                          />
                        ) : (
                          <FaRegEye
                            className="pass_show mx-1  fs-2"
                            onClick={() => setCurShowPass(true)}
                          />
                        )}
                      </div>
                    </div>
                    {errors.currentPassword && touched.currentPassword ? (
                      <div className="text-danger">{errors.currentPassword}</div>
                    ) : null}
                    <label>New Password</label>
                    <div className="d-flex">
                      <input
                        type={showNewPass ? "text" : "password"}
                        className="profile_inputs ps-3"
                        {...getFieldProps("newPassword")}
                      />
                      <div className="my-auto">
                        {showNewPass ? (
                          <FaRegEyeSlash
                            className="pass_show mx-1  fs-2"
                            onClick={() => setNewShowPass(false)}
                          />
                        ) : (
                          <FaRegEye
                            className="pass_show mx-1  fs-2"
                            onClick={() => setNewShowPass(true)}
                          />
                        )}
                      </div>
                    </div>
                    {errors.newPassword && touched.newPassword ? (
                      <div className="text-danger">{errors.newPassword}</div>
                    ) : null}
                    <label>Confirm Password</label>
                    <div className="d-flex">
                      <input
                        type={showConPass ? "text" : "password"}
                        className="profile_inputs ps-3"
                        {...getFieldProps("confirmPassword")}
                      />
                      <div className="my-auto">
                        {showConPass ? (
                          <FaRegEyeSlash
                            className="pass_show mx-1  fs-2"
                            onClick={() => setConShowPass(false)}
                          />
                        ) : (
                          <FaRegEye
                            className="pass_show mx-1  fs-2"
                            onClick={() => setConShowPass(true)}
                          />
                        )}
                      </div>
                    </div>
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <div className="text-danger">
                        {errors.confirmPassword}
                      </div>
                    ) : null}
                    <Button type="submit" className="my-3">
                      Update Password
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
