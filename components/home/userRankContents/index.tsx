import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import { useAppSelector } from '@store/store'
import { LessStyleBtn } from '@styles/commonStyle/buttons'
import { BoradTitle, DebateTopicBox, UserTable } from './style'

const UserRankContents = () => {
  const router = useRouter()
  const users = useAppSelector((state) => state.users)

  const handleMoveDebateTopicBoard = useCallback(() => {
    router.push('/rank')
  }, [router])

  return (
    <DebateTopicBox>
      <BoradTitle>
        <h3>주제 추천 게시판</h3>
        <LessStyleBtn onClick={handleMoveDebateTopicBoard}>더보기 {'>'}</LessStyleBtn>
      </BoradTitle>

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
            <tr key={`tableRow_${user.id}`}>
              <td>{index + 1}</td>
              <td>{user.nickname}</td>
              <td>{user.level}</td>
              <td>{user.point}</td>
            </tr>
          ))}
        </tbody>
      </UserTable>
    </DebateTopicBox>
  )
}

export default UserRankContents
