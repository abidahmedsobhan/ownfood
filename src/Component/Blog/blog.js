import React from "react";
import SimpleImage from "../../assets/img/simpleImage.jpg";
const Blog = () => {
  return (
    <section className="services py-4 bg-light">
      <div className="container">
        <div className="text-center my-4 ">
          <h1 className=" ">Blog</h1>
          <hr className="w-25 m-auto"></hr>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="card">
              <img src={SimpleImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="card">
              <img src={SimpleImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="card">
              <img src={SimpleImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row row-cols-4 justify-content-center gap-2">
          <div className="card">
            <img
              src="http://fitmeal.like-themes.com/wp-content/uploads/2018/02/blog_24-1150x720.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card">
            <img
              src="http://fitmeal.like-themes.com/wp-content/uploads/2018/02/blog_24-1150x720.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card">
            <img
              src="http://fitmeal.like-themes.com/wp-content/uploads/2018/02/blog_24-1150x720.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

      
        </div> */}
      </div>
    </section>
  );
};

export default Blog;
