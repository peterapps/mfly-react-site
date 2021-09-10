import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";

import "../css/Home.scss";
import logo from "../img/mfly_white.png";
import regular from "../img/regular2.jpg";
import advanced from "../img/advanced2.jpg";
import auton from "../img/auton2.jpg";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>M-Fly</title>
      </Helmet>
      <div className="Home">
        <div className="bgimg bgimg-all">
          <div className="caption">
            <img
              src={logo}
              alt="M-Fly"
              className="logo"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="2000"
            />
            <h1
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-anchor=".Home .logo"
              data-aos-duration="2000"
            >
              Welcome aboard.
            </h1>
          </div>
        </div>

        <div className="white-div">
          <h3 className="text-center">Who We Are</h3>
          <p>
            The M-Fly Student Design team is a multidisciplinary organization
            whose mission is to design, build, and fly aircraft. Our team
            consists of members from many different majors and backgrounds from
            the College of Engineering. As a team, our vision is to promote
            aircraft design and education, and we focus on helping our team
            members and students grow not only as engineers but also as
            citizens.
          </p>
          <p>
            Every year, we build two planes to compete in the Society of
            Automotive Engineers (SAE) Aero Design Competition. Our SAE planes
            focus on high-lift and payload delivery applications. These planes
            incorporate various materials and technologies, including composites
            and autonomous delivery gliders. We also build a third plane to
            compete in the Association for Unmanned Vehicle Systems
            International Student Unmanned Aerial Systems (AUVSI-SUAS)
            Competition, with a goal of building an unmanned aerial system that
            is capable of autonomous flight and navigation, remote sensing, and
            the execution of specific flight systems and computer vision tasks.
          </p>
        </div>

        <div className="bgimg bgimg-regular">
          <div className="caption">
            <span className="border" data-aos="fade-up">
              REGULAR CLASS
            </span>
          </div>
        </div>

        <div className="blue-div">
          <p className="clearfix">
            <img
              src={regular}
              alt="Regular Class"
              className="img float-right"
              data-aos="fade-left"
              data-aos-easing="ease"
            />
            The Regular Class program is the oldest program we have at M-Fly.
            For the past 13 years, the program has competed in the SAE Aero
            Design competition, where it specifically partakes in the high lift
            portion of the competition. The Regular Class planes are
            remote-controlled, manufactured from a restrictive pool of
            materials, and must simulate a bush plane. We are excited to compete
            with our M-13 design for this upcoming season.
          </p>
        </div>

        <div className="bgimg bgimg-advanced">
          <div className="caption">
            <span className="border" data-aos="fade-up">
              ADVANCED CLASS
            </span>
          </div>
        </div>

        <div className="white-div">
          <p className="clearfix">
            <img
              src={advanced}
              alt="Advanced Class"
              className="img float-left"
              data-aos="fade-right"
            />
            The Advanced Class program is currently in its 6th year, and it also
            partakes in the SAE Aero Design competition. The program
            participates in a systems-focused competition in which the aircraft
            is meant to mimic a humanitarian vehicle capable of completing a
            colonist supply mission. The Advanced Class aircraft is also
            expected to house small-scale deployable autonomous gliders which
            represent the delivery aircraft. We are looking forward to kicking
            the season off with our new MX-6 design.
          </p>
        </div>

        <div className="bgimg bgimg-autonomous">
          <div className="caption">
            <span className="border" data-aos="fade-up">
              AUTONOMOUS
            </span>
          </div>
        </div>

        <div className="blue-div">
          <p className="clearfix">
            <img
              src={auton}
              alt="Autonomous"
              className="img float-right"
              data-aos="fade-left"
            />
            The Autonomous program is currently in its 4th year and participates
            in the AUVSI-SUAS competition. This aircraft must autonomously
            complete a mission of flight systems and computer vision challenges,
            including navigation, obstacle avoidance, object detection and
            classification, and a payload drop. The Autonomous program is open
            to all undergraduate majors and features challenging electrical
            engineering and computer science problems.
          </p>
        </div>

        <div className="bgimg bgimg-all">
          <div className="caption">
            <span className="border">COOL!</span>
          </div>
        </div>
      </div>
    </>
  );
}
