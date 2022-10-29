import styled from 'styled-components';

export default styled.footer`
  background: ${({ theme }) => theme.style.footerBackgroundColor};
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 10px;
  justify-content: space-between;
  margin-top: 24px;
  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
