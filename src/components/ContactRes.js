import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "../css/customer.css";

function ContactRes() {
  const contactRes = [
    {
      id: 1001,
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      messege: "vnfsovnrfd",
      responseTime: Date.now(),
    },
    {
      id: 1002,
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      messege: "vnfsovnrfd",
      responseTime: Date.now(),
    },
    {
      id: 1003,
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      messege: "vnfsovnrfd",
      responseTime: Date.now(),
    },
    {
      id: 1004,
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      messege: "vnfsovnrfd",
      responseTime: Date.now(),
    },
    {
      id: 1005,
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      messege: "vnfsovnrfd",
      responseTime: Date.now(),
    },
  ];

  return (
    <>
      <h2 className="staff_members text-center text-black my-4 fs-1">
        Contact Us Responses
      </h2>
      <Table responsive>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Messege</th>
            <th>Responsed At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactRes.map((k, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{k.name}</td>
              <td>{k.phone}</td>
              <td>{k.email}</td>
              <td>{k.messege}</td>
              <td>{k.responseTime}</td>
              <td>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ContactRes;
