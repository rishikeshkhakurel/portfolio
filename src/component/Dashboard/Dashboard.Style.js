import styled from "styled-components";

const DashboardStyle = styled.div`
  margin-left: 20% !important;

  #dashboard {
    padding: 40px;
    width: 90%;
  }

  #portfolio {
    p {
      font-size: 40px;
      color: var(--primary-text);
    }
  }

  .portfolio-list {
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    .port {
      img {
        width: 80%;
        object-fit: cover;
      }
      p {
        margin: 20px 0;
      }
    }
  }

  .title {
    font-size: 20px;
    font-weight: 550;
  }
  a {
    color: var(--primary-text);
  }

  @media screen and (max-width: 1100px) {
    margin-left: 0 !important;
    width: 100%;

    #dashboard {
      padding: 10px;
      width: 95%;
      margin-left: 35px;
    }

    .portfolio-list {
      display: flex;
      flex-direction: column;
      img {
        width: 100% !important;
      }
    }

    #hidden {
      display: none;
    }
  }

  @media screen and (max-width: 410px) {
    #dashboard {
      padding: 7px;
    }
  }
`;

export default DashboardStyle;
