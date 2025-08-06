import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import * as yup from "yup";

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const handleClose = () => setShowAddItemForm(!showAddItemForm);

  const [editItem, setEditItem] = useState(null);

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    category: yup.string().required("Category is required"),
    description: yup.string().required("Description is required"),
    price: yup
      .number()
      .required("Price is required")
      .positive("Price must be positive"),
    image: yup.mixed().required("Image is required"),
  });

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/Product/getall");
      const productsWithQty = response.data.products.map((item) => ({
        ...item,
        qty: item.qty || 0,
      }));
      setMenuItems(productsWithQty);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  const incrementQty = (_id) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item._id === _id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrementQty = (_id) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item._id === _id && item.qty > 0 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:3001/Product/delete/${_id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleSubmitForm = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("category", values.category);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("image", values.image);

      const id = editItem._id;

      await axios.put(`http://localhost:3001/Product/Update/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      resetForm();
      handleClose();
      fetchProducts();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handlePlaceOrder = () => {
    const selectedItems = menuItems
      .filter((item) => item.qty > 0)
      .map((item) => ({
        productId: item._id, 
        quantity: item.qty.toString(),
      }));
  
    const orderData = {
      products: selectedItems,
    };
  
    console.log("Order Data:", orderData);

    const userId = localStorage.getItem("user");
  
    // Send to API
    axios
      .post(`http://localhost:3001/order/create/${userId}`, orderData)
      .then((response) => {
        console.log("Order Created:", response.data);
        window.location.href = "/user/myorders";
      })
      .catch((error) => console.error("Error creating order:", error));
  };
  

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container position-relative mt-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th
              className={
                window.location.pathname === "/admin/menu"
                  ? "d-none"
                  : "d-block"
              }
            >
              Quantity
            </th>
            <th
              className={
                window.location.pathname === "/admin/menu" ? "" : "d-none"
              }
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item._id}>
              <td>
                <img
                  src={`http://localhost:3001/images/${item.image}`}
                  alt={item.name}
                  style={{ width: "50px" }}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price} Rs.</td>
              <td
                className={
                  window.location.pathname === "/admin/menu"
                    ? "d-none"
                    : "d-block"
                }
              >
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => decrementQty(item._id)}
                    disabled={item.qty === 0}
                  >
                    -
                  </button>
                  <span className="px-2">{item.qty}</span>
                  <button
                    className="btn btn-primary"
                    onClick={() => incrementQty(item._id)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td
                className={
                  window.location.pathname === "/admin/menu" ? "" : "d-none"
                }
              >
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => {
                    setEditItem(item);
                    setShowAddItemForm(true);
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {menuItems.some((item) => item.qty > 0) && (
        <div
          className="text-center mt-3 position-fixed bottom-0 mb-5"
          style={{ left: "55%", transform: "translateX(-50%)" }}
        >
          {/* <button
            className="btn btn-success px-5 py-2 fw-bold"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.76)" }}
          >
            Place Order
          </button> */}
          <button
            className="btn btn-success px-5 py-2 fw-bold"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.76)" }}
            onClick={handlePlaceOrder} 
          >
            Place Order
          </button>
        </div>
      )}

      <Formik
        enableReinitialize={true} // This ensures form updates when editItem changes
        validationSchema={schema}
        onSubmit={handleSubmitForm}
        initialValues={{
          name: editItem ? editItem.name : "",
          category: editItem ? editItem.category : "",
          description: editItem ? editItem.description : "",
          price: editItem ? editItem.price : "",
          image: null,
        }}
      >
        {({
          handleSubmit,
          handleChange,
          setFieldValue,
          values,
          touched,
          errors,
        }) => (
          <Modal show={showAddItemForm} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Container>
                  <Row>
                    <Col md={6}>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        isInvalid={touched.name && !!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Col>
                    <Col md={6}>
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        type="number"
                        name="price"
                        value={values.price}
                        onChange={handleChange}
                        isInvalid={touched.price && !!errors.price}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.price}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FloatingLabel
                        controlId="floatingTextarea"
                        label="Description"
                        className="mb-3"
                      >
                        <Form.Control
                          as="textarea"
                          name="description"
                          value={values.description}
                          onChange={handleChange}
                          isInvalid={
                            touched.description && !!errors.description
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.description}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Label>Category</Form.Label>
                      <Form.Select
                        name="category"
                        value={values.category}
                        onChange={handleChange}
                        isInvalid={touched.category && !!errors.category}
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option value="coffee">Coffee</option>
                        <option value="tea">Tea</option>
                        <option value="snacks">Snacks</option>
                        <option value="deserts">Deserts</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.category}
                      </Form.Control.Feedback>
                    </Col>
                    <Col md={6}>
                      <Form.Label>Image</Form.Label>
                      <Form.Control
                        type="file"
                        accept="image/*"
                        name="image"
                        onChange={(event) =>
                          setFieldValue("image", event.target.files[0])
                        }
                        isInvalid={touched.image && !!errors.image}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.image}
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                </Container>
                <Modal.Footer>
                  <Button variant="primary" type="submit">
                    Add Item
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
        )}
      </Formik>
    </div>
  );
}

export default App;
