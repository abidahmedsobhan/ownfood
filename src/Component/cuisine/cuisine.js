import React from "react";
import "./cuisine.css";
import SimpleImage from "../../assets/img/simpleImage.jpg";

const Cuisine = () => {
  let items = document.querySelectorAll(".carousel .carousel-item");

  items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = items[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });

  return (
    <section className="py-4 my-5">
      <div className="container text-center my-3">
        {/* <h2 className="font-weight-light Title">Cuisine</h2> */}
        <div class="section-title">
          <h3>Cuisine</h3>
        </div>
        <div className="row mx-auto my-auto justify-content-center">
          <div
            id="recipeCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner inner" role="listbox">
              <div className="carousel-item item active">
                <div className="col-md-3">
                  <div className="card">
                    <div className="card-img">
                      <img src={SimpleImage} className="img-fluid" />
                    </div>
                    <div className="card-img-overlay"></div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-md-3">
                  <div className="card">
                    <div className="card-img">
                      <img src={SimpleImage} className="img-fluid" />
                    </div>
                    <div className="card-img-overlay"></div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-md-3">
                  <div className="card">
                    <div className="card-img">
                      <img src={SimpleImage} className="img-fluid" />
                    </div>
                    <div className="card-img-overlay"></div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-md-3">
                  <div className="card">
                    <div className="card-img">
                      <img src={SimpleImage} className="img-fluid" />
                    </div>
                    <div className="card-img-overlay"></div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-md-3">
                  <div className="card">
                    <div className="card-img">
                      <img src={SimpleImage} className="img-fluid" />
                    </div>
                    <div className="card-img-overlay"></div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col-md-3">
                  <div className="card">
                    <div className="card-img">
                      <img src={SimpleImage} className="img-fluid" />
                    </div>
                    <div className="card-img-overlay"></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className=" ms-auto  carousel-control-prev bg-transparent  "
              href="#recipeCarousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className=" ms-auto carousel-control-prev-icon "
                // aria-hidden="true"
              ></span>
            </div>

            <a
              className=" carousel-control-next bg-transparent w-aut"
              href="#recipeCarousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="  carousel-control-next-icon"
                // aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cuisine;
