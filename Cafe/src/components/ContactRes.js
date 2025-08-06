import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "../css/customer.css";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

function ContactRes() {
  const [contactRes, setContactRes] = useState([]);

  useEffect(() => {
    getContact();
  }, []);

  const getContact = async () => {
    try {
      const response = await axios.get("http://localhost:3001/Contatus/getall");
      console.log(response.data.contatus);

      setContactRes(response.data.contatus);
    } catch (error) {
      console.log(error);
    }
  };

  const [show, setShow] = useState(false);
  const handleShowClose = () => setShow(!show);

  const [setContactId, setsetContactId] = useState(null);

  const deleteConatcts = async () => {
    try {
      await axios.delete("http://localhost:3001/Contatus/delete/" + setContactId);
      setsetContactId(null);
      getContact();
      handleShowClose();
      enqueueSnackbar("staff member delete successfully", {
        variant: "success",
      });
    } catch (error) {
      console.log(error);
      enqueueSnackbar("staff member deleteion Failed", { variant: "error" });
    }
  };

  return (
    <>
      <h2 className="staff_members text-center text-black my-4 fs-1">
        Contact Us Responses
      </h2>
      <Table responsive>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Messege</th>
            {/* <th>Responsed At</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactRes.map((k, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{k.name}</td>
              <td>{k.phonenumber}</td>
              <td>{k.email}</td>
              <td>{k.message}</td>
              {/* <td>{k.responseTime}</td> */}
              <td>
                <Button
                  variant="danger"
                  onClick={() => {
                    setsetContactId(k._id);
                    handleShowClose();
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleShowClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to <span className="text-danger">delete</span>{" "}
          this Conatct Request ?
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleShowClose}>
                  Close
                </Button> */}
          <Button variant="danger" onClick={deleteConatcts}>
            confoim Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactRes;
