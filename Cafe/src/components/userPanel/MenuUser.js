// import React, { useState } from "react";
import MenuCard from "../../menu_items/MenuCard";
import "../../css/menu.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Col, Container, FloatingLabel, Row } from "react-bootstrap";
// import InputGroup from "react-bootstrap/InputGroup";
import * as formik from "formik";
import * as yup from "yup";

// import axios from "axios";

function MenuUser() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup.string().required(),
    category: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required(),
    status: yup.string().required(),
  });
  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const handleClose = () => setShowAddItemForm(!showAddItemForm);

  return (
    <>
      <div className="d-flex justify-content-between px-3 ">
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            name: "Name",
            category: "Category",
            description: "Descripion",
            price: "100",
            status: "Available",
            // file: null,
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Modal show={showAddItemForm} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add New Item</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Container>
                      <Row>
                        <Col md={6}>
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Item Name"
                            className="mt-0"
                            autoFocus
                          />
                        </Col>
                        <Col md={6}>
                          <Form.Label>Category</Form.Label>
                          <Form.Select aria-label="Floating label select example">
                            <option selected disabled>
                              Select one
                            </option>
                            <option value="coffee">Coffee</option>
                            <option value="tea">Tea</option>
                            <option value="snacks">Snacks</option>
                            <option value="deserts">Deserts</option>
                          </Form.Select>
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
                              placeholder="Product Description"
                              style={{ minHeight: "100px" }}
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Label>Price</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Item Name"
                            className="mt-0"
                          />
                        </Col>
                        <Col md={6}>
                          <Form.Label>Status</Form.Label>
                          <Form.Select aria-label="Floating label select example">
                            <option selected disabled>
                              Select one
                            </option>
                            <option value="available">Available</option>
                            <option value="not available">Not Available</option>
                            {/* <option value="snacks">Snacks</option>
                            <option value="deserts">Deserts</option> */}
                          </Form.Select>
                        </Col>
                      </Row>
                    </Container>
                  </Form.Group>
                  <Form.Group className="position-relative mb-2 mx-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="file"
                      required
                      name="file"
                      onChange={handleChange}
                      isInvalid={!!errors.file}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.file}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button className="add_item_btn" onClick={handleClose}>
                  Add Item
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </Formik>

        <h2 className="menu_items ">Menu Items</h2>
      </div>
      <MenuCard />
    </>
  );
}

export default MenuUser;
