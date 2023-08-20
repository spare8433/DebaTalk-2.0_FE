import { BalanceDebateReplyDataState } from '@store/slices/balanceDebatePost/type'
import React, { useState } from 'react'
import dayjs from 'dayjs'
import { IssueDebateReplyDataState } from '@store/slices/issueDebatePost/type'
import { ProsConsDebateReplyDataState } from '@store/slices/prosConsDebatePost/type'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import FitNextImage from '@components/common/fitNextImage'
import { CssRem } from 'types/customCssType'
import { DebateTopicReplyDataState } from '@store/slices/debateTopicPost/type'
import { useAppSelector } from '@store/store'
import { UserTag } from './writeReply/style'
import WriteReply from './writeReply'
import {
  InteractButtonItem,
  OpinionInfo,
  OpinionInfoLine,
  PostContentLine,
  ReplyIcon,
  ReplyInteractButtonLine,
  ReplyWriteReplyBox,
} from './style'

type WrapperProps = {
  reply:
    | BalanceDebateReplyDataState
    | IssueDebateReplyDataState
    | ProsConsDebateReplyDataState
    | DebateTopicReplyDataState
  mode: 'balance' | 'issue' | 'prosCons' | 'debate-topic'
}

const DebateReply = ({ reply, mode }: WrapperProps) => {
  const idType: { [index: string]: number } = {
    balance: (reply as BalanceDebateReplyDataState).BalanceOpinionId,
    issue: (reply as IssueDebateReplyDataState).IssueOpinionId,
  }
  const [isOnWriteReply, setIsOnWriteReply] = useState(false)
  const user = useAppSelector((state) => state.user.myData)

  return (
    <>
      <OpinionInfoLine>
        <OpinionInfo>
          <NextImageBox styleOption={{ width: new CssRem(2.4), height: new CssRem(2.4) }}>
            <FitNextImage src={reply.User.imgUrl ?? '/img/default_user.png'} alt="" />
          </NextImageBox>
          <h4>{reply.User.nickname}</h4>
        </OpinionInfo>

        <span>{dayjs(reply.updatedAt).format('YYYY-MM-DD')}</span>

        <ReplyIcon />
      </OpinionInfoLine>

      <PostContentLine>
        <UserTag>@{reply.Target.nickname}</UserTag>
        {reply.content}
      </PostContentLine>

      <ReplyInteractButtonLine>
        {/* <InteractButtonItem>신고</InteractButtonItem> */}

        {(!user || user.userId !== reply.User.userId) && (
          <>
            {/* <InteractButtonItem>추천</InteractButtonItem> */}
            <InteractButtonItem onClick={() => setIsOnWriteReply(true)}>답글</InteractButtonItem>
          </>
        )}
      </ReplyInteractButtonLine>

      {/* 답글 작성 부분 */}
      {isOnWriteReply && (
        <ReplyWriteReplyBox>
          <WriteReply
            mode={mode}
            opinionId={idType[mode]}
            targetUser={reply.User}
            isNestedReply
            changeState={setIsOnWriteReply}
          />
        </ReplyWriteReplyBox>
      )}
    </>
  )
}

export default DebateReply
