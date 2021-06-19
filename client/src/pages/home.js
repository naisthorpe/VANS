import React from "react";
import pic from "../img/pic.png";
import Categories from "../components/Categories";

// import Jumbotron from "../components/Jumbotron"

export default function home(props) {
  return (
    <div
      id="about-container"
      className="content-containers container text-center mt-5"
    >
      <h1 id="about">Video Audio Networking Service</h1>

      <div className="row" style={{ marginTop: 7 + "rem" }}>
        <div className="col-12 col-lg-6 hidden">
          <img
            className={"img-fluid "}
            src={pic}
            alt=""
            style={{
              height: 750 + "px",
              width: 750 + "px",
            }}
          />
        </div>
      </div>
      <Categories />
    </div>
  );
}
