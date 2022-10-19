import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/everythingRealEstate";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="data:image/png;base64,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"
              alt="logo"
            />
            <Typography>Everything RealEstate</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              By using this site you can sell/rent your properties for 
              free of cost and also you can buy properties. 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/everythingRealEstae"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/everythingRealEstate" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;