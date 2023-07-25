import React from 'react'
import { useAppSelector } from '@store/store'
import {
  EntireRankBoard,
  RankContentsContainor,
  TopContentBox,
  UserListBox,
  UserTable,
  WeekRankBoard,
} from './style'

const RankContents = () => {
  const users = useAppSelector((state) => state.users)
  return (
    <RankContentsContainor>
      <TopContentBox>
        <h4>전체회원</h4>
        <h4>랭킹 1등</h4>
        <h4>주간 활동 회원</h4>
        <h2>{users.usersData?.length}</h2>
        <h2>{users.usersData && users.usersData[0].nickname}</h2>
        <h2>{users.usersData?.length}</h2>
      </TopContentBox>

      <UserListBox>
        <EntireRankBoard>
          <h4>전체랭킹</h4>
          <UserTable>
            <thead>
              <tr>
                <th>순위</th>
                <th>닉네임</th>
                <th>레벨</th>
                <th>포인트</th>
              </tr>
            </thead>
            <tbody>
              {users.usersData?.map((user, index) => (
                <tr key={`EntireRankBoardTableRow_${user.id}`}>
                  <td>{index + 1}</td>
                  <td>{user.nickname}</td>
                  <td>{user.level}</td>
                  <td>{user.point}</td>
                </tr>
              ))}
            </tbody>
          </UserTable>
        </EntireRankBoard>

        <WeekRankBoard>
          <h4>주간랭킹</h4>
          <UserTable>
            <thead>
              <tr>
                <th>순위</th>
                <th>닉네임</th>
                <th>레벨</th>
                <th>포인트</th>
              </tr>
            </thead>
            <tbody>
              {users.usersData?.map((user, index) => (
                <tr key={`WeekRankBoardTableRow_${user.id}`}>
                  <td>{index + 1}</td>
                  <td>{user.nickname}</td>
                  <td>{user.level}</td>
                  <td>{user.point}</td>
                </tr>
              ))}
            </tbody>
          </UserTable>
        </WeekRankBoard>
      </UserListBox>
    </RankContentsContainor>
  )
}

export default RankContents
