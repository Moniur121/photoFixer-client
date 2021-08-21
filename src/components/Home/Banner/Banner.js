import React from "react";
import "./Banner.css";
import bannerImgOne from "../../images/BannerImg-1.jpg";
import bannerImgTwo from "../../images/BannerImg-2.jpg";
import bannerImgThree from "../../images/BannerImg-3.jpg";
function Banner() {
  return (
    <section className="banner-area">
      <div className="">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div className="carousel-item active">
              <img
                src={bannerImgOne}
                className="d-block w-100 "
                alt="..."
                style={{ height: "500px" }}
              />
              <div class="carousel-caption d-block d-md-block">
                <h5>
                  <span className="fs-2" style={{ fontWeight: "bold" }}>
                    <span className=" fs-1 text-light">Weeding Moment</span>
                     
                  </span>
                </h5>
                <p className="text-light">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempora, reiciendis.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={bannerImgTwo}
                className="d-block w-100 bannerImage"
                alt="..."
                style={{ height: "500px" }}
              />
              <div class="carousel-caption d-block d-md-block">
              <h5>
                  <span className="fs-1" style={{ fontWeight: "bold" }}>
                    <span className="text-light">Weeding Celebration</span>
                  </span>
                </h5>
                <p className="text-light">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempora, reiciendis.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={bannerImgThree}
                className="d-block w-100 bannerImage"
                alt="..."
                style={{ height: "500px" }}
              />
              <div class="carousel-caption d-block d-md-block">
              <h5>
                  <span className="fs-1" style={{ fontWeight: "bold" }}>
                    <span className="text-light">Weeding Party Sea Beach</span>
                  </span>
                </h5>
                <p className="text-light">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Tempora, reiciendis.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
