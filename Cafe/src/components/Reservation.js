// import React from "react";
// import { Button } from "react-bootstrap";
// import Table from "react-bootstrap/Table";
// import "../css/customer.css";

// function Reservation() {
//   const bookings = [
//     {
//       id: 1001,
//       name: "abc",
//       phone: 1234567890,
//       email: "abc@gmail.com",
//       tableNo: "A1",
//       bookedTime: Date.now(),
//     },
//     {
//       id: 1002,
//       name: "abc",
//       phone: 1234567890,
//       email: "abc@gmail.com",
//       tableNo: "B1",
//       bookedTime: Date.now(),
//     },
//     {
//       id: 1003,
//       name: "abc",
//       phone: 1234567890,
//       email: "abc@gmail.com",
//       tableNo: "A2",
//       bookedTime: Date.now(),
//     },
//     {
//       id: 1004,
//       name: "abc",
//       phone: 1234567890,
//       email: "abc@gmail.com",
//       tableNo: "B2",
//       bookedTime: Date.now(),
//     },
//     {
//       id: 1005,
//       name: "abc",
//       phone: 1234567890,
//       email: "abc@gmail.com",
//       tableNo: "C1",
//       bookedTime: Date.now(),
//     },
//   ];
//   return (
//     <>
//       <h2 className="staff_members text-center text-black my-4 fs-1">
//         Active Bookings
//       </h2>
//       <Table responsive>
//         <thead>
//           <tr>
//             <th>No.</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>Booking Table</th>
//             <th>Booking Time</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((k, i) => (
//             <tr>
//               <td>{i + 1}</td>
//               <td>{k.name}</td>
//               <td>{k.phone}</td>
//               <td>{k.email}</td>
//               <td>{k.tableNo}</td>
//               <td>{k.bookedTime}</td>
//               <td>
//                 <Button variant="success">Confirm</Button> &nbsp;
//                 <Button variant="danger">Remove</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </>
//   );
// }

// export default Reservation;

import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "../css/customer.css";
import { enqueueSnackbar } from "notistack";

function Reservation() {
  const [bookings, setBookings] = useState([]);
  const API_URL = "http://localhost:3001/Booktable/getAll";

  const [ReservationId, setReservationId] = useState(null);
  const [show, setShow] = useState(false);
  const handleShowClose = () => setShow(!show);

  const [accept, setAccept] = useState(false);
  const handleAcceptClose = () => setAccept(!accept);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log("API Response:", response.data.booktable);

      setBookings(response.data.booktable); // Correctly setting the array
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const acceptRequest = async () => {
    try {
      await axios.put("http://localhost:3001/Booktable/accept/" + ReservationId);

      setReservationId(null);
      fetchBookings();
      handleAcceptClose();
      enqueueSnackbar("Reservation accepted successfully", {
        variant: "success",
      });
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Reservation acceptance failed", { variant: "error" });
    }
  };

  const rejectRequest = async () => {
    try {
      await axios.put("http://localhost:3001/Booktable/reject/" + ReservationId);

      setReservationId(null);
      fetchBookings();
      handleShowClose();
      enqueueSnackbar("Reservation rejected successfully", {
        variant: "success",
      });
    } catch (error) {
      console.log(error); // Log the error to the console
      enqueueSnackbar("Reservation rejection failed", { variant: "error" });
    }
  };

  return (
    <>
      <h2 className="staff_members text-center text-black my-4 fs-1">
        Active Bookings
      </h2>
      <Table responsive>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            {/* <th>Email</th> */}
            <th>Phone</th>
            <th>Table No</th>
            <th>Booking Date</th>
            <th>Booking Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((k, i) => (
            <tr key={k._id}>
              <td>{i + 1}</td>
              <td>{k.userid?.name || "N/A"}</td>
              {/* <td>{k.userid?.email || "N/A"}</td> */}
              <td>{k.phone}</td>
              <td>{k.tblno}</td>
              <td>{k.bookdate}</td>
              <td>{k.Booktime}</td>
              <td
                className={
                  k.status === "Accepted"
                    ? "text-success"
                    : k.status === "Rejected"
                    ? "text-danger"
                    : k.status === "Canceled"
                    ? "text-danger"
                    : "text-warning"
                }
              >
                {k.status}
              </td>
              <td>
                {k.status === "Pending" ? (
                  <>
                    <Button variant="success" onClick={() => { setReservationId(k._id) ;handleAcceptClose()}}>Accept</Button> &nbsp;
                    <Button variant="danger" onClick={() => { setReservationId(k._id) ;handleShowClose()}} >Reject</Button>
                  </>
                ) : (
                  "--"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* accept */}
      <Modal show={accept} onHide={handleAcceptClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Accept Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to <span className="text-danger">Accept</span>{" "}
          this Table Booking ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={acceptRequest}>
            Accept
          </Button>
        </Modal.Footer>
      </Modal>

      {/* reject */}
      <Modal show={show} onHide={handleShowClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Reject Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to <span className="text-danger">Reject</span>{" "}
          this Table Booking ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={rejectRequest}>
            Reject
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Reservation;
