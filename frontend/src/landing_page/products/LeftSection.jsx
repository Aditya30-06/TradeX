import React from "react";

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  googlePlay,
  appStore,
  onelink,
  secondlink,
}) => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 text-center mb-4 mb-md-0">
            <img
              src={imageUrl}
              alt={`${productName} screenshot`}
              className="img-fluid rounded"
              style={{ width: "100%" }}
            />
          </div>

          <div className="col-2"></div>
          <div className="col-4">
            <h3 className=" mb-3">{productName}</h3>
            <p className="text-secondary fs-6 lh-lg mb-4">
              {productDescription}
            </p>

            <div className="mb-4 d-flex flex-column flex-sm-row gap-3">
              {onelink && (
                <a href={onelink} className="btn btn-outline-primary">
                  {onelink} <i className="fa-solid fa-arrow-right ms-1"></i>
                </a>
              )}
              {secondlink && (
                <a href={secondlink} className="btn btn-outline-secondary">
                  {secondlink} <i className="fa-solid fa-arrow-right ms-1"></i>
                </a>
              )}
            </div>

            <div className="d-flex flex-wrap gap-3">
              <a href={googlePlay}>
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="Download on Google Play"
                  style={{ height: "40px" }}
                />
              </a>
              <a href={appStore}>
                <img
                  src="media/images/appstoreBadge.svg"
                  alt="Download on App Store"
                  style={{ height: "40px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSection;
