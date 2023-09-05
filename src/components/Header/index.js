import './style.css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function Header () {
    return <Container>Hello</Container>;
}

export default Header;