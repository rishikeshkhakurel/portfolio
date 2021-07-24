import styled from "styled-components";

const SideNavbarStyle = styled.div`
  background: var(--primary-bg);
  width: 20%;
  height: 100vh;
  position: fixed;

  #sidebar {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  #image {
    width: 50%;
    margin: 60px 0px;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }

  #nameintro {
    display: flex;
    align-items: center;
    flex-direction: column;

    #name {
      font-weight: 700;
      font-size: 30px;
    }

    #intro {
      font-size: 18px;
      margin-top: 10px;
      color: var(--primary-blue);
    }
  }

  #navbar {
    margin-top: 20px;
  }

  .navbar-icon {
    color: var(--primat-text-sec);
    padding: 20px 130px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    :hover {
      background: var(--primary-hover);
      color: var(--primary-blue);
    }
  }

  .a-tag {
    text-decoration: none;
    color: var(--primat-text-sec);
  }
`;

export default SideNavbarStyle;
