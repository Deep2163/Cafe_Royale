import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row, Modal } from "react-bootstrap";
import axios from "axios";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  // Fetch Orders from API
  const fetchOrders = () => {
    axios
      .get("http://localhost:3001/order/getall")
      .then((response) => {
        setOrders(response.data.orders);
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
      .put(`http://localhost:3001/order/status/${selectedOrderId}`, { status: "Delivered" })
      .then(() => {
        setShowModal(false);
        fetchOrders();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h2 className="staff_members text-black my-4 fs-1">Manage Orders</h2>

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
                              <h4 className="fw-bold mb-2">{product.productId.name || "Product Name"}</h4>
                              <p className="mb-1">Price: ₹{product.productId.price || "0"}</p>
                              <p className="mb-1">Quantity: {product.quantity}</p>
                              <div>Subtotal: ₹{product.subtotal}</div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </Col>

                    {/* Order Date & Time */}
                    <Col md={2} className="text-center">
                      <p className="mb-2">Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                      <p>Time: {new Date(order.createdAt).toLocaleTimeString()}</p>
                    </Col>

                    {/* Order Summary */}
                    <Col md={5} className="text-center">
                      <Card className="p-4">
                        <h3 className="fw-bold text-success">Thanks for your order!</h3>
                        <p className="mt-3 fs-5">Total Price: ₹{order.total}</p>
                        <Button
                          variant={order.status === "Delivered" ? "success" : order.status === "Cancelled" ? "secondary" : "warning"}
                          onClick={order.status === "Delivered" ? undefined :order.status === "Cancelled" ? undefined : () => handleCancelClick(order._id)}
                        >
                          {order.status === "Delivered" ? "Delivered" : order.status === "Cancelled" ? "Cancelled" : "Pending"}
                        </Button>
                      </Card>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>

      {/* Cancel Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered style={{ marginLeft: "20%", width: "60%" }} >
        <Modal.Header closeButton>
          <Modal.Title>Order is Completed ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to mark this order as completed ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            No
          </Button>
          <Button variant="success" onClick={cancelOrder}>
            Yes, Completed
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyOrders;
