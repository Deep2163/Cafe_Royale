import React, { useEffect, useState } from "react";
import { Button, Col, Container, FloatingLabel, Form, Modal, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import profile_picture from "../images/profile_picture/profile_pic.jpg";
import "../css/staff.css";
import * as formik from "formik";
import * as yup from "yup";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import * as Yup from "yup";

function Staff() {
  const { Formik } = formik;

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phonenumber: Yup.string().required("Phone is required"),
    image: Yup.mixed().required("Image is required"),
    role: Yup.string().required("Role is required"),
  });
  

  const [showAddStaffForm, setShowAddItemForm] = useState(false);
  const handleClose = () => setShowAddItemForm(false);

  const [staff, setStaff] = useState([]) 

  const [show, setShow] = useState(false);
  const handleShowClose = () => setShow(!show);

  const [chefId, setchefId] = useState(null);


  // get data
  const getchef = async () =>{
    try{
      const res = await axios.get("http://localhost:3001/chef/getAll");
      
      setStaff(res.data.chef);
    }catch(error){
      console.log(error);
    }
  };


  useEffect(() =>{
    getchef();
  },[]);

  // add data
  const hendeladdchef = async (e, resetForm) => {
    const formData = new FormData();
    formData.append("name", e.name);
    formData.append("email", e.email);
    formData.append("phonenumber", e.phonenumber);
    formData.append("imagename", e.image); // Image field name must match backend
    formData.append("Role", e.role);   // Capital 'R'
  
    try {
      const response = await axios.post("http://localhost:3001/chef/create", formData);
      console.log(response.data);
      enqueueSnackbar("Chef added successfully!", { variant: "success" });
      resetForm(); // Clear the form
      setShowAddItemForm(false); // Close modal
      getchef();
    } catch (error) {
      enqueueSnackbar(error?.response?.data?.error || "Failed to add chef", {
        variant: "error",
      });
      console.log(error);
    }
  };
  

  // delete blog
  const deleteStaff = async () => {
    try {

      await axios.delete('http://localhost:3001/Chef/delete/'+ chefId)
      setchefId(null);
      getchef();
      handleShowClose();
      enqueueSnackbar("staff member delete successfully", { variant: "success" });

    } catch (error) {
      console.log(error);
      enqueueSnackbar("staff member deleteion Failed", { variant: "error" });
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between px-3 ">        
       <Formik
      initialValues={{
        name: "",
        email: "",
        phonenumber: "",
        image: null,
        role:"",
      }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        hendeladdchef(values, resetForm);
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
        <Modal show={showAddStaffForm} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New chef</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate onSubmit={handleSubmit}>
              <Container>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="chefName">
                      <Form.Label>chef Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter the Name"
                        value={values.name}
                        onChange={handleChange}
                        isInvalid={touched.name && !!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>email</Form.Label>
                      <Form.Control
                        type="text"
                        name="email"
                        placeholder="Enter the Email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={touched.email && !!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                <Col md={6}>
                    <Form.Group controlId="role">
                      <Form.Label>Role</Form.Label>
                      <Form.Control
                        type="text"
                        name="role"
                        placeholder="Enter the Role"
                        value={values.role}
                        onChange={handleChange}
                        isInvalid={touched.role && !!errors.role}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.role}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="phonenumber">
                      <Form.Label>phonenumber</Form.Label>
                      <Form.Control
                        type="text"
                        name="phonenumber"
                        placeholder="phonenumber"
                        value={values.phonenumber}
                        onChange={handleChange}
                        isInvalid={touched.phonenumber && !!errors.phonenumber}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phonenumber}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>


                  
                </Row>

                <Form.Group className="position-relative mt-3">
                    <Form.Label>Upload Image</Form.Label>
                        <Form.Control
                           type="file"
                            name="image"
                            onChange={(event) =>
                              setFieldValue("image", event.currentTarget.files[0])
                              }
                              isInvalid={touched.image && !!errors.image}
                              />
                              <Form.Control.Feedback type="invalid">
                                 {errors.image}
                              </Form.Control.Feedback>
                      </Form.Group>
              </Container>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button className="add_item_btn" type="submit">
                  Add Item
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </Formik>
        <h2 className="staff_members text-center text-black fs-1">
          Staff Members
        </h2>
        <button
          className="add_menu_item"
          onClick={() => setShowAddItemForm(true)}
        >
          Add New Staff
        </button>
      </div>

      <Table responsive>
        <thead>
          <tr>
            <th>No.</th>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((k, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>
                <img
                  src={`http://localhost:3001/${k.Image}`}
                  alt=""
                  width={"45px"}
                  height={"45px"}
                  className="rounded-circle object-fit-cover"
                />
              </td>
              <td>{k.name}</td>
              <td>{k.phonenumber}</td>
              <td>{k.email}</td>
              <td>{k.Role}</td>
              <td>
                <Button variant="danger" onClick={() =>{
                  setchefId(k._id);
                  handleShowClose();
                  console.log(k._id);
                  
                }}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleShowClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Delete Staff</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to <span className="text-danger">delete</span>{" "}
                this Staff Member ?
              </Modal.Body>
              <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleShowClose}>
                  Close
                </Button> */}
                <Button variant="danger" onClick={deleteStaff}>
                  confoim Delete
                </Button>
              </Modal.Footer>
            </Modal>
    </>
  );
}

export default Staff;
