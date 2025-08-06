import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import profile_pic from "../images/profile_picture/profile_pic.jpg";
import "../css/customer.css";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

function Customer() {
  // const customers = [
  //   {
  //     id: 1001,
  //     image: { profile_pic },
  //     name: "abc",
  //     phone: 1234567890,
  //     email: "abc@gmail.com",
  //     bookedCount: 5,
  //   },
  //   {
  //     id: 1002,
  //     image: { profile_pic },
  //     name: "abc",
  //     phone: 1234567890,
  //     email: "abc@gmail.com",
  //     bookedCount: 5,
  //   },
  //   {
  //     id: 1003,
  //     image: { profile_pic },
  //     name: "abc",
  //     phone: 1234567890,
  //     email: "abc@gmail.com",
  //     bookedCount: 5,
  //   },
  //   {
  //     id: 1004,
  //     image: { profile_pic },
  //     name: "abc",
  //     phone: 1234567890,
  //     email: "abc@gmail.com",
  //     bookedCount: 5,
  //   },
  //   {
  //     id: 1005,
  //     image: { profile_pic },
  //     name: "abc",
  //     phone: 1234567890,
  //     email: "abc@gmail.com",
  //     bookedCount: 5,
  //   },
  // ];

  const [customers, setCustomers] = React.useState([]);

  React.useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = async () => {
    const response = await axios.get("http://localhost:3001/User/getAll");
    // console.log(response.data.user);

    setCustomers(response.data.user);
  };

  const [UserID, setUserID] = useState();
  const [show, setShow] = useState(false);
  const handleShowClose = () => setShow(!show);

  const deleteUser = async () => {
    try {
      await axios.delete("http://localhost:3001/User/delete/" + UserID);

      setUserID();
      getCustomers();
      handleShowClose();
      enqueueSnackbar("User delete successfully", {
        variant: "success",
      });
    } catch (error) {
      console.log(error);
      enqueueSnackbar("User deleteion Failed", { variant: "error" });
    }
  };

  return (
    <>
      <h2 className="staff_members text-center text-black my-4 fs-1">
        Online Customers
      </h2>
      <Table responsive>
        <thead>
          <tr>
            <th>No.</th>
            {/* <th>Image</th> */}
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            {/* <th>Booking Count</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((k, i) => (
            <tr>
              <td>{i + 1}</td>
              {/* <td>
                <img
                  src={k.image.profile_pic}
                  alt=""
                  width={"45px"}
                  height={"45px"}
                  className="rounded-circle"
                />
              </td> */}
              <td>{k.name}</td>
              <td>{k.phonenumber}</td>
              <td>{k.email}</td>
              {/* <td>{k.bookedCount}</td> */}
              <td>
                <Button variant="danger" onClick={() => {handleShowClose(); setUserID(k._id)}}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleShowClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to <span className="text-danger">delete</span>{" "}
          this User ?
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleShowClose}>
                  Close
                </Button> */}
          <Button variant="danger" onClick={deleteUser}>
            confoim Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Customer;
