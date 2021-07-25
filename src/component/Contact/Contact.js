import React from "react";
import ContactStyled from "./Contact.Style";
import { GiMailbox } from "react-icons/gi";
import { AiFillGithub } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { RiFacebookCircleFill } from "react-icons/ri";

function Contact() {
  return (
    <ContactStyled>
      <div id="contact">
        <div id="title">
          <p>Contact</p>
        </div>
        <div id="contact_info">
          <div id="mail">
            <a href="mailto:khakurel.rishikesh1@gmail.com">
              <GiMailbox />
              <p>khakurel.rishikesh1@gmail.com</p>
            </a>
          </div>
          <div id="github">
            <a href="https://github.com/rishikeshkhakurel">
              <AiFillGithub />
              <p>Rishikesh Khakurel</p>
            </a>
          </div>
          <div id="contact-num">
            <a href="/">
              <FiPhoneCall />
              <p>9862713336</p>
            </a>
          </div>
          <div id="facebook">
            <a href="https://www.facebook.com/rishikesh.khakurel/">
              <RiFacebookCircleFill />
              <p>Rishikesh Khakurel</p>
            </a>
          </div>
        </div>
      </div>
    </ContactStyled>
  );
}

export default Contact;
