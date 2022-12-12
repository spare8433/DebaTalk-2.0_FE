import useInput from '@hooks/useInput'
import { createBalanceReply, getBalanceDebatePost } from '@store/slices/balanceDebatePost'
import { createIssueReply, getIssueDebatePost } from '@store/slices/issueDebatePost'
import { useAppDispatch, useAppSelector } from '@store/store'
import { BasicButtonBox, MainButton, SubButton } from '@styles/commonStyle'
import { useRouter } from 'next/router'
import { CreateBalanceReplyParam } from 'params'
import { useCallback, useState } from 'react'
import { ReplyTextArea, IndexContainor, ReplyTextAreaBox, UserTag } from './style'

type WrapperProps = {
  mode:'balance' | 'issue' | 'prosCons',
  opinionId:number,
  targetUser: { id: number, nickname: string, imgUrl: string | null},
  isNestedReply?: boolean,
  changeState:React.Dispatch<React.SetStateAction<boolean>>,
}

const WriteReply = ({mode, opinionId, targetUser, isNestedReply, changeState}:WrapperProps):JSX.Element => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { pid } = router.query
  const user = useAppSelector(state=> state.user)

  const turnOff = () => changeState(false)

  const [content, setContent] = useState('')
  const onChangeContent = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
    if (e.target) {
      e.target!.style.height = 'auto'
      e.target!.style.height = e.target.scrollHeight + 'px'
    }
  }

  const submitReply = useCallback(async () => {
    if (!user.myData) return alert('로그인 이후 사용가능한 서비스입니다.')

    try {
      const data:CreateBalanceReplyParam = {
        content,
        opinionId,
        writerId: user.myData.id,
        targetId: targetUser.id,
      }
      switch (mode) {
        case 'balance':
          await dispatch(createBalanceReply(data)).unwrap()
          await dispatch(getBalanceDebatePost(pid as string)).unwrap()
          break;  
        case 'issue':
          await dispatch(createIssueReply(data)).unwrap()
          await dispatch(getIssueDebatePost(pid as string)).unwrap()
          break;    
        default:
          break;
      }
      turnOff()
      setContent('')
    } catch (error) {
      console.log(error);
    }
  },[content])

  return (
    <IndexContainor>
      <ReplyTextAreaBox>
        { isNestedReply ? <UserTag>@{targetUser.nickname}</UserTag> : <></>}
        <ReplyTextArea rows={1} onChange={onChangeContent} value={content} placeholder='답글을 입력하세요' />
      </ReplyTextAreaBox>
      
      <BasicButtonBox>
        <SubButton width='60' height='30' fontSize='14' onClick={() => turnOff()}>취소</SubButton>
        <MainButton width='60' height='30' fontSize='14' onClick={() => submitReply()}>작성</MainButton>
      </BasicButtonBox>    

    </IndexContainor>
  )
}

export default WriteReply