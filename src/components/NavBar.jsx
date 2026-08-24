import styled from 'styled-components';

const NavBar = () => {
  return (
    <Nav>
        <h1>Callum's Portfolio</h1>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #8b6f47;
  color: black;
`;

export default NavBar;