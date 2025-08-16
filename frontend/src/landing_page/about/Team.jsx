import React from "react";

const Team = () => {
  return (
    <div className="container">
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-8">
          <h2
            className="fw-bold text-dark"
            style={{
              fontSize: "2.5rem",
              marginTop: "1rem",
              marginBottom: "1rem",
              letterSpacing: "1px",
            }}
          >
            Developer
          </h2>
          <p className="text-muted" style={{ fontSize: "1.1rem" }}>
            Passionate about building scalable, modern web applications.
          </p>
        </div>
      </div>
      <div className="row gx-5 gy-4 justify-content-center">
        <div className="col-md-4 text-center text-muted">
          <img
            src="media/images/Me.png"
            style={{ width: "70%", borderRadius: "50%" }}
            alt="Aditya Birla"
          />
          <h3 className="mt-3">Aditya Birla</h3>
          <p>Developer</p>

          <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
            <a className="nav-link icon" href="https://x.com/Aditya30_06">
              <i
                className="fa-brands fa-x-twitter"
                style={{ fontSize: "1.3em" }}
              ></i>
            </a>
            <a className="nav-link icon" href="https://github.com/Aditya30-06">
              <i
                className="fa-brands fa-github"
                style={{ fontSize: "1.3em" }}
              ></i>
            </a>
            <a
              className="nav-link icon"
              href="https://www.linkedin.com/in/aditya-birla-"
            >
              <i
                className="fa-brands fa-linkedin"
                style={{ fontSize: "1.3em" }}
              ></i>
            </a>
            <a className="nav-link icon" href="https://wa.me/919462246616">
              <i
                className="fa-brands fa-whatsapp"
                style={{ fontSize: "1.3em" }}
              ></i>
            </a>
          </div>

          <div className="mt-3">
            <p>
              Contact Number:{" "}
              <a href="tel:+919462246616" className="text-decoration-none">
                +91 94622 46616
              </a>
            </p>
            <p style={{ marginTop: "-1rem" }}>
              Email:{" "}
              <a
                href="mailto:aditya3004bir@gmail.com"
                className="text-decoration-none"
              >
                aditya3004bir@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="col-md-5 text-center text-md-start">
          <p className="hero-text text-muted">
            I'm an Electronics and Communication student with a strong interest
            in <b>full-stack web development</b> and financial systems. I enjoy
            working on real-world projects that combine clean design, functional
            architecture, and scalable solutions.
          </p>
          <p className="hero-text text-muted">
            My current focus is on building responsive, user-first applications
            using modern JavaScript frameworks and backend technologies. Outside
            of development, I'm actively learning about investing and the
            financial markets, with a long-term goal of blending technology and
            finance to build meaningful tools.
          </p>
          <p className="hero-text text-muted">
            <b>
              I'm not just experimenting — I'm building with purpose and
              direction.
            </b>
          </p>
        </div>
        <hr className="mx-auto" />
      </div>
    </div>
  );
};

export default Team;
