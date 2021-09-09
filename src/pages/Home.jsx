import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";

import "../css/Home.scss";
import logo from "../img/mfly_white.png";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>M-Fly</title>
      </Helmet>
      <div className="Home">
        <div className="bgimg bgimg-1">
          <div className="caption">
            <img
              src={logo}
              alt="M-Fly"
              className="logo"
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-delay="400"
            />
            <h1
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-delay="800"
              data-aos-anchor=".Home .logo"
            >
              Welcome aboard.
            </h1>
          </div>
        </div>

        <div className="div1">
          <h3 style={{ textAlign: "center" }}>Parallax Demo</h3>
          <p>
            Parallax scrolling is a web site trend where the background content
            is moved at a different speed than the foreground content while
            scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis
            nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit
            pellentesque a, magna turpis est sapien duis blandit dignissim.
            Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum
            consequat morbi, curabitur aliquam pede, nullam vitae eu placerat
            eget et vehicula. Varius quisque non molestie dolor, nunc nisl
            dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus
            pulvinar, in in neque risus odio. Accumsan fringilla vulputate at
            quibusdam sociis eleifend, aenean maecenas vulputate, non id
            vehicula lorem mattis, ratione interdum sociis ornare. Suscipit
            proin magna cras vel, non sit platea sit, maecenas ante augue etiam
            maecenas, porta porttitor placerat leo.
          </p>
        </div>

        <div className="bgimg bgimg-2">
          <div className="caption">
            <span className="border span1">LESS HEIGHT</span>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div className="div2">
            <p>
              Scroll up and down to really get the feeling of how Parallax
              Scrolling works.
            </p>
          </div>
        </div>

        <div className="bgimg bgimg-3">
          <div className="caption">
            <span className="border span2">SCROLL UP</span>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div className="div3">
            <p>
              Scroll up and down to really get the feeling of how Parallax
              Scrolling works.
            </p>
          </div>
        </div>

        <div className="bgimg bgimg-1">
          <div className="caption">
            <span className="border">COOL!</span>
          </div>
        </div>
      </div>
    </>
  );
}
