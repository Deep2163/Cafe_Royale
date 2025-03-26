import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "../../css/customer.css";

function MyOrders() {
  const orders = [
    {
      id: 1001,
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      items: "Coffee and Food",
      orderingtime: Date.now(),
      status: "pending",
    },
    {
      id: 1002,
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      items: "Coffee and Pizza",
      orderingtime: Date.now(),
      status: "pending",
    },
    {
      id: 1003,
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      items: "Tea and Food",
      orderingtime: Date.now(),
      status: "pending",
    },
    {
      id: 1004,
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      items: "Food",
      orderingtime: Date.now(),
      status: "completed",
    },
    {
      id: 1005,
      name: "abc",
      phone: 1234567890,
      email: "abc@gmail.com",
      items: "Food and Deserts",
      orderingtime: Date.now(),
      status: "completed",
    },
  ];
  return (
    <>
      <h2 className="staff_members text-center text-black my-4 fs-1">
        Your Online Orders
      </h2>
      <Table responsive>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Ordered Items</th>
            <th>Ordering Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((k, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{k.name}</td>
              <td>{k.phone}</td>
              <td>{k.email}</td>
              <td>{k.items}</td>
              <td>{k.orderingtime}</td>
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

export default MyOrders;
