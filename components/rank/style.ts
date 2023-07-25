import styled from 'styled-components'

export const RankContentsContainor = styled.div`
  width: 1160px;
  margin: 5rem auto;
`
export const TopContentBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  text-align: center;
  padding: 1rem 2rem;
  border: solid 0.2rem ${({ theme }) => theme.colors.gray};
  align-content: center;
  h2,
  h4 {
    padding: 1rem 0 1.4rem;
    align-self: center;
  }
  h4 {
    border-bottom: solid 0.2rem ${({ theme }) => theme.colors.gray};
  }
`
export const UserListBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 1rem));
  column-gap: 2rem;
  margin: 5rem 0;
`

const RankBorad = styled.div`
  width: 100%;
  h4 {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.main};
    padding: 0.5rem 0.8rem;
    border-bottom: solid 0.3rem ${({ theme }) => theme.colors.main};
    margin-bottom: 1rem;
  }
`

export const EntireRankBoard = styled(RankBorad)``

export const WeekRankBoard = styled(RankBorad)``

export const UserTable = styled.table`
  width: 100%;
  border-bottom: solid 0.1rem ${({ theme }) => theme.colors.whiteGray};
  border-collapse: collapse;
  th,
  td {
    padding: 0.5rem 0;
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
