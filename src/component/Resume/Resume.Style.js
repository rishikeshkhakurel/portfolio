import styled from "styled-components";

const ResumeStyle = styled.div`
  height: 100vh;
  margin-left: 20% !important;

  #resume {
    padding: 40px;
    width: 90%;
    height: 84vh;
    margin-left: 35px;
  }

  #title {
    p {
      font-size: 40px;
      color: var(--primary-text);
      margin-bottom: 10px;
    }
  }

  #pdf {
    width: 90%;
    height: 100%;
  }

  @media screen and (max-width: 1100px) {
    margin-left: 0 !important;
    width: 100%;

    #resume {
      padding: 10px;
      width: 95%;
    }

    #pdf {
      width: 98%;
      height: 100%;
    }
  }

  @media screen and (max-width: 410px) {
    #resume {
      padding: 7px;
    }
  }
`;

export default ResumeStyle;
