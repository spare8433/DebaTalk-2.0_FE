import { BalanceDebateOpinonDataState } from '@store/slices/balanceDebatePost/type'
import { ImgBox } from '@styles/commonStyle'
import { useState } from 'react'
import dayjs from 'dayjs'
import { 
  IndexContainor, InteractButtonItem, InteractButtonLine, OpinionBox, OpinionInfo, OpinionInfoLine,
  OpinionWriteReplyBox, PostContentLine, ReplyItem, ReplyListBox, Selection, ShowRepliesButton, 
  SubButtonLine, UserOpinion 
} from './style'
import WriteReply from './writeReply'
import DebateReply from './debateReply'
import { IssueDebateOpinionDataState } from '@store/slices/issueDebatePost/type'
import { ProsConsDebateOpinonDataState } from '@store/slices/prosConsDebatePost/type'


type WrapperProps = {
  opinion: BalanceDebateOpinonDataState | IssueDebateOpinionDataState | ProsConsDebateOpinonDataState,
  mode: 'balance' | 'issue' | 'prosCons'
}

const Opinion = ({opinion, mode}:WrapperProps) => {
  const [isOnWriteReply, setIsOnWriteReply] = useState(false)
  const [isShowReplyListBox, setIsShowReplyListBox] = useState(false)
  const isBalancePost = (mode: string, target: any): target is BalanceDebateOpinonDataState => mode === 'balance';

  const opinionType:{ [index:string]: 'BalanceReplys' | 'IssueReplys' |  'ProsConsReplys' } = {
    'balance' : 'BalanceReplys',
    'issue' : 'IssueReplys',
    'prosCons' : 'ProsConsReplys',
  }

  return (
    <IndexContainor>
      <OpinionBox>
        <OpinionInfoLine>
          <OpinionInfo>
            <ImgBox width='24'><img src={opinion.User.imgUrl ? opinion.User.imgUrl : '/img/default_user.png'} alt="" /></ImgBox>
            <h3>{opinion.User.nickname}</h3>
            { isBalancePost(mode, opinion) 
              ? <UserOpinion>님의 <Selection selection={opinion.selection}>{opinion.selection}</Selection> 선택 의견</UserOpinion> 
              : '' }
          </OpinionInfo> 

          <span>{dayjs(opinion.updatedAt).format("YYYY-MM-DD")}</span>
        </OpinionInfoLine>

        <PostContentLine>{opinion.content}</PostContentLine>

        <InteractButtonLine>
          <ShowRepliesButton onClick={() => setIsShowReplyListBox(!isShowReplyListBox)}> 
            {opinion.Replys.length > 0
              ? <>
                  <span>답글 {opinion.Replys.length} 개</span>
                  <ImgBox width='20'>
                    <img src={isShowReplyListBox ? "/img/slideUp_gray.png" : "/img/slideDown_gray.png"} alt="slideDown" />
                  </ImgBox>  
                </>
              : <></>
            }
          </ShowRepliesButton>
          <SubButtonLine>
            <InteractButtonItem>
              <ImgBox></ImgBox><span>추천</span>
            </InteractButtonItem>

            <InteractButtonItem>
              <ImgBox></ImgBox><span>신고</span>
            </InteractButtonItem>

            <InteractButtonItem onClick={() => setIsOnWriteReply(true)}>
              <ImgBox></ImgBox><span>답글</span>
            </InteractButtonItem>
          </SubButtonLine>     

        </InteractButtonLine>
      </OpinionBox>

      {/* 답글 작성 부분 */}
      {isOnWriteReply 
        ? <OpinionWriteReplyBox>
            <WriteReply 
              mode= {mode} 
              opinionId= {opinion.id}
              targetUser= {opinion.User}
              changeState={setIsOnWriteReply} />
          </OpinionWriteReplyBox>
        : <></>
      }

      {/* 답글 리스트 부분 */}
      { isShowReplyListBox
        ? <ReplyListBox>
          {opinion.Replys.map((reply,index) => {
            return(
              <ReplyItem key={'replyItem_' + index}>
                <DebateReply reply={reply} mode={mode} WriterId={opinion.User.id}></DebateReply>
              </ReplyItem>
            )
          })}
        </ReplyListBox>
        : <></>
      }

    </IndexContainor>

  )
}

export default Opinion