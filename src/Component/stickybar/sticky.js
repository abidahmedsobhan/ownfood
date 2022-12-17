import React from "react";

const Sticky = () => {
  return (
    <section>
      <div className="container text-center ">
        <div className="  row my-auto ">
          <div className="col-6 d-flex justify-content-between mt-2">
            <p className="ms-2">
              <i className="fas fa-home  text-secondary"></i> New York, NY
              10012, US
            </p>

            <p>
              <i className="fas fa-envelope  text-secondary"></i>
              info@example.com
            </p>
            <p>
              <i className="fas fa-phone  text-secondary"></i> + 01 234 567 88
            </p>
          </div>

          <div className="col-2  ms-auto d-flex justify-content-end mt-2">
            <p className="me-2">
              <i className="fas fa-home  text-secondary"></i>
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
    </section>
  );
};

export default Sticky;
