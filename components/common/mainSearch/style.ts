import styled from 'styled-components'

export const MainSearchBox = styled.div`
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  border: ${({ theme }) => theme.colors.main} 0.4rem solid;
  border-radius: 2.5rem;
  display: flex;
  align-items: center;
  height: 4.5rem;
  padding: 0 1.2rem;

  form {
    width: 100%;
  }
  input {
    width: 100%;
    border: 0;
    padding: 0;
    margin: 0 1.2rem;
    outline: none;
    height: 100%;
    background: none;
    font-size: 1.6rem;
    font-weight: 400;
  }
`
