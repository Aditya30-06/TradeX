import React from "react";

const RightSection = ({ imageUrl, productName, productDescription, link }) => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4">
            <h3 className=" mb-3">{productName}</h3>
            <p className=" fs-6 text-muted lh-lg mb-4">{productDescription}</p>

            <div className="mb-4 d-flex flex-column flex-sm-row gap-3">
              <a
                href={link}
                className="btn btn-outline-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More <i className="fa-solid fa-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-6 text-center mb-4 mb-md-0">
            <img
              src={imageUrl}
              alt={`${productName} screenshot`}
              className="img-fluid rounded"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSection;
