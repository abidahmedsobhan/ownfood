import React from "react";
import { Box, Typography, Grid, Paper, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Earn from "../../assets/img/earn.png";
import RoundPlate from "../../assets/img/plate_rounded.jpg";

// import "./earn_money.css";
const Earn_money = () => {
  return (
    <Box style={{ height: 500, backgroundColor: "#ffffff" }}>
      <section className="services py-5 bg-light">
        <div className="container ">
          <div className="text-center my-5 ">
            <h1 className=" ">Earn Money With Us </h1>
            <hr className="w-25 m-auto"></hr>
          </div>
          <h4></h4>
          <div className="row row-cols-5 justify-content-center g-3">
            <div className="col">
              <div className="card shadow border-0">
                <img
                  src={Earn}
                  style={{
                    height: 100,
                    width: 100,
                    padding: 10,
                  }}
                  className="d-block mx-auto"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            {/*  */}

            <div className="col">
              <div className="card shadow border-0">
                <img
                  src={Earn}
                  style={{
                    height: 100,
                    width: 100,
                    padding: 10,
                  }}
                  className="d-block mx-auto"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            {/*  */}

            <div className="col">
              <div className="card shadow border-0">
                <img
                  src={Earn}
                  style={{
                    height: 100,
                    width: 100,
                    padding: 10,
                  }}
                  className="d-block mx-auto"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col">
              <div className="card shadow border-0">
                <img
                  src={Earn}
                  style={{
                    height: 100,
                    width: 100,
                    padding: 10,
                  }}
                  className="d-block mx-auto"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col">
              <div className="card shadow border-0">
                <img
                  src={Earn}
                  style={{
                    height: 100,
                    width: 100,
                    padding: 10,
                  }}
                  className="d-block mx-auto"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default Earn_money;
