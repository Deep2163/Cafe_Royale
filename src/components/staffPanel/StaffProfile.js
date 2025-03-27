import React, { useState } from "react";
import "../../css/admin-profile.css";
import profile_pic from "../../images/profile_picture/profile_pic.jpg";
import { Button } from "react-bootstrap";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function StaffProfile() {
  const [showCurPass, setCurShowPass] = useState(false);
  const [showNewPass, setNewShowPass] = useState(false);
  const [showConPass, setConShowPass] = useState(false);
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <h1 className="fs-2 text-center profile_heading">Cafe Royale</h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 col-12 profile_pic">
            <h1 className="change_pic my-3 text-center">
              Change Profile Picture
            </h1>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img
                src={profile_pic}
                alt=""
                width={"20%"}
                className="rounded-circle my-3"
              />
              <div className="d-flex flex-wrap w-75 flex-column justify-content-start align-items-start">
                <h3>
                  <b>Name: </b>user
                </h3>
                <h3>
                  <b>Mobile: </b>1234567890
                </h3>
                <h3>
                  <b>Email: </b>user@gmail.com
                </h3>
                <h3>
                  <b>Address: </b>12, avadh society, athwagate, surat.
                </h3>
              </div>

              <Button className="my-3">Change Now</Button>
            </div>
            <br />
            <br />
          </div>
          <div className="col-md-6 col-12 profile_pic">
            <h1 className="change_pic my-3 text-center">Change Password</h1>
            <div className="w-75 mx-auto mt-5">
              <form>
                <label>Current Password</label>
                <div className="d-flex">
                  <input
                    type={showCurPass ? "text" : "password"}
                    className="profile_inputs"
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
                <label>New Password</label>
                <div className="d-flex">
                  <input
                    type={showNewPass ? "text" : "password"}
                    className="profile_inputs"
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
                <label>New Confirm Password</label>
                <div className="d-flex">
                  <input
                    type={showConPass ? "text" : "password"}
                    className="profile_inputs"
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
                <Button className="my-3">Update Password</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StaffProfile;
