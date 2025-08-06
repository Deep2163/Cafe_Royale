// import React from "react";
// import "../../css/user/reservation.css";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { Link } from "react-router-dom";

// const Reservation = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="bgblack_navbar pt-lg-4 pt-0">
//         <div className="container dixor_res">
//           <div className="row mt-5 justify-content-center">
//             <div className="col-12 mt-5">
//               <h1 className="mt-5 text-center text-white fs-1">
//                 Online Reservation
//               </h1>
//               <h4 className="text-center fw-bold fs-5 text-white">
//                 <i className="fa-solid fa-house"></i>&nbsp;
//                 <span>
//                   <Link to="/" className="text-white">
//                     Home
//                   </Link>
//                 </span>
//                 &nbsp;
//                 <span>{`>`}</span>&nbsp;<span>Reservation</span>
//               </h4>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="reservation" className="reservation mb-5 mt-5">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6 text-start text-white p-5 mt-4 mb-4">
//               <h5>RESERVATION</h5>
//               <h2 className="fs-1">Reservation Your Favorite Private Table</h2>
//               <p>
//                 A relaxing and pleasant atmosphere, good jazz, dinner, and
//                 cocktails. The Patio Time Bar opens in the center of Florence.
//                 The only bar inspired by the 1960s, it will give you a
//                 experience that you'll have a hard time forgetting.
//               </p>
//               <div>
//                 <ul className="mt-4 p-0">
//                   <li>
//                     <h4 className="text-white">Lunch Menu</h4>
//                     <h6 className="text-white fs-6">30+ items</h6>
//                   </li>
//                   <li>
//                     <h4 className="text-white">Dinner Menu</h4>
//                     <h6 className="text-white fs-6">50+ items</h6>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-md-6 position-relative">
//               <div className="form-box bg-dark text-white p-5">
//                 <form>
//                   <label>Phone</label>
//                   <br />
//                   <input type="text" name="phone" id="" />
//                   <br />
//                   <label>People</label>
//                   <br />
//                   <input type="number" name="count" id="" />
//                   <br />
//                   <label>Date</label>
//                   <br />
//                   <input type="date" name="date" id="" />
//                   <br />
//                   <label>Time</label>
//                   <br />
//                   <input type="time" name="time" id="" />
//                   <br />
//                   <input type="submit" value="Book A Table" />
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default Reservation;


import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../css/user/reservation.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const Reservation = () => {
  const today = new Date().toISOString().split("T")[0];

  const initialValues = {
    phone: "",
    people: "",
    bookdate: "",
    tblno: "",
    Booktime: ""
  };

  const validationSchema = Yup.object({
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone is required"),
    people: Yup.number()
      .min(1, "At least one person required")
      .required("People count is required"),
    bookdate: Yup.date()
      .min(today, "Booking date cannot be in the past")
      .required("Booking date is required"),
    tblno: Yup.string().required("Table number is required"),
    Booktime: Yup.string().required("Booking time is required")
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    let userId;
    try {
      userId = JSON.parse(localStorage.getItem("user"));
      if (!userId) throw new Error("User ID not found. Please log in.");
    } catch {
      alert("Invalid user session. Please log in again.");
      setSubmitting(false);
      return;
    }

    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

    const formattedValues = {
      ...values,
      Booktime: values.Booktime.toString()
    };

    console.log("Submitting:", formattedValues);

    try {
      const response = await axios.post(`${API_URL}/Booktable/create/${userId}`, formattedValues);
      if (response.status === 201) {
        enqueueSnackbar("Reservation successful!", { variant: "success" });
        resetForm();
      } else {
        throw new Error("Failed to submit reservation.");
      }
    } catch (error) {
      console.error("Axios error:", error);
      alert(`Error: ${error.response?.data?.message || error.message}`);
    }
    setSubmitting(false);
  };

  return (
    <>
      <Navbar />
      <section className="bgblack_navbar pt-lg-4 pt-0">
        <div className="container dixor_res">
          <div className="row mt-5 justify-content-center">
            <div className="col-12 mt-5">
              <h1 className="mt-5 text-center text-white fs-1">Online Reservation</h1>
              <h4 className="text-center fw-bold fs-5 text-white">
                <i className="fa-solid fa-house"></i>&nbsp;
                <span>
                  <Link to="/" className="text-white">Home</Link>
                </span>
                &nbsp;<span>{`>`}</span>&nbsp;<span>Reservation</span>
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section id="reservation" className="reservation mb-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-start text-white p-5 mt-4 mb-4">
              <h5>RESERVATION</h5>
              <h2 className="fs-1">Reserve Your Favorite Private Table</h2>
              <p>A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails.</p>
            </div>
            <div className="col-md-6 position-relative">
              <div className="form-box bg-dark text-white p-5">
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                  {({ isSubmitting }) => (
                    <Form>
                      <label>Phone</label>
                      <Field type="text" name="phone" className="form-control" />
                      <ErrorMessage name="phone" component="div" className="text-danger" />

                      <label>People</label>
                      <Field type="number" name="people" className="form-control" />
                      <ErrorMessage name="people" component="div" className="text-danger" />

                      <label>Date</label>
                      <Field type="date" name="bookdate" className="form-control" min={today} />
                      <ErrorMessage name="bookdate" component="div" className="text-danger" />

                      <label>Table Number</label>
                      <Field type="text" name="tblno" className="form-control" />
                      <ErrorMessage name="tblno" component="div" className="text-danger" />

                      <label>Time</label>
                      <Field type="time" name="Booktime" className="form-control" />
                      <ErrorMessage name="Booktime" component="div" className="text-danger" />

                      <button type="submit" className="btn btn-primary mt-3" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Book A Table"}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Reservation;