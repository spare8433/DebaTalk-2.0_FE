import React, { useState } from 'react'
import { BalanceDebateOpinonDataState } from '@store/slices/balanceDebatePost/type'
import dayjs from 'dayjs'
import { IssueDebateOpinionDataState } from '@store/slices/issueDebatePost/type'
import { ProsConsDebateOpinonDataState } from '@store/slices/prosConsDebatePost/type'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import FitNextImage from '@components/common/fitNextImage'
import { CssRem } from 'types/customCssType'
import getConfig from 'next/config'
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
    | BalanceDebateOpinonDataState
    | IssueDebateOpinionDataState
    | ProsConsDebateOpinonDataState
  mode: 'balance' | 'issue' | 'prosCons'
}

const Opinion = ({ opinion, mode }: Props) => {
  const [isOnWriteReply, setIsOnWriteReply] = useState(false)
  const [isShowReplyListBox, setIsShowReplyListBox] = useState(false)
  const { publicRuntimeConfig } = getConfig()
  const APISeverUrl = publicRuntimeConfig.API_SERVER_URL

  const isIssuePost = (_mode: string, target: unknown): target is IssueDebateOpinionDataState =>
    _mode === 'issue'

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
            <h3>{opinion.User.nickname}</h3>
            {isIssuePost(mode, opinion) ? (
              <UserOpinion>
                님의 <Score>{opinion.score}</Score> 점수 의견
              </UserOpinion>
            ) : (
              <UserOpinion>
                님의 <Selection selection={opinion.selection}>{opinion.selection}</Selection> 선택
                의견
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
                <NextImageBox styleOption={{ width: new CssRem(2.4), height: new CssRem(2.4) }}>
                  <FitNextImage
                    src={isShowReplyListBox ? '/img/slideUp_gray.png' : '/img/slideDown_gray.png'}
                    alt="slideDown"
                  />
                </NextImageBox>
              </>
            )}
          </ShowRepliesButton>
          <SubButtonLine>
            <InteractButtonItem>
              <span>추천</span>
            </InteractButtonItem>

            <InteractButtonItem>
              <span>신고</span>
            </InteractButtonItem>

            <InteractButtonItem onClick={() => setIsOnWriteReply(true)}>
              <span>답글</span>
            </InteractButtonItem>
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
              <DebateReply reply={reply} mode={mode} WriterId={opinion.User.id} />
            </ReplyItem>
          ))}
        </ReplyListBox>
      )}
    </IndexContainor>
  )
}

export default Opinion
