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
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #4a3728;
  color: black;
`;

export default NavBar;