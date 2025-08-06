import React, { useState } from "react";
import MenuCard from "../menu_items/MenuCard";
import "../css/menu.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Col, Container, FloatingLabel, Row } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";
import axios from "axios";

function MenuAdmin() {
  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const handleClose = () => setShowAddItemForm(!showAddItemForm);

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

  // Handle API Submission
  const handleSubmitForm = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("category", values.category);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("image", values.image);

      await axios.post(
        "http://localhost:3001/Product/create",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      resetForm();
      handleClose();
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between px-3">
        <Formik
          validationSchema={schema}
          onSubmit={handleSubmitForm}
          initialValues={{
            name: "",
            category: "",
            description: "",
            price: "",
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
                          placeholder="Item Name"
                          autoFocus
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
                          placeholder="Price"
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
                            placeholder="Product Description"
                            style={{ minHeight: "100px" }}
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
                    <Button className="add_item_btn" type="submit">
                      Add Item
                    </Button>
                  </Modal.Footer>
                </Form>
              </Modal.Body>
            </Modal>
          )}
        </Formik>

        <h2 className="menu_items">Menu Items</h2>
        <button
          className="add_menu_item"
          onClick={() => setShowAddItemForm(!showAddItemForm)}
        >
          Add New Item
        </button>
      </div>
      <MenuCard />
    </>
  );
}

export default MenuAdmin;

