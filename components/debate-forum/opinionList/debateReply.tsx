import { BalanceDebateReplyDataState } from '@store/slices/balanceDebatePost/type'
import { ImgBox } from '@styles/commonStyle'
import React, { useState } from 'react'
import dayjs from 'dayjs'
import { 
  InteractButtonItem, OpinionInfo, OpinionInfoLine, PostContentLine,
  ReplyIcon, ReplyInteractButtonLine, ReplyWriteReplyBox } from './style'
import WriteReply from './writeReply'
import { UserTag } from './writeReply/style'
import { IssueDebateReplyDataState } from '@store/slices/issueDebatePost/type'
import { ProsConsDebateReplyDataState } from '@store/slices/prosConsDebatePost/type'

type WrapperProps = {
  reply: BalanceDebateReplyDataState | IssueDebateReplyDataState | ProsConsDebateReplyDataState
  mode: 'balance' | 'issue' | 'prosCons'
  WriterId: number
}

const DebateReply = ({reply, mode, WriterId}:WrapperProps) => {

  const idType:{ [index:string]: number } = {
    'balance' : (reply as BalanceDebateReplyDataState).BalanceOpinionId,
    'issue' : (reply as IssueDebateReplyDataState).IssueOpinionId,

  }
  const [isOnWriteReply, setIsOnWriteReply] = useState(false)

  return (
    <>
      <OpinionInfoLine>
        <OpinionInfo>
          <ImgBox width='24'><img src={reply.User.imgUrl ? reply.User.imgUrl : '/img/default_user.png'} alt="" /></ImgBox>
          <h3>{reply.User.nickname}</h3>
        </OpinionInfo>
        
        <span>{dayjs(reply.updatedAt).format("YY-MM-DD")}</span>
      
        <ReplyIcon></ReplyIcon>
      </OpinionInfoLine>

      <PostContentLine>
        { WriterId !== reply.Target.id ? <UserTag>@{reply.Target.nickname}</UserTag> : <></>}
        {reply.content}
      </PostContentLine>

      <ReplyInteractButtonLine>
        <InteractButtonItem>
          <ImgBox></ImgBox><span>추천</span>
        </InteractButtonItem>

        <InteractButtonItem onClick={() => setIsOnWriteReply(true)}>
          <ImgBox></ImgBox><span>답글</span>
        </InteractButtonItem>

        <InteractButtonItem>
          <ImgBox></ImgBox><span>신고</span>
        </InteractButtonItem>
      </ReplyInteractButtonLine>

      {/* 답글 작성 부분 */}
      {isOnWriteReply 
        ? <ReplyWriteReplyBox>
            <WriteReply 
              mode= {mode} 
              opinionId= {idType[mode]}
              targetUser= {reply.User}
              isNestedReply = {true}
              changeState={setIsOnWriteReply} />
          </ReplyWriteReplyBox>
        : <></>
      }
    </>
  )
}

export default DebateReply