import styled from "styled-components";

const ContactStyled = styled.div`
  margin-left: 20% !important;

  #contact {
    padding: 40px;
    width: 90%;
  }

  #title {
    p {
      font-size: 40px;
      color: var(--primary-text);
    }
  }

  #contact_info {
    font-size: 22px;
    margin-top: 20px;
    a {
      display: flex;
      color: var(--primary-text);
      margin-top: 20px;
      p {
        margin-left: 15px;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    margin-left: 0 !important;
    width: 100%;

    #contact {
      padding: 10px;
      width: 95%;
      margin-left: 35px;
    }
  }

  @media screen and (max-width: 410px) {
    #contact {
      padding: 7px;
    }
  }
`;

export default ContactStyled;
