import React, { useEffect, useState } from "react";
import "../../css/user/blog.css";
// import logo_light from "../../images/user/logo-light.png";
import blog1 from "../../images/user/blog1.jpg";
import blog2 from "../../images/user/blog2.jpeg";
import blog3 from "../../images/user/bolg3.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";

function Blog() {

  const [blog, setBlog] = useState([]);

  const getBlog = async () => {
    try {
      const res = await axios.get("http://localhost:3001/blog/getAll");
      setBlog(res.data.blog);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <>
      <Navbar />
      <section className="bgblack_nav pt-lg-4">
        <div className="container dixor_blog">
          <div className="row mt-5 justify-content-center align-items-center">
            <div className="col-12 mt-5">
              <h1 className="mt-5 text-center text-white fs-1">Blogs</h1>
              <h4 className="text-center fw-bold fs-5 text-white">
                <i className="fa-solid fa-house"></i>&nbsp;
                <span>
                  <Link to="/">Home</Link>
                </span>
                &nbsp;<span>{`>`}</span>&nbsp;<span>Blog</span>
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            {blog.map((item, index) => (
              <div key={index} className="col-md-12 mt-5">
                <div className="d-flex justify-content-center">
                  <div className="blog_content p-3">
                  <img src={`http://localhost:3001/${item.image}`} alt="" width="100%" />
                    <i className="fa-regular fa-calendar-days mt-4"></i>
                    &nbsp;&nbsp;&nbsp;
                    <span>{item.createdAt.split('T')[0]}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>{item.authorName}</span>
                    <br />
                    <br />
                    <h1>{item.title}</h1>
                    <br />
                    <p>{item.discription}</p>
                    <br />
                    {/* <button className="but fs-5">Read More</button> */}
                  </div>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Blog;
