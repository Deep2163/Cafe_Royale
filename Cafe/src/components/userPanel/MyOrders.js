// import React, { useEffect, useState } from "react";
// import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
// import axios from "axios";

// function MyOrders() {
//   const [orders, setOrders] = useState([]);

//   // Fetch Orders from API
//   const fetchOrders = () => {
//     axios
//       .get("http://localhost:3001/order/getall")
//       .then((response) => {
//         setOrders(response.data.orders);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   return (
//     <>
//       <h2 className="staff_members text-black my-4 fs-1">Your Orders</h2>

//       <Container fluid>
//         <Row className="m-5 my-4">
//           <Col>
//             {orders.map((order, index) => (
//               <Card key={index} className="mb-4 shadow-lg">
//                 <Card.Body>
//                   <Row className="align-items-center p-4">
//                     {/* Order Items */}
//                     <Col md={5}>
//                       {order.products.map((product, pIndex) => (
//                         <Card key={pIndex} className="mb-3 p-3">
//                           <div className="d-flex align-items-center">
//                             <Image
//                               src={`http://localhost:3001/images/${product.productId.image}`}
//                               width={"100px"}
//                               height={"100px"}
//                               className="me-3"
//                             />
//                             <div>
//                               <h4 className="fw-bold mb-2">{product.productId.name || "Product Name"}</h4>
//                               <p className="mb-1">Price: ₹{product.productId.price || "0"}</p>
//                               <p className="mb-1">Quantity: {product.quantity}</p>
//                               <div>Subtotal: ₹{product.subtotal}</div>
//                             </div>
//                           </div>
//                         </Card>
//                       ))}
//                     </Col>

//                     {/* Order Date & Time */}
//                     <Col md={2} className="text-center">
//                       <p className="mb-2">Date: {new Date(order.createdAt).toLocaleDateString()}</p>
//                       <p>Time: {new Date(order.createdAt).toLocaleTimeString()}</p>
//                     </Col>

//                     {/* Order Summary */}
//                     <Col md={5} className="text-center">
//                       <Card className="p-4">
//                         <h3 className="fw-bold text-success">Thanks for your order!</h3>
//                         <p className="mt-3 fs-5">Total Price: ₹{order.total}</p>
//                         <Button variant="danger">Cancel</Button>
//                       </Card>
//                     </Col>
//                   </Row>
//                 </Card.Body>
//               </Card>
//             ))}
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default MyOrders;

import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Modal,
  Table,
} from "react-bootstrap";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  // Fetch Orders from API
  const fetchOrders = () => {
    let userId = localStorage.getItem("user");

    if (!userId) {
      alert("Invalid user session. Please log in again.");
      return;
    }

    axios
      .get("http://localhost:3001/order/user/" + userId)
      .then((response) => {
        setOrders(response.data.order);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Show confirmation popup
  const handleCancelClick = (orderId) => {
    setSelectedOrderId(orderId);
    setShowModal(true);
  };

  // Cancel Order API Call
  const cancelOrder = () => {
    if (!selectedOrderId) return;

    axios
      .put(`http://localhost:3001/order/status/${selectedOrderId}`, {
        status: "Cancelled",
      })
      .then(() => {
        setShowModal(false);
        fetchOrders();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePayment = async (id) => {
    let ordersingle = {};

    try {
      const response = await axios.get(`http://localhost:3001/order/get/` + id);
      ordersingle = response.data.order;
    } catch (error) {
      console.log(error);
    }

    const data = {
      name: ordersingle.userid.name,
      mobileNumber: ordersingle.userid.phonenumber,
      amount: ordersingle.total,
    };

    console.log(data);

    try {
      const response = await axios.post(
        `http://localhost:3001/payment/createorder/${id}`,
        data
      );
      console.log(response.data);
      window.location.href = response.data.url;
    } catch (error) {
      console.log("error in payment", error);
    }
  };

  const printRef = useRef();
  const [invoiceData, setInvoiceData] = useState(null);

  const handleDownloadPdf = async (data) => {
    setInvoiceData(data); // set new data in state

    // Wait for DOM to update (ensure new invoice is rendered)
    await new Promise((resolve) => setTimeout(resolve, 100)); // wait a bit

    const element = printRef.current;
    element.classList.remove("d-none");

    await new Promise((resolve) => setTimeout(resolve, 100)); // wait for visibility

    const canvas = await html2canvas(element);
    const pdfData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(pdfData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("invoice.pdf");

    element.classList.add("d-none");

    // Clear invoice after download if needed
    setInvoiceData(null);
  };

  const mainColor = "#542d00";

  return (
    <>
      <h2 className="staff_members text-black my-4 fs-1">Your Orders</h2>

      <Container fluid>
        <Row className="m-5 my-4">
          <Col>
            {orders.map((order, index) => (
              <Card key={index} className="mb-4 shadow-lg">
                <Card.Body>
                  <Row className="align-items-center p-4">
                    {/* Order Items */}
                    <Col md={5}>
                      {order.products.map((product, pIndex) => (
                        <Card key={pIndex} className="mb-3 p-3">
                          <div className="d-flex align-items-center">
                            <Image
                              src={`http://localhost:3001/images/${product.productId.image}`}
                              width={"100px"}
                              height={"100px"}
                              className="me-3"
                            />
                            <div>
                              <h4 className="fw-bold mb-2">
                                {product.productId.name || "Product Name"}
                              </h4>
                              <p className="mb-1">
                                Price: ₹{product.productId.price || "0"}
                              </p>
                              <p className="mb-1">
                                Quantity: {product.quantity}
                              </p>
                              <div>Subtotal: ₹{product.subtotal}</div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </Col>

                    {/* Order Date & Time */}
                    <Col md={2} className="text-center">
                      <p className="mb-2">
                        Date: {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                      <p>
                        Time: {new Date(order.createdAt).toLocaleTimeString()}
                      </p>
                    </Col>

                    {/* Order Summary */}
                    <Col md={5} className="text-center">
                      <Card className="p-4">
                        <h3 className="fw-bold text-success">
                          Thanks for your order!
                        </h3>
                        <p className="mt-3 fs-5">Total Price: ₹{order.total}</p>
                        <Button
                          variant={`${
                            order.status === "Cancelled"
                              ? "secondary"
                              : order.status === "Delivered"
                              ? "success"
                              : "danger"
                          }`}
                          onClick={
                            order.status === "Cancelled"
                              ? undefined
                              : order.status === "Delivered"
                              ? undefined
                              : () => handleCancelClick(order._id)
                          }
                        >
                          {order.status === "Cancelled"
                            ? "Cancelled"
                            : order.status === "Delivered"
                            ? "Delivered"
                            : "Cancel"}
                        </Button>

                        {order.paymentStatus === false ? (
                          <Button
                            variant="primary"
                            className=""
                            onClick={() => handlePayment(order._id)}
                          >
                            Payment
                          </Button>
                        ) : (
                          <div>Payment Completed</div>
                        )}

                        {order.paymentStatus === true && (
                          <Button
                            onClick={() => {
                              handleDownloadPdf(order);
                            }}
                            className="mt-3"
                          >
                            Download PDF
                          </Button>
                        )}
                      </Card>
                    </Col>
                  </Row>
                </Card.Body>
                <Container
                  className="p-4 d-none"
                  style={{
                    maxWidth: "800px",
                    fontFamily: "Arial, sans-serif",
                    // height: "100vh",
                  }}
                  ref={printRef}
                >
                  {invoiceData && (
                    <div className="w-100">
                      <div
                        className="text-white text-center py-3"
                        style={{ backgroundColor: mainColor }}
                      >
                        <h3 style={{ letterSpacing: "5px" }}>Cafe Royale</h3>
                      </div>

                      <div className="d-flex justify-content-between my-4">
                        <div>
                          <h6>INVOICE TO:</h6>
                          <p>
                            {invoiceData.userid.name}
                            <br />
                            {invoiceData.userid.phonenumber}
                          </p>
                        </div>
                        <div className="text-end">
                          <p>
                            <strong>DATE : </strong>{" "}
                            {new Date(
                              invoiceData.createdAt
                            ).toLocaleDateString()}
                            <br />
                            <strong>TIME : </strong>{" "}
                            {new Date(
                              invoiceData.createdAt
                            ).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>

                      <Table
                        // bordered
                        responsive
                        striped
                        hover
                        size="lg"
                      >
                        <thead
                          style={{ backgroundColor: mainColor, color: "white" }}
                        >
                          <tr>
                            <th>Order Name</th>
                            <th>PRICE</th>
                            <th>QTY.</th>
                            <th>TOTAL</th>
                          </tr>
                        </thead>
                        <tbody>
                          {invoiceData.products.map((product, pIndex) => (
                            <tr key={pIndex}>
                              <td>{product.productId.name}</td>
                              <td>₹{product.productId.price}</td>
                              <td>{product.quantity}</td>
                              <td>₹{product.subtotal}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>

                      <div className="text-end fs-3 mt-4 me-4">Total :  ₹{invoiceData.total}</div>
                    </div>
                  )}
                </Container>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>

      {/* Cancel Confirmation Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        style={{ marginLeft: "20%", width: "60%" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Cancel Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to cancel this order?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            No
          </Button>
          <Button variant="danger" onClick={cancelOrder}>
            Yes, Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyOrders;
