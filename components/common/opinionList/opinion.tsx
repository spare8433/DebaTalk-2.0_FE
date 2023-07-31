import React, { useCallback, useState } from 'react'
import { BalanceDebateOpinionDataState } from '@store/slices/balanceDebatePost/type'
import dayjs from 'dayjs'
import { IssueDebateOpinionDataState } from '@store/slices/issueDebatePost/type'
import { ProsConsDebateOpinionDataState } from '@store/slices/prosConsDebatePost/type'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import FitNextImage from '@components/common/fitNextImage'
import { CssRem } from 'types/customCssType'
import getConfig from 'next/config'
import { useAppSelector } from '@store/store'
import { DebateTopicOpinionDataState } from '@store/slices/debateTopicPost/type'
import DebateReply from './debateReply'
import WriteReply from './writeReply'
import {
  IndexContainor,
  InteractButtonItem,
  InteractButtonLine,
  OpinionBox,
  OpinionInfo,
  OpinionInfoLine,
  OpinionWriteReplyBox,
  PostContentLine,
  ReplyItem,
  ReplyListBox,
  Score,
  Selection,
  ShowRepliesButton,
  SubButtonLine,
  UserOpinion,
} from './style'

interface Props {
  opinion:
    | BalanceDebateOpinionDataState
    | IssueDebateOpinionDataState
    | ProsConsDebateOpinionDataState
    | DebateTopicOpinionDataState
  mode: 'balance' | 'issue' | 'prosCons' | 'debate-topic'
}

const Opinion = ({ opinion, mode }: Props) => {
  const [isOnWriteReply, setIsOnWriteReply] = useState(false)
  const [isShowReplyListBox, setIsShowReplyListBox] = useState(false)
  const { publicRuntimeConfig } = getConfig()
  const APISeverUrl = publicRuntimeConfig.API_SERVER_URL
  const user = useAppSelector((state) => state.user.myData)

  const checkIsLogin = useCallback(() => {
    if (user) return setIsOnWriteReply(true)
    return alert('로그인 이후 이용 가능하십니다.')
  }, [user])

  return (
    <IndexContainor>
      <OpinionBox>
        <OpinionInfoLine>
          <OpinionInfo>
            <NextImageBox styleOption={{ width: new CssRem(2.4), height: new CssRem(2.4) }}>
              <FitNextImage
                src={
                  opinion.User.imgUrl
                    ? `${APISeverUrl}${opinion.User.imgUrl}`
                    : '/img/default_user.png'
                }
                alt=""
              />
            </NextImageBox>
            <h4>{opinion.User.nickname}</h4>
            {mode === 'issue' && (
              <UserOpinion>
                님의 점수: <Score>{(opinion as IssueDebateOpinionDataState).score}</Score>
              </UserOpinion>
            )}
            {(mode === 'balance' || mode === 'prosCons') && (
              <UserOpinion>
                님의
                <Selection
                  selection={
                    (opinion as ProsConsDebateOpinionDataState | BalanceDebateOpinionDataState)
                      .selection
                  }
                >
                  {
                    (opinion as ProsConsDebateOpinionDataState | BalanceDebateOpinionDataState)
                      .selection
                  }
                </Selection>
                선택
              </UserOpinion>
            )}
          </OpinionInfo>

          <span>{dayjs(opinion.updatedAt).format('YYYY-MM-DD')}</span>
        </OpinionInfoLine>

        <PostContentLine>{opinion.content}</PostContentLine>

        <InteractButtonLine>
          <ShowRepliesButton onClick={() => setIsShowReplyListBox(!isShowReplyListBox)}>
            {opinion.Replys.length > 0 && (
              <>
                <span>답글 {opinion.Replys.length} 개</span>
                <NextImageBox styleOption={{ width: new CssRem(1.8), height: new CssRem(1.8) }}>
                  <FitNextImage
                    src={isShowReplyListBox ? '/img/slideUp_gray.png' : '/img/slideDown_gray.png'}
                    alt="slideDown"
                  />
                </NextImageBox>
              </>
            )}
          </ShowRepliesButton>
          <SubButtonLine>
            {/* <InteractButtonItem>신고</InteractButtonItem> */}

            {(!user || user.userId !== opinion.User.userId) && (
              <>
                <InteractButtonItem>추천</InteractButtonItem>
                <InteractButtonItem onClick={checkIsLogin}>답글</InteractButtonItem>
              </>
            )}
          </SubButtonLine>
        </InteractButtonLine>
      </OpinionBox>

      {/* 답글 작성 부분 */}
      {isOnWriteReply && (
        <OpinionWriteReplyBox>
          <WriteReply
            mode={mode}
            opinionId={opinion.id}
            targetUser={opinion.User}
            changeState={setIsOnWriteReply}
          />
        </OpinionWriteReplyBox>
      )}

      {/* 답글 리스트 부분 */}
      {isShowReplyListBox && (
        <ReplyListBox>
          {opinion.Replys.map((reply, index) => (
            <ReplyItem key={`replyItem_${index}`}>
              <DebateReply reply={reply} mode={mode} WriterId={opinion.User.userId} />
            </ReplyItem>
          ))}
        </ReplyListBox>
      )}
    </IndexContainor>
  )
}

export default Opinion
