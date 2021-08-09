import styled from 'styled-components';

const Head = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: larger;
`;
const Header = () => {
  return (
    <Head>
      <h1>Welcome to TODO list</h1>
    </Head>
  );
};

export default Header;
