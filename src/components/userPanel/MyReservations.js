import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "../../css/customer.css";

function MyReservation() {
  const bookings = [
    {
      id: 1001,
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      tableNo: "A1",
      bookedTime: Date.now(),
      status: "pending",
    },
    {
      id: 1002,
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      tableNo: "B1",
      bookedTime: Date.now(),
      status: "pending",
    },
    {
      id: 1003,
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      tableNo: "A2",
      bookedTime: Date.now(),
      status: "completed",
    },
    {
      id: 1004,
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      tableNo: "B2",
      bookedTime: Date.now(),
      status: "completed",
    },
    {
      id: 1005,
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      tableNo: "C1",
      bookedTime: Date.now(),
      status: "completed",
    },
  ];
  return (
    <>
      <h2 className="staff_members text-center text-black my-4 fs-1">
        Your Bookings
      </h2>
      <Table responsive>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Booking Table</th>
            <th>Booking Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((k, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{k.name}</td>
              <td>{k.phone}</td>
              <td>{k.email}</td>
              <td>{k.tableNo}</td>
              <td>{k.bookedTime}</td>
              <td>
                {k.status === "pending" ? (
                  <Button variant="danger">Cancel</Button>
                ) : (
                  k.status
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default MyReservation;
