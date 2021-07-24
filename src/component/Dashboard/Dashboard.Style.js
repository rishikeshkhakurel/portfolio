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
`;

export default DashboardStyle;
