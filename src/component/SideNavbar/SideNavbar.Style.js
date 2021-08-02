import styled from "styled-components";

const SideNavbarStyle = styled.div`
  width: 20%;
  position: fixed;

  #sidebar {
    background: var(--primary-bg);
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  #image {
    width: 100%;
    margin: 60px 0px;
    display: flex;
    justify-content: center;
    img {
      width: 50%;
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
      text-align: center;
    }

    #intro {
      font-size: 18px;
      margin-top: 10px;
      text-align: center;
      color: var(--primary-blue);
    }
  }

  #navbar {
    margin-top: 20px;
    width: 100%;
  }

  .icon {
    cursor: pointer;
  }

  .navbar-icon {
    color: var(--primat-text-sec);
    width: 90%;
    margin: auto;
    padding: 20px 0;
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

  #close-icon,
  #open-icon {
    display: none;
  }

  @media screen and (max-width: 1100px) {
    position: absolute;
    min-width: 300px;

    #sidebar-display {
      display: none;
      width: 100%;
    }
    #sidebar {
      display: block;
      width: 100%;
    }

    #close-icon {
      display: flex;
      width: 100%;
      padding-right: 20px;
      padding-top: 20px;
      display: flex;
      justify-content: flex-end;
      font-size: 25px;
    }

    #open-icon {
      display: block;
      padding-left: 20px;
      padding-top: 20px;
    }

    #open-icon-none {
      display: none;
    }
  }
`;

export default SideNavbarStyle;
