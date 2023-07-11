import { BalanceDebateReplyDataState } from '@store/slices/balanceDebatePost/type'
import React, { useState } from 'react'
import dayjs from 'dayjs'
import { IssueDebateReplyDataState } from '@store/slices/issueDebatePost/type'
import { ProsConsDebateReplyDataState } from '@store/slices/prosConsDebatePost/type'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import FitNextImage from '@components/common/fitNextImage'
import { CssRem } from 'types/customCssType'
import getConfig from 'next/config'
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
  reply: BalanceDebateReplyDataState | IssueDebateReplyDataState | ProsConsDebateReplyDataState
  mode: 'balance' | 'issue' | 'prosCons'
  WriterId: number
}

const DebateReply = ({ reply, mode, WriterId }: WrapperProps) => {
  const idType: { [index: string]: number } = {
    balance: (reply as BalanceDebateReplyDataState).BalanceOpinionId,
    issue: (reply as IssueDebateReplyDataState).IssueOpinionId,
  }
  const [isOnWriteReply, setIsOnWriteReply] = useState(false)
  const { publicRuntimeConfig } = getConfig()
  const APISeverUrl = publicRuntimeConfig.API_SERVER_URL

  return (
    <>
      <OpinionInfoLine>
        <OpinionInfo>
          <NextImageBox styleOption={{ width: new CssRem(2.4), height: new CssRem(2.4) }}>
            <FitNextImage
              src={
                reply.User.imgUrl ? `${APISeverUrl}${reply.User.imgUrl}` : '/img/default_user.png'
              }
              alt=""
            />
          </NextImageBox>
          <h3>{reply.User.nickname}</h3>
        </OpinionInfo>

        <span>{dayjs(reply.updatedAt).format('YY-MM-DD')}</span>

        <ReplyIcon />
      </OpinionInfoLine>

      <PostContentLine>
        {WriterId !== reply.Target.id && <UserTag>@{reply.Target.nickname}</UserTag>}
        {reply.content}
      </PostContentLine>

      <ReplyInteractButtonLine>
        <InteractButtonItem>
          <span>추천</span>
        </InteractButtonItem>

        <InteractButtonItem onClick={() => setIsOnWriteReply(true)}>
          <span>답글</span>
        </InteractButtonItem>

        <InteractButtonItem>
          <span>신고</span>
        </InteractButtonItem>
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
