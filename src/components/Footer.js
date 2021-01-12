import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer__Img">
        <img
          src="https://th.bing.com/th/id/OIP.ZCSIDgQxcvkFYe3TlB6WxwHaEK?w=301&h=180&c=7&o=5&pid=1.7"
          alt=""
        />
      </div>
      <div className="Social__Links">
        <br></br>
        <FacebookIcon fontSize="Large"></FacebookIcon>
        <b>Johnnie_foundations@facebook.com</b>
        <br></br>

        <TwitterIcon fontSize="Large"></TwitterIcon>
        <b>#Johnnie_foundation</b>
        <br></br>

        <InstagramIcon fontSize="Large"></InstagramIcon>
        <b>The_johnny_foundation</b>
        <br></br>
      </div>

      <div className="Social__Links">
        <br></br>
        <EmailIcon fontSize="Large"></EmailIcon>
        <b>Johnnie_foundation@gmail.com</b>
        <br></br>

        <PhoneIcon fontSize="Large"></PhoneIcon>
        <b>xxx-xxxx-xxxx</b>
        <br></br>

        <HomeIcon fontSize="Large"></HomeIcon>
        <b>xxx-xxxx-xxxx xxx-xxxx-xxxx xxx-xxxx-xxxx</b>
        <br></br>
      </div>
    </div>
  );
}

export default Footer;
