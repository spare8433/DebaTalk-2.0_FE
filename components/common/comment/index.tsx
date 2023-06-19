import React from 'react'
import { useAppSelector } from '@store/store'
import { PrimaryButton } from '@styles/commonStyle/buttons'
import { CssRem } from 'types/customCssType'
import styled from 'styled-components'

const IndexContainor = styled.div`
  width: 100%;
`

const CommentTextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  resize: none;
  outline: none;
  padding: 4px 8px;
  margin-bottom: 10px;
`

const ButtonLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

type WrapperProps = {
  textState: string
  setState: React.Dispatch<React.SetStateAction<string>>
  onChangeState: (e: React.ChangeEvent) => void
  submitFn: (state: string) => void
}

const Comment = ({ textState, setState, onChangeState, submitFn }: WrapperProps): JSX.Element => {
  const user = useAppSelector((state) => state.user)
  // if (user.myData === null) alert('로그인후 이용가능한 서비스입니다')

  return (
    <IndexContainor>
      <CommentTextArea
        rows={8}
        maxLength={300}
        onChange={onChangeState}
        value={textState}
        disabled={!user.myData}
        placeholder={!user.myData ? '로그인 이후 사용 가능합니다' : ''}
      />

      <ButtonLine>
        <PrimaryButton
          styleOption={{ width: new CssRem(12), height: new CssRem(3.6) }}
          onClick={() => submitFn(textState)}
        >
          작성
        </PrimaryButton>
      </ButtonLine>
    </IndexContainor>
  )
}

export default Comment
