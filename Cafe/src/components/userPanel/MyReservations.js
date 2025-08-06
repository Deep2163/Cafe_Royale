import React, { useState, useEffect } from "react";
import { Button, Modal, Table, Form } from "react-bootstrap";
import { Formik, Field, ErrorMessage, Form as FormikForm } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

function MyReservation() {
  const [showModal, setShowModal] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [availableTables, setAvailableTables] = useState([]);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const today = new Date().toISOString().split("T")[0];

  // Fetch all bookings
  const fetchBookings = async () => {
    try {
      let userId = localStorage.getItem("user");

      if (!userId) {
        alert("Invalid user session. Please log in again.");
        return;
      }
  
      const response = await axios.get("http://localhost:3001/Booktable/get/" + userId);
      // console.log(response.data.booktable);
      
      setBookings(response.data.booktable);
    } catch (error) {
      console.error("Error fetching bookings:", error.message);
    }
  };

  // Cancel a booking
  const handleCancelBooking = async (bookingId) => {
    if (!window.confirm("Are you sure you want to cancel this reservation?"))
      return;

    try {
      await axios.put(`http://localhost:3001/Booktable/update/${bookingId}`, {
        status: "Canceled",
      });
      enqueueSnackbar("Booking canceled successfully", { variant: "success" });
      fetchBookings();
    } catch (error) {
      console.error("Error canceling booking:", error);
      enqueueSnackbar("Failed to cancel booking", { variant: "error" });
    }
  };

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    let userId = localStorage.getItem("user");

    if (!userId) {
      alert("Invalid user session. Please log in again.");
      setSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:3001/Booktable/create/${userId}`,
        values
      );
      if (response.status === 201) {
        enqueueSnackbar("Reservation successful!", { variant: "success" });
        resetForm();
        setShowModal(false);
        fetchBookings();
      } else {
        throw new Error("Failed to submit reservation.");
      }
    } catch (error) {
      console.error("Axios error:", error);
      enqueueSnackbar(
        `Error: ${error.response?.data?.message || error.message}`,
        { variant: "error" }
      );
    }

    setSubmitting(false);
  };

  const fetchTables = async () => {
    try {
      const res = await axios.get("http://localhost:3001/Booktable/getTable");
      setAvailableTables(res.data.tables);
    } catch (err) {
      console.error("Error fetching tables:", err);
      setAvailableTables([]);
    }
  };

  useEffect(() => {
    fetchBookings();
    fetchTables();
  }, []);

  return (
    <>
      <h2 className="staff_members text-black my-4 fs-1">Bookings</h2>
      <Button variant="primary" onClick={handleShow}>
        Book Table
      </Button>

      <Table responsive>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Booking Table</th>
            <th>People</th>
            <th>Booking Date/Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{booking.userid.name}</td>
              <td>{booking.phone}</td>
              <td>{booking.userid.email}</td>
              <td>{booking.tblno}</td>
              <td>{booking.people}</td>
              <td>
                {booking.bookdate} {booking.Booktime}
              </td>
              <td>{booking.status}</td>
              <td>
                {(booking.status !== "Canceled" &&
                  booking.status !== "Accepted" && (
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleCancelBooking(booking._id)}
                    >
                      Cancel
                    </Button>
                  )) ||
                  null}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book a Table</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              phone: "",
              people: "",
              bookdate: "",
              tblno: "",
              Booktime: "",
            }}
            validationSchema={Yup.object({
              phone: Yup.string()
                .matches(/^\d{10}$/, "Phone number must be 10 digits")
                .required("Phone is required"),
              people: Yup.number()
                .min(1, "At least one person required")
                .required("People count is required"),
              bookdate: Yup.date()
                .min(today, "Booking date cannot be in the past")
                .required("Booking date is required"),
              tblno: Yup.string().required("Table number Selection is required"),
              Booktime: Yup.string().required("Booking time is required"),
            })}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <FormikForm noValidate>
                {/* Phone Field */}
                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Field type="text" name="phone" className="form-control" />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>

                {/* People Field */}
                <Form.Group>
                  <Form.Label>People</Form.Label>
                  <Field type="number" name="people" className="form-control" />
                  <ErrorMessage
                    name="people"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>

                {/* Date Field */}
                <Form.Group>
                  <Form.Label>Date</Form.Label>
                  <Field
                    type="date"
                    name="bookdate"
                    className="form-control"
                    min={today}
                  />
                  <ErrorMessage
                    name="bookdate"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>

                {/* Table Number Field */}
                {/* <Form.Group>
                  <Form.Label>Table Number</Form.Label>
                  <Field type="text" name="tblno" className="form-control" />
                  <ErrorMessage name="tblno" component="div" className="text-danger" />
                </Form.Group> */}
                <Form.Group>
                <Form.Label className="mt-4">Table Number</Form.Label>
                <Field as="select" name="tblno" className="form-control">
                  <option value="">Select Table</option>
                  {availableTables.map((tableNo) => (
                    <option key={tableNo} value={tableNo}>
                      {tableNo}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="tblno" component="div" className="text-danger" />
                </Form.Group>

                {/* Time Field */}
                <Form.Group>
                  <Form.Label className="mt-4">Time</Form.Label>
                  <Field type="time" name="Booktime" className="form-control" />
                  <ErrorMessage
                    name="Booktime"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="btn btn-primary mt-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book A Table"}
                </Button>
              </FormikForm>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyReservation;
