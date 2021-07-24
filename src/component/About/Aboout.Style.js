import styled from "styled-components";

const AboutStyle = styled.div`
  margin-left: 20% !important;

  #about {
    padding: 40px;
    width: 90%;
  }
  #title {
    p {
      font-size: 40px;
      color: var(--primary-text);
    }
  }

  #content {
    display: flex;
    justify-content: space-between;
  }

  #image {
    width: 60%;
    img {
      height: 85vh;
    }
  }
  #name {
    font-weight: 700;
    font-size: 30px;
    margin-top: 40px;
  }

  #desc {
    margin: 20px 0;
  }

  #intro {
    letter-spacing: 1.1px;
    word-spacing: 1.1px;
    line-height: 1.5;
  }

  #body {
    width: 40%;
  }

  #btn {
    margin: 20px 0;
    button {
      padding: 8px 18px !important;
      background: var(--primary-blue);
      border: 0;
      color: white;
      font-weight: 550;
      :hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }

    #resume {
      margin-left: 20px;
      color: ;
      :hover {
        opacity: 0.8;
        cursor: pointer;
      }
    }
  }

  #name {
    width: 19ch;
    animation: typing 4s steps(19) infinite alternate,
      blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2em;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  #skill-list {
    margin-top: 40px;
  }

  #skill-name {
    font-size: 30px;
    color: var(--primary-text);
    font-weight: 550;
  }

  .skills {
    margin-top: 20px;
    display: flex;
  }
`;

export default AboutStyle;
