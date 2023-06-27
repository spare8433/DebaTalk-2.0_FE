import React, { useCallback, useState } from 'react'
import { createBalanceReply, getBalanceDebatePost } from '@store/slices/balanceDebatePost'
import { createIssueReply, getIssueDebatePost } from '@store/slices/issueDebatePost'
import { useAppDispatch, useAppSelector } from '@store/store'
import { useRouter } from 'next/router'
import { CreateBalanceReplyParam } from 'types/params'
import { PrimaryButton, SubButton } from '@styles/commonStyle/buttons'
import { CssRem } from 'types/customCssType'
import { createProsConsReply, getProsConsDebatePost } from '@store/slices/prosConsDebatePost'
import { ReplyTextArea, IndexContainor, ReplyTextAreaBox, UserTag, ButtonLine } from './style'

type WrapperProps = {
  mode: 'balance' | 'issue' | 'prosCons'
  opinionId: number
  targetUser: { id: number; nickname: string; imgUrl: string | null }
  isNestedReply?: boolean
  changeState: React.Dispatch<React.SetStateAction<boolean>>
}

const WriteReply = ({
  mode,
  opinionId,
  targetUser,
  isNestedReply,
  changeState,
}: WrapperProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { pid } = router.query
  const user = useAppSelector((state) => state.user)

  const turnOff = useCallback(() => changeState(false), [changeState])

  const [content, setContent] = useState('')
  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
    if (e.target) {
      e.target!.style.height = 'auto'
      e.target!.style.height = `${e.target.scrollHeight}px`
    }
  }

  const submitReply = useCallback(async () => {
    if (!user.myData) return alert('로그인 이후 사용가능한 서비스입니다.')

    try {
      const data: CreateBalanceReplyParam = {
        content,
        opinionId,
        writerId: user.myData.id,
        targetId: targetUser.id,
      }
      switch (mode) {
        case 'balance':
          await dispatch(createBalanceReply(data)).unwrap()
          await dispatch(getBalanceDebatePost(pid as string)).unwrap()
          break
        case 'issue':
          await dispatch(createIssueReply(data)).unwrap()
          await dispatch(getIssueDebatePost(pid as string)).unwrap()
          break
        case 'prosCons':
          await dispatch(createProsConsReply(data)).unwrap()
          await dispatch(getProsConsDebatePost(pid as string)).unwrap()
          break
        default:
          break
      }
      turnOff()
      setContent('')
    } catch (error) {
      console.log(error)
    }
    return null
  }, [content, dispatch, mode, opinionId, pid, targetUser.id, turnOff, user.myData])

  return (
    <IndexContainor>
      <ReplyTextAreaBox>
        {isNestedReply && <UserTag>@{targetUser.nickname}</UserTag>}
        <ReplyTextArea
          rows={1}
          onChange={onChangeContent}
          value={content}
          placeholder="답글을 입력하세요"
        />
      </ReplyTextAreaBox>

      <ButtonLine>
        <SubButton
          styleOption={{ width: new CssRem(6), height: new CssRem(3), fontSize: new CssRem(1.4) }}
          onClick={() => turnOff()}
        >
          취소
        </SubButton>
        <PrimaryButton
          styleOption={{ width: new CssRem(6), height: new CssRem(3), fontSize: new CssRem(1.4) }}
          onClick={() => submitReply()}
        >
          작성
        </PrimaryButton>
      </ButtonLine>
    </IndexContainor>
  )
}

export default WriteReply
