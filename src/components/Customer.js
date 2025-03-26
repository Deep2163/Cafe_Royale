import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import profile_pic from "../images/profile_picture/profile_pic.jpg";
import "../css/customer.css";

function Customer() {
  const customers = [
    {
      id: 1001,
      image: { profile_pic },
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      bookedCount: 5,
    },
    {
      id: 1002,
      image: { profile_pic },
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      bookedCount: 5,
    },
    {
      id: 1003,
      image: { profile_pic },
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      bookedCount: 5,
    },
    {
      id: 1004,
      image: { profile_pic },
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      bookedCount: 5,
    },
    {
      id: 1005,
      image: { profile_pic },
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      bookedCount: 5,
    },
  ];
  return (
    <>
      <h2 className="staff_members text-center text-black my-4 fs-1">
        Online Customers
      </h2>
      <Table responsive>
        <thead>
          <tr>
            <th>No.</th>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Booking Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((k, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>
                <img
                  src={k.image.profile_pic}
                  alt=""
                  width={"45px"}
                  height={"45px"}
                  className="rounded-circle"
                />
              </td>
              <td>{k.name}</td>
              <td>{k.phone}</td>
              <td>{k.email}</td>
              <td>{k.bookedCount}</td>
              <td>
                <Button variant="danger">Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Customer;
