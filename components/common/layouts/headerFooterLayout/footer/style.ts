import styled from 'styled-components'

export const FooterLayout = styled.div`
  width: 100%;
  min-width: 1160px;
  background-color: #2b2b2b;
`

export const FooterContainor = styled.div`
  margin: 1.6rem 0;
  padding: 3.2rem 1.6rem 5rem;
  width: 1160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const FooterContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

export const ServiceLine = styled.div`
  margin-bottom: 3rem;

  a {
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0 1.6rem;
    border-left: solid 0.1rem ${({ theme }) => theme.colors.gray};
  }

  a:nth-child(1) {
    border-left: none;
    padding: 0;
    padding-right: 1.6rem;
  }

  a,
  a:hover,
  a:active {
    color: ${({ theme }) => theme.colors.gray};
  }
`

export const InformationLine = styled.div`
  font-size: 1.5rem;
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors.gray};
  a {
    color: ${({ theme }) => theme.colors.gray};
  }
  h5 {
    margin-top: 2rem;
    color: white;
    font-size: 1.8rem;
  }
`
