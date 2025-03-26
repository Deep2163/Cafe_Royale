import React from "react";
import "../../css/user/blog.css";
// import logo_light from "../../images/user/logo-light.png";
import blog1 from "../../images/user/blog1.jpg";
import blog2 from "../../images/user/blog2.jpeg";
import blog3 from "../../images/user/bolg3.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Blog() {
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
            <div className="col-md-12 mt-5">
              <div className="d-flex justify-content-center">
                <img src={blog1} alt="" width="80%"/>
              </div>
              <div className="d-flex justify-content-center">
                <div className="blog_content p-3">
                  <i className="fa-regular fa-calendar-days"></i>
                  &nbsp;&nbsp;&nbsp;
                  <span>12 August,2024</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>john Baus</span>
                  <br />
                  <br />
                  <h1>Picked up a Brussels burger Sprouts.</h1>
                  <br />
                  <p>
                    Bndulgence diminution so discovered mr apartments. Are off
                    under folly death wrote cause her way spite. Plan upon yet
                    way get cold spot its week. Almost do am or limits hearts.
                    Resolve parties but why she shewing. She sang know now
                  </p>
                  <br />
                  <button className="but fs-5">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-5">
              <div className="d-flex justify-content-center">
                <img src={blog2} alt="" width="80%" />
              </div>
              <div className="d-flex justify-content-center">
                <div className="blog_content p-3">
                  <i className="fa-regular fa-calendar-days"></i>
                  &nbsp;&nbsp;&nbsp;
                  <span>12 August,2024</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>john Baus</span>
                  <br />
                  <br />
                  <h1>Picked up a Brussels burger Sprouts.</h1>
                  <br />
                  <p>
                    Bndulgence diminution so discovered mr apartments. Are off
                    under folly death wrote cause her way spite. Plan upon yet
                    way get cold spot its week. Almost do am or limits hearts.
                    Resolve parties but why she shewing. She sang know now
                  </p>
                  <br />
                  <button className="but fs-5">Read More</button>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-5">
              <div className="d-flex justify-content-center">
                <img src={blog3} alt="" width="80%" />
              </div>
              <div className="d-flex justify-content-center">
                <div className="blog_content p-3">
                  <i className="fa-regular fa-calendar-days"></i>
                  &nbsp;&nbsp;&nbsp;
                  <span>12 August,2024</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>john Baus</span>
                  <br />
                  <br />
                  <h1>Picked up a Brussels burger Sprouts.</h1>
                  <br />
                  <p>
                    Bndulgence diminution so discovered mr apartments. Are off
                    under folly death wrote cause her way spite. Plan upon yet
                    way get cold spot its week. Almost do am or limits hearts.
                    Resolve parties but why she shewing. She sang know now
                  </p>
                  <br />
                  <button className="but fs-5">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Blog;
