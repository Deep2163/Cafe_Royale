import React, { useEffect } from "react";
import "../css/blog.css";
import { Formik } from "formik";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Col, Container, FloatingLabel, Row, Table } from "react-bootstrap";
import * as yup from "yup";
import blog1 from "../images/user/blog1.jpg";
import blog2 from "../images/user/blog2.jpeg";
import blog3 from "../images/user/bolg3.jpg";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

function Blogs() {
  const schema = yup.object().shape({
    name: yup.string().required("Blog Name is required"),
    author: yup.string().required("Author Name is required"),
    description: yup.string().required("Description is required"),
    image: yup.mixed().required("Image is required"),
  });

  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const handleClose = () => setShowAddItemForm(!showAddItemForm);

  const [show, setShow] = useState(false);
  const handleShowClose = () => setShow(!show);

  const [blogs, setBlog] = useState([]);

  const [blogId, setBlogId] = useState();

  // get data

  const getBlog = async () => {
    try {
      const res = await axios.get("http://localhost:3001/blog/getAll");
      //  console.log(res.data.blog);
      setBlog(res.data.blog);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  //  add data
  const hendeladdBlog = async (e, resetForm) => {
    try {
      // console.log(e);

      const formData = new FormData();
      formData.append("title", e.name);
      formData.append("authorName", e.author);
      formData.append("discription", e.description);
      formData.append("imagename", e.image);

      await axios.post("http://localhost:3001/blog/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      getBlog();
      resetForm();
      handleClose();
      enqueueSnackbar("Add New Blog successfully", { variant: "success" });
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Blog creation failed", { variant: "error" });
    }
  };

  // delete blog
  const deleteBlog = async () => {
    try {

      await axios.delete('http://localhost:3001/blog/delete/'+ blogId)

      setBlogId();
      getBlog();
      handleShowClose();
      enqueueSnackbar("Blog delete successfully", { variant: "success" });

    } catch (error) {
      console.log(error);
      enqueueSnackbar("Blog deleteion Failed", { variant: "error" });
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between px-3">
        <Formik
          initialValues={{
            name: "",
            author: "",
            description: "",
            image: null,
          }}
          validationSchema={schema}
          onSubmit={(values, { resetForm }) => {
            hendeladdBlog(values, resetForm);
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
                <Modal.Title>Add New Blog</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form noValidate onSubmit={handleSubmit}>
                  <Container>
                    {/* Blog Name & Author */}
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="blogName">
                          <Form.Label>Blog Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            placeholder="Blog Title"
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
                        <Form.Group controlId="authorName">
                          <Form.Label>Author Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="author"
                            placeholder="Blog Author"
                            value={values.author}
                            onChange={handleChange}
                            isInvalid={touched.author && !!errors.author}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.author}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    {/* Blog Description */}
                    <Row>
                      <Col>
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
                      </Col>
                    </Row>

                    {/* File Upload */}
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

                  {/* Modal Footer with Buttons */}
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button type="submit" className="add_item_btn">
                      Add Blog
                    </Button>
                  </Modal.Footer>
                </Form>
              </Modal.Body>
            </Modal>
          )}
        </Formik>

        <h2 className="staff_members text-center text-black my-4 fs-1">
          Blogs
        </h2>
        <button
          className="add_menu_item"
          onClick={() => setShowAddItemForm(!showAddItemForm)}
        >
          Add New Blog
        </button>
      </div>

      <Table responsive>
        <thead>
          <tr>
            <th>No.</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={`http://localhost:3001/${blog.image}`}
                  alt="blog"
                  width={"45px"}
                  height={"45px"}
                  className="rounded-circle"
                />
              </td>
              <td>{blog.title}</td>
              <td>{blog.discription}</td>
              <td>{blog.authorName}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleShowClose();
                    setBlogId(blog._id);
                  }}
                >
                  Remove
                </Button>
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

export default Blogs;
