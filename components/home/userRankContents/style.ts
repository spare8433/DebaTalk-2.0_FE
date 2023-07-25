import { LessStyleBtn } from '@styles/commonStyle/buttons'
import styled from 'styled-components'

export const DebateTopicBox = styled.div`
  width: 100%;
`

export const BoradTitle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 0.3rem ${({ theme }) => theme.colors.main};
  align-items: end;
  padding: 1rem 0.8rem;
  margin-bottom: 0.6rem;

  h3 {
    font-weight: 600;
  }

  ${LessStyleBtn} {
    width: auto;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray};
  }
`

export const UserTable = styled.table`
  width: 100%;
  border-bottom: solid 0.1rem ${({ theme }) => theme.colors.whiteGray};
  border-collapse: collapse;
  th,
  td {
    /* padding: 0.5rem 0; */
    height: 3.2rem;
  }
  th {
    font-size: 1.6rem;
    font-weight: 500;
    border-bottom: solid 0.2rem ${({ theme }) => theme.colors.gray};
  }
  thead {
  }
  td {
    font-size: 1.4rem;
    text-align: center;
  }
  th:nth-child(1) {
    width: 10%;
  }
  th:nth-child(2) {
    width: 40%;
  }
  th:nth-child(3) {
    width: 20%;
  }
  th:nth-child(4) {
    width: 30%;
  }
`
