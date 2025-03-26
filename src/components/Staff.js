import React, { useEffect, useState } from "react";
import { Button, Col, Container, FloatingLabel, Form, Modal, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import profile_picture from "../images/profile_picture/profile_pic.jpg";
import "../css/staff.css";
import * as formik from "formik";
import * as yup from "yup";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

function Staff() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    role: yup.string().required("Role is required"),
    phone: yup.string().required("Phone is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    file: yup.mixed().required("File is required"),
  });


  const [showAddStaffForm, setShowAddItemForm] = useState(false);
  const handleClose = () => setShowAddItemForm(false);

  const [staff, setStaff] = useState([]) 

  // const staff = [
  //   {
  //     id: 1001,
  //     image: { profile_pic },
  //     name: "abc",
  //     phone: 1234567890,
  //     email: "abc@gmail.com",
  //     role: "Chef",
  //   },
  //   {
  //     id: 1002,
  //     image: { profile_pic },
  //     name: "abc",
  //     phone: 1234567890,
  //     email: "abc@gmail.com",
  //     role: "Chef",
  //   },
  //   {
  //     id: 1003,
  //     image: { profile_pic },
  //     name: "abc",
  //     phone: 1234567890,
  //     email: "abc@gmail.com",
  //     role: "Chef",
  //   },
  //   {
  //     id: 1004,
  //     image: { profile_pic },
  //     name: "abc",
  //     phone: 1234567890,
  //     email: "abc@gmail.com",
  //     role: "Chef",
  //   },
  //   {
  //     id: 1005,
  //     image: { profile_pic },
  //     name: "abc",
  //     phone: 1234567890,
  //     email: "abc@gmail.com",
  //     role: "Chef",
  //   },
  // ];

  const [show, setShow] = useState(false);
  const handleShowClose = () => setShow(!show);


  const [chef, setchef] = useState(false);


  const [chefId, setchefId] = useState();


  // get data
  const getchef = async () =>{
    try{
      const res = await axios.get("http://localhost:3001/chef/getAll");
      // console.log(res.data.chef);

      setchef(res.data.chef);
    }catch(error){
      console.log(error);
    }
  };


  useEffect(() =>{
    getchef();
  },[]);

  // add data
  const hendeladdchef = async (e, resetForm) =>{
    try{
      // console.log(e);

      const formData = new FormData();
      formData.append("name",e.name);
      formData.append("email",e.email);
      formData.append("phonenumber",e.phonenumber);
      formData.append("Image",e.Image);
      formData.append("role",e.role);

      await axios.post("http://localhost:3001/chef/create", formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      getchef();
      // resetForm();
      handleClose();
      enqueueSnackbar("Add New Blog successfully", { variant: "success" });
    }catch(error){
      console.log(error);
      enqueueSnackbar("Blog creation failed", { variant: "error" });
    }
  }

  // delete blog
  const deleteBlog = async () => {
    try {

      await axios.delete('http://localhost:3001/blog/delete/'+ chefId)

      setchefId();
      getchef();
      handleShowClose();
      enqueueSnackbar("Blog delete successfully", { variant: "success" });

    } catch (error) {
      console.log(error);
      enqueueSnackbar("Blog deleteion Failed", { variant: "error" });
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
                        placeholder="Title"
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
                    <Form.Group controlId="Email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        name="Email"
                        placeholder="email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={touched.author && !!errors.author}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.author}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                <Col md={6}>
                    <Form.Group controlId="Role">
                      <Form.Label>Role</Form.Label>
                      <Form.Control
                        type="text"
                        name="Role"
                        placeholder="Role"
                        value={values.role}
                        onChange={handleChange}
                        isInvalid={touched.author && !!errors.author}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.author}
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
                        isInvalid={touched.author && !!errors.author}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.author}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>


                  {/* <Col>
                    <Form.Group controlId="description">
                      <FloatingLabel label="Blog Description">
                        <Form.Control
                          as="textarea"
                          name="description"
                          placeholder="Enter description"
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
                    </Form.Group>
                  </Col> */}
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
            <th>Id</th>
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
              <td>{k.id}</td>
              <td>
                <img
                  src={`http://localhost:3001/${chef.image}`}
                  alt=""
                  width={"45px"}
                  height={"45px"}
                  className="rounded-circle"
                />
              </td>
              <td>{k.name}</td>
              <td>{k.phone}</td>
              <td>{k.email}</td>
              <td>{k.role}</td>
              <td>
                <Button variant="danger" onClick={() =>{
                  // handleShowClose();
                  // setchef(chef._id);
                }}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleShowClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Delete Blog</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to <span className="text-danger">delete</span>{" "}
                this blog post
              </Modal.Body>
              <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleShowClose}>
                  Close
                </Button> */}
                <Button variant="danger" onClick={deleteBlog}>
                  confoim Delete
                </Button>
              </Modal.Footer>
            </Modal>
    </>
  );
}

export default Staff;
